//not updated
url = 'https://api.sheety.co/80ce190e-9a4f-47d2-a2a6-d71381da3e01'


//connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    //var obj = data.feed.entry;
    var obj = data;
    var first_title = obj[0].titulo;
    console.log(first_title)
  });
