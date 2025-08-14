# Fixed PowerShell script to properly initialize git repositories
# This script will fix the repositories that were created without proper git initialization

$reposDir = "C:\Users\andig\OneDrive\Desktop\Epicode\Individual_Repositories"

# List of folders that were created
$folders = @(
    "Precorso",
    "U1_W1_D1_HTML",
    "U1_W1_D2_HTML", 
    "U1_W1_D3_CSS",
    "U1_W1_D4_CSS",
    "U1_W1_D5_Project",
    "U1_W2_D1_JS",
    "U1_W2_D2_JS",
    "U1_W2_D3_JS",
    "U1_W2_D4_JS",
    "U1_W2_D5_Project"
)

Write-Host "Fixing git repositories..." -ForegroundColor Cyan

foreach ($folder in $folders) {
    $folderPath = Join-Path $reposDir $folder
    
    if (Test-Path $folderPath) {
        Write-Host "Processing $folder..." -ForegroundColor Yellow
        
        # Change to the folder
        Set-Location $folderPath
        
        # Initialize git repository
        git init
        Write-Host "  - Initialized git repository" -ForegroundColor Green
        
        # Create .gitignore file
        @"
.DS_Store
Thumbs.db
*.log
node_modules/
.env
.vscode/
*.tmp
*.temp
*.swp
*~
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
        Write-Host "  - Created .gitignore" -ForegroundColor Green
        
        # Create README.md file
        @"
# $folder

This repository contains the code and resources for the $folder project from the Epicode CSS-HTML-and-JS Bootcamp.

## Description

Add a description of what this project contains and its purpose.

## Files Structure

Describe the main files and their purposes.

## Getting Started

Add instructions on how to run or view this project.

## Technologies Used

List the technologies, languages, and frameworks used in this project.

---

*This project was created as part of the Epicode Bootcamp curriculum.*
"@ | Out-File -FilePath "README.md" -Encoding UTF8
        Write-Host "  - Created README.md" -ForegroundColor Green
        
        # Add all files
        git add .
        Write-Host "  - Added files to staging" -ForegroundColor Green
        
        # Create initial commit
        git commit -m "Initial commit: $folder project from Epicode Bootcamp"
        Write-Host "  - Created initial commit" -ForegroundColor Green
        
        Write-Host "  ✓ Successfully fixed repository for $folder" -ForegroundColor Green
        Write-Host ""
    }
    else {
        Write-Host "  ✗ Folder $folder not found" -ForegroundColor Red
    }
}

# Return to original directory
Set-Location "C:\Users\andig\OneDrive\Desktop\Epicode\CSS-HTML-and-JS-Bootcamp"

Write-Host "✅ All repositories have been fixed!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review each repository in: $reposDir" -ForegroundColor White
Write-Host "2. Create remote repositories on GitHub/GitLab" -ForegroundColor White
Write-Host "3. Add remote origins and push to your Git hosting service" -ForegroundColor White
