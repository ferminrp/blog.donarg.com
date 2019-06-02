//not updated
url = 'https://api.sheety.co/80ce190e-9a4f-47d2-a2a6-d71381da3e01'


//connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    var obj = data;
    console.log(obj[1]);
    console.log(obj.slice(0, 3));
    /*$(obj).each(function(){

      /*var ong = this.ong
      var imagen = this.imagen
      var paginaWeb = this.paginaWeb
      var instagram = this.i      var twitter = this.twitter
      var linkDonaciones = this.linkDonaciones

      console.log(this.title)
      $(".featured").append('<div class="ngo-card"> <a href="'+ paginaWeb +'" target="_blank" rel="noopener"><div id="featured-two" class="img-container" style="background-image:url('+imagen+')!important"></div> </a><p>'+ong+'</p><div class="icon-list"> <span><a href="'+paginaWeb+'" target="_blank" rel="noopener"><i class="fas fa-globe"></i></a></span> <span><a href="'+instagram+'" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></span> <span><a href="'+twitter+'" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a></span></div></div>')*/
   });
  });
