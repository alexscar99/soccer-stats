"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('soccer.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var tottenhamWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Tottenham' && match[5] === MatchResult.HomeWin) {
        tottenhamWins++;
    }
    else if (match[2] === 'Tottenham' && match[5] === MatchResult.AwayWin) {
        tottenhamWins++;
    }
}
console.log("Tottenham won " + tottenhamWins + " games this past season");
