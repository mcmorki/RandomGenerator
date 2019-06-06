/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!        Hello Treehouse Family       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// project begins with an array of 7 objects with quotes//
  
 var quotes = [
  {
    quote: 'The only failure is not to try',
    source: 'George Clooney',
    citation: 'Actor',
    year: 2006
   },
   {
    quote: 'Your regrets aren\'t what you did, but what you didn\'t do. So I take every opportunity',
    source: 'Cameron Diaz',
       },
   {
    quote: 'I say luck is when an opportunity comes along and you\'re prepared for it',
    source: 'Denzel Washington',
    citation: 'Actor'
   },
   {
    quote: 'The best way to guarantee a loss is to quit.',
    source: 'Morgan Freeman',
    year: 2002
   },
   {
    quote: 'Be so good they can\'t ignore you.',
    source: 'Steve Martin',
   },
   {
    quote: 'It is not a lie, it\'s a terminological inexactitude.',
    source: 'Alexander Haig',
    citation: 'Actor',
    year: 1967
   },
   {
    quote: 'Be so good they can\'t ignore you.',
    source: 'E.V. Lucas',
   },
   {
     quote: 'May the Force be with you.',
     year:  1977,
     title: 'Star Wars',
     source: 'Obi wan Kenobi'
   },
   {
     quote: 'After all, tomorrow is another day!',
     title: 'Gone With the Wind',
     year: 1939,
     source: 'Oprah Winfrey'
   }];

console.log(quotes); //prints to the console for review


                                                                 //getRandomQuote F U N C T I O N //

function getRandomQuote(quotes){
     const num = Math.floor(Math.random() * quotes.length) // Sets a variable equal to a random integer within the length of the quotes variable.

return quotes[num];}

const results = getRandomQuote(quotes); //Set a variable equal to the action being done in the getRandomQuote function which is calling the data of quotes.
console.log(results);       //prints to the console for review


                                            /*** A N O T H E R   E X A M P L E   O F  G E N E R A T O R   F U N C T I O N!!! 

                                                                    function getRandomQuote (quotes) {

                                                                    let num = Math.floor(Math.random() * quotes.length);
                                                                    for (var i = 0;i < quotes.length; i++)
                                                                    
                                                                    {
                                                                      var randomQuote = quotes[num]}
                                                                      return randomQuote;
                                                                      }

                                                                    var result = getRandomQuote(quotes);

                                                                    console.log(result);***/



                                                               //printQuote` F U N C T I O N //

function printQuote(){
 let template = " ";
 let randomness = getRandomQuote(quotes) ;
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) // seta a variable equal to a random color 
  + ',' + (Math.floor(Math.random() * 256))
   + ',' + (Math.floor(Math.random() * 256)) + ')';
 

 template = "<p class='quote'>" + randomness.quote + "</p>" ;  //prints the quote in its on paragraph
 template += "<p class='source'>" + randomness.source ; // prints a canctination of an empty string with + the source in a seperate paragraph

 if ( typeof randomness.citation != "undefined") {
  template +=  "<span class='citation'>" + randomness.citation  + "</span>"; //conditional statement testng if the quotes consist of a citation if it is not defined print the quote.
  }
if ( typeof randomness.year != "undefined"){
  template += "<span class='year'>" + randomness.year + "</span>" //conditional statement testng if the quotes yeart of a citation if it is not defined print the quote.
  }
if ( typeof randomness.title != "undefined"){
  template += "<span class='title'>" + randomness.title + "</span></p>"


;}    
 document.getElementById('quote-box').innerHTML = template; // calls the html id and replaces it with a string of random quotes.

 

   document.body.style.backgroundColor = hue;         // calls out a random color to style the background 
   loadQuote.style.backgroundColor = hue;         // randomizes color of the button on click.
}

setInterval(printQuote, 7000); //sets the quote to randomize every 25 seconds on its own.


document.getElementById('loadQuote').addEventListener("click", printQuote, false); // allows another quote to print per click





