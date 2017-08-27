/**
 * Here are some datastructures which provide the database for the tests.
 * "const" is another and new form of "var" which prevents that program flow changes its reference.
 *
 * GENDER Type: M(male), F(female)
 */
const persons = [
    {
        id: 101,
        firstname: "Ferdi",
        lastname: "T.",
        gender: "M",
        birth: new Date(1980, 2, 5),
        origin: "Giresun",
        entryDateInSwiss: new Date(2005, 7, 1),
        children: [
            {name:"Meryem", gender:"F", age: 3}, 
            {name:"Sara", gender:"F", age: 1}
        ],
        addres: {
            street: "Schulstrasse 23",
            zip: "8604",
            city: "Volketswil",
            country: "Swiss"
        },
        languages: ["DE", "TR"],
        salary: 75000.00,
        friends: []
    },
    
    {
        id: 402,
        firstname: "Sevda",
        lastname: "F.",
        gender: "F",
        birth: new Date(1985, 1, 24),
        origin: "Istanbul",
        entryDateInSwiss: null,
        children: [
            {name:"Leyla", gender:"F", age: 12}
        ],
        addres: {
            street: "Canikli Caddesi 101",
            zip: "55010",
            city: "Samsun",
            country: "Turkey"
        },
        languages: ["TR"],
        salary: 15000.00,
        friends: []
    },
    
    {
        id: 367,
        firstname: "Halime",
        lastname: "L.",
        gender: "F",
        birth: new Date(1979, 4, 4),
        origin: "Adana",
        entryDateInSwiss: new Date(2005, 2, 14),
        children: [
            {name:"Cemil", gender:"M", age: 6}
        ],
        addres: {
            street: "Sarganserstr. 3",
            zip: "8301",
            city: "Effretikon",
            country: "Swiss"
        },
        languages: ["DE", "TR"],
        salary: 55000.00,
        friends: []
    },    
        
    {
        id: 205,
        firstname: "Mesut",
        lastname: "C.",
        gender: "M",
        birth: new Date(1978, 9, 9),
        origin: "Adana",
        entryDateInSwiss: null,
        children: [],
        addres: {
            street: "Kozans Caddesi",
            zip: "01005",
            city: "Adana"
            country: "Turkey"
        },
        languages: ["EN", "TR"],
        salary: 45000.00,
        friends: []
    },
    
    {
        id: 123,
        firstname: "Mustafa",
        lastname: "E.",
        gender: "M",
        birth: new Date(1981, 3, 15),
        origin: "Antalya",
        entryDateInSwiss: new Date(2004, 8, 1),
        children: [
            {name:"Melih", gender:"M", age: 3}, 
            {name:"Zeynep", gender:"F", age: 1}
        ],
        addres: {
            street: "Ziegelwiessstr. 45",
            zip: "8798",
            city: "Olten",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR"],
        salary: 85000.00,
        friends: []
    },   
    
    {
        id: 191,
        firstname: "Jenifer",
        lastname: "K.",
        gender: "F",
        birth: new Date(1976, 8, 21),
        origin: "Antalya",
        entryDateInSwiss: null,
        children: [
            {name:"John", gender:"M", age: 19}, 
            {name:"Kelly", gender:"F", age: 19},
            {name:"Henry", gender:"M", age: 17}
        ],
        addres: {
            street: "Kentucky Road 120",
            zip: "12998",
            city: "Washington",
            country: "US"
        },
        languages: ["EN"],
        salary: 63000.00,
        friends: []
    }, 
    
    {
        id: 311,
        firstname: "Ali",
        lastname: "O.",
        gender: "M",
        birth: new Date(1981, 9, 15),
        origin: "Urfa",
        entryDateInSwiss: new Date(2016, 8, 1),
        children: [
            {name:"Vildan", gender:"F", age: 3}
        ],
        addres: {
            street: "Ogretmenstr. 3a",
            zip: "8798",
            city: "Olten",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR", "KU"],
        salary: 80000.00,
        friends: []
    },
    
    {
        id: 561,
        firstname: "Cihat",
        lastname: "S.",
        gender: "M",
        birth: new Date(1986, 10, 10),
        origin: "Samsun",
        entryDateInSwiss: new Date(2014, 1, 13),
        children: [],
        addres: {
            street: "Mühlemanweg 10",
            zip: "8301",
            city: "Effretikon",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR", "RU"],
        salary: 82000.00,
        friends: []
    },  
    
    {
        id: 603,
        firstname: "Katherina",
        lastname: "P.",
        gender: "F",
        birth: new Date(1989, 5, 21),
        origin: "Moskow",
        entryDateInSwiss: null,
        children: [
            {name:"Dymitro", gender:"F", age: 1},
        ],
        addres: {
            street: "Moswkostr. 101",
            zip: "98734",
            city: "Moskow",
            country: "Russia"
        },
        languages: ["EN", "RU"],
        salary: 22000.00,
        friends: []
    }, 
    
    {
        id: 299,
        firstname: "Latif",
        lastname: "H.",
        gender: "M",
        birth: new Date(1980, 8, 21),
        origin: "Istanbul",
        entryDateInSwiss: new Date(2013, 3, 9),
        children: [
            {name:"Ayse", gender:"F", age: 10}, 
            {name:"Hakan", gender:"M", age: 7}
        ],
        addres: {
            street: "Lichtstr. 99",
            zip: "8000",
            city: "Zürich",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR"],
        salary: 102000.00,
        friends: []
    },   
    
    {
        id: 965,
        firstname: "Kumar",
        lastname: "P.",
        gender: "M",
        birth: new Date(1974, 3, 21),
        origin: "New Delhi",
        entryDateInSwiss: new Date(1999, 5, 24),
        children: [
            {name:"Adhira", gender:"F", age: 15}, 
            {name:"Abha", gender:"F", age: 13},
            {name:"Alpana", gender:"F", age: 11}, 
            {name:"Alka", gender:"F", age: 9},
            {name:"Kuschi", gender:"F", age: 17}
        ],
        addres: {
            street: "Samstagerstr. 102",
            zip: "8000",
            city: "Zürich",
            country: "Swiss"
        },
        languages: ["EN", "DE", "IN"],
        salary: 64000.00,
        friends: []
    },  
    
    {
        id: 978,
        firstname: "Hannes",
        lastname: "K.",
        gender: "M",
        birth: new Date(1987, 8, 13),
        origin: "New Delhi",
        entryDateInSwiss: new Date(1999, 5, 24),
        children: [],
        addres: {
            street: "Milchburgstr. 65",
            zip: "8000",
            city: "Zürich",
            country: "Swiss"
        },
        languages: ["EN", "DE"],
        salary: 84500.00,
        friends: []
    },      
];














































































