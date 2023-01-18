const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable. ', (answer) => {

  //rl.pause();
  rl.question('What\'s an activity you like doing? ', (answer2) => {

    // rl.pause();
    rl.question('What do you listen to while doing that? ', (answer3) => {

      // rl.pause();
      rl.question('Which meal is your favourite? ', (answer4) => {

        // rl.pause();
        rl.question('What\'s your favourite thing to eat for that meal?? ', (answer5) => {

          // rl.pause();
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            // rl.pause();

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {

              console.log(`${answer} spends a lot of time ${answer2} while listening to ${answer3} for fun.  For ${answer4}, ${answer} loves to eat ${answer5}. ${answer} would love to talk about ${answer6} or play ${answer6} trivia. At night, ${answer} fights crime with an unworldly power of ${answer7}.`);
              rl.close();

            });
          });
        });
      });
    });
  });
});
