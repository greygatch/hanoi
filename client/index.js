'use strict';

var $source;
// var $target;
var $tower;

$(document).ready(init);

function init(){
  initBoard();

  $('.block').on('click', function(){
    $(this).toggleClass('selected');
  })

  $('#start').click();
  // $('.block').on('click', select);
  $('.tower').on('click', select);

}

function initBoard(){

  // assign data values and change display
  for (var i = 1; i < 4; i++){
    var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var $block = $('<div>');
    var width = (i * 60);
    $block.addClass('block');
    $block.text('Block ' +i);
    $('#tower1').append($block);
    $block.css('width', width + 'px');
    $block.css('height', '50px;')
    $block.css('background-color', col)
    $block.attr('id', i);
    // $block.css('margin', 'auto')
  }

}

function select(){
  if ($source){
    $tower = $(this)[0];
    drop();
  }
  else{
    $source = $(this).children()[0];
    $($source).toggleClass('selected');
  }
}

// drop function to work only when block is selected
function drop(){
  console.log("tower clicked: ", $tower);
  console.log("tower children: ", $($tower).children('.block')[0]);

  var $topBlock = $($tower).children('.block')[0]
  console.log('top block: ', $topBlock)
  // if top block exists
  if ($topBlock){
    var firstChild = $($tower).children('.block')[0];
    var topBlockSize = $(firstChild).attr('id')
    var selectedBlockSize = $($source).attr('id');

    if (topBlockSize > selectedBlockSize){
      $($tower).prepend($source);
      $($source).removeClass('selected');
      $source = null;
    }
  }
  else{
    console.log('no block in tower');
    $($tower).append($source);
    $($source).removeClass('selected');
    $source = null;
  }

  checkWin();
}

function checkWin(){
  if($('#tower3').children().length === 3){
    alert('win');
  }
}
