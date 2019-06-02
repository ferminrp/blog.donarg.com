//not updated
url = 'https://api.sheety.co/80ce190e-9a4f-47d2-a2a6-d71381da3e01'


//connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    //var obj = data.feed.entry;
    var obj = data;
    var tres_notas = obj.slice(1,4);
    var item;
    for (var item in tres_notas) {
      console.log(item.titulo);
    }
    /*var first_title = obj[0].titulo;
    console.log(first_title)
    console.log("----");
    console.log(obj.slice(5));*/
  });
