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

/*
function a(param){return param;}
(param) =>{
  return param;  
} 
*/



function findNumberOfPassengersByMinChildren(pPassengers, pNoOfChildren){
    return pPassengers
        //.filter(function(person){return person.children.length>=pNoOfChildren})
        .filter(person => person.children.length >= pNoOfChildren)
        .map(person => {
            //console.log(person);
            return person;
        })
        .length;
}
function findNumberPassengersByMinChildrenAndGender(pPassengers, pNoOfChildren, pGender){
    return pPassengers
            .filter(person => person.children.length >= pNoOfChildren && person.gender === pGender).length;
}
function findNumberOfPassengersByCountry(pPassengers, pCountry){
    return pPassengers.filter(person => person.addres.country === pCountry).length;
}
function findNumberOfPassengersByChildrenAndCountry(pPassengers, pNoOfChildren, pCountry){
    return pPassengers.filter(function(person){
        return person.addres.country === pCountry && person.children.length == pNoOfChildren;
    }).length;
}
function findNumberOfPassengersByLanguageAndGender(pPassengers, pLanguage, pGender){
    return pPassengers.filter(person => person.gender === pGender && person.languages.includes(pLanguage)).length;
}
function findNumberOfPassengersByLanguageAndGenderAndCountry(pPassengers, pLanguage, pGender, pCountry){
    return pPassengers.filter(person => person.gender === pGender 
                                        && person.languages.includes(pLanguage) 
                                        && person.addres.country === pCountry).length;
}
function findNumberOfPassengersByLanguageAndSalaryAndNumberOfChildren(pPassengers, pLangauge, pSalary, pNoOfChildren){
    return pPassengers.filter(person => person.languages.includes(pLangauge) 
                                        && person.salary >= pSalary
                                        && person.children.length == pNoOfChildren).length;
}
function isThereAnyPersonBySalaryAndCountry(pPassengers, pSalary, pCountry){
    return pPassengers.filter(person => person.addres.country === pCountry && person.salary < pSalary)
                      .length > 0;
}
function findNumberOfPassengersByEntryDate(pPassengers, pEntryDate){
    return pPassengers.filter(person => person.entryDateInSwiss > pEntryDate).length;
}
function findNamesOfPassengersByOrigin(pPassengers, pOrigin){
    return pPassengers.filter(person => person.origin === pOrigin)
                      .map(person => person.firstname); 
}
function findNamesOfPassengersByHoroscope(pPassengers, pHoroscopeSign){
    
    if(pHoroscopeSign === pHoroscopeSign){
        var startDate = new Date(2000, 7-1, 23);
        var endDate = new Date(2000, 8-1, 22);    
    }
    // else if basak ...
    
    return pPassengers
        .filter(person => {
            startDate.setFullYear(person.birth.getFullYear());
            endDate.setFullYear(person.birth.getFullYear());
            return startDate <= person.birth && person.birth <= endDate;   
        })
        .map(person => person.firstname);    
}

// AND
function findNamesOfPassengersByAcceptedAndNotAcceptedLanguages3(pPassengers, pAcceptedLanguages, pNotAcceptedLanguages){
    return pPassengers
            .filter(person => person.languages.filter(lang => pAcceptedLanguages.includes(lang)).length == pAcceptedLanguages.length
                              && person.languages.filter(lang => pNotAcceptedLanguages.includes(lang)).length == 0)
            .length;
}

// OR
function findNamesOfPassengersByAcceptedAndNotAcceptedLanguages2(pPassengers, pAcceptedLanguages, pNotAcceptedLanguages){
    return pPassengers
            .filter(person => person.languages.indexOf.apply(person.languages, pAcceptedLanguages) > -1
                               && person.languages.indexOf.apply(person.languages, pNotAcceptedLanguages) == -1)
            .length;
}
