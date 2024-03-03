function carInfo(manufacturer: string, model: string, options: { [key: string]: any }): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };


    for (let key in options) {
        car[key] = options[key];
    }

    return car;
}


let carInfo1 = carInfo('Toyota', 'Camry', ['red', 2022]);
console.log(carInfo1);
