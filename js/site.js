/// <reference path="../lib/jquery/dist/jquery.js" />

$(function () {
    var location = window.location.href,
        cur_url = (location.split('/').pop());
    if (cur_url === "") {
        cur_url = "AboutUs"
    };

    $('.menu-main a').each(function () {
        var link = $(this).attr('href').split('/').pop();

        if (cur_url == link) {
            $(this).addClass('current');
        }
    });
});

function load(path) {
    $('main.content').load(path);
};