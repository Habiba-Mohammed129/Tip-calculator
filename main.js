function billcalculator(){
    var bill = parseFloat(document.getElementById('bill').value)
    var tip = parseFloat(document.getElementById('tip').value)

    if(isNaN (bill)|| bill <=0){
        alert('please enter valid bill')
    }

    var tipamount = (bill * tip )/100
    var totelbill = bill + tipamount
    document.getElementById('billamount').textContent=`$ ${totelbill}`
}