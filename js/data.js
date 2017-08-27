/**
 * Here are some datastructures which provide the database for the tests.
 * "const" is another and new form of "var" which prevents that program flow changes its reference.
 *
 * GENDER Type: M(male), F(female)
 */
const persons = [
    {
        firstname: "Ferdi",
        lastname: "T.",
        gender: "M",
        origin: "Giresun",
        birth: new Date(1980, 2, 5),
        children: [
            {name:"Meryem", gender:"F", age: 3}, 
            {name:"Sara", gender:"F", age: 1}
        ],
        addres: {
            street: "Schulstrasse 23",
            zip: 8604,
            city: "Volketswil"
        },
        
    },
];