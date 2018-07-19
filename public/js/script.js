window.sr = ScrollReveal({ reset: true});
sr.reveal('#port-title h2', {duration: 1000});
sr.reveal('#git-title', {duration: 1000});
sr.reveal('.effect-apollo', { duration: 1000 }, 13);
sr.reveal('.sm2', { duration: 1000 }, 5);
sr.reveal('.contact-btn', { duration: 1000 });
$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        forms: 'form',
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
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');

});