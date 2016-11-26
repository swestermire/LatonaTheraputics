$(function(){
  
  // should probably split this up... This section of code is for timeline functionality
  var height = $('.article-section-left').height()
  var vertical_line_height = $(".line-vert").height();
  var title_background_height = $('.title-background').height();
  var article_body_height = $(".article-body").height();
  
  message = "article-selection-left height is " + height + '..    ';
  message += "Vertical timeline height is " + vertical_line_height + '..     ';
  message += "Title background height is " + title_background_height + '..     ';
  message += "article-body height is " + article_body_height;
  $('#output1').text(message);
  
  // When window is resized, these actions are performed
  $( window ).resize(function() {
    
      // !!! need to make this functional general and loop through all article elements
      var height = $('.article-section-left').height();
      var vertical_line_height = $(".line-vert").height();
      var title_background_height = $('.title-background').height();
      var article_body_height = $(".article-body").height();
      var articleSectionCoord = $('.article-section-left').position();
      var articleWidth = $('.article-section-left').width();
      
      // functions to adjust screen elements when screen is resized
      resizeTimelineVertical(height);
      resizeArticleSpacing(height, title_background_height, article_body_height);
      adjustArticleDistFromTimeline(articleWidth);
    
    
      vertical_line_height = $(".line-vert").height();
      title_background_height = $('.title-background').height();
      article_body_height = $(".article-body").height();
    
      // !!! IT WOULD BE NICE TO HAVE A FUNCTION THAT OUTPUTS DIMENSIONAL MESSAGES
    
      message = "article-selection-left height is " + height + '..    ';
      message += "Vertical timeline height is " + vertical_line_height + '..     ';
      message += "Title background height is " + title_background_height + '..     ';
      message += "article-body height is " + article_body_height;
      $('#output1').text(message);
    });
  
  // adjusts timeline vertical line graphic with the article height increase
  function resizeTimelineVertical(height){
    verticalLineHeight = $(".line-vert").height();
    
    // increases length of timeline vertical
    if (height > (verticalLineHeight + 50)){
       $(".line-vert").height((height + 100));
    } 
    
    // decreases length of timeline vertical
      else if (verticalLineHeight > (height + 100)){
      $('.line-vert').height((height + 50));
    }
  }
  
  // adjusts the article margin to keep it "relatively" centered in the body of the article
  function resizeArticleSpacing(articleHeight, titleBackgroundHeight, articleBodyHeight){
    var dimDiff = articleHeight - titleBackgroundHeight - articleBodyHeight;
    
    // !!! 33 pixels chosen based on what looked aesthetically pleasing, might want to make this a function input so that it can be made more general
    var adjustedMarginTop = 45 - dimDiff;
    $('.article-body').css('margin-top' , adjustedMarginTop)
  };
  
  // adjusts article distance from timeline
  function adjustArticleDistFromTimeline(articleWidth){
    var windowWidth = $(window).width();
    
    var adjustedWidth = windowWidth/2 - 300 - articleWidth ;
    
    $('.article-section-left').css({left:adjustedWidth});
  };
  
})();