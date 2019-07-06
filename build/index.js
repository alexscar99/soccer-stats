"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('soccer.csv');
reader.read();
var tottenhamWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Tottenham' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        tottenhamWins++;
    }
    else if (match[2] === 'Tottenham' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        tottenhamWins++;
    }
}
console.log("Tottenham won " + tottenhamWins + " games this past season");
