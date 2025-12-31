powercfg /hibernate on
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FlyoutMenuSettings" /v ShowHibernateOption /t REG_DWORD /d 1 /f
taskkill /f /im explorer.exe & start explorer.exe
