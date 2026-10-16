@echo off
echo =======================================================
echo Deploying CuraLink AI to Surge...
echo Domain: curalink-ai-hackathon.surge.sh
echo =======================================================
cd /d "%~dp0"
call npx --yes surge . curalink-ai-hackathon.surge.sh
echo =======================================================
echo Deployment Finished!
echo Visit: https://curalink-ai-hackathon.surge.sh/
echo =======================================================
pause
