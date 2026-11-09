@echo off
chcp 65001>nul
title Ancient Empires 2 - Web
cd /d "%~dp0"

set "PY=python"
where python >nul 2>nul
if errorlevel 1 set "PY=py"
%PY% --version >nul 2>nul
if errorlevel 1 (
  echo [错误] 未找到 Python，请先安装 Python 3 并加入 PATH 环境变量。
  pause
  exit /b 1
)

set "PORT=18901"
echo 正在启动 Ancient Empires 2 网页版 ...
echo 本机地址: http://127.0.0.1:%PORT%
echo 关闭本窗口或按 Ctrl+C 即可停止服务。
start "" "http://127.0.0.1:%PORT%"
%PY% -m http.server %PORT% --bind 127.0.0.1

pause
