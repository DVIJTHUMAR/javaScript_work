const para = document.getElementById('para');
const btn = document.getElementById('showbtn');
const btn2 = document.getElementById('togglebtn');
const btn3 = document.getElementById('hidebtn');

function hidep(){
    para.style.display = 'none';
    btn.style.fontSize = '30px';
}

// const showp = () => {

//     para.style.display = 'block';

// }

const togglep = () => {

    btn2.style.fontSize = ' ';
    btn3.style.fontSize = '30px';

    if(para.style.display == 'none'){
        para.style.display = 'block';
        btn2.style.fontSize = '';
    }else{
        para.style.display = 'none';
        btn2.style.fontSize = '';
    }

}

// addEventListener

let hidebtn = document.getElementById('hidebtn');

    hidebtn.addEventListener('click',hidep);
    

let showbtn = document.getElementById('showbtn');

    showbtn.addEventListener('click',function(){

        para.style.display = 'block';
        para.style.backgroundColor = 'yellow';
        para.style.fontSize = '30px';
        btn.style.fontSize = '';
        btn2.style.fontSize = '30px';
       
    })

let togglebtn = document.getElementById('togglebtn');

    togglebtn.addEventListener('click',togglep);
    // togglebtn.addEventListener('mouseover',togglep);
