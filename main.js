let btn=document.getElementById('btn');
let output =document.getElementById('output');
let number =[math.floor(math.random()*100)]
btn.addEventListener('click', function(){
    let input =document.getElementById('input').value;
    if(input==number){
        output.innerHTML ='you guested right, your number was & (number)'
    } else if(input<number){
        output.innerHTML="you gest to low! "
    };
    if(input>number)
    output.innerHTML="you guest to high!"
}) 