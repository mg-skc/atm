"use strict"
/*


*/

//bank account 
let bankAccounts = [
  //pin
  //balance
  //0
  {
    pin : 1239,
    balance: 100.00
  }, 
  //1 
  {
    pin: 3209,
    balance: 5.00 
  },
  //2 
    {
    pin: 2345,
    balance: 205800.00 
  },
    {
    pin: 6542,
    balance: 163.00 
  },
  {
    pin: 6732,
    balance: 985.00 
  },
];

function getAccountBal(){
	let pin = parseInt(document.getElementById("pinput").value); 
  for(let i=0; i < bankAccounts.length; i++){
    if( bankAccounts[i].pin === pin  ){
    	document.getElementById("account").innerHTML = "Your account balance is: " + bankAccounts[i].balance; 
        return; 
    //  return bankAccounts[i]; 
    }   
  }
  alert("Invalid Pin!"); 
  return; 

console.log(bankAccounts);
};

function addNewAccount(){
  let depWithdrawAmt = document.getElementById("depWithdrawAmt"); 
	let pin = parseInt(document.getElementById("pinput").value); 
  for(let i=0; i < bankAccounts.length; i++){
    if( bankAccounts[i].pin === pin  ){
    	//document.getElementById("account").innerHTML = "Your account balance is: " + bankAccounts[i].balance; 
      document.getElementById("account2").innerHTML = "An account with this PIN already exists. Please select another PIN.";   
     
      return; 
    //  return bankAccounts[i]; 
    }   
  }
  bankAccounts.push({pin: pin, balance: (Number(depWithdrawAmt.value))});
  document.getElementById("account").innerHTML = "Your new account balance is: $" + depWithdrawAmt.value; 
  document.getElementById("account2").innerHTML = "Thank you for your business!"; 
 //alert(); 
 console.log(bankAccounts);
  return; 
 
};

function fundsDeposit(){
  let depWithdrawAmt = document.getElementById("depWithdrawAmt"); 
  let makeDeposit = document.getElementById("makeDeposit"); 
  let pin = parseInt(document.getElementById("pinput").value);
  let newBalance;
  for(let i=0; i < bankAccounts.length; i++){
    if( bankAccounts[i].pin === pin  ){
      newBalance= (bankAccounts[i].balance + Number(depWithdrawAmt));
      bankAccounts[i].balance=Number(newBalance);
      document.getElementById("account").innerHTML = "Your new account balance is: " + Number(bankAccounts[i].balance); 
      console.log(bankAccounts);
      return; 
    }   
  }
  //bankAccounts.push({pin: pin, balance: (balance + Number(depWithdrawAmt.value))});
  //document.getElementById("account").innerHTML = "Your new account balance is: $" + depWithdrawAmt.value; 
  //document.getElementById("account2").innerHTML = "Thank you for your business!"; 
 //alert(); 
 console.log(bankAccounts);
  return; 
 
};
function Update(keyValue, newKey, newValue)
  {
    keyValue.Key = newKey;
    keyValue.Value = newValue; 
  }