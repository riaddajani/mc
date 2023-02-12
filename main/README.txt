/////////////////////////////////////////////////////////////////////////////////////////
// Another Quality Modpack 2 -- Server Instructions                                    //
// Discord: https://discord.gg/Js9dxbrh3y                                              //
// Shameless donate plug: https://www.paypal.com/donate?hosted_button_id=7R6UYF6EYT9KN //
/////////////////////////////////////////////////////////////////////////////////////////

NOTE: Back up your /world, always before updating.

Remember when updating; always delete the following folders from your actual server; /KubeJS, /mods, /configs
!You will then take the folders from this server pack and move to your server, this way you get rid of anything the update removed. 


Server Recommendations----------
Recommended Difficulty: HARD   -
Recommended Minimum Ram: 4gb   -
Recommended Maximum Ram: 6-8gb -
--------------------------------


Common Issues ----------------------------

1. Cannot start server locally (start.ps file) (only if you want to host server on your computer) - You need to enable a setting in powershell. Open Powershell with Admin Privileges -> Enter command: Set-ExecutionPolicy Unrestricted -> Re-open start.ps 
-------------------------------------------


Sections ------------------------------------------------------------
	i. Setting Up Server Locally                                    -
	ii. Setting Up Server for Server Host/Dedicated                 -
                                                                    -
	New: You should now be able to change seed via normal methods   -
---------------------------------------------------------------------



Discord (AQM2 Support) ------------------------
https://discord.gg/Js9dxbrh3y - Must Verify   -
-----------------------------------------------

/////////////////////////////////////////////
// i. How To Setup Server and Run locally //
/////////////////////////////////////////////

1. If you don't have it, INSTALL Java 17 (Need to install, not unzip)
WINDOWS: https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.1%2B12/OpenJDK17U-jdk_x64_windows_hotspot_17.0.1_12.msi
LINUX/MAC: https://adoptium.net/releases.html (Make sure 17 is toggled, and download and install it for your linux distro or mac that you use )

2a. Run start.ps1 (for windows)

2b. Run start.sh (for linux/mac)

3. Everything will download and initialize by itself. the EULA agreement will appear, you must type TRUE to continue once it does

4. Success. Server started. You will run Step 2 any time you want to launch your server


FOR MODPACK UPDATES: Make sure you continue deleting the mods folder, and kubejs folder before launching start to receive the latest updates. 



///////////////////////////////////////////////////////////////////
// ii. How to Setup and Launch Server from dedicated/vps server //
///////////////////////////////////////////////////////////////////

1. Follow steps 1-3 above

2. Move everything that was downloaded into your server like how you normally would

3. Thar jar file to launch your server is fabric-server-launch.jar, set your server to use this to launch it.

4. Success.


For future updates; Make sure you continue deleting the mods folder, and kubejs folder before migrating everything serverstart downloaded into your server root folder.




Need help? Visit our discord https://discord.gg/Js9dxbrh3y