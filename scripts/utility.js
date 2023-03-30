'use strict';

/**
 * @name showSection
 * @summary This method show the section according the button selected.
 * @author Luis Fernandez 
 * @param idSection
 */

function showSection(idSection) {
    $(`#${idSection}`).css('display', 'block');
}

/**
 * @name closeSection
 * @summary This method hidde the section according the button selected.
 * @author Luis Fernandez 
 * @param idSection
 */

function closeSection(idSection) {
    $(`#${idSection}`).css('display', 'none');
}

/**
 * @name scrollController
 * @summary This method control the scroll of the page.
 * @author Luis Fernandez
 * @param NA
 */

// Catch Element Scroll Event
$(document).ready(function () {
    $(window).bind('scroll', function () {

        // Variable Declaration & Definition
        var gab = 50;

        // Conditional Statement
        if ($(window).scrollTop() > gab) {
            $("#imgMainLogo").addClass("sizeController");
        }
        else {
            $("#imgMainLogo").removeClass("sizeController");
        }
    })
})

/**
 * @name facebookScriptHandler
 * @summary This method control show facebook on the page.
 * @author Luis Fernandez
 * @param NA
 */
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v6.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));