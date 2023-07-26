var per = 70;

if(per >= 60){
    document.getElementById('msg1').innerHTML = "You are elegible for Admision...";
    if(per >= 80 && per <= 90){
        document.getElementById('msg2').innerHTML = "You get 10,000rs Reward...";
    }else{
        if(per > 90){
            document.getElementById('msg2').innerHTML = "Congrates! Your Admision free...";
        }else{
            document.getElementById('msg2').innerHTML = "Sorry!! Better Luck Next Time...";
        }
    }
}else{
    document.getElementById('msg1').innerHTML = "Sorry!! You are not elegible...";
}