Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "Deploying CuraLink AI to Surge..." -ForegroundColor Green
Write-Host "Domain: curalink-ai-hackathon.surge.sh" -ForegroundColor Yellow
Write-Host "=======================================================" -ForegroundColor Cyan

Set-Location -Path $PSScriptRoot
npx --yes surge . curalink-ai-hackathon.surge.sh

Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "Deployment Finished!" -ForegroundColor Green
Write-Host "Visit: https://curalink-ai-hackathon.surge.sh/" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan
