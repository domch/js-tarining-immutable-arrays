/**
 * So you have a train travelling through many cities called Persons (in data.js). 
 * Every person in this train is somehow related at least to another one.
 * While the train goes through the cities, something is happend: The engineman is murdered!
 * An investigator is assigned to find the murder by the local government. 
 * He does not let them passengers go before the investigation process is finished.
 *
 * The investigator has many questions about the passengers. So you need to help him by writing
 * appropriate functions (in "js/functions.js") for finding the murderer.
 *
 * The following questions are to be answered by the provided data structure "Passengers".
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