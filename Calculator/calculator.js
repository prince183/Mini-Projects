let res = document.getElementById("inputText");

//Arrow function 
let calculate = (number)=>{
 res.value += number;
}

let Result=()=>{
    try{
        res.value = eval(res.value)
    }
    catch(err)
    {
        alert("Enter valid operation");
    }
}

let clr=()=>{
    res.value = ""; 
}

function del(){
    res.value= res.value.slice(0, -1);
}