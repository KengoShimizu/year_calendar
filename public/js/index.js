var $ = function () {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    return (document.querySelectorAll.apply(document, s).length == 1 ? document.querySelectorAll.apply(document, s)[0] : document.querySelectorAll.apply(document, s));
};
var EventName;
(function (EventName) {
    EventName["LOAD"] = "load";
    EventName["CLICK"] = "click";
    EventName["MOUSE_MOVE"] = "mousemove";
})(EventName || (EventName = {}));
var Cell = (function () {
    function Cell(month, date, day, plans) {
        this.month = month;
        this.date = date;
        this.day = day;
        this.plans = plans;
    }
    return Cell;
}());
var table_html = "";
for (var i = 0; i < 30; i++) {
    if (i % 7 == 0) {
        table_html += "<tr>";
    }
    table_html += "<td>" + (i + 1) + "</td>";
    if (i % 7 == 6) {
        table_html += "</tr>";
    }
}
$("tbody").insertAdjacentHTML('afterbegin', table_html);
var days = ["月", "火", "水", "木", "金", "土", "日"];
var cells = [];
for (var i = 0; i < $(".cells td").length; i++) {
    cells.push(new Cell(1, i + 1, days[i % days.length], []));
}
var clickcell = function (num) {
    $("#panning_window").style = "display: block;";
    $("#panning_window").classList.add("anime_test");
};
(function () {
    var _loop_1 = function (i) {
        $(".cells td")[i].addEventListener(EventName.CLICK, function () { return clickcell(i); });
    };
    for (var i = 0; i < $(".cells td").length; i++) {
        _loop_1(i);
    }
})();
