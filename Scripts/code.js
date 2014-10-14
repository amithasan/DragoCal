
$(document).ready(function () {
    console.log("1");
    $("#alg").hide();
    $("#log").hide();
    $("#pow").hide();
    $("#tri").hide();
    $("#pnc").hide();

    $(".alg").fastClick(function () {
        $("#menu").hide();
        $("#alg").show();
    });
    $(".log").fastClick(function () {
        $("#menu").hide();
        $("#log").show();
    });
    $(".pow").fastClick(function () {
        $("#menu").hide();
        $("#pow").show();
    });
    $(".tri").fastClick(function () {
        $("#menu").hide();
        $("#tri").show();
    });
    $(".pnc").fastClick(function () {
        $("#menu").hide();
        $("#pnc").show();
    });

    $(".algtomenu").fastClick(function () {
        $("#alg").hide();
        $("#menu").show();
    });
    $(".logtomenu").fastClick(function () {
        $("#log").hide();
        $("#menu").show();
    });
    $(".powtomenu").fastClick(function () {
        $("#pow").hide();
        $("#menu").show();
    });
    $(".tritomenu").fastClick(function () {
        $("#tri").hide();
        $("#menu").show();
    });
    $(".pnctomenu").fastClick(function () {
        $("#pnc").hide();
        $("#menu").show();
    });

    function factorial(x) {
        var result = 1;
        if (x < 0) {
            return undefined;
        } else if (x == 0) {
            return 1;
        } else {
            for (var i = 1; i <= x; i++) {
                result = result * i;
            }
            return result;
        }
    }
    function p(n, r) {
        if (n >= r && (n >= 0) && (r >= 0)) {
            return (factorial(n) / factorial(n - r));
        }
        return "Invalid Input!";
    }
    function c(n, r) {
        if (n >= r && (n >= 0) && (r >= 0)) {
            return factorial(n) / (factorial(r) * factorial(n - r));
        }
        return "Invalid Input!";
    }

    function Get(InputId, isint) {
        var n = $(InputId).val();
        if ($(InputId).val().length == 0) {
            return undefined;
        } else {
            if (isNaN(n)) {
                return undefined;
            } else {
                if (isint) {
                    return parseInt(n);
                } else {
                    return parseFloat(n);
                }
            }
        }
    };

    function decimalFix(raw) {
        return (raw.toFixed(12) * 1).toString();
    }

    function toRad(deg) {
        return ((Math.PI / 180) * deg);
    }

    $("#per").fastClick(function () {

        var n = Get("#n", true);
        var r = Get("#r", true);
        if (n === undefined || r === undefined) {
            $("#pncresult").text("Syntax Error");
        } else {

            $("#pncresult").text("= " + p(n, r));

        }

    });

    $("#com").fastClick(function () {

        var n = Get("#n", true);
        var r = Get("#r", true);
        if (n === undefined || r === undefined) {
            $("#pncresult").text("Syntax Error");
        } else {

            $("#pncresult").text("= " + c(n, r));

        }

    });

    $("#sin").fastClick(function () {
        var angle = Get("#angle", false);
        if (angle === undefined) {
            $("#triresult").text("Syntax Error");
        } else {
            $("#triresult").text("= " + decimalFix(Math.sin(toRad(angle))));
        }
    });

    $("#cos").fastClick(function () {
        var angle = Get("#angle", false);
        if (angle === undefined) {
            $("#triresult").text("Syntax Error");
        } else {
            $("#triresult").text("= " + decimalFix(Math.cos(toRad(angle))));
        }
    });

    $("#tan").fastClick(function () {
        var angle = Get("#angle", false);
        if (angle === undefined) {
            $("#triresult").text("Syntax Error");
        } else {
            $("#triresult").text("= " + decimalFix(Math.tan(toRad(angle))));
        }
    });

    $("#tothe").fastClick(function () {

        var base = Get("#base", false);
        var power = Get("#power", false);
        if (base === undefined || power === undefined) {
            $("#powresult").text("Syntax Error");
        } else {
            $("#powresult").text("= " + decimalFix(Math.pow(base, power)));

        }

    });

    $("#log10").fastClick(function () {
        var logv = Get("#vlog", false);
        if (logv === undefined) {
            $("#logresult").text("Syntax Error");
        } else {
            $("#logresult").text("= " + decimalFix(Math.log(logv) / Math.LN10));
        }
    });
    $("#ln").fastClick(function () {
        var logv = Get("#vlog", false);
        if (logv === undefined) {
            $("#logresult").text("Syntax Error");
        } else {
            $("#logresult").text("= " + decimalFix(Math.log(logv)));
        }
    });

    $("#plus").fastClick(function () {

        var first = Get("#first", false);
        var second = Get("#second", false);
        if (first === undefined || second === undefined) {
            $("#algresult").text("Syntax Error");
        } else {
            $("#algresult").text("= " + decimalFix(first + second));

        }

    });
    $("#minus").fastClick(function () {

        var first = Get("#first", false);
        var second = Get("#second", false);
        if (first === undefined || second === undefined) {
            $("#algresult").text("Syntax Error");
        } else {
            $("#algresult").text("= " + decimalFix(first - second));

        }

    });
    $("#times").fastClick(function () {

        var first = Get("#first", false);
        var second = Get("#second", false);
        if (first === undefined || second === undefined) {
            $("#algresult").text("Syntax Error");
        } else {
            $("#algresult").text("= " + decimalFix(first * second));

        }

    });
    $("#divide").fastClick(function () {

        var first = Get("#first", false);
        var second = Get("#second", false);
        if (first === undefined || second === undefined) {
            $("#algresult").text("Syntax Error");
        } else {
            $("#algresult").text("= " + decimalFix(first / second));

        }

    });
    $("#remainder").fastClick(function () {

        var first = Get("#first", false);
        var second = Get("#second", false);
        if (first === undefined || second === undefined) {
            $("#algresult").text("Syntax Error");
        } else {
            $("#algresult").text("= " + decimalFix(first % second));

        }

    });
});