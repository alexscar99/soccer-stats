import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('soccer.csv');
reader.read();

let tottenhamWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Tottenham' && match[5] === MatchResult.HomeWin) {
        tottenhamWins++;
    } else if (match[2] === 'Tottenham' && match[5] === MatchResult.AwayWin) {
        tottenhamWins++;
    }
}

console.log(`Tottenham won ${tottenhamWins} games this past season`);
