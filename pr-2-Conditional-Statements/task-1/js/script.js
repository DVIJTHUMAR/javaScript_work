function bill() {

    var units = document.getElementById("to-amt").value;
    var total = 0;
    
        if (units <= 50) {
            total = units * 1;
        } else if (units <= 150) {
            total = 50 * 1 + (units - 50) * 2;
        } else if (units <= 250) {
            total = 50 * 1 + 100 * 2 + (units - 150) * 3;
        } else {
            total = 50 * 1 + 100 * 2 + 100 * 3 + (units - 250) * 4;
        }
    
        net_amt = total;
    
        if (units > 150) {
            var surcharge = net_amt * 20 / 100;
            net_amt += surcharge;
            document.getElementById("erroer").innerHTML = " ";
        } else {
            document.getElementById("erroer").innerHTML = "Do not pay any Charges..";
        }
    
        document.getElementById("unt").innerHTML = units;
        document.getElementById("amt").innerHTML = total + " RS ";
        document.getElementById("surc").innerHTML = surcharge + " RS ";
        document.getElementById("tot").innerHTML = net_amt + " RS ";

}