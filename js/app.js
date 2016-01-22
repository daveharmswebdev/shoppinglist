$(document).ready(function() {
// global variables
var store,
    storenospace;

// functions
  function makestore(store) {
    storenospace = store.replace(/\s+/g, '');
    $('.storelist').append(getStoreHTML(store,storenospace));
    $('ul').sortable({tolerance: 'pointer',connectWith: '.connectedSortable'});
  }

  function addItem(item) {

  }

  function getInputBox() {
    var InputBox = '<input id=\"inputBox\" type=\"text\" name=\"item\" value=\"\"><i id=\'fa-enter\' class=\"fa fa-sign-in fa-4x\"></i>';
    return InputBox;
  }

  function getStoreHTML(store, storenospace) {
    var Item = '<div class=\'storeStem column full\'><h2>'+store+'</h2><ul id=\''+storenospace+'\' class=\'connectedSortable\'></ul><i id=\''+storenospace+'check\'class=\'fa fa-plus-circle fa-4x\'></div>';
    return Item;
  }

// event handlers
  $('#addStoreStem').on('click','#fa-enter', function() {
    store = $('#inputBox').val();
    $('#addStore').show();
    $('#inputBox').remove();
    $('#fa-enter').remove();
    makestore(store);
  });

  $('.storelist').on('click', '.fa-plus-circle', function() {
    $('#'+this.id).hide();
    $(this).closest('div').append(getInputBox);
    $('#inputBox').focus();
  });

  $('.storelist').on('click', '#fa-enter', function() {
    var item = $('#inputBox').val();
    console.log(item);
    $('#inputBox').remove();
    $('#fa-enter').remove();
  });

// events
  $('#addStore').click(function() {
    $('#addStore').hide();
    $('#inputBox').show();
    $('#addStoreStem').append(getInputBox());
    $('#inputBox').focus();
  });

  // $('#fa-enter').click(function() {


  //   // $('.stores').on('click', '#'+storenospace+'check', function() {
  //   //   $('.'+storenospace+'input').show();
  //   //   $('#'+storenospace+'faenter').show();
  //   //   $('#'+storenospace+'check').hide();
  //   //   $('.'+storenospace+'input').focus();
  //   // });
  //   // $('.stores').on('click','#'+storenospace+'faenter', function(enter) {
  //   //   $('.'+storenospace+'input').hide();
  //   //   $('#'+storenospace+'faenter').hide();
  //   //   $('#'+storenospace+'check').show();
  //   //   var item = $('.'+storenospace+'input').val();
  //   //   $('.'+storenospace+'input').val('');
  //   //   console.log($('ul#'+storenospace));
  //   //   $('ul#'+storenospace).append('<li><div class=\'item clearfix\'><i class=\"'+storenospace+' fa fa-check-square fa-3x\"></i><p>'+item+'</p><i id=\'#'+storenospace+'\' class=\"fa fa-minus-square fa-3x\"></i></div></li>');
  //   // });
  //   // $('#'+storenospace).on('click', '.fa-minus-square', function() {
  //   //     $(this).parents('.item').remove();
  //   // });
  //   // $('#'+storenospace).on('click', '.'+storenospace+'.fa-check-square',function() {
  //   //   console.log('click '+$(this).text());
  //   //   $(this).parents('.item').toggleClass('check');
  //   // });
  // });

});
