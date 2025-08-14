# PowerShell script to create separate repositories for each folder
# This script will create individual git repositories for each project folder

# Get the current directory
$currentDir = Get-Location
$parentDir = Split-Path $currentDir -Parent
$reposDir = Join-Path $parentDir "Individual_Repositories"

# Create a directory to hold all the individual repositories
if (!(Test-Path $reposDir)) {
    New-Item -ItemType Directory -Path $reposDir
    Write-Host "Created directory: $reposDir" -ForegroundColor Green
}

# Define the folders to convert to separate repositories
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

# Function to create a repository for a folder
function Create-Repository {
    param(
        [string]$folderName,
        [string]$sourcePath,
        [string]$destinationPath
    )
    
    Write-Host "Processing folder: $folderName" -ForegroundColor Yellow
    
    # Create the destination directory
    if (!(Test-Path $destinationPath)) {
        New-Item -ItemType Directory -Path $destinationPath
    }
    
    # Copy all contents from source to destination
    try {
        Copy-Item -Path "$sourcePath\*" -Destination $destinationPath -Recurse -Force
        Write-Host "  ✓ Copied contents to $destinationPath" -ForegroundColor Green
    }
    catch {
        Write-Host "  ✗ Error copying contents: $($_.Exception.Message)" -ForegroundColor Red
        return
    }
    
    # Change to the destination directory
    Push-Location $destinationPath
    
    try {
        # Initialize git repository
        git init
        Write-Host "  ✓ Initialized git repository" -ForegroundColor Green
        
        # Create .gitignore file
        $gitignoreContent = @"
# Common ignores
.DS_Store
Thumbs.db
*.log
node_modules/
.env
.vscode/
*.tmp
*.temp

# OS specific
*.swp
*~
"@
        $gitignoreContent | Out-File -FilePath ".gitignore" -Encoding UTF8
        Write-Host "  ✓ Created .gitignore file" -ForegroundColor Green
        
        # Create a README.md file
        $readmeLines = @(
            "# $folderName",
            "",
            "This repository contains the code and resources for the $folderName project from the Epicode CSS-HTML-and-JS Bootcamp.",
            "",
            "## Description",
            "",
            "Add a description of what this project contains and its purpose.",
            "",
            "## Files Structure",
            "",
            "Describe the main files and their purposes.",
            "",
            "## Getting Started",
            "",
            "Add instructions on how to run or view this project.",
            "",
            "## Technologies Used",
            "",
            "List the technologies, languages, and frameworks used in this project.",
            "",
            "---",
            "",
            "*This project was created as part of the Epicode Bootcamp curriculum.*"
        )
        $readmeLines | Out-File -FilePath "README.md" -Encoding UTF8
        Write-Host "  ✓ Created README.md file" -ForegroundColor Green
        
        # Add all files to git
        git add .
        Write-Host "  ✓ Added files to git staging" -ForegroundColor Green
        
        # Create initial commit
        git commit -m "Initial commit: $folderName project from Epicode Bootcamp"
        Write-Host "  ✓ Created initial commit" -ForegroundColor Green
        
        Write-Host "  ✅ Successfully created repository for $folderName" -ForegroundColor Green
    }
    catch {
        Write-Host "  ✗ Error during git operations: $($_.Exception.Message)" -ForegroundColor Red
    }
    finally {
        # Return to original directory
        Pop-Location
    }
    
    Write-Host ""
}

# Main execution
Write-Host "Starting creation of individual repositories..." -ForegroundColor Cyan
Write-Host "Current directory: $currentDir" -ForegroundColor Gray
Write-Host "Repositories will be created in: $reposDir" -ForegroundColor Gray
Write-Host ""

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
}
catch {
    Write-Host "Error: Git is not installed or not in PATH. Please install Git first." -ForegroundColor Red
    exit 1
}

# Process each folder
foreach ($folder in $folders) {
    $sourcePath = Join-Path $currentDir $folder
    $destinationPath = Join-Path $reposDir $folder
    
    if (Test-Path $sourcePath) {
        Create-Repository -folderName $folder -sourcePath $sourcePath -destinationPath $destinationPath
    }
    else {
        Write-Host "Warning: Folder $folder not found in current directory" -ForegroundColor Yellow
    }
}

Write-Host "✅ All repositories have been created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review each repository in: $reposDir" -ForegroundColor White
Write-Host "2. If needed, create remote repositories on GitHub/GitLab" -ForegroundColor White
Write-Host "3. Add remote origins and push to your preferred Git hosting service" -ForegroundColor White
Write-Host ""
Write-Host "Example commands to add remote and push (run in each repository folder):" -ForegroundColor Yellow
Write-Host "  git remote add origin <your-remote-repository-url>" -ForegroundColor Gray
Write-Host "  git branch -M main" -ForegroundColor Gray
Write-Host "  git push -u origin main" -ForegroundColor Gray
