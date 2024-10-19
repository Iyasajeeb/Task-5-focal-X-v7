var input = document.querySelector('.input');
var result = document.querySelector('.result');
var inputType = document.querySelector('.input-type');
var resultType = document.querySelector('.result-type');
var inputTypeValue,resultTypeValue;


input.addEventListener('keyup', myResult);
input.addEventListener('click', clearDisplay);
inputType.addEventListener('change', myResult);
resultType.addEventListener('change', myResult);



function myResult (){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value; 


    if(inputTypeValue==="meter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.001;
    }else if (inputTypeValue==="meter" && resultTypeValue==="Centimeter"){
        result.value = Number(input.value) * 100;
    }else if (inputTypeValue==="meter" && resultTypeValue==="meter"){
        result.value = Number(input.value);
    }

    if(inputTypeValue==="Kilometer" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 1000;
    }else if (inputTypeValue==="Kilometer" && resultTypeValue==="Centimeter"){
        result.value = Number(input.value) * 100000;
    }else if (inputTypeValue==="Kilometer" && resultTypeValue==="Kilometer"){
        result.value = Number(input.value);
    }

    if(inputTypeValue==="Centimeter" && resultTypeValue==="Kilometer"){
        result.value = Number(input.value) * 0.00001;
    }else if (inputTypeValue==="Centimeter" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 0.01 ;
    }else if (inputTypeValue==="Centimeter" && resultTypeValue==="Centimeter"){
        result.value = Number(input.value);
    }
}
function clearDisplay(){
    input.value = "";

}
