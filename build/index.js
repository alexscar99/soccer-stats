"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('soccer.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var tottenhamWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Tottenham' && match[5] === MatchResult.HomeWin) {
        tottenhamWins++;
    }
    else if (match[2] === 'Tottenham' && match[5] === MatchResult.AwayWin) {
        tottenhamWins++;
    }
}
console.log("Tottenham won " + tottenhamWins + " games this past season");
