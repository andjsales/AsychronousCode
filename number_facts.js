// Get a Fact About Your Favorite Number
fetch('http://numbersapi.com/7?json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
console.log("finish 1st");


// Get Data on Multiple Numbers in a Single Request
fetch('http://numbersapi.com/1,2,3?json')
    .then(response => response.json())
    .then(data => {
        for (let number in data) {
            console.log(data[number]);
        }
    })
    .catch(error => console.error('Error:', error));
console.log("finish 2nd");

// Get 4 Facts on Your Favorite Number
let promises = [];
for (let i = 0; i < 4; i++) {
    promises.push(fetch('http://numbersapi.com/7?json').then(response => response.json()));
}

Promise.all(promises)
    .then(results => {
        results.forEach(fact => console.log(fact));
    })
    .catch(error => console.error('Error:', error));
