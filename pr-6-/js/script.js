let students = [

]

function adddata() {
    document.getElementById("show-in-data").innerHTML = 
    `<label class="ps-0 pb-1">Enter Name</label>
    <input type="text" class="mb-2" id="iname">
    <label class="ps-0 pb-1">Enter Id</label>
    <input type="text" class="mb-2" id="iid">
    <label class="ps-0 pb-1">Enter Course</label>
    <input type="text" class="mb-2" id="icourse">
    <label class="ps-0 pb-1">Enter Email</label>
    <input type="text" class="mb-2" id="iemail">
    <label class="ps-0 pb-1">Enter Contact</label>
    <input type="text" class="mb-2" id="icontact">
    <label class="ps-0 pb-1">Enter Duration</label>
    <input type="text" class="mb-2" id="iduration">
    <label class="ps-0 pb-1">Enter City</label>
    <input type="text" class="mb-2" id="icity">
    <label class="ps-0 pb-1">Enter Image</label>
    <input type="text" class="mb-2" id="iimg">

    <input class="col-2 " type="button" value="SUBMIT" onclick="return input()">`
    var x = document.getElementById("butt");
    x.style.display = 'none';

}

function input() {
    document.getElementById("dataTable").innerHTML = ' ';
    var name = document.getElementById("iname").value;
    var id = document.getElementById("iid").value;
    var course = document.getElementById("icourse").value;
    var email = document.getElementById("iemail").value;
    var contact = document.getElementById("icontact").value;
    var duration= document.getElementById("iduration").value;
    var city = document.getElementById("icity").value;
    var image = document.getElementById("iimg").value;

    document.getElementById("show-in-data").innerHTML = ` `;

    var x = document.getElementById("butt");
    x.style.display = 'block';

    students.push({
        name : name,
        id : id,
        course : course,
        email : email,
        contact : contact,
        duration : duration,
        city : city,
        image : image
    });

    students.forEach(student => {
        document.getElementById("dataTable").innerHTML +=
    
            `<div class="card mb-3 bg" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4 img">
                <img src="${student.image}" class="card-img c-img" alt="...">
            </div>
            <div class="col-md-8 text-primary">
                <div class="card-body m-0 new-d p-5">
                    <h5><b>Name :</b> ${student.name}</h5>
                    <p><b>Id :</b> ${student.id}</p>
                    <p><b>Course :</b> ${student.course}</p>
                    <p><b>Email :</b> ${student.email}</p>
                    <p><b>Contact :</b> ${student.contact}</p>
                    <p><b>Duration :</b> ${student.duration}</p>
                    <p><b>City :</b> ${student.city}</p>
                </div>
            </div>
        </div>`
    });
}
