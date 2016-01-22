$(document).ready(function() {

// global variables
var store,
    storenospace;
    
// functions

  function makestore(store) {
    var storenospace = store.replace(/\s+/g, '');
    $('.storelist').append('<div class=\'astore column full\'><h2>'+store+'</h2><ul id=\''+storenospace+'\' class=\'connectedSortable\'></ul><i id=\''+storenospace+'check\'class=\'fa fa-plus-circle fa-4x\'></i><input id=\'itemText\' class=\''+storenospace+'input\' type=\'text\' name=\'item\' value=\'\'><i id=\''+storenospace+'faenter\' class=\"fa fa-sign-in fa-4x\"></i></div>');
    $('ul').sortable({tolerance: 'pointer',connectWith: '.connectedSortable'});
  }
  
  function getInputBox() {
    var InputBox = '<input id=\"storeText\" type=\"text\" name=\"item\" value=\"\"><i id=\'fa-enter\' class=\"fa fa-sign-in fa-4x\"></i>';
    return InputBox;
  }
// events

  $('#addStore').click(function() {
    $('#addStore').hide();
    $('#storeText').show();
    $('#addStoreStem').append(getInputBox());
    $('#storeText').focus();
    console.log(getInputBox());
  });

  $('#fa-enter').click(function() {
    store = $('#storeText').val();
    $('#addStore').show();
    $('#storeText').remove();
    $('#faenter').remove();
    makestore(store);

    // $('.stores').on('click', '#'+storenospace+'check', function() {
    //   $('.'+storenospace+'input').show();
    //   $('#'+storenospace+'faenter').show();
    //   $('#'+storenospace+'check').hide();
    //   $('.'+storenospace+'input').focus();
    // });
    // $('.stores').on('click','#'+storenospace+'faenter', function(enter) {
    //   $('.'+storenospace+'input').hide();
    //   $('#'+storenospace+'faenter').hide();
    //   $('#'+storenospace+'check').show();
    //   var item = $('.'+storenospace+'input').val();
    //   $('.'+storenospace+'input').val('');
    //   console.log($('ul#'+storenospace));
    //   $('ul#'+storenospace).append('<li><div class=\'item clearfix\'><i class=\"'+storenospace+' fa fa-check-square fa-3x\"></i><p>'+item+'</p><i id=\'#'+storenospace+'\' class=\"fa fa-minus-square fa-3x\"></i></div></li>');
    // });
    // $('#'+storenospace).on('click', '.fa-minus-square', function() {
    //     $(this).parents('.item').remove();
    // });
    // $('#'+storenospace).on('click', '.'+storenospace+'.fa-check-square',function() {
    //   console.log('click '+$(this).text());
    //   $(this).parents('.item').toggleClass('check');
    // });
  });

  // function addItem(item) {
  //   var gitem = $('input').val();
  //   console.log(store+item);
  //   // $('#'+selectStore).append("<li><div class=\"item uncheck\"><i class=\"fa fa-check-square\"></i><p>"+gitem+"</p><i class=\"fa fa-minus-square\"></i></div></li>");
  // }

});
