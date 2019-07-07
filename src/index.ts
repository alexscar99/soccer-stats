import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('soccer.csv');
const summary = Summary.winsAnalysisHtmlReport('Tottenham');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
