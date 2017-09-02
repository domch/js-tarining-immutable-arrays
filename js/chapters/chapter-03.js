/**
 * NOTES:
 * Do not forget to insert RETURN statement, if needed!
 * Please use the following functions primarily and if needed all the other array functions
 *
 * - Array.prototpye.forEach(fn)
 * - Array.prototpye.find(fn)
 * - Array.prototpye.filter(fn)
 * - Array.prototpye.map(fn)
 * - Array.prototpye.reduce(fn)
 * - Array.prototpye.every(fn)
 * - Array.prototpye.some(fn)
 * - ...
 *
 *  Remember:
 *  () => {}  // this is an arrow function, basically a short form of function decleration.
 *  let       // this is another reserved for declaring variables like "var" which beawares of scopes!
 *  const     // this is an alternative way of declaring variables which does not allowed reference changes
 *
 * Note that:
 * - In the function paramter list the parameters are prefixed with "p" like "pPassengers"
 * - The decleration order of functions is not important!
 */



/**
 * This function elminates all duplicated entries from the array. 
 *
 * @param pArray, includes a collection of string items
 * distinct(["it", "it", "it", "club"]); // Result: ["it", "club"];
 */
function distinct(pArray){
    return new Array(...new Set(pArray));
}

function findCountries(pPassengers){
    return pPassengers;
}

function findLanguages(pPassengers){
    return pPassengers;
}

function findCities(pPassengers){
    return pPassengers;
}




function findPersonsByLanguaheAndMinSalary(pPassengers, pLanguage, pSalary){
    return pPassengers     
} 

