# Script to create individual GitHub repositories for each project folder
# This script keeps the current repository and creates separate repos for each project

$currentRepo = "CSS-HTML-and-JS-Bootcamp"
$githubUsername = "GjikaByte"  # Update this with your GitHub username

# List of folders to create separate repositories for
$folders = @(
    @{name="Precorso"; description="Pre-course materials and exercises"},
    @{name="U1_W1_D1_HTML"; description="Unit 1 Week 1 Day 1 - HTML Basics"},
    @{name="U1_W1_D2_HTML"; description="Unit 1 Week 1 Day 2 - HTML Advanced"},
    @{name="U1_W1_D3_CSS"; description="Unit 1 Week 1 Day 3 - CSS Introduction"},
    @{name="U1_W1_D4_CSS"; description="Unit 1 Week 1 Day 4 - CSS Advanced"},
    @{name="U1_W1_D5_Project"; description="Unit 1 Week 1 Day 5 - Week 1 Final Project"},
    @{name="U1_W2_D1_JS"; description="Unit 1 Week 2 Day 1 - JavaScript Basics"},
    @{name="U1_W2_D2_JS"; description="Unit 1 Week 2 Day 2 - Objects and Arrays"},
    @{name="U1_W2_D3_JS"; description="Unit 1 Week 2 Day 3 - Loops and Iterations"},
    @{name="U1_W2_D4_JS"; description="Unit 1 Week 2 Day 4 - Functions"},
    @{name="U1_W2_D5_Project"; description="Unit 1 Week 2 Day 5 - Week 2 Final Project (Amazon Clone)"}
)

Write-Host "Creating individual repositories for each project folder..." -ForegroundColor Cyan
Write-Host "Current repository will remain as the main bootcamp repository" -ForegroundColor Green
Write-Host ""

foreach ($folder in $folders) {
    $folderName = $folder.name
    $folderDesc = $folder.description
    $repoName = "epicode-$($folderName.ToLower())"
    
    Write-Host "Processing $folderName..." -ForegroundColor Yellow
    
    # Check if folder exists
    if (!(Test-Path $folderName)) {
        Write-Host "  ✗ Folder $folderName not found, skipping..." -ForegroundColor Red
        continue
    }
    
    # Create a temporary directory for the new repository
    $tempDir = "../temp_$folderName"
    if (Test-Path $tempDir) {
        Remove-Item $tempDir -Recurse -Force
    }
    New-Item -ItemType Directory -Path $tempDir | Out-Null
    
    # Copy folder contents to temp directory
    Copy-Item "$folderName\*" -Destination $tempDir -Recurse -Force
    
    # Change to temp directory
    Push-Location $tempDir
    
    try {
        # Initialize git repository
        git init
        Write-Host "  ✓ Initialized git repository" -ForegroundColor Green
        
        # Create .gitignore
        @"
# Common ignores
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

# IDE
.idea/
*.sublime-*

# OS
*.exe
*.dll
*.so
*.dylib
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
        
        # Create comprehensive README
        @"
# $folderName

$folderDesc

## 📋 Description

This repository contains the code and resources for the **$folderName** project from the Epicode Full Stack Developer Bootcamp.

## 🛠️ Technologies Used

- HTML5
- CSS3
$(if ($folderName -like "*JS*") { "- JavaScript ES6+" })
$(if ($folderName -like "*CSS*") { "- CSS Grid & Flexbox" })
$(if ($folderName -like "*Project*") { "- Responsive Design" })

## 📁 Project Structure

\`\`\`
$folderName/
$(Get-ChildItem -Name | ForEach-Object { "├── $_" })
\`\`\`

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Text editor or IDE

### Installation
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/$githubUsername/$repoName.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd $repoName
   \`\`\`

3. Open \`index.html\` in your browser or use a live server extension.

## 📖 Learning Objectives

This project helped me learn and practice:
- [Add specific learning objectives here]
- [What challenges you overcame]
- [What skills you developed]

## 🎯 Features

- [List main features of the project]
- [What functionality it includes]
- [Any special implementations]

## 📱 Responsive Design

$(if ($folderName -like "*Project*") { "This project is fully responsive and works on:" } else { "This project includes:" })
- Desktop screens
- Tablet devices  
- Mobile phones

## 🔧 Development Process

[Describe your development approach, challenges faced, and solutions implemented]

## 📸 Screenshots

[Add screenshots of your project here]

## 🌐 Live Demo

[Add link to live demo if available]

## 🤝 Contributing

This is a learning project, but feedback and suggestions are welcome!

## 📝 License

This project is part of the Epicode Bootcamp curriculum.

## 🏫 About Epicode

This project was created as part of the [Epicode](https://epicode.com/) Full Stack Developer Bootcamp - a comprehensive program covering modern web development technologies.

---

⭐ If you found this project helpful, please give it a star!
"@ | Out-File -FilePath "README.md" -Encoding UTF8
        
        Write-Host "  ✓ Created comprehensive README.md" -ForegroundColor Green
        
        # Add all files
        git add .
        
        # Create initial commit
        git commit -m "Initial commit: $folderDesc

- Added all project files from Epicode Bootcamp $folderName
- Included comprehensive README with project documentation
- Set up proper .gitignore for web development
- Ready for further development and deployment"
        
        Write-Host "  ✓ Created initial commit" -ForegroundColor Green
        
        # Instructions for GitHub repository creation
        Write-Host "  📋 Next steps for $folderName :" -ForegroundColor Cyan
        Write-Host "     1. Create GitHub repository: $repoName" -ForegroundColor White
        Write-Host "     2. Run these commands:" -ForegroundColor White
        Write-Host "        cd $tempDir" -ForegroundColor Gray
        Write-Host "        git remote add origin https://github.com/$githubUsername/$repoName.git" -ForegroundColor Gray
        Write-Host "        git branch -M main" -ForegroundColor Gray
        Write-Host "        git push -u origin main" -ForegroundColor Gray
        Write-Host ""
        
    }
    catch {
        Write-Host "  ✗ Error processing $folderName : $($_.Exception.Message)" -ForegroundColor Red
    }
    finally {
        Pop-Location
    }
}

Write-Host "✅ Repository preparation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Summary:" -ForegroundColor Cyan
Write-Host "• Current repository ($currentRepo) remains as main bootcamp repository" -ForegroundColor White
Write-Host "• Created $($folders.Count) separate repository folders in temp directories" -ForegroundColor White
Write-Host "• Each repository includes comprehensive README and .gitignore" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Suggested GitHub repository names:" -ForegroundColor Yellow
foreach ($folder in $folders) {
    Write-Host "   • epicode-$($folder.name.ToLower())" -ForegroundColor Gray
}
Write-Host ""
Write-Host "📝 Don't forget to:" -ForegroundColor Cyan
Write-Host "   1. Create each repository on GitHub" -ForegroundColor White
Write-Host "   2. Add remote origins and push" -ForegroundColor White
Write-Host "   3. Add repository descriptions on GitHub" -ForegroundColor White
Write-Host "   4. Consider adding topics/tags for better discoverability" -ForegroundColor White
