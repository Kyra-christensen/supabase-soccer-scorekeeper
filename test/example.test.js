// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGame, renderTeam } from '../render-utils.js';
const test = QUnit.test;

test('renderGame should return a DOM element', (expect) => {
    //Arrangeconst 
    let currentGame = {
        name1: 'kyra',
        score1: 10,
        name2: 'adam',
        score2: 9
    };
    // Set up your arguments and expectations
    const expected = '<div class="game"><div class="team"><p class="name">kyra</p><p class="score">10</p></div><div class="team"><p class="name">adam</p><p class="score">9</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(currentGame);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderTeam should return a DOM element', (expect) => {
    // eslint-disable-next-line no-useless-escape
    const expected = '<div class="team"><p class="name"></p><p class="score"></p></div>';
    const actual = renderTeam();

    expect.equal(actual.outerHTML, expected);
});