//В данном коде происходит нарушение Dependency Inversion принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (user) {
        console.log(user.name);
    };
    return LoggerService;
}());
var SubscriptionService = /** @class */ (function () {
    function SubscriptionService() {
    }
    SubscriptionService.prototype.subscribe = function (user) {
        console.log(user.name + " is subscribed");
    };
    return SubscriptionService;
}());
var AppService = /** @class */ (function () {
    function AppService(logging, subscription) {
        this.logging = logging;
        this.subscription = subscription;
        this.logging = logging;
        this.subscription = subscription;
    }
    AppService.prototype.create = function (userInfo) {
        this.logging.log(userInfo);
        this.subscription.subscribe(userInfo);
    };
    return AppService;
}());
var resultService = new AppService(new LoggerService(), new SubscriptionService());
console.log(resultService.create({ id: 1, name: 'Test' }));
