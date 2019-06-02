//not updated
url = 'https://api.sheety.co/80ce190e-9a4f-47d2-a2a6-d71381da3e01'


//connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    //var obj = data.feed.entry;
    var obj = data;
    $(obj).each(function(){
      var title = this.titulo
      var imagen = this.imagen
      var description = this.descripcion
      var link = this.link

      console.log(this.title);
      $(".blogposts").append('<a href="'+link+'"><div class="post grow"><div class="post-text"><h6>'+title+'</h6> <p>'+description+'</p></div><div class="post-image" style="background-image:url('+imagen+')"> </div></div></a>');
   });
  });
