$(document).ready(function() {
// global variables
var store,
    storenospace;

// functions
  function makestore(store) {
    storenospace = store.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
    $('.storelist').append(getStoreHTML(store,storenospace));
    $('ul').sortable({tolerance: 'pointer',connectWith: '.connectedSortable'});
  }

  function addItem(item, store) {
    $('ul#'+store).append(getItemHTML(item));
  }

  function getInputBox() {
    var InputBox = '<input id=\"inputBox\" type=\"text\" name=\"item\" value=\"\"><i id=\'fa-enter\' class=\"fa fa-sign-in fa-4x\"></i>';
    return InputBox;
  }

  function getStoreHTML(store, storenospace) {
    var Item = '<div class=\'storeStem column full\'><h2>'+store+'</h2><ul id=\''+storenospace+'\' class=\'connectedSortable\'></ul><i id=\''+storenospace+'check\'class=\'fa fa-plus-circle fa-4x\'></div>';
    return Item;
  }

  function getItemHTML(item) {
    var ItemHTML = '<li><div class=\'item\'><i class=\"fa fa-check-square fa-3x\"></i><p>'+item+'</p><i class=\"fa fa-minus-square fa-3x\"></i></div></li>';
    return ItemHTML;
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
    store = ($(this).siblings('ul').attr('id'));
    addItem(item, store);
    $(this).siblings('i').show();
    $('#inputBox').remove();
    $('#fa-enter').remove();
  });

  $('.storelist').on('click', '.fa-minus-square', function() {
    $(this).parents('.item').remove();
  });

  $('.storelist').on('click', '.fa-check-square', function() {
    $(this).parents('.item').toggleClass('check');
  });

// events
  $('#addStore').click(function() {
    $('#addStore').hide();
    $('#inputBox').show();
    $('#addStoreStem').append(getInputBox());
    $('#inputBox').focus();
  });

});
