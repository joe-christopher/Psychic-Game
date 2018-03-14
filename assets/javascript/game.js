
    
    //create an array of all possible letter answers
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //initialize all variables
    var wins = 0;
    var losses = 0;
    var guessesleft = 9; 
    var guessesSoFar = "";

    var correctAnswer = alphabet[Math.floor(Math.random() * alphabet.length)]; //pick a random lettewr to begin game


    document.onkeyup = function(event) 
    {
        var userGuess = event.key;

        //check for valid user guess before comparing guess to answer
        if (userGuess === 'a' || userGuess === 'b' || userGuess === 'c' || userGuess === 'd' || userGuess === 'e' ||
        userGuess === 'f' || userGuess === 'g' || userGuess === 'h' || userGuess === 'i' || userGuess === 'j' ||
        userGuess === 'k' || userGuess === 'l' || userGuess === 'm' || userGuess === 'n' || userGuess === 'o' ||
        userGuess === 'p' || userGuess === 'q' || userGuess === 'r' || userGuess === 's' || userGuess === 't' ||
        userGuess === 'u' || userGuess === 'v' || userGuess === 'w' || userGuess === 'x' || userGuess === 'y' || userGuess === 'z')
        {
            if (guessesSoFar.length == 0) //first guess
                guessesSoFar = userGuess;  //add user's guess to string of guesses so far
            else
                guessesSoFar = guessesSoFar + ", " + userGuess; 

            if (userGuess === correctAnswer) //guessed correctly, reset game
            {
                wins++; //increment win total
                guessesleft = 9; //reset guesses left count for new 
                correctAnswer = alphabet[Math.floor(Math.random() * alphabet.length)]; //choose another random letter for next game
                guessesSoFar = ""; //clear the guesses string for next game
            }
            else
            {
                guessesleft --;

                if (guessesleft == 0) //out of guesses, reset game
                {
                    losses++; //out of guesses, increment loss count
                    guessesleft = 9; //reset guesses left count for new 
                    correctAnswer = alphabet[Math.floor(Math.random() * alphabet.length)]; //choose another random letter for next game
                    guessesSoFar = ""; //clear the guesses string for next game
                }

            }
        }
        var html =
                "<h1>The Psychic Game</h1>" +
                "<p>Guess what letter I'm thinking of!</p>" +
                "<p>Total Wins: " + wins + "</p>" + 
                "<p>Total Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesleft + "</p>" +
                "<p>Your Guesses so far: " + guessesSoFar + "</p>";
                ;

                document.querySelector("#game").innerHTML = html;
            
    };
  