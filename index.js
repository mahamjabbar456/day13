// Question 37
function make_shirt_modify(size = 'large', message = 'I love TypeScript') {
    console.log(`The size of the shirt is ${size} and ${message}`);
}
make_shirt_modify();
make_shirt_modify("Small", "My name is Maham Jabbar");
// Question 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Lahore");
describe_city("Jhang");
describe_city("Madinah", "Saudi Arabia");
// Question 39
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Makkah", "Saudi Arabia"));
export {};
