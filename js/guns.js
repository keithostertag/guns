$(document).ready(function()  {
  // set default page image for devices wider than 660px
  var media_query = window.matchMedia("(min-width: 660px)");
    if (media_query.matches)  {
      $('#images').html("<img src=images/kimber_ultra-cdpii-1.jpg  class='photo'>" );
  
      const blackBull = "images/bullseye.svg";
      const redBull = "images/bullseye-red.svg";
      const greenBull = "images/bullseye-green.svg";

        // choose which color bullseye svg depending on user action
        $( ".guns img" ).on({
          mouseenter: function()  {
              $(this).attr("src", greenBull);
          },
          mouseleave: function() {
              $(this).attr("src", blackBull);
          },
          click: function() {
              $(this).attr("src",redBull);
          }
      });

// else create one long column of images w descriptions for mobile
    } else  {
      $('.guns a').each(function()  {
        var source = $(this).attr("href");
        var link_description = $(this).parent().text();
        $('#images').append("<img src=mobile_" + source + " id='mobile_photo'>" );
        $('#images').append("<h3>" + link_description + "</h3>");
      }); //end each function
    }   // end else clause

// for devices wider than 660px
// create "lightbox" by filling images div with clicked link
// also add description from li of the chosen link
$('.guns a').click(function(evt) {
  evt.preventDefault();
  var source = $(this).attr("href");
  var link_description = $(this).parent().text();
  $('#description').html("<h3>" + link_description + "</h3>");
  $('#images').html("<img src=" + source + " class='photo'>" );

}); //end of click function
}); //end of document.ready
