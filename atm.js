"use strict"
/*
Is it possible to create functions A and B such as new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
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
    	document.getElementById("account").innerHTML = bankAccounts[i].balance; 
        return; 
    //  return bankAccounts[i]; 
    }   
  }
  alert("Invalid Pin!"); 
  return; 
}


/*

<p>Input your pin:</p>
<input id="pinput"></input>
<button onclick="getAccount()">Submit</button>
<p id="account"><p>
<script> 
//bank account 
let bankAccounts = [];

function Account(pin){
	this.pin = pin;
    this.balance = 0;
    
    //add a withrdraw method
    //add a get balance method etc. 
    }
    
function getAccount(){
	let pin = parseInt(document.getElementById("pinput").value); 
    for(let i=0; i < bankAccounts.length; i++){
      if( bankAccounts[i].pin === pin  ){
          //window.open("atm_menu.html"); 
          //update the page for menu options 
          return; 
          }   
      }
  //create a bank account
  // { pin : 1234, balance : 100.00 } 
  let newAccount = new Account(pin); 
                     
  bankAccounts.push(newAccount); 

  document.getElementById("account").innerHTML += "balance: " +  newAccount.balance + "  pin: " + newAccount.pin + "<br>";


  return; 
}
*/