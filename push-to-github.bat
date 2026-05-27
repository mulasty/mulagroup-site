@echo off
chcp 65001 >nul
title Mula Group - Push to GitHub
cd /d "C:\Users\uwpar\mulagroup-site"

echo ==========================================
echo  MULA GROUP - UPLOAD TO GITHUB
echo ==========================================
echo.

:: Check if git config exists
"C:\Program Files\Git\cmd\git.exe" config --global user.name >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git nie jest skonfigurowany.
    echo.
    echo Najpierw wpisz w CMD:
    echo   git config --global user.name "Twoje Imie"
    echo   git config --global user.email "twoj@email.com"
    echo.
    pause
    exit /b 1
)

echo [1/5] Inicjalizacja repozytorium...
if not exist .git (
    "C:\Program Files\Git\cmd\git.exe" init
) else (
    echo         Repozytorium juz istnieje.
)

echo.
echo [2/5] Dodawanie plikow...
"C:\Program Files\Git\cmd\git.exe" add .

echo.
echo [3/5] Tworzenie commita...
"C:\Program Files\Git\cmd\git.exe" commit -m "feat: initial landing page"

echo.
echo [4/5] Podlaczanie do GitHub...
"C:\Program Files\Git\cmd\git.exe" remote remove origin 2>nul
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/mulasty/mulagroup-site-.git

echo.
echo [5/5] Wysylanie na GitHub...
"C:\Program Files\Git\cmd\git.exe" branch -M main
"C:\Program Files\Git\cmd\git.exe" push -u origin main

if errorlevel 1 (
    echo.
    echo [BLAD] Push nie powiodl sie.
    echo Sprawdź czy repozytorium istnieje na GitHub: https://github.com/mulasty/mulagroup-site-
    echo Jesli nie istnieje, stworz je najpierw (puste repo, bez README).
    echo.
    echo Alternatywnie, uzyj GitHub CLI:
    echo   gh repo create mulasty/mulagroup-site- --public --source=. --push
    echo.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo  SUKCES! Projekt wyslany na GitHub.
echo ==========================================
echo.
echo Link: https://github.com/mulasty/mulagroup-site-
echo.
echo Teraz mozesz polaczyc z Vercel:
echo 1. Wejdz na https://vercel.com/new
cho 2. Wybierz repo: mulasty/mulagroup-site-
echo 3. Kliknij Deploy
echo.
pause
