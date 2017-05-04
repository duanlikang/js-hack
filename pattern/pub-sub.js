/**
 * 发布订阅者模式
 */
const publisher = (function() {
    var _subs = {};
    var _subid = 0;
    //订阅
    const subscribe = function(type, func) {

        var token = type + '-' + (_subid++);
        if (!_subs[type]) {
            _subs[type] = [];
        }

        _subs[type].push({
            token: token,
            func: func
        });
        console.log(token);
        return token;
    };
    //通过toke进行取消订阅
    const unsubscribe = function(token) {
        //提取出type
        var reg = /(.+)-/;
        var mathes;
        if (mathes = token.match(reg)) {
            var type = mathes[1];
            if (!_subs[type]) {
                return false;
            } else {
                for (var i = 0; i < _subs[type].length; i++) {
                    if (_subs[type][i].token === token) {
                        //取消订阅
                        _subs[type].splice(i, 1);
                    }
                }

            }
        } else {
            //无效的token
            return false;
        }
    };
    const publish = function(type, data, context) {
        var context = context || this;
        if (!_subs[type]) {
            return false;
        }
        for (var i in _subs[type]) {
            _subs[type][i].func.call(context, data);
        }
    };

    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        publish: publish,
        installto: function(obj) {
            //使obj具有publisher功能
            obj.subscribe = subscribe;
            obj.unsubscribe = unsubscribe;
            obj.publish = publish;
            obj.print = function() {
                console.log(_subid, _subs);
            }
        }
    }

})();
//test
publisher.subscribe("/getName", function(name) {
    console.log(name);
});
const getNameToken2 = publisher.subscribe("/getName", function(name) {
    console.log('name', name);
});
publisher.publish('/getName', "123");
publisher.unsubscribe(getNameToken2);
publisher.publish('/getName', "123");
//
var newObj = {};
publisher.installto(newObj);
newObj.subscribe("/getName", function(name) {
    console.log(name);
});
newObj.publish('/getName', "123");
newObj.print();
