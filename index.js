var display = document.getElementById('display');
var button = document.getElementsByClassName('button1');
let operator=null;
let operator1=0;
let operator2=0;


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (){
        var value = this.getAttribute('data-value');
        console.log(value);
        // display.innerText=value;
        // button.style.backgroundColor="black";
        if(value== "AC"){
            display.innerText=null;
        }
        else if(value=="+" || value=="-" || value=="*" || value=="/"){
            operator = value;
            operator1= display.innerText;
            display.innerText=null;
        }
        else if(value=="="){
            operator2=display.innerText;
            if(operator1 == null){
                display.innerText="error";
            }
            else{
                var ans = eval(operator1+" "+operator+" "+operator2);
                display.innerText=operator1+operator+operator2+"="+ans;
            }
        }
        else{
            display.innerText += value;
        }
    });
}
    document.addEventListener('keypress', function (event){
        var ans = event.keyCode;
        console.log(ans);
        var value = String.fromCharCode(ans);
        console.log(value);
        var arr=[1,2,3,4,5,6,7,8,9];
        
        if(value== "AC" || ans == 32){
            display.innerText=null;
        }
        else if(value=="+" || value=="-" || value=="*" || value=="/"){
            operator = value;
            operator1= display.innerText;
            display.innerText=null;
        }
        else if(value=="=" || ans==13){
            operator2=display.innerText;
            if(operator1 == null){
                display.innerText="error";
            }
            else{
                var ans = eval(operator1+" "+operator+" "+operator2);
                display.innerText=operator1+operator+operator2+"="+ans;
            }
        }
        else if(value in arr){
            display.innerText += value;
        }
    });
