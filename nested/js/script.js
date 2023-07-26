function data() {
    var a = parseInt(document.getElementById("user").value);
    var b = parseInt(document.getElementById("user2").value);
    var c = parseInt(document.getElementById("user3").value);
    var d = parseInt(document.getElementById("user4").value);

    if (a > b) {
        if (a > c) {
            if (a > d) {
                document.getElementById("max").innerHTML = " A is max. ";
            } else {
                document.getElementById("max").innerHTML = " D is max. ";
            }
        } else {
            if (c > d) {
                document.getElementById("max").innerHTML = " C is max. ";
            } else {
                document.getElementById("max").innerHTML = " D is max. ";
            }
        }
    } else {
        if (b > c) {
            if (b > d) {
                document.getElementById("max").innerHTML = " B is max. ";
            } else {
                document.getElementById("max").innerHTML = " D is max. ";
            }
        } else {
            if (c > d) {
                document.getElementById("max").innerHTML = " C is max. ";
            } else {
                document.getElementById("max").innerHTML = " D is max. ";
            }
        }
    }
}