'use strict';

const $ = require('jquery');
global.jQuery = $;

require('gsap/CSSPlugin');
const TweenLite = require('gsap/TweenLite');
const traitHorizontalTop = $('.trait.horizontal-top');
const traitVertical = $('.trait.vertical');
const traitHorizontalBottom = $('.trait.horizontal-bottom');

$(function(){
    // Animation traits
    TweenLite.to(traitHorizontalTop, 1, {scaleX: 1, delay: 3});
    TweenLite.to(traitVertical, 4, {scaleY: 1, delay: 4});
    TweenLite.to(traitHorizontalBottom, 1, {scaleX: 1, delay: 8});

    // Animation scrollTo
    $('.menu-header a').on('click', function(e){
        e.preventDefault();
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 500);
    });
});