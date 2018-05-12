var quotes = [
  {
  quote:'"There is some good in this world, and it’s worth fighting for."',
  source:"– J.R.R. Tolkien"
  },
  {
   quote:'"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."',
   source:"– H.Jackson Brown Jr."
  },
  {
    quote:'"Well-behaved women seldom make history."',
    source:"– Laurel Thatcher Ulrich"
  },
  {
    quote:'"It is better to be hated for what you are than to be loved for what you are not."',
    source:"– André Gide, Autumn Leaves"
  },
  {
    quote:'"Who, being loved, is poor?"',
    source:"– Oscar Wilde"
  },
  {
    quote:'"Every human life is worth the same, and worth saving."',
    source:"– J.K. Rowling"
  },
  {
    quote:'"Get busy living, or get busy dying."',
    source:"– Stephen King"
  },
  {
    quote:'"The goal isn’t to live forever, the goal is to create something that will."',
    source:"– Chuck Palahniuk"
  },
  {
    quote:'"Travel far enough, you meet yourself."',
    source:"– David Mitchell"
  },
  {
    quote:'"None of us really changes over time. We only become more fully what we are."',
    source:"– Anne Rice"
  },
  {
    quote:'"Most people are nice when you finally see them."',
    source:"– Harper Lee"
  },
  {
    quote:'"Anything worth dying for is certainly worth living for."',
    source:"– Joseph Heller"
  },
  {
    quote:'"All endings are also beginnings. We just don’t know it at the time."',
    source:"– Mitch Albom"
  },
  {
    quote:'"When someone leaves, it’s because someone else is about to arrive."',
    source:"– Paulo Coelho"
  },
  {
    quote:'"It’s no use going back to yesterday, because I was a different person then."',
    source:"– Lewis Carroll"
  },
  {
    quote:'"The only limits for tomorrow are the doubts we have today."',
    source:"–Pittacus Lore"
  },
  {
    quote:'"If we wait until we’re ready, we’ll be waiting for the rest of our lives."',
    source:"– Lemony Snicket"
  },
  {
    quote:'"Fear doesn’t shut you down; it wakes you up."',
    source:"– Veronica Roth"
  },
  {
    quote:'"When you are imagining, you might as well imagine something worth while."',
    source:"– Lucy Maud Montgomery"
  }];

function generateQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length +1);
  var quoteContent = quotes[randomQuote].quote;
  var quoteSource = quotes[randomQuote].source;
  //why did query selector not work? because I didn't use .innerHTML?
  document.getElementById("quote-content").innerHTML = quoteContent;
  document.getElementById("quote-source").innerHTML = quoteSource; 
}
  
function tweetQuote() {
  var generatedQuote = document.getElementById('quote-content').innerHTML;
  var generatedSource = document.getElementById('quote-source').innerHTML;
  var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote) + encodeURIComponent(generatedSource);
   window.open(tweetUrl);
}

//how can I use jquery to get the quotes to fade in and out?


 



