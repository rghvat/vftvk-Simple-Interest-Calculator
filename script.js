function compute()
{
   
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById('years').value;

var interest = principal * rate * years / 100;

var year = new Date().getFullYear()+parseInt(years);
var amount = interest;
showResult(principal, rate, amount, year);
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function showResult(principal, rate, amount, year){
	document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
}

//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}