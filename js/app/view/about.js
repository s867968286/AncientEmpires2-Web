(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.AboutView = APP.BB.BaseView.extend({

		events: {

			'click .js-export-save': 'exportSave',

			'click .js-import-save': 'importSave',

			'change .js-import-file': 'onImportFile'

		},

		initialize: function () {

			this.$el = $(this.tmpl.about());

			this.proto.initialize.apply(this, arguments);

			this.render();

		},

		exportSave: function () {
			var dbMaster = win.APP.map.db,
				savedProps = ['isOpen', 'isDone', 'isDoneByDifficult_easy', 'isDoneByDifficult_normal', 'isDoneByDifficult_hard'],
				types = [dbMaster.missionMaps, dbMaster.skirmishMaps],
				backup = {
					type: 'ae2-backup',
					version: 1,
					exportedAt: new Date().toISOString(),
					savedGames: [],
					progress: []
				};

			function download() {
				dbMaster.getSavedGames().then(function (savedGames) {
					backup.savedGames = savedGames || [];
					var json = JSON.stringify(backup),
						blob = new Blob([json], {type: 'application/json'}),
						url = URL.createObjectURL(blob),
						a = document.createElement('a'),
						d = new Date(),
						pad = function (n) { return ('0' + n).slice(-2); };
					a.href = url;
					a.download = 'AE2存档备份-' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + pad(d.getHours()) + pad(d.getMinutes()) + '.json';
					document.body.appendChild(a);
					a.click();
					document.body.removeChild(a);
					setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
					alert('已导出：' + a.download);
				});
			}

			function collect(i) {
				if (i >= types.length) { download(); return; }
				dbMaster.getRows(types[i]).then(function (rows) {
					_.each(rows, function (row) {
						var info = JSON.parse(row.info), saved = {};
						_.each(savedProps, function (p) {
							if (info[p] !== undefined) { saved[p] = info[p]; }
						});
						if (!_.isEmpty(saved)) {
							backup.progress.push({type: types[i], jsMapKey: row.jsMapKey, saved: saved});
						}
					});
					collect(i + 1);
				});
			}

			collect(0);
		},

		importSave: function () {
			this.$el.find('.js-import-file').click();
		},

		onImportFile: function (e) {
			var dbMaster = win.APP.map.db,
				input = e.target,
				file = input.files && input.files[0];
			if (!file) { return; }

			var reader = new FileReader();
			reader.onload = function () {
				var data;
				try {
					data = JSON.parse(reader.result);
				} catch (err) {
					alert('文件格式错误，无法解析');
					input.value = '';
					return;
				}
				if (!data || data.type !== 'ae2-backup') {
					alert('不是有效的 AE2 存档备份文件');
					input.value = '';
					return;
				}

				var chain = $.Deferred().resolve().promise();

				_.each(data.savedGames || [], function (game) {
					chain = chain.then(function () {
						var dfd = $.Deferred(),
							tx = dbMaster.db.transaction([dbMaster.savedGame], 'readwrite');
						tx.objectStore(dbMaster.savedGame).put(game);
						tx.oncomplete = function () { dfd.resolve(); };
						tx.onerror = function () { dfd.resolve(); };
						return dfd.promise();
					});
				});

				_.each(data.progress || [], function (item) {
					chain = chain.then(function () {
						var dfd = $.Deferred();
						dbMaster.getRow(item.type, item.jsMapKey).then(function (row) {
							if (!row) { dfd.resolve(); return; }
							var info = JSON.parse(row.info);
							_.extend(info, item.saved);
							var tx = dbMaster.db.transaction([item.type], 'readwrite');
							tx.objectStore(item.type).put({jsMapKey: item.jsMapKey, info: JSON.stringify(info), map: row.map});
							tx.oncomplete = function () { dfd.resolve(); };
							tx.onerror = function () { dfd.resolve(); };
						});
						return dfd.promise();
					});
				});

				chain.then(function () {
					input.value = '';
					alert('导入完成，页面将刷新以应用存档。');
					win.location.reload();
				});
			};
			reader.readAsText(file);
		}

	});

}(window));
