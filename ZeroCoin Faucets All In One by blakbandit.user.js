// ==UserScript==
// @name            ZeroCoin Faucets All In One by blakbandit
// @namespace       http://tampermonkey.net/
// @version         1.0
// @description     Earn Free Zerocoin
// @author          blakbandit
// @license         MIT
// @match           https://camelbtc.com/*
// @match           https://rimakoko.com/*
// @match           https://tiggercoin.com/*
// @match           https://zerocoin.top/*
// @match           https://zerofaucet.com/*
// @match           https://freezeroco.in/*
// @match           https://1ink.cc/*
// @match           https://donaldco.in/*
// @match           https://myzeroland.com/*
// @match           https://rimakoko.com/*
// @grant           none
// ==/UserScript==

/*


==================================================================================================================================================                                                                                                                                              |
| This script requires a ZeroChain wallet, you can create one by following this link: https://zerochain.info/.                                   |
|                                                    made by: blakbandit                                                                         |
|         Please use my referal link      https://zerocoin.top/?ref=t1RBy1LdarBmvi5sXAnX2HDubEKCgX5WU3J                                          |
|                                         https://zerofaucet.com/?ref=t1RBy1LdarBmvi5sXAnX2HDubEKCgX5WU3J                                        |
|                                         https://rimakoko.com/?ref=27344                                                                        |
|                                                                                                                                                |
|                                                                                                                                                |
==================================================================================================================================================
*/

(function() {
    'use strict';

    // Remove animated background from website - optional.
    Object.assign(document.getElementsByTagName('body')[0].style, { backgroundImage: 'none' });

    setInterval(function() {
        // Click on claim buttons.
        if (document.getElementById('button1')) {
            document.getElementById('button1').click();
        }
        // Click on 1link skip button.
        if (document.getElementsByClassName('skipbutton')[0]) {
            document.getElementsByClassName('skipbutton')[0].click();
        }
    }, 1000);

})();