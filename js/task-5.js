// task 5
// Напиши клас Car із зазначеними властивостями і методами.

// class Car {
//     static getSpecs(car) {
//       console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
//     }
  
//     constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    
//       this.maxSpeed = maxSpeed;
//       this.speed = speed;
//       this.isOn = isOn;
//       this.distance = distance;
//       this.price = price;

//     }
  
//     get price() {
//       return this._price;
//     }
  
//     set price(newPrice) {
//       this._price = newPrice;
//     }
  
//     turnOn() {
//       this.isOn = true;
//     }
  
//     turnOff() {
//       this.isOn = false;
//       this.speed = 0;
//     }
  
//     accelerate(value) {
//       if (this.speed + value <= this.maxSpeed) {
//         this.speed += value;
//       }
//     }
  
//     decelerate(value) {
//       if (this.speed - value >= 0) {
//         this.speed -= value;
//       }
//     }
  
//     drive(hours) {
//       if (this.isOn) {
//         this.distance += hours * this.speed;
//       }
//     }
//   }
  
//   const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);
  
//   Car.getSpecs(mustang);
  
//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
//   console.log(mustang.price); 
//   mustang.price = 4000;
//   console.log(mustang.price); 