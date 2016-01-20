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
      $('.stores').on('click', '#'+storenospace+'check', function() {
        $('.'+storenospace+'input').show();
        $('#'+storenospace+'check').hide();
      });
    }

  });



});
