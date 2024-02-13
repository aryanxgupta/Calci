let buttons = document.querySelectorAll('.button') ;
let screen = document.querySelector('.screen') ;
let reset = document.querySelector('.reset') ; 
let operands = document.querySelectorAll('.operands') ; 
let nums = document.querySelectorAll('.nums') ;
let equals = document.querySelector('.equals') ; 
let decimal = document.querySelector('.decimal') ;
let del = document.querySelector('.delete') ; 
let modebtn = document.querySelector('#mode') ; 
let themes = document.querySelectorAll('h3') ; 
let checked = 0 
let isDecimalPresent = false , operated = false;
let str = "" ; 
let val1,val2,op,result ;
reset.addEventListener('click',function(){
    resetCalc() ;
})

modebtn.addEventListener('click',function(){
    checked++ ; 
    if(checked % 2 == 1){
        document.body.style.backgroundColor = '#B9EDF3'
        themes.forEach(function(theme){
            theme.style.color = '#253031'
        })
        document.querySelector('.bottom').style.backgroundColor = '#2694E3'
        screen.style.backgroundColor = '#2694E3'
        screen.style.color = '#253031'
        buttons.forEach(function(button){
            button.style.backgroundColor = '#253031' ; 
            button.style.color = '#fff'
        })
        del.style.backgroundColor = '#791E94'
        equals.style.backgroundColor = '#D81159'
        reset.style.backgroundColor = '#791E94'
        console.log("checked");
    }else{
        document.body.style.backgroundColor = '#053C61'
        themes.forEach(function(theme){
            theme.style.color = '#DDE3DF'
        })
        document.querySelector('.bottom').style.backgroundColor = '#03243A'
        screen.style.backgroundColor = '#03243A'
        screen.style.color = '#DDE3DF'
        buttons.forEach(function(button){
            button.style.backgroundColor = '#DDE3DF' ; 
            button.style.color = 'black'
        })
        del.style.backgroundColor = '#636992'
        equals.style.backgroundColor = '#F5683D'
        reset.style.backgroundColor = '#636992'
        console.log("unchecked");
    }
})

del.addEventListener('click',function(){
    screen.innerHTML = str.slice(0,-1);
    str = screen.innerHTML ;
    if(screen.innerHTML == ""){
        screen.innerHTML = "0"
    }
})

decimal.addEventListener('click',function(){
    console.log("a");
    if(screen.innerHTML == '0'){
        str += '0'
    }

    if(!isDecimalPresent){
        str += '.' ; 
        screen.innerHTML = str ; 
    }
})

equals.addEventListener('click',function(e){
    val2 = Number(screen.innerHTML) ; 
    performCalc(val1,val2,op) ; 
})

operands.forEach(function(operand){
    operand.addEventListener('click',function(e){
        val1 = Number(screen.innerHTML) ; 
        op = e.target.innerHTML ;
        str = "" ; 
    })
})

nums.forEach(function(num){
    num.addEventListener('click',function(e){
        if(operated == true){
            str = "" ;
        }
        operated = false ; 
        let val = Number(e.target.innerHTML) ;
        str += val ; 
        screen.innerHTML = str ;  
    })
})

function resetCalc(){
    str = "" ;
    screen.innerHTML = "0"
}

function performCalc(val1,val2,op){
    if(op == '+'){
        result = val1+val2 ; 
    }else if(op == '-'){
        result = val1-val2 ;  
    }else if(op == '*'){
        result = val1*val2 ;
    }else{
        result = val1/val2 ;
    }
    let len = String(result).length ;
    let decIdx = String(result).indexOf('.') ; 
    if((len-decIdx-1)>9){
        result = Number(result).toFixed(9) ; 
    }else{
        result = Number(result)
    }
    str = "" ; 
    str += result ; 
    screen.innerHTML = str; 
    operated = true ;
}



