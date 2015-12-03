var quotes = [{
  "quote": "I must create a system or be enslaved by another man's",
  "author": "William Blake"
}, {
  "quote": "I hated every minute of training, but I said, \"Don't quit. Suffer now and live the rest of your life as a champion\"",
  "author": "Muhammad Ali"
}, {
  "quote": "When a well-packaged web of lies has been sold gradually to the masses over generations, the truth will seem utterly preposterous and its speaker a raving lunatic.",
  "author": "Dresden James"
}, {
  "quote": "There are those who look at things the way they are, and ask why... I dream of things that never were, and ask why not?",
  "author": "RFK"
}, {
  "quote": "Reality has a well-known liberal bias",
  "author": "Stephen Colbert"
}, {
  "quote": "Blunt is what I do.",
  "author": "Howard Dean"
}, {
  "quote": "...The best defence against bullshit is vigilance. So, if you smell something, say something.",
  "author": "Jon Stewart"
}, {
  "quote": "I have decided to stick with love. Hate is too great a burden to bear",
  "author": "Martin Luther King Jr."
}, {
  "quote": "Nothing rests; everything moves; everything vibrates.",
  "author": "The Kybalion."
}, {
  "author": "Matthew 7:7,8",
  "quote": "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you: For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened."
}];

var currentIndex = 0;

// get random quote index
var getQuoteIndex = function() {
  console.log('in here');
  var min = 0;
  var max = quotes.length;

  var quoteIndex = Math.floor(Math.random() * (max - min)) + min;

  return quoteIndex;
};

var setQuote = function() {

  var gotIndex = false;
  var newIndex;

  // loop until we get a new index (no repeats)
  while (!gotIndex) {
    newIndex = getQuoteIndex();

    if (newIndex != currentIndex) {
      gotIndex = true;
      currentIndex = newIndex;
    }

  }

  var newQuote = quotes[currentIndex];
  // update UI
  $('#author').text(newQuote['author']);
  $('#quote').text(newQuote['quote']);

};

// document ready
$(document).ready(function() {
  // set up button callback
  $('#newQuoteButton').click(setQuote);

  // get a quote
  setQuote();
});