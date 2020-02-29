
    $(document).ready(function(){
     $(".bg").interactive_bg();// Function call.
    
     $("#btn").interactive_bg({
       strength: 11,// The intensity of the background movement when the cursor is moved.
       scale: 1.16,// The scale of the background zoom when the mouse hovers over the background.
       contain: true,// Prevents the scaled background from overflowing its container.
       wrapContent: false// All internal content reacts to the cursor or just the background.
     });
      });
      
      // Change the background size when the window is resized.
      $(window).resize(function() {
        $(".container > .ibg-bg").css({
          width: $(window).outerWidth(),//Change the background width to fit with outerwidth of the window.
          height: $(window).outerHeight()//Change the background height to fit with outerheight of the window.
        })
      })
      
