jQuery(document).ready(function () {
    jQuery("#home").click(function () {
        jQuery(".home").animate({bottom: '0%'},100).css({'display' : 'block', 'transition' : '2s'});
        jQuery(".about").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".service").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".portfolio").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".contact").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        return false;
    });
    jQuery("#about").click(function () {
        jQuery(".home").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".about").animate({bottom: '0%'},100).css({'display' : 'block', 'transition' : '2s'});
        jQuery(".service").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".portfolio").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".contact").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        return false;
    });
    jQuery("#service").click(function () {
        jQuery(".home").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".about").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".service").animate({bottom: '0%'},100).css({'display' : 'block', 'transition' : '2s'});
        jQuery(".portfolio").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".contact").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        return false;
    });
    jQuery("#portfolio").click(function () {
        jQuery(".home").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".about").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".service").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".portfolio").animate({bottom: '0%'},100).css({'display' : 'block', 'transition' : '2s'});
        jQuery(".contact").animate({bottom: '-100%'},100).css({'display' : 'none', 'transition' : '2s'});
        return false;
    });
    jQuery("#contact").click(function () {
        jQuery(".home").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".about").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".service").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".portfolio").animate({bottom: '100%'},100).css({'display' : 'none', 'transition' : '2s'});
        jQuery(".contact").animate({bottom: '0%'},100).css({'display' : 'block', 'transition' : '2s'});
        return false;
    });
        var width = jQuery("body").width();
    if (width <= 768) {
        jQuery("nav").addClass("fixed");
    } else {
        jQuery("nav").removeClass("fixed");
    }
});