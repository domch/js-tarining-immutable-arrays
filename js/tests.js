/**
 * The following questions are to be answered by the provided data structure "Passengers" in the file "js/passengers.js".
 *
 * Please open the file "js/chapter-xx.js"
 *
 */

describe('Use the new array methods which are enabling immutablity', () => {

    it('00) Howmany passengers are in the train?', () => {
        let result = findPersonByIndex(Passengers); 
        result.should.be.equal(20);
    });
    
    it('00) What is the name of third person in the group?', () => {
        let result = findPersonByIndex(Passengers, 3); 
        result.should.be.equal("Sevda");
    });
    
    it('00) How many women are in this group?', () => {
        let result = findNumberOfWomen(Passengers); 
        result.should.be.equal(8);
    });
    
    it('00) How many men are in this group?', () => {
        let result = findNumberOfWomen(Passengers); 
        result.should.be.equal(12);
    });
    
});