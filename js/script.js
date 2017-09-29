var wordList = [];
var wordItem;

$(document).ready(function() {

  // enter words
  $('#wordForm').submit(function(event) {
    wordItem = $('#word_input').val();
    wordList.push(wordItem);
    console.log(wordList);
    $('#word_list').append('<li>' + wordItem + '</li>')

    event.preventDefault();
  });


  // generate names
  $('#generateForm').submit(function(event) {
    // wordItem = $('#word_input').val();

    for (var i = 0; i < 10; i++) {
      var wordIndex1 = Math.floor(Math.random() * wordList.length);
      var wordIndex2 = Math.floor(Math.random() * wordList.length);
      var wordIndex3 = Math.floor(Math.random() * wordList.length);
      var wordRandom1 = wordList[wordIndex1];
      var wordRandom2 = wordList[wordIndex2];
      var wordRandom3 = wordList[wordIndex3];

      $('#name_list').append('<li>' + wordRandom1 + ' ' + wordRandom2 + '</li>')
    }

    event.preventDefault();
  });

}); // end document ready
