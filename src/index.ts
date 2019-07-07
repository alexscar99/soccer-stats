import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('soccer.csv');

// create an instance of 'MatchReader' and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let tottenhamWins = 0;

for (let match of matchReader.matches) {
    if (match[1] === 'Tottenham' && match[5] === MatchResult.HomeWin) {
        tottenhamWins++;
    } else if (match[2] === 'Tottenham' && match[5] === MatchResult.AwayWin) {
        tottenhamWins++;
    }
}

console.log(`Tottenham won ${tottenhamWins} games`);
