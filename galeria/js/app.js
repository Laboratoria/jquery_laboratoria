//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('#overlay');
var $image = $("#overlay img");
var $caption = $("#overlay p");

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
  //Show the overlay.
  $overlay.show();
  
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $(this).hide();
});










