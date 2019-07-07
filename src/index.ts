import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('soccer.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Tottenham'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
