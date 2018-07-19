$(function(){
  'use strict';
    var options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        forms: 'form',
        scroll: false,
        onStart: {
          duration: 400, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
          }
        },
        onAfter: function($container) {
          window.sr = ScrollReveal();
          sr.reveal(".aboutme-details", {duration: 700, origin: 'top'});
          sr.reveal('#port-title', {duration: 700, origin: 'top'});
          sr.reveal('.contact-btn', {duration: 700, origin: 'top'});
          sr.reveal('#git-title', {duration: 700, origin: 'top'});
          sr.reveal('.effect-apollo', { duration: 400, origin: 'left'}, 50);
          sr.reveal('#res-title', { duration: 700, origin: 'bottom'});
          sr.reveal('#res-desc', { duration: 700, origin: 'bottom'});
          sr.reveal('.job', { duration: 700, origin: 'bottom'});
          sr.reveal('.sm2', { duration: 700, origin: 'top'}, 100);
          //fireUp();
        }
      },
      smoothState = $('#main').smoothState(options).data('smoothState');
});