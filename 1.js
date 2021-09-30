//В данном коде происходит нарушение Single-responsibility принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.
var Info = /** @class */ (function () {
    function Info(data) {
        this.id = data.id;
        this.description = data.description;
    }
    Info.prototype.getInfo = function () {
        return "info: " + this.id + " " + this.description;
    };
    return Info;
}());
var Statistics = /** @class */ (function () {
    function Statistics() {
    }
    Statistics.prototype.computeStatistics = function (data) {
        return data.length;
    };
    return Statistics;
}());
var Report = /** @class */ (function () {
    function Report() {
    }
    Report.prototype.computeReport = function (data) {
        return data.map(function (_a) {
            var description = _a.description;
            return description;
        });
    };
    return Report;
}());
var infoOne = new Info({
    id: 1,
    description: 'MMMM'
});
var myStatistics = new Statistics();
var myReport = new Report();
var statistics = [
    {
        id: 1,
        description: '123'
    },
    {
        id: 2,
        description: '333'
    },
    {
        id: 3,
        description: '678'
    },
];
console.log(infoOne.getInfo());
console.log(myStatistics.computeStatistics(statistics));
console.log(myReport.computeReport(statistics));
