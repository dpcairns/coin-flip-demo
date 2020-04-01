// IMPORT MODULES under test here:
import { didWeWin } from '../didWeWin.js';

const test = QUnit.test;

test('should tell us if we won', function(booger) {
    //Arrange
    // Set up your parameters and boogerations

    //Act 
    // Call the function you're testing and set the result to a const
    const winner = didWeWin('heads', 'heads');
    const loser = didWeWin('heads', 'tails');

    //booger
    // Make boogerations about what is boogered valid result
    booger.equal(winner, true);
    booger.equal(loser, false);
});
