// Number of explorers that have let us know that they saw the greeting
const confirmedExplorers = 0;


function getCardinalNumberSuffix(number) {
    // Determine the suffix based on the number (e.g. 1st, 2nd, 3rd, ...)
    // Special cases that don't fit the pattern (11th, 12th, and 13th)
    if (number % 100 >= 11 && number % 100 <= 13) {
        return 'th'
    }
    // Otherwise, it just follows the normal pattern
    // Determine the suffix based on the last digit
    switch (number % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
}

function greetExplorer() {
    const numExplorers = confirmedExplorers + 1;
    console.log(`Congratulations! You are the ${numExplorers}${getCardinalNumberSuffix(numExplorers)} explorer to find this!

Curiosity is a great trait to have!. Send us a message with the Contact Form to let us know you saw this and we'll increment the
confirmedExplorers variable. And keep exploring! There are more cool things to play with on this website. To get some more info
about those things run the \`help()\` function by typing 'help()' and then pressing Enter.

Contact us if you'd like to learn more about how this website works, how to build your own, and much, much more!`);
}

function openContactForm() {
    $('#contact').find('a').attr('href');
}

function help() {
    console.log(`Here are a few things to try out:

Fully implemented (try it out!):
    cursorTrail(): Adds a trail effect to your cursor
    openContactForm(): open the contact form in a new tab

Coming soon (?):
    Dork: object for a Zork-like game, but worse, but hackable!
    nightmareMode(): I don't know what this will be, but it WILL BE!
    Graphix: basic graphics
    YouTellMe: no really, you tell me. What do you think would be cool? Let me know by calling \`openContactForm()\``);
}

// Event handler for updating the mouseX, and mouseY variables
$(document).on('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
})

// Say hello. It's only polite
greetExplorer();