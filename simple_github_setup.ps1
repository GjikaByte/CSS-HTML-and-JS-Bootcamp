# Simple script to create individual repositories for each project folder
$githubUsername = "GjikaByte"

# List of folders to create separate repositories for
$folders = @("Precorso", "U1_W1_D1_HTML", "U1_W1_D2_HTML", "U1_W1_D3_CSS", "U1_W1_D4_CSS", "U1_W1_D5_Project", "U1_W2_D1_JS", "U1_W2_D2_JS", "U1_W2_D3_JS", "U1_W2_D4_JS", "U1_W2_D5_Project")

Write-Host "Creating individual repositories for each project folder..." -ForegroundColor Green

foreach ($folderName in $folders) {
    Write-Host "Processing $folderName..." -ForegroundColor Yellow
    
    if (!(Test-Path $folderName)) {
        Write-Host "  Folder $folderName not found, skipping..." -ForegroundColor Red
        continue
    }
    
    # Create temp directory
    $tempDir = "../temp_$folderName"
    if (Test-Path $tempDir) {
        Remove-Item $tempDir -Recurse -Force
    }
    New-Item -ItemType Directory -Path $tempDir | Out-Null
    
    # Copy files
    Copy-Item "$folderName\*" -Destination $tempDir -Recurse -Force
    
    # Change to temp directory
    Push-Location $tempDir
    
    # Initialize git
    git init
    
    # Create .gitignore
    ".DS_Store`nThumbs.db`n*.log`nnode_modules/`n.env`n.vscode/`n*.tmp`n*.temp" | Out-File -FilePath ".gitignore" -Encoding UTF8
    
    # Create README
    $readmeContent = "# $folderName`n`nThis repository contains the $folderName project from the Epicode Full Stack Developer Bootcamp.`n`n## Technologies Used`n- HTML5`n- CSS3`n- JavaScript`n`n## Getting Started`n1. Clone this repository`n2. Open index.html in your browser`n`n## About`nThis project was created as part of the Epicode Bootcamp curriculum."
    $readmeContent | Out-File -FilePath "README.md" -Encoding UTF8
    
    # Add and commit
    git add .
    git commit -m "Initial commit: $folderName project from Epicode Bootcamp"
    
    Write-Host "  Created repository for $folderName" -ForegroundColor Green
    Write-Host "  Next: Create GitHub repo 'epicode-$($folderName.ToLower())' and run:" -ForegroundColor Cyan
    Write-Host "    git remote add origin https://github.com/$githubUsername/epicode-$($folderName.ToLower()).git" -ForegroundColor Gray
    Write-Host "    git branch -M main" -ForegroundColor Gray
    Write-Host "    git push -u origin main" -ForegroundColor Gray
    Write-Host ""
    
    Pop-Location
}

Write-Host "Done! Created temporary repositories for all folders." -ForegroundColor Green
Write-Host "Current repository remains as main bootcamp repository." -ForegroundColor Green
