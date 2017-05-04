/**
 * 工厂方法
 */

function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

function Truck(options) {
    this.state = options.state || 'userd';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
}
//工厂类
function VehicleFactory() {

}
VehicleFactory.prototype = {
    vehicleClass: Car,
    createVehicle: function(options) {
        if (options.vehicleType === 'car') {
            this.vehicleClass = Car;
        } else {
            this.vehicleClass = Truck;
        }
        return new this.vehicleClass(options);
    }
}

//抽象工厂
const AbstractVeguckeFactory = (function() {
    var types = {};
    return {
        getVehicle: function(type, options) {
            var Vehicle = types[type];
            if (Vehicle) {
                return new Vehicle(options);
            }
            return null;
        },
        registerVehicle: function(type, Vehicle) {
            var proto = Vehicle.prototype;

            //只注册车辆契约类
            if (proto.drive) {
                types[type] = Vehicle;

            }
            return AbstractVeguckeFactory;
        }
    };
})();

//用法
AbstractVeguckeFactory.registerVehicle("car", Car);
AbstractVeguckeFactory.registerVehicle("truck", Truck);
var car = AbstractVeguckeFactory.getVehicle("car", {
    'color': 'blue',
});

var vehicleFactory = new VehicleFactory();
vehicleFactory.createVehicle({
    'vehicleType': 'car',
});
