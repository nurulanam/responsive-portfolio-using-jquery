jQuery(document).ready(function () {
    jQuery("#home").click(function () {
        jQuery(".home").animate({ bottom: '0%' }, 100).css({ 'opacity': '1', 'transition': '1s' });
        jQuery(".about").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".service").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".portfolio").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".contact").animate({ bottom: '-100%' }, 100).css({'opacity': '0',  'transition': '1s' });
        return false;
    });
    jQuery("#about").click(function () {
        jQuery(".home").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".about").animate({ bottom: '0%' }, 100).css({ 'opacity': '1', 'transition': '1s' });
        jQuery(".service").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".portfolio").animate({ bottom: '-100%' }, 100).css({'opacity': '0', 'transition': '1s' });
        jQuery(".contact").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        return false;
    });
    jQuery(".about-more").click(function () {
        jQuery(".home").animate({ bottom: '100%' }, 100).css({'opacity': '0',  'transition': '1s' });
        jQuery(".about").animate({ bottom: '0%' }, 100).css({'opacity': '1', 'transition': '1s' });
        jQuery(".service").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".portfolio").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".contact").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        return false;
    });
    jQuery("#service").click(function () {
        jQuery(".home").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".about").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".service").animate({ bottom: '0%' }, 100).css({ 'opacity': '1', 'transition': '1s' });
        jQuery(".portfolio").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".contact").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        return false;
    });
    jQuery("#portfolio").click(function () {
        jQuery(".home").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".about").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".service").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".portfolio").animate({ bottom: '0%' }, 100).css({ 'opacity': '1', 'transition': '1s' });
        jQuery(".contact").animate({ bottom: '-100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        return false;
    });
    jQuery("#contact").click(function () {
        jQuery(".home").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".about").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".service").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".portfolio").animate({ bottom: '100%' }, 100).css({ 'opacity': '0', 'transition': '1s' });
        jQuery(".contact").animate({ bottom: '0%' }, 100).css({ 'opacity': '1', 'transition': '1s' });
        return false;
    });
    jQuery(window).resize(function () {
        var width = jQuery("body").width();
        if (width <= 768) {
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }
    });
    jQuery(".black-c").click(function(){
        jQuery("body").css({'background' : '#242424'});
        jQuery(".menu").css({'background' : '#2f93ef'});
        jQuery(".own-top").addClass("own-top-b").removeClass("own-top");
        jQuery(".own-top-b img").css({'border-color' : '#0d5aa2'});
        jQuery(".own-details").addClass("black-c-m").removeClass("own-details");
        jQuery(".home").css({'background' : '#2f93ef'});
        jQuery(".about").css({'background' : '#2f93ef'});
        jQuery(".service").css({'background' : '#2f93ef'});
        jQuery(".portfolio").css({'background' : '#2f93ef'});
        jQuery(".contact").css({'background' : '#2f93ef'});
    });
    jQuery(".blue-c").click(function(){
        jQuery("body").css({'background' : '#4A00E0'});
        jQuery(".menu").css({'background' : '#8E2DE2'});
        jQuery(".own-top-b").addClass("own-top").removeClass("own-top-b");
        jQuery(".own-top-b img").css({'border-color' : 'rgba(61, 11, 160, 0.693)'});
        jQuery(".black-c-m").addClass("own-details").removeClass("black-c-m");
        jQuery(".home").css({'background' : '#8E2DE2'});
        jQuery(".about").css({'background' : '#8E2DE2'});
        jQuery(".service").css({'background' : '#8E2DE2'});
        jQuery(".portfolio").css({'background' : '#8E2DE2'});
        jQuery(".contact").css({'background' : '#8E2DE2'});
    });
});