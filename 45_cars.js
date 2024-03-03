function carInfo(manufacturer, model, options) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var key in options) {
        car[key] = options[key];
    }
    return car;
}
var carInfo1 = carInfo('Toyota', 'Camry', ['red', 2022]);
console.log(carInfo1);
