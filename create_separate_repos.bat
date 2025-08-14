@echo off
echo Creating separate repositories for each project folder...
echo.

REM Get current directory and create parent directory for repos
set "CURRENT_DIR=%CD%"
for %%i in ("%CD%") do set "PARENT_DIR=%%~dpi"
set "REPOS_DIR=%PARENT_DIR%Individual_Repositories"

REM Create repos directory if it doesn't exist
if not exist "%REPOS_DIR%" (
    mkdir "%REPOS_DIR%"
    echo Created directory: %REPOS_DIR%
)

REM List of folders to process
set folders=Precorso U1_W1_D1_HTML U1_W1_D2_HTML U1_W1_D3_CSS U1_W1_D4_CSS U1_W1_D5_Project U1_W2_D1_JS U1_W2_D2_JS U1_W2_D3_JS U1_W2_D4_JS U1_W2_D5_Project

REM Process each folder
for %%f in (%folders%) do (
    echo.
    echo Processing %%f...
    
    if exist "%%f" (
        REM Create destination directory
        set "DEST_DIR=%REPOS_DIR%\%%f"
        if not exist "!DEST_DIR!" mkdir "!DEST_DIR!"
        
        REM Copy contents
        xcopy "%%f\*" "!DEST_DIR!\" /E /I /H /Y > nul
        echo   - Copied contents
        
        REM Change to destination and initialize git
        cd /d "!DEST_DIR!"
        
        REM Initialize git repository
        git init > nul 2>&1
        echo   - Initialized git repository
        
        REM Create basic .gitignore
        echo .DS_Store > .gitignore
        echo Thumbs.db >> .gitignore
        echo *.log >> .gitignore
        echo node_modules/ >> .gitignore
        echo .env >> .gitignore
        echo .vscode/ >> .gitignore
        echo   - Created .gitignore
        
        REM Create basic README
        echo # %%f > README.md
        echo. >> README.md
        echo This repository contains the %%f project from Epicode Bootcamp. >> README.md
        echo   - Created README.md
        
        REM Add and commit
        git add . > nul 2>&1
        git commit -m "Initial commit: %%f project" > nul 2>&1
        echo   - Created initial commit
        
        REM Return to original directory
        cd /d "%CURRENT_DIR%"
        
        echo   ✓ Successfully created repository for %%f
    ) else (
        echo   ✗ Folder %%f not found
    )
)

echo.
echo ✅ All repositories created in: %REPOS_DIR%
echo.
echo Next steps:
echo 1. Review each repository
echo 2. Create remote repositories on GitHub/GitLab
echo 3. Add remote origins and push
echo.
pause
