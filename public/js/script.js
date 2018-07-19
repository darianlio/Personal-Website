
$(function(){
  'use strict';
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
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
        }
      },
      smoothState = $('#main').smoothState(options).data('smoothState');
      sr.sync();
});

window.sr = ScrollReveal({reset: false});
sr.reveal('#port-title', {duration: 700, origin: 'top'});
sr.reveal('.contact-btn', {duration: 700, origin: 'top'});
sr.reveal('#git-title', {duration: 700, origin: 'top'});
sr.reveal('.effect-apollo', { duration: 700, orgin: 'left'}, 100);
sr.reveal('.sm2', { duration: 700, origin: 'top'}, 100);