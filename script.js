$(document).ready(function() {

  getQuote();

  function getQuote() {
    $.ajax({
      headers: {
        "X-Mashape-Key": "aZUMWRtsTPmshzQcSuxVNijPpPDGp1qsy84jsnZcAYmxfSbcnz",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1",
      success: function(response) {
        $(".quote").html("<p id='quote-text'>"+ response.quote + "</p>" + "<cite id='quote-author'>" + response.author + "</cite><br/>");
      }
    });
  }

  $("#get-quote").on('click', function() {
    getQuote();
  });

  $("#tweet-quote").on('click', function() {
    var quote = $("#quote-text").text();
    var author = $("#quote-author").text();
    var string = quote + ' ' + author;

    if(string.length > 140) {
      var result = 140 - author.length;
      quote = quote.substr(0, result - 4) + '...'; // 3 for ... and 1 for a space
      string = quote + ' ' + author;
    }

    openURL('https://twitter.com/intent/tweet?text=' + encodeURIComponent(string));
  });

  function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }


});
