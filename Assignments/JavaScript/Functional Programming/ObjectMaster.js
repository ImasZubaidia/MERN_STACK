const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// 1
const question1 = pokémon.filter(val => val.id % 3 == 0);
console.log(question1);

// 2
const question2 = pokémon.filter(val => val.types.includes("fire"));
console.log(question2);

//  3
const question3 = pokémon.filter(val => val.types.length > 1);
console.log(question3);

//  4
const question4 = pokémon.map(val => val.name);
console.log(question4);

//  5
const question5 = pokémon.filter(val => val.id > 99).map(x => x.name);
console.log(question5);

//  6
const question6 = pokémon.filter(val => val.types.length == 1 && val.types.includes("poison")).map(x => x.name);
console.log(question6);

// 7
const question7 = pokémon.filter(val => val.types.length > 1 && val.types[1] == "flying").map(x => x.types[0]);
console.log(question7);

//  8
const question8 = pokémon.filter(val => val.types.includes("normal")).length;
console.log(question8);