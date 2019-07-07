import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('soccer.csv');

// create an instance of 'MatchReader' and pass in something
// satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
