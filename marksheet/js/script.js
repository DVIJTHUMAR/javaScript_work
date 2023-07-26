function mark() {
    var show =

        `<div class="col-10 border border-black p-3">
        <div class="col-12 border border-black p-2"><b>Name :</b> Thumar Dvij</div>
        <div class="col-12 d-flex justify-content-between">
            <div class="col-4 border border-black p-1"><b>GR_ID:.</b> 1234</div>
            <div class="col-4 border border-black p-1"><b>Birth_Date:.</b> 11/08/2000</div>
            <div class="col-4 text-center border border-black p-1"><b>STD:.</b> 12<sup>th</sup></div>
        </div>
        <div class="col-12 pt-3 pb-3 border border-black"></div>
        <div class="col-12 d-flex">
            <div class="col-4 bg-info border border-black">
                <div class="bg-warning col text-center fw-bold">Subject</div>
                <div class="col border-top border-black">English</div>
                <div class="col border-top border-black">Maths</div>
                <div class="col border-top border-black">Gujarati</div>
                <div class="col border-top border-black">Accounting</div>
                <div class="col border-top border-black">Science</div>
            </div>
            <div class="col-4 bg-info border border-black">
                <div class="bg-warning col text-center fw-bold">Total Mark</div>
                <div class="col border-top border-black">100</div>
                <div class="col border-top border-black">100</div>
                <div class="col border-top border-black">100</div>
                <div class="col border-top border-black">100</div>
                <div class="col border-top border-black">100</div>
            </div>
            <div class="col-4 bg-info border border-black">
                <div class="bg-warning col text-center fw-bold">Obtained Mark</div>
                <div class="col border-top border-black" id="en">0</div>
                <div class="col border-top border-black" id="ma">0</div>
                <div class="col border-top border-black" id="gu">0</div>
                <div class="col border-top border-black" id="ac">0</div>
                <div class="col border-top border-black" id="sc">0</div>
            </div>
        </div>
        <div class="col-12 d-flex border border-black" style="background-color: rgba(220,53,69, 0.1);"> 
                <div class="col-6 border d-flex py-1 fw-bold"><p class="mb-0">Total</p> </div>
                <div class="col-3 border d-flex py-1 fw-bold"><p class="mb-0">500</p> </div>
                <div class="col-3 border d-flex py-1 fw-bold"><p class="mb-0" id="totalo"></p> </div>
            </div>
        <div class="col-12 d-flex border border-black" style="background-color: rgba(220,53,69, 0.1);">
                <div class="col-12  d-flex py-1"> <b>Total Marks / Obtained Marks :</b><p class="mb-0 ps-1"> 500 / <span id="totaloo"></span></div>
            </div>
            <div class="col-12 d-flex border border-black" style="background-color: rgba(220,53,69, 0.1);">
                <div class="col-6 border-end border-black d-flex py-1"> <b>Percentage :</b><p class="mb-0 ps-1 pe-1" id="pro"> </p>%</div>
                <div class="col-6 border d-flex py-1"> <b>Grade :</b><p class="mb-0 ps-1 pe-1" id="gr"> </p></div>
            </div>
        <div class="adm col text-center border border-black">
            <h3 style="text-align: center;" class="bg-dark text-white">
                Addmition Prosses
            </h3>

            <h1 id="msg1" class="msg1"></h1>
            <h1 id="msg2" class="msg2"></h1>

        </div>
    </div>`


    var english = parseInt(document.getElementById("eng").value);
    var maths = parseInt(document.getElementById("mat").value);
    var gujarati = parseInt(document.getElementById("guj").value);
    var account = parseInt(document.getElementById("acc").value);
    var science = parseInt(document.getElementById("sci").value);

    if (english >= 0 && english <= 100
        && maths >= 0 && maths <= 100
        && gujarati >= 0 && gujarati <= 100
        && account >= 0 && account <= 100
        && science >= 0 && science <= 100) {

        document.getElementById('wrong').innerHTML = "";

        var total = english + maths + gujarati + account + science;
        var pr = total / 5;
        var apl_btn = `<input type="button" value="SUBJECT INFO" class="btn rounded-5 btn-danger py-1 px-3" style="margin-left: 40px";
        onclick="return apply()" />`;

        document.getElementById("data").innerHTML = show;
        document.getElementById("en").innerHTML = english;
        document.getElementById("ma").innerHTML = maths;
        document.getElementById("gu").innerHTML = gujarati;
        document.getElementById("ac").innerHTML = account;
        document.getElementById("sc").innerHTML = science;
        document.getElementById("totalo").innerHTML = total;
        document.getElementById("totaloo").innerHTML = total;
        document.getElementById("pro").innerHTML = pr;
        document.getElementById("apply-btn").innerHTML = apl_btn;


        // Admition Proses

        if (pr >= 0 && pr <= 100) {
            if (pr >= 60) {
                document.getElementById('msg1').innerHTML = "You are elegible for Admision...&#128077;";
                if (pr >= 80 && pr <= 90) {
                    document.getElementById('msg2').innerHTML = "You get 10,000rs Reward...&#128515;";
                } else {
                    if (pr > 90 && pr <= 100) {
                        document.getElementById('msg2').innerHTML = "Congrates! Your Admision free...&#128526;";
                    } else {
                        document.getElementById('msg2').innerHTML = "Sorry!! Better Luck Next Time...&#128532;";
                    }
                }
            } else {
                document.getElementById('msg1').innerHTML = "Sorry!! You are not elegible...&#128532;";
            }
        } else {
            document.getElementById('msg1').innerHTML = "Sorry!! Please Enter Valid Number....&#128560;";
        }

        // Grade

        if (pr > 100) {
            document.getElementById('gr').innerHTML = "Please Enter Valid PR...";
        } else if (pr > 90) {
            document.getElementById('gr').innerHTML = "A+";
        } else if (pr > 80) {
            document.getElementById('gr').innerHTML = "A";
        } else if (pr > 70) {
            document.getElementById('gr').innerHTML = "B+";
        } else if (pr > 60) {
            document.getElementById('gr').innerHTML = "B";
        } else if (pr > 50) {
            document.getElementById('gr').innerHTML = "C";
        } else if (pr > 35) {
            document.getElementById('gr').innerHTML = "D";
        } else {
            document.getElementById('gr').innerHTML = "You are Fail..! &#128532;";
        }

    } else {
        document.getElementById('wrong').innerHTML = "Please Enter Valid Mark..";
        document.getElementById("data").innerHTML = '';
    }
}

function kik() {
    var filed = document.getElementById('sub').value;

    switch (filed) {
        case 'b.com':
            document.getElementById('info').innerHTML = `<ul class="list"><li>English</li><li>Match</li><li>State</li><li>Accounting</li><li>F-Account</li></ul>`;
            break;
        case 'bca':
            document.getElementById('info').innerHTML = `<ul class="list"><li>Foundational maths</li><li>Digital computer fundamentals</li><li>C programming lab</li><li>PC software Lab</li><li>Statistics I for BCA</li></ul>`;
            break;
        case 'bsc':
            document.getElementById('info').innerHTML = `<ul class="list"><li>Physics</li><li>Botany</li><li>Chemistry</li><li>Zoology</li></ul>`;
            break;
        case 'arts':
            document.getElementById('info').innerHTML = `<ul class="list"><li>Geography</li><li>Psychology</li><li>History</li><li>Sociology</li><li>Hindi</li></ul>`;
            break;
    }
}
function apply() {
    document.getElementById("data").innerHTML =
        `<div class="col-10">
            <h1 class="bg-black text-center text-white">SELECT FILED</h1>
            <div class="col d-flex">
                <div class="col-6">
                    <h3 class="bg-black text-center text-white">FILED NAME</h3>
                <div class="col text-center">
                    <select name="" id="sub" onchange="return kik()">
                        <option value="select">select_filed</option>
                        <option value="b.com">b.com</option>
                        <option value="bsc">bsc</option>
                        <option value="bca">bca</option>
                        <option value="arts">arts</option>
                    </select> 
                </div>
            </div>
            <div class="col-6">
                <h3 class="bg-black text-center text-white">SUBJECT</h3>
                <div class="col text-center" id="info"></div>
            </div>
        </div>
    </div>`;

}