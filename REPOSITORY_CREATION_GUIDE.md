# Manual Guide: Creating Separate Repositories

This guide explains how to manually create separate Git repositories for each project folder.

## Option 1: Automated Scripts

I've created two automated scripts for you:

### PowerShell Script (Recommended)
- **File**: `create_separate_repos.ps1`
- **Usage**: Right-click → "Run with PowerShell" or run in PowerShell terminal
- **Features**: 
  - Comprehensive error handling
  - Detailed progress reporting
  - Creates proper .gitignore and README files
  - Colored output for better readability

### Batch Script (Alternative)
- **File**: `create_separate_repos.bat`
- **Usage**: Double-click to run or run in Command Prompt
- **Features**: 
  - Simple and fast execution
  - Basic .gitignore and README creation
  - Compatible with older Windows systems

## Option 2: Manual Steps

If you prefer to do this manually, follow these steps for each folder:

### For each project folder (Precorso, U1_W1_D1_HTML, etc.):

1. **Create a new directory structure**:
   ```
   mkdir ..\Individual_Repositories\[FOLDER_NAME]
   cd ..\Individual_Repositories\[FOLDER_NAME]
   ```

2. **Copy the project files**:
   ```
   xcopy "..\..\CSS-HTML-and-JS-Bootcamp\[FOLDER_NAME]\*" . /E /I /H /Y
   ```

3. **Initialize Git repository**:
   ```
   git init
   ```

4. **Create .gitignore file**:
   ```
   echo .DS_Store > .gitignore
   echo Thumbs.db >> .gitignore
   echo *.log >> .gitignore
   echo node_modules/ >> .gitignore
   echo .env >> .gitignore
   echo .vscode/ >> .gitignore
   ```

5. **Create README.md**:
   ```
   echo # [FOLDER_NAME] > README.md
   echo. >> README.md
   echo This repository contains the [FOLDER_NAME] project from Epicode Bootcamp. >> README.md
   ```

6. **Add files and create initial commit**:
   ```
   git add .
   git commit -m "Initial commit: [FOLDER_NAME] project"
   ```

## Project Folders to Process

- `Precorso` - Pre-course materials
- `U1_W1_D1_HTML` - Unit 1, Week 1, Day 1 - HTML basics
- `U1_W1_D2_HTML` - Unit 1, Week 1, Day 2 - HTML continued
- `U1_W1_D3_CSS` - Unit 1, Week 1, Day 3 - CSS introduction
- `U1_W1_D4_CSS` - Unit 1, Week 1, Day 4 - CSS advanced
- `U1_W1_D5_Project` - Unit 1, Week 1, Day 5 - Week 1 project
- `U1_W2_D1_JS` - Unit 1, Week 2, Day 1 - JavaScript basics
- `U1_W2_D2_JS` - Unit 1, Week 2, Day 2 - Objects and Arrays
- `U1_W2_D3_JS` - Unit 1, Week 2, Day 3 - Loops
- `U1_W2_D4_JS` - Unit 1, Week 2, Day 4 - Functions
- `U1_W2_D5_Project` - Unit 1, Week 2, Day 5 - Week 2 project

## After Creating Repositories

### Setting up Remote Repositories (GitHub/GitLab)

1. **Create remote repositories** on your preferred Git hosting service
2. **Add remote origin** to each local repository:
   ```
   git remote add origin https://github.com/yourusername/repository-name.git
   ```
3. **Set main branch and push**:
   ```
   git branch -M main
   git push -u origin main
   ```

### Suggested Repository Names

- `epicode-precorso`
- `epicode-html-basics`
- `epicode-html-advanced`
- `epicode-css-intro`
- `epicode-css-advanced`
- `epicode-week1-project`
- `epicode-js-basics`
- `epicode-js-objects-arrays`
- `epicode-js-loops`
- `epicode-js-functions`
- `epicode-week2-project`

## Benefits of Separate Repositories

1. **Individual tracking** - Each project has its own commit history
2. **Easier sharing** - Share specific projects without exposing everything
3. **Better organization** - Cleaner project structure
4. **Portfolio ready** - Each repository can be showcased individually
5. **Easier collaboration** - Others can contribute to specific projects

## Tips

- Keep the original repository as a backup
- Consider adding topics/tags to GitHub repositories for better discoverability
- Update README files with proper descriptions and screenshots
- Add live demo links if projects are hosted online
