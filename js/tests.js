/**
 * The following questions are to be answered by the provided data structure "Passengers" in the file "js/passengers.js".
 *
 */

describe('Use the new array methods which are enabling immutablity', () => {
   
    it('00) What is the name of third person in the group?', () => {
        let result = findPersonByIndex(3); 
        result.should.be.equal("");
    });
    
    it('00) How many women are in this group?', () => {
        let result = findNumberOfWomen(); 
        result.should.be.equal(4);
    });
    
    it('00) How many men are in this group?', () => {
        let result = findNumberOfWomen(); 
        result.should.be.equal(4);
    });
    
});