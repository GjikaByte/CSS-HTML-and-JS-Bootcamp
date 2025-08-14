# Helper script to push all created repositories to GitHub
# Run this after creating the GitHub repositories on github.com

$githubUsername = "GjikaByte"
$repos = @(
    @{folder="temp_Precorso"; name="epicode-precorso"},
    @{folder="temp_U1_W1_D1_HTML"; name="epicode-u1_w1_d1_html"},
    @{folder="temp_U1_W1_D2_HTML"; name="epicode-u1_w1_d2_html"},
    @{folder="temp_U1_W1_D3_CSS"; name="epicode-u1_w1_d3_css"},
    @{folder="temp_U1_W1_D4_CSS"; name="epicode-u1_w1_d4_css"},
    @{folder="temp_U1_W1_D5_Project"; name="epicode-u1_w1_d5_project"},
    @{folder="temp_U1_W2_D1_JS"; name="epicode-u1_w2_d1_js"},
    @{folder="temp_U1_W2_D2_JS"; name="epicode-u1_w2_d2_js"},
    @{folder="temp_U1_W2_D3_JS"; name="epicode-u1_w2_d3_js"},
    @{folder="temp_U1_W2_D4_JS"; name="epicode-u1_w2_d4_js"},
    @{folder="temp_U1_W2_D5_Project"; name="epicode-u1_w2_d5_project"}
)

Write-Host "GitHub Repository Push Helper" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Before running this script, make sure you have created all these repositories on GitHub:" -ForegroundColor Yellow
foreach ($repo in $repos) {
    Write-Host "  • $($repo.name)" -ForegroundColor Gray
}
Write-Host ""

$confirm = Read-Host "Have you created all the GitHub repositories? (y/N)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Please create the GitHub repositories first, then run this script again." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Pushing repositories to GitHub..." -ForegroundColor Green

foreach ($repo in $repos) {
    $folderPath = "../$($repo.folder)"
    $repoName = $repo.name
    
    if (Test-Path $folderPath) {
        Write-Host "Processing $repoName..." -ForegroundColor Yellow
        
        Push-Location $folderPath
        
        try {
            # Add remote origin
            git remote add origin "https://github.com/$githubUsername/$repoName.git"
            Write-Host "  ✓ Added remote origin" -ForegroundColor Green
            
            # Rename branch to main
            git branch -M main
            Write-Host "  ✓ Renamed branch to main" -ForegroundColor Green
            
            # Push to GitHub
            git push -u origin main
            Write-Host "  ✓ Pushed to GitHub" -ForegroundColor Green
            Write-Host "  🌐 Repository available at: https://github.com/$githubUsername/$repoName" -ForegroundColor Cyan
        }
        catch {
            Write-Host "  ✗ Error pushing $repoName : $($_.Exception.Message)" -ForegroundColor Red
        }
        
        Pop-Location
        Write-Host ""
    }
    else {
        Write-Host "  ✗ Folder $folderPath not found" -ForegroundColor Red
    }
}

Write-Host "✅ Repository push process complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🗂️ Cleanup: You can now delete the temp folders if everything worked correctly:" -ForegroundColor Yellow
Write-Host "Remove-Item ../temp_* -Recurse -Force" -ForegroundColor Gray
