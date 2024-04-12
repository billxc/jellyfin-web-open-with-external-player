// ==UserScript==
// @name         Jellyfin Copy To Open in Potplayer
// @version      0.1
// @description  Jellyfin Copy To Open in Potplayer
// @author       XC
// @match        http://localhost:8096/*
// ==/UserScript==


(function () {
    'use strict';
    function openIfPlayableLink(input) {
        console.log(input);
        if (input.includes("Download\?api_key=")) {
            // window.location.href = 'potplayer://' + input
            window.open('potplayer://' + input); 
            // replace the protocol if needed.
            // refer to https://github.com/tccoin/Jellyfin-Potplayer to use a powershell script to handle the request
        }
    }

    function fallbackCopyWithExec(value) {
        console.log(value)
        // Create a new textarea element
        var textarea = document.createElement('textarea');
        // Set the text
        textarea.value = value;
        // Append the textarea to the body of the document
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
    }

    if (!navigator.clipboard) {
        // For non-https sites, navigator.clipboard.writeText does not exist
        console.log("navigator.clipboard is not available, fake it.");
        navigator.clipboard = {};
    }
    navigator.clipboard.writeText = async function () {
        fallbackCopyWithExec(arguments[0])
        openIfPlayableLink(arguments[0]);
    }
})();