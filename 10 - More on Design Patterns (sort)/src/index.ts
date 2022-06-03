import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';

const numbersCollection = new NumbersCollection([-5,10,100,0])
const charactersCollection = new CharactersCollection('asdasdSFDFGVVbnhnytr')
const sorter = new Sorter(numbersCollection)
const sorter2 = new Sorter(charactersCollection)
sorter.sort();
console.log(numbersCollection.data);




sorter2.sort();
console.log(charactersCollection.data);
