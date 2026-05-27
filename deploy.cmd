@echo off
chcp 65001 >nul
cd /d "C:\Users\uwpar\mulagroup-site"
cls

echo ============================================
echo   MULA GROUP - PUSH TO GITHUB
echo ============================================
echo.

if not exist .git (
    echo [1/5] Inicjalizacja repozytorium...
    "C:\Program Files\Git\cmd\git.exe" init
) else (
    echo [1/5] Repozytorium juz zainicjalizowane.
)

echo.
echo [2/5] Konfiguracja remote...
"C:\Program Files\Git\cmd\git.exe" remote remove origin 2>nul
"C:\Program Files\Git\cmd\git.exe" remote add origin git@github.com:mulasty/mulagroup-site.git

echo.
echo [3/5] Dodawanie plikow...
"C:\Program Files\Git\cmd\git.exe" add .

echo.
echo [4/5] Commit...
"C:\Program Files\Git\cmd\git.exe" commit -m "feat: initial landing page" --allow-empty 2>nul

echo.
echo [5/5] Push na GitHub...
"C:\Program Files\Git\cmd\git.exe" branch -M main
"C:\Program Files\Git\cmd\git.exe" push -f origin main

if %errorlevel% neq 0 (
    echo.
    echo [BLAD] Push nie powiodl sie.
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   SUKCES! Projekt wypchniety.
echo ============================================
echo.
echo Link: https://github.com/mulasty/mulagroup-site
echo.
echo Nastepny krok - Vercel:
echo 1. Wejdz na https://vercel.com/new
cho 2. Zaloguj sie przez GitHub
echo 3. Wybierz repo: mulasty/mulagroup-site
echo 4. Kliknij DEPLOY
echo.
pause
