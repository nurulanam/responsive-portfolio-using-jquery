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
  
        if (width > 0 && width < 768) {
            jQuery(".menu").addClass("fixed");
            jQuery("body").css({'overflow' : 'auto'});
            jQuery(".profile").css({'display' : 'block'});
            jQuery(".home").css({'display' : 'none'});
            jQuery(".about").css({'display' : 'none'});
            jQuery(".service").css({'display' : 'none'});
            jQuery(".portfolio").css({'display' : 'none'});
            jQuery(".contact").css({'display' : 'none'});
            jQuery("#home").click(function(){
                jQuery(".profile").css({'display' : 'block'});
                jQuery(".home").css({'display' : 'none !important'});
                jQuery(".about").css({'display' : 'none'});
                jQuery(".service").css({'display' : 'none'});
                jQuery(".portfolio").css({'display' : 'none'});
                jQuery(".contact").css({'display' : 'none'});
            });
            jQuery("#about").click(function(){
                jQuery(".profile").css({'display' : 'none'});
                jQuery(".home").css({'display' : 'none'});
                jQuery(".about").css({'display' : 'block', 'position' : 'absolute', 'left' : '0'});
                jQuery(".service").css({'display' : 'none'});
                jQuery(".portfolio").css({'display' : 'none'});
                jQuery(".contact").css({'display' : 'none'});
            });
            // jQuery(".about-more").click(function(){
            //     jQuery(".profile").css({'display' : 'none'});
            //     jQuery(".profile").css({'display' : 'none'});

            //     jQuery(".about").css({'display' : 'block', 'position' : 'absolute', 'left' : '0'});
            //     jQuery(".service").css({'display' : 'none'});
            //     jQuery(".portfolio").css({'display' : 'none'});
            //     jQuery(".contact").css({'display' : 'none'});
            // });
            jQuery("#service").click(function(){
                jQuery(".profile").css({'display' : 'none'});
                jQuery(".home").css({'display' : 'none'});
                jQuery(".about").css({'display' : 'none'});
                jQuery(".service").css({'display' : 'block', 'position' : 'absolute', 'left' : '0'});
                jQuery(".portfolio").css({'display' : 'none'});
                jQuery(".contact").css({'display' : 'none'});
            });
            jQuery("#portfolio").click(function(){
                jQuery(".profile").css({'display' : 'none'});
                jQuery(".home").css({'display' : 'none'});
                jQuery(".about").css({'display' : 'none'});
                jQuery(".service").css({'display' : 'none'});
                jQuery(".portfolio").css({'display' : 'block', 'position' : 'absolute', 'left' : '0'});
                jQuery(".contact").css({'display' : 'none'});
            });
            jQuery("#contact").click(function(){
                jQuery(".profile").css({'display' : 'none'});
                jQuery(".home").css({'display' : 'none'});
                jQuery(".about").css({'display' : 'none'});
                jQuery(".service").css({'display' : 'none'});
                jQuery(".portfolio").css({'display' : 'none'});
                jQuery(".contact").css({'display' : 'block', 'position' : 'absolute', 'left' : '0'});
            });
        } else {
            jQuery(".menu").removeClass("fixed");
            jQuery(".home").css({'display' : 'block'});
        }
    });
    jQuery(".black-c").click(function(){
        jQuery("body").css({'background' : '#103e72'});
        jQuery(".menu").css({'background' : '#3778c2'});
        jQuery(".menu a span").addClass("blue").removeClass("purple");
        jQuery(".own-top").addClass("own-top-b").removeClass("own-top");
        jQuery(".own-top-b img").css({'border-color' : '#0d5aa2'});
        jQuery(".own-details").addClass("black-c-m").removeClass("own-details");
        jQuery(".home").css({'background' : '#3778c2'});
        jQuery(".about").css({'background' : '#3778c2'});
        jQuery(".service").css({'background' : '#3778c2'});
        jQuery(".portfolio").css({'background' : '#3778c2'});
        jQuery(".contact").css({'background' : '#3778c2'});
    });
    jQuery(".blue-c").click(function(){
        jQuery("body").css({'background' : '#4A00E0'});
        jQuery(".menu").css({'background' : '#8E2DE2'});
        jQuery(".menu a span").addClass("purple").removeClass("blue");
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