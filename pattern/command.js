/**
 * 命令模式
 */
(function() {

    var CarManager = {
        buyVehicle: function(model, id) {
            console.log(`You want to buy ${model}`);
        },
        execute: function(name) {
            return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
        }
    };
    CarManager.execute('buyVehicle', 'model', 'id');
})();
