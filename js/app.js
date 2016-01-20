$(document).ready(function() {

  $('#addStore').click(function() {
    $('#addStore').hide();
    $('#storeText').show();
  });

  $('#storeText').keydown(function(enter) {
    if (enter.keyCode == 13) {
      $('#addStore').show();
      $('#storeText').hide();
      var store = $('#storeText').val();
      var storenospace = store.replace(/\s+/g, '');
      $('#storeText').val('');
      $('.storelist').append('<div class=\'astore column full\'><h2>'+store+'</h2><ul id=\''+storenospace+'\' class=\'connectedSortable\'></ul><i id=\''+storenospace+'check\'class=\'fa fa-plus-circle fa-4x\'></i><input id=\'itemText\' class=\''+storenospace+'input\' type=\'text\' name=\'item\' value=\'\'></div>');
      $('ul').sortable({containment: 'parent',
        tolerance: 'pointer', connectWith: '.connectedSortable'
      });
      $('.stores').on('click', '#'+storenospace+'check', function() {
        $('.'+storenospace+'input').show();
        $('#'+storenospace+'check').hide();
      });
      $('.stores').on('keydown','.'+storenospace+'input', function(enter) {
        if (enter.keyCode == 13) {
          $('.'+storenospace+'input').hide();
          $('#'+storenospace+'check').show();
          var item = $('.'+storenospace+'input').val();
          $('.'+storenospace+'input').val('');
          console.log($('ul#'+storenospace));
          $('ul#'+storenospace).append('<li><div class=\'item clearfix\'><i class=\"fa fa-check-square fa-3x\"></i><p>'+item+'</p><i class=\"fa fa-minus-square fa-3x\"></i></div></li>');
        }
      });
    }

  });

  function addItem(item) {
    var gitem = $('input').val();
    console.log(store+item);
    // $('#'+selectStore).append("<li><div class=\"item uncheck\"><i class=\"fa fa-check-square\"></i><p>"+gitem+"</p><i class=\"fa fa-minus-square\"></i></div></li>");
  }

});
