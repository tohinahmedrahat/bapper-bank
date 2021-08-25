function input(id){
    const inputFiled = document.getElementById(id);
    const inputFiledText = inputFiled.value;
    const inputNumber = parseFloat(inputFiledText);
    inputFiled.value = " ";
    return inputNumber;
}
function text(id1,amount){
    const textFiledNumber = getValue(id1);
    const totalValue = textFiledNumber + amount;
    document.getElementById(id1).innerText = totalValue;
    return totalValue;
}
function getValue(id4){
    const textFiled = document.getElementById(id4);
    const textFiledText = textFiled.innerText;
    const textFiledNumber = parseFloat(textFiledText);
    return textFiledNumber;
}

function inputslvo(id3,amount,addnum){
      
      const textFiledNumber = getValue(id3);
      let totalBlance;
      if(addnum == true){
        totalBlance = textFiledNumber + amount;
      }else{
          totalBlance = textFiledNumber - amount;
      }
      document.getElementById(id3).innerText = totalBlance;

}


document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputNumber = input("deposit");
    if(inputNumber > 0){
        text("deposit-money",inputNumber);
        inputslvo("total-blance",inputNumber,true);
    }
   
    // console.log(inputNumber);

})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputNumber = input("withdraw");
    const getInnerValue = getValue("total-blance");
    if(inputNumber > 0 && inputNumber <= getInnerValue) {
        text("withdraw-money",inputNumber);
        inputslvo("total-blance",inputNumber,false);
    }
    
    // console.log(inputNumber);

})