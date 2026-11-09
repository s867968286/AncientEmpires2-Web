# 远古帝国2 网页版 (Ancient Empires 2 Web)

《远古帝国2：反击》(Ancient Empire: Strike Back) 的 HTML5 网页复刻，打开浏览器即可游玩，无需安装。

## 原项目

基于 TAbdiukov 的 Ancient Empires: Modern Web：
https://github.com/TAbdiukov/Ancient-Empires-Modern-Web

## 本仓库改动

- 仅保留《远古帝国2》网页版：移除一代、APK 及俄/西语资源，只保留中/英双语
- 对照英文补全并修正中文翻译，地图名称中文化
- 关闭广告、评分弹窗与 Pro 商店入口，删除多余的 PWA/商店图标资源
- 修复剧情弹窗右上角关闭按钮遮挡正文的问题
- 修复删除多语言包后「战役」空白的问题
- 关于页新增存档导入/导出
- 提供 Windows 双击启动 `start.bat`（内置 Python 静态服务器，端口 18901）

## 运行

- Windows：双击 `start.bat`（需已安装 Python）
- 其他平台：用任意静态服务器托管本目录，例如 `python -m http.server`

存档与进度保存在浏览器本地（IndexedDB），换端口或清站点数据会丢失，建议用「关于 → 导出存档」备份。

## 声明

仅供学习交流，游戏版权归原作者所有。
