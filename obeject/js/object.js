let student1 = {

    sname: "Dvij Thumar",
    email: "dvijpatel@gmail.com",
    contact: "32565 85961",
    city: "surat",
    active: true

}
console.log(student1);

document.getElementById("name").innerHTML = student1.sname;
document.getElementById("email").innerHTML = student1.email;
document.getElementById("contact").innerHTML = student1.contact;
document.getElementById("city").innerHTML = student1.city;
document.getElementById("active").innerHTML = student1.active;

let student2 = {

    sname: "Dvij Thumar",
    email: "dvijpatel@gmail.com",
    contact: "11115 85961",
    city: "surat",
    active: true,
    topics: ["html", "css", "javaScript", "c", "c++", "bootstrap"]

}

student2.sname = "parth vachhani";
student2.email = "parthvachhani@gmail.com";

console.log(student2);




document.getElementById("name1").innerHTML = student2.sname;
document.getElementById("email1").innerHTML = student2.email;
document.getElementById("contact1").innerHTML = student2.contact;
document.getElementById("city1").innerHTML = student2.city;
document.getElementById("active1").innerHTML = student2.active;

let bike1 = {

    bname: "OLA",
    futures: "smart",
    displey: "touch",
    Waterproof: "IP67",
    city: "surat"

}

console.log(bike1);

bike1.bname = "tvs";

console.log(bike1);

let users = [

    {
        id: 1231,
        name: "thumar dvij",
        course: "full stack",
        deuration : "15 month",
        city : "surat"
    },
    {
        id: 3112,
        name: "thumar dvij",
        course: "full stack",
        deuration : "15 month",
        city : "surat"
    },
    {
        id: 2315,
        name: "thumar dvij",
        course: "full stack",
        deuration : "15 month",
        city : "surat",
        topics: ["html", "css", "javaScript", "c", "c++", "bootstrap"]
    }

]

users.forEach((user) => {
    console.log("users ====> ",user);
    for (let a in user) {
        console.log("a === ",a,"-",user[a])

        if(a==='topics'){
            let pri =user[a].forEach((topic) => {

                console.log("topic ===== > ",topic);
            })
        }
    }
});