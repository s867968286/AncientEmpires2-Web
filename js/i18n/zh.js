/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.zh = {
		language: '语言',
		languageName: '简体中文',
		shortLanguageName: 'CHS',
		appName: '远古帝国：反击',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: '游戏',
		online: '在线模式',
		settings: '系统设置',
		instructions: '操作提示',
		about: '关于',

		// settings
		on: '开启',
		off: '关闭',
		music: '音乐',
		vibrate: '振动',
		help: '帮助',
		youCanDisableHelpNotification: '你可以在\'系统设置\'里开启或关闭帮助提示',
		fightAnimation: '战斗动画',
		gameSpeed: '游戏速度',
		confirmTurn: '确认回合',
		confirmMove: '确认移动',
		confirmAttack: '确认进攻',
		'gameSpeed-1': '最慢',
		'gameSpeed-2': '较慢',
		'gameSpeed-3': '正常',
		'gameSpeed-4': '较快',
		'gameSpeed-5': '最快',
		mainSettings: '主要设置',
		gameDifficulty: '游戏难度',
		font: '字体',
		easy: '简单',
		normal: '正常',
		hard: '困难',
		buildingSmoke: '建筑烟雾',
		unitAnimation: '单位动画',
		autoSave: '自动保存',

		// play
		companies: '战役',
		loadGame: '载入游戏',
		selectLevel: '选择关卡',
		skirmish: '遭遇战',
		userMaps: '自制地图',
		userMap: '编辑地图',
		mission: '战役',

		// setup skirmish
		player: '玩家',
		cpu: '电脑',
		none: '无',
		money: '初始资金',
		unitLimit: '单位上限',
		fight: '战斗',
		team: '队伍',

		// colors
		blue: '蓝色',
		red: '红色',
		green: '绿色',
		black: '黑色',

		rateUs: {
			header: '请给我们的产品打个分吧！',
			notNow: '不是现在！',
			fiveStars: '没问题！五星好评！'
		},

		// unit store
		unitStoreHeader: '单位',

		// popups
		endTurnQuestion: '结束回合吗？',
		yes: '是',
		no: '否',
		ok: '好的',
		continue: '继续',
		congratulations: '恭喜你!',
		gameSaved: '游戏已保存',
		unlocked: '解锁!',

		//save/load popup
		save: '保存',
		delete: '删除',
		replace: '替换',
		saveGame: '保存游戏',
		areYouSureToDeleteSavedGame: '你确定要删除已保存的游戏吗？',
		areYouSureToLoadGame: '你确定要载入游戏吗？',
		noSavedGames: '没有已保存的游戏',
		load: '载入',

		// end game
		blackDefeat: '黑色队伍被击败了!',
		blueDefeat: '蓝色队伍被击败了!',
		greenDefeat: '绿色队伍被击败了!',
		redDefeat: '红色队伍被击败了!',
		victory: '胜利!',
		defeat: '失败!',
		missionComplete: '任务完成!',
		restartBattle: '重新开始',
		quitBattle: '退出',
		areYouSureToQuitBattle: '你确定要退出战斗吗？',
		areYouSureToRestartBattle: '你确定要重新开始战斗吗？',

		// notification
		objective: '任务目标',
		skirmishObjective: '击败敌方的指挥官并占领所有城堡!',
		newTurn: '新回合!',
		income: '收入',
		tooMuchUnits: '单位过多！',

		//battle menu
		menu: '菜单',

		// map editor
		mapEditor: '地图编辑器',
		maps: '地图',
		width: '宽度',
		height: '高度',
		name: '名称',
		colors: '颜色',
		open: '打开',
		clean: '清除',
		exit: '退出',
		areYouSureToLeaveMapEditor: '你确定要退出地图编辑器吗?',
		unsavedMapProgressWillBeLost: '未保存的数据将会丢失!',
		noSavedMaps: '没有保存过的地图',
		youAreSureToDeleteMap: '确定要删除地图吗?',
		mapHasBeenSaved: '地图已保存.',
		mapHasBeenDeleted: '地图已删除',
		cleanMapNotSavedDataWillBeLost: '要清除地图吗？未被保存的数据将会遗失.',
		needMoreUnitsOrBuildings: '需要更多单位或建筑',
		enterMapName: '输入地图名称',
		mapName: '地图名称',

		// other
		disableAllTips: '关闭所有提示',

		//aboutText: '<br><br><br>Ancient Empire: Strike Back.<br><br><br><!--Programmer:<br>Dmitry Turovtsov<br><br>Thanks:<br>Alexey Danilov<br>Pavel Prylutski<br>Igor Kupreev<br>Pavel Sychykau-->',
		aboutText: '<br><br><br>Ancient Empire:<br>Strike Back<br><br><br>',
		instructionsText: [
			'\'Ancient Empire: Strike Back\' 是一款惊心动魄的策略战棋游戏，你需要控制国王格拉玛和他的兄弟渥拉顿与恶魔战斗来保卫他们的国度。',
			'接下来是一些关于如何进行游戏的提示（在游戏过程中也可以看到这些提示）。',
			'红色的区域是一个单位可以移动的范围. 一个单位可以移动的范围由它的兵种属性和地形共同决定。',
			'不同的地形会影响单位的移动、攻击和防御。举例来说，山地形可以提高单位的防御力，但是减少单位的移动力。当你把光标移动到不同的地形上时，屏幕上将会出现相关的说明。',
			'当一个单位行动完成后，他的颜色将会变灰，并且在你的下一个回合前将无法行动。',
			'每回合你可以让你的每个单位行动一次。 当你的所有单位均行动完毕后请点击 \'结束回合\'.',
			'你的单位可以在战斗中获得经验值并升级，这会让他们变得更强。',
			'你可以双击一个选取的单位来查看他的攻击范围。',
			'想攻击一个敌方单位，将你的单位移动到他的附近并点选 \'攻击\'. 如果范围内有不止一个目标，你需要选取进攻的对象。进攻的效果取决于单位的能力和地形。',
			'只有指挥官可以占领城堡。当一个城堡被占领时你可以用金币来征召新的单位。即使指挥官不在城堡里你依然可以这样做。',
			'你可以将指挥官或者士兵移动到建筑上并点击 \'占领\'来占领建筑。当一个建筑被占领时，它的颜色将会改变。当一个建筑被破坏时，你必须先修复它，才能占领。',
			'每一个被占领的建筑都会提供给你金币，多占领建筑来提升你的收入！',
			'单位可以在建筑里获得回复，停留的时间越长，回复越多。',
			'当指挥官在战斗中被击败后，可以在城堡中复活。',
			'水元素是两栖单位，在水中时它们的移动力、攻击力与防御力都会得到提升。',
			'恶狼的攻击是有毒的！这种毒将会虚弱目标一个回合。',
			'女巫可以从死亡单位的墓碑上召唤骷髅。当一个单位死亡后，将会产生一个持续1回合的墓碑。将你的女巫移动到墓碑边上并选择 \'召唤\'.',
			'小精灵可以保护周围的友方单位，给他们提供一个增加攻击力的光环。',
			'投石机能够摧毁敌方城镇，帮助切断敌人的金币来源。',
			'确保你的龙远离弓箭手！面对弓箭它们非常的脆弱！'
		],
		helpList: [
			// 0
			{
				img: 'img/help/select-unit.png',
				text: ['要选择一个单位请单击 (<img src="img/help/tap-finger.png" class="icon-in-text" />) 该单位。', '<img src="img/help/finger-on-red-square.png" class="icon-in-text" /> - 红色的区域是一个单位可以移动的范围。', '一个单位可以移动的范围由它的兵种属性和地形共同决定。']
			},
			// 1
			{
				img: 'img/help/attack.png',
				text: ['想攻击一个敌方单位，将你的单位移动到他的附近并点选 \'攻击\' <img src="img/help/attack-icon.png" class="icon-in-text" />。', '如果范围内有不止一个目标，你需要选取进攻的对象。进攻的效果取决于单位的能力和地形。']
			},
			// 2
			{
				//img: 'img/help/occupy-castle.png',
				text: ['只有指挥官可以占据一座城堡 (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />)。', '占领城堡后，你可以用金币购买新的单位。', '指挥官不必留在城堡里也能购买单位。']
			},
			// 3
			{
				//img: 'img/help/occupy-farm.png',
				text: ['你可以让士兵或指挥官移动到建筑上，并选择\'占领\' (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />)。', '一旦建筑被占领，它的颜色就会改变。', '如果建筑受损，必须先修复才能占领（<img src="img/help/fix-building-icon.png" class="icon-in-text" />）。']
			},
			// 4
			{
				img: 'img/help/raise.png',
				text: ['女巫能够从阵亡单位的坟墓中召唤骷髅战士。', '单位被击败后，墓碑会存在 1 回合。', '把女巫移动到墓碑旁边，然后选择\'召唤\' <img src="img/help/attack-icon.png" class="icon-in-text" />。']
			}
		],
		unitsList: {
			'soldier': {
				name: '士兵',
				description: '士兵是全能型的战士，是任何军队的中坚力量。士兵也是唯一能够占领城镇、赚取金币的单位。'
			},
			'archer': {
				name: '弓箭手',
				description: '装备着精良的弓箭，弓箭手们可以在远处发起强大的攻击，尤其对空中的生物非常致命。'
			},
			'elemental': {
				name: '水元素',
				description: '水元素是神奇的水之灵。在水中时，它们的移动力更强、防御力更高。'
			},
			'sorceress': {
				name: '女巫',
				description: '女巫精通魔法，却不擅长近身搏杀。然而，她们能从阵亡部队中召唤出战斗骷髅，这一能力往往能在战斗中起到决定性作用。'
			},
			'wisp': {
				name: '小精灵',
				description: '这种神奇的光亮生物能散发出光环，增强附近友军的攻击力。在近战中，它们尤其对骷髅致命。'
			},
			'dire-wolf': {
				name: '恶狼',
				description: '恶狼是成群结队出没、令人畏惧的猎手。当心——它们的撕咬带有剧毒，会使目标在一回合内攻击力与防御力都下降。'
			},
			'golem': {
				name: '石像',
				description: '石像是远古的生物——行动迟缓，但防御力极其强悍。驻守在建筑中或据守于坚固山头的石像极难被击败。'
			},
			'catapult': {
				name: '投石车',
				description: '投石车拥有极远的射程和巨大的破坏力，但机动性差、无法近距离攻击而显得脆弱，要好好保护。它每回合只能选择移动或攻击，不能两者兼顾。投石车能摧毁敌方城镇，切断敌人的金币来源。'
			},
			'dragon': {
				name: '龙',
				description: '这些庞大的飞行巨兽自远古时代起就统治着迷雾山脉。它们机动性极强，无论在陆地、空中还是海上，攻击都极其致命。'
			},
			'skeleton': {
				name: '骷髅',
				description: '这些被女巫召唤出来的、没有生命的战士，与士兵一样强大，是任何战场上都致命的对手。'
			},
			'galamar': {
				name: '格拉玛',
				description: '格拉玛（指挥官）攻防能力极强。指挥官还能占领城堡以生产部队，阵亡后可在城堡中复活。'
			},
			'valadorn': {
				name: '渥拉顿',
				description: '渥拉顿（指挥官）攻防能力极强。指挥官还能占领城堡以生产部队，阵亡后可在城堡中复活。'
			},
			'demon-lord': {
				name: '恶魔领主',
				description: '恶魔领主（指挥官）攻防能力极强。指挥官还能占领城堡以生产部队，阵亡后可在城堡中复活。'
			},
			'saeth': {
				name: '西斯',
				description: '西斯（指挥官）攻防能力极强。指挥官还能占领城堡以生产部队，阵亡后可在城堡中复活。'
			},
			'crystal': {
				name: '水晶',
				description: '这些传说中的水晶最初取自远古要塞的废墟。人们对它们的力量知之甚少，只传言它们会守护王国，同时也拥有摧毁王国的力量。'
			}
		},

		story: {
			list: [
				// 0
				'img/story/story-1-1.png_!_随着对抗黑暗势力的战争结束，格拉玛与渥拉顿兄弟重归于好，共同统治着桑瑞王国。王国正慢慢恢复往日的和平，由妥善供奉在勇气、智慧与生命神殿中的三颗远古水晶守护着。然而就在此时，北方小规模冲突的传言传到了王宫……',
				// 1
				'img/story/story-1-2.png_!_\'三，是它们的数目；三颗去守护，三颗去毁灭。怜悯那执掌其力量者，怜悯我们的灵魂吧，因为他将把天国之火倾泻于这世界。\'<br />[摘自《水晶预言》第三章第七节，作者不详，译自黑暗时代唯一幸存下来的抄本]',
				// 2
				'img/story/story-1-3.png_!_勇气神殿的信使来到了城堡的大门前,向国王传递着信息——勇气神殿正在遭受攻击，我们必须守护住神殿...',
				// 3
				'img/story/story-4-1.png_!_在水元素的帮助下，格拉玛国王终于比敌人抢先一步抵达了生命神殿……',
				// 4
				'img/story/story-8-1.png_!_格拉玛与渥拉顿追随着巨龙的足迹，最后却发现他们已经身处在一个古代遗迹之中...',
				// 5
				'img/story/story-8-2.png_!_\'大地将颤抖，苍穹将哭泣。因为那毁灭者必被毁灭，那夺取者必被夺取。一个没有邪恶与黑暗的新时代即将破晓。\'<br>[《水晶预言》最后的诗节，作者不详，从未被翻译，在黑暗时代中失传]'
			]
		}

	};

}(window));