function show() {

    var a = document.getElementById("time1").value;
    var f = 0;
    var e = 6;
    var b = 12;
    var c = 18;
    var d = 24;

    if (a == "") {
        document.getElementById("time").innerHTML = "Please Enter Time...";
    }
    else {
        if (a.length >= 0) {
            if (((a >= f) && (a < e)) || (d == a)) {
                document.getElementById("time").innerHTML = "Good Night...";
            } else if ((a >= e) && (a < b)) {
                document.getElementById("time").innerHTML = "Good Morning...";
            } else if ((a >= b) && (a < c)) {
                document.getElementById("time").innerHTML = "Good Afternoon...";
            } else if ((a >= c) && (a <= d)) {
                document.getElementById("time").innerHTML = "Good Evening...";
            }
        }
    }
}