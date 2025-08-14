# Simple PowerShell script to fix git repositories
$reposDir = "C:\Users\andig\OneDrive\Desktop\Epicode\Individual_Repositories"
$folders = @("Precorso", "U1_W1_D1_HTML", "U1_W1_D2_HTML", "U1_W1_D3_CSS", "U1_W1_D4_CSS", "U1_W1_D5_Project", "U1_W2_D1_JS", "U1_W2_D2_JS", "U1_W2_D3_JS", "U1_W2_D4_JS", "U1_W2_D5_Project")

Write-Host "Fixing git repositories..." -ForegroundColor Green

foreach ($folder in $folders) {
    $folderPath = Join-Path $reposDir $folder
    
    if (Test-Path $folderPath) {
        Write-Host "Processing $folder..." -ForegroundColor Yellow
        Set-Location $folderPath
        
        # Initialize git
        git init
        
        # Create .gitignore
        ".DS_Store`nThumbs.db`n*.log`nnode_modules/`n.env`n.vscode/" | Out-File -FilePath ".gitignore" -Encoding UTF8
        
        # Create README
        "# $folder`n`nThis repository contains the $folder project from Epicode Bootcamp." | Out-File -FilePath "README.md" -Encoding UTF8
        
        # Add and commit
        git add .
        git commit -m "Initial commit: $folder project"
        
        Write-Host "  - Fixed $folder" -ForegroundColor Green
    }
}

Set-Location "C:\Users\andig\OneDrive\Desktop\Epicode\CSS-HTML-and-JS-Bootcamp"
Write-Host "Done!" -ForegroundColor Green
