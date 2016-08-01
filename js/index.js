
$(document).ready(function(){

  var autor = $("#quote-autor");
  var content = $("#quote-content");
  var category = $("#quote-category");
  var tweet = $("#tweet-button");
  
  
$("#quote-button").on("click", function(){
  
        autor.text('-author');
        category.text('-category');
        content.html('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>');
  
    $.ajax({

      headers: {
        'X-Mashape-Key': 'XLEiVF0BrgmshGNNAaVHylRujpkEp1VApRWjsnGs3gbp51OmO6',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'

      },

      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
      success: function(json){

         //parse cause typeof json is string
        json = JSON.parse(json);
        
        $("#quote-autor").text('-'+json.author);
        $("#quote-content").html(json.quote);
        $("#quote-category").text(json.category);
        $("#tweet-button").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + json.quote + '"') );


      }


    }); // ajax            
}); // click
  $("#quote-button").trigger("click");
}); // ready