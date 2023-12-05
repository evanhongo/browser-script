// ==UserScript==
// @name         遮蔽YouTube廣告
// @namespace    youtube
// @version      1.0
// @description 遮蔽YouTube廣告
// @author       evanhongo
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    const adCssSeletorArr = [
        `#masthead-ad`,//首頁頂部橫幅廣告.
        `ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)`,//首頁影片排版廣告.
        `.video-ads.ytp-ad-module`,//播放器底部廣告.
        `tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)`,//播放頁會員促銷廣告.
        `ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]`,//播放頁右上方推薦廣告.
        `#related #player-ads`,//播放頁留言區右側推廣廣告.
        `#related ytd-ad-slot-renderer`,//播放頁評論區右側影片排版廣告.
        `ytd-ad-slot-renderer`,//搜尋頁廣告.
        `yt-mealbar-promo-renderer`,//播放頁會員推薦廣告.
        `ad-slot-renderer`,//M播放頁第三方推薦廣告
        `ytm-companion-ad-renderer`,//M可跳過的影片廣告連結處
    ];

    function hideAd() {
        const styleElem = document.createElement(`style`);
        (document.querySelector(`head`) || document.querySelector(`body`)).appendChild(styleElem);

        const styleStr = adCssSeletorArr.map(s => `${s}{display:none !important}`).join(` `);
        styleElem.appendChild(document.createTextNode(styleStr));
    }

    window.addEventListener("load", hideAd);
})()