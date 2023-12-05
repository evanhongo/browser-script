// ==UserScript==
// @name         自動跳過YouTube廣告
// @namespace    youtube
// @version      1.0
// @description 自動跳過YouTube廣告
// @author       evanhongo
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    var timer;
    function handleBeforeUnload() {
        if (timer)
            clearInterval(timer);
        window.removeEventListener("beforeunload", handleBeforeUnload);
    }

    function skipAd() {
        var skipBtn = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipBtn) {
            skipBtn.click();
            console.log("Click button");
        }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    timer = setInterval(skipAd, 1000);
})();