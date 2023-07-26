class car {

    constructor(name) {
        console.log("WELCOME ALAKH CAR_WORLD");
        document.getElementById("greet").innerHTML = "WELCOME ALAKH CAR_WORLD";

        this.name = name;
        this.color = 'color';
        // this.model = md;

        // console.log(name,md);
    }

    model(md) {

        

        console.log(`Name :- ${this.name} Model :- ${md} color :- ${this.color} speed :- ${this.speed} KM/H`);
        document.getElementById("car").innerHTML = `<b> Name :-</b> ${this.name} </br> <b>Model :-</b> ${md} </br><b>color :-</b> ${this.color}</br> <b>speed :-</b> ${this.speed} KM/H`;

    }

}
class haundai extends car {

    constructor(name) {
        super(name);
        
        console.log("HAUNDAI");
        document.getElementById("haundai_g").innerHTML = "HAUNDAI";
        
        this.color = "black";
        this.speed = 150;
    }
    
}
class tata extends car{
    constructor(name) {
        super(name);
        
        console.log("TATA");
        document.getElementById("tata_g").innerHTML = "TATA";
        
        this.color = "blue";
    }
    model(md) {
        console.log(`<b>Name :-</b> ${this.name} </br><b> Model :-</b> ${md}</br><b> color :-</b> ${this.color}`);
        document.getElementById("tata1").innerHTML = `<b>Name :-</b> ${this.name} </br><b> Model :-</b> ${md}</br><b> color :-</b> ${this.color}`;
    }
    sec(md,cr){
        document.getElementById("tata2").innerHTML = `<b>Name :-</b> ${this.name} </br><b> Model :-</b> ${md}</br><b> color :-</b> ${cr}`;
    }

}


let haundai1 = new haundai('Haundai');
haundai1.model(2020);

let tata1 = new tata('Nexun');
tata1.model(2019);

let tata2 = new tata('safari');
tata2.sec(1999,"red");