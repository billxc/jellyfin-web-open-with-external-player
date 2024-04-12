# jellyfin-web-open-with-external-player

This is a Tamper Monkey script to make jellyfin web open an external player when clicking the `Copy Stream URL`.


# Usage
Just install the `script.js` in Tamper Monkey, that's all.

## Optional:
replace the protocol if needed. Refer to https://github.com/tccoin/Jellyfin-Potplayer to use a powershell script to handle the request

## How it works
Jellyfin uses navigator.clipboard.writeText to copy the stream URL, and we hacks the request there.