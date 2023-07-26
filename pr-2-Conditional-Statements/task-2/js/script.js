function show() {

    var a = document.getElementById("month1").value;
    var f = 1;
    var e = 4;
    var b = 8;
    var c = 12;

    if (a == "") {
        document.getElementById("month").innerHTML = "Please Enter Month...";
    }
    else {
        if (a > 0) {
            if (((a >= f) && (a <= e))) {
                document.getElementById("month").innerHTML = "Winter";
            } else if ((a > e) && (a <= b)) {
                document.getElementById("month").innerHTML = "Summer";
            } else if ((a > b) && (a <= c)) {
                document.getElementById("month").innerHTML = "Monsoon";
            }else{
                document.getElementById("month").innerHTML = "Enter Valid Month...";
            }
        }else{
            document.getElementById("month").innerHTML = "Enter Value (1 to 12)";
        }
    }
}