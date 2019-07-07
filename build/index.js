"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('soccer.csv');
// create an instance of 'MatchReader' and pass in something satisfying
// the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var tottenhamWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Tottenham' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        tottenhamWins++;
    }
    else if (match[2] === 'Tottenham' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        tottenhamWins++;
    }
}
console.log("Tottenham won " + tottenhamWins + " games");
