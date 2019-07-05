import fs from 'fs';

const matches = fs
    .readFileSync('soccer.csv', {
        encoding: 'utf-8'
    })
    .split('\n')
    .map(
        (row: string): string[] => {
            return row.split(',');
        }
    );

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

let tottenhamWins = 0;

for (let match of matches) {
    if (match[1] === 'Tottenham' && match[5] === MatchResult.HomeWin) {
        tottenhamWins++;
    } else if (match[2] === 'Tottenham' && match[5] === MatchResult.AwayWin) {
        tottenhamWins++;
    }
}

console.log(`Tottenham won ${tottenhamWins} games this past season`);
