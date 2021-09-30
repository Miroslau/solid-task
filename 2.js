//В данном коде происходит нарушение Open-closed принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.
var MailServer = /** @class */ (function () {
    function MailServer() {
    }
    MailServer.prototype.send = function (order) {
        return {};
    };
    return MailServer;
}());
var OrderPresenter = /** @class */ (function () {
    function OrderPresenter() {
    }
    OrderPresenter.prototype.send = function (order) {
        return {};
    };
    return OrderPresenter;
}());
var OrderSystem = /** @class */ (function () {
    function OrderSystem(sendMessage) {
        this.sendMessage = sendMessage;
    }
    OrderSystem.prototype.createOrder = function () {
        var order = {};
        var orderView = this.sendMessage.send(order);
        return orderView;
    };
    return OrderSystem;
}());
var myMailSystems = new OrderSystem(new MailServer());
console.log(myMailSystems.createOrder());
var myOrderPresenter = new OrderSystem(new OrderPresenter());
console.log(myOrderPresenter.createOrder());
