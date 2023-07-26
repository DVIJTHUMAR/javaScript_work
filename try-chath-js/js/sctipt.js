var a = 5;
var b = 10;


const sum = () => {

    var x = a + b;

    console.log("sum ==> ", x);

}

sum();

var array = [10, 20, 30, 40, 50];

        console.log("array = ", array);

        array[2] = 300;

        console.log("array = ", array);

        for (i = 0; i <= array.length - 1; i++) {

            console.log(`Array ${i} ==== Array ${array[i]}`);

        }

        function on() {

            var a = document.getElementById("postion").value;
            var b = document.getElementById("value").value;

        }

        function test(posi, value) {

            array[posi] = value;

        }

        test(1, 99);
        console.log("array = ", array);

        var array = new Array(5);
        array[0] = 10;
        console.log("array new === ",array);

        var array = [1,2,3,4,5,[10,20,30,40,50]];
        console.log("dbl array === ",array);

        console.log("position of array in array = ",array[5][1]);