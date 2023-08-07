// var car = [
//     {
//         name: "Civic",
//         model: 2023,
//         company: "Honda",
//         availableColors: ['Black', 'White', 'Grey'],
//         price: 100_00_00_0,
//         auto: true,
//         moreDetails: {
//             doors: 4
//         },
//         getDetails: function(){
//             return `${this.name} ${this.model} ${this.price}`
//         }
//     },
//     {
//         name: "Alto",
//         model: 2010,
//         company: "Suzuki",
//         availableColors: ['Black', 'White', 'Grey'],
//         price: 100_00_00_0,
//         auto: true,
//         moreDetails: {
//             doors: 4
//         },
//         getDetails: function(){
//             return `${this.name} ${this.model} ${this.price}`
//         }
//     }
// ]
// var carDetail = car[0].getDetails();
// console.log(carDetail);

// // car.moreDetails.wheel = 4;
// // car.auto = false;
// // delete car.model;
// // delete car.moreDetails.wheel;
// // console.log(car);

// // console.log("price" in car);


// function Car(name, model, price) {
//     this.name = name;
//     this.model = model;
//     this.price = price
// }
// var cars = [
//     new Car("Civic", 2023, 100_00_00_0),
//     new Car("Alto", 2022, 1500_00_0),
//     new Car("Mehran", 2010, 70_00_00)
// ];
// console.log(cars[2].price);
const car = document.getElementById("card");


var cars = {
    honda: {
        civic: {
            model_2010: {
                name: "Civic 2010",
                company: "Honda",
                color: ['red', 'pink', 'blue']
            }
        }
    }
}

for (var key in cars) {
    for (var key1 in cars[key]) {
        car.innerHTML += ` <div id="card">
        ${cars} ${key1}  
  </div>`;
    }
}

