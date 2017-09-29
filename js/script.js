var wordList = ['name1', 'name2'];
var wordItem;

$(document).ready(function() {

  $('form').submit(function(event) {
    wordItem = $('#word_input').val();
    wordList.push(wordItem);
    console.log(wordList);
    $('#word_list').append('<li>' + wordItem + '</li>')


    event.preventDefault();
  });




}); // end document ready
