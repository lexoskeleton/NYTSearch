var myObject = {
    'api-key': "f5973f1a3a7a4db9adca54610882f9bd",
    'q': "",
    'begin_date': "19850131",
    'end_date': "20000131",
  }
  
  //add when front end is done
  // var topic = $("#topic-field").val();
  // var beginDate = $("#begin-date-field").val();
  // var endDate = $("#end-date-field").val();
  // var numberOfArticles = $("#number-field").val();
      var numberOfArticles = 5;
  // myObject.q = topic;
  // myObject.begin_date = beginDate;
  // myObject.end_date = endDate;
  
  
  
  
  $("#search-button").on("click", function() {
      
      console.log("click")
    myObject.q = $("#q-topic").val().trim();
    numberOfArticles = $("#article-number").val()
    var myParam = $.param(myObject)
    console.log(myParam)
    //

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
    url += '?' + myParam
    console.log(url);

  $.ajax({
    url: url,
    method: 'GET',
  }).then(function(response) {
    console.log(response);
    console.log(response.response.docs[0].snippet)
    
    
    $("#articles").empty();
    for (var i = 0; i < numberOfArticles; i++) {
        
        $("#articles").append("<a href='" + response.response.docs[i].web_url + "'><p>" + response.response.docs[i].snippet + "</p></a>");
        
    }
  });
});

          
         
          