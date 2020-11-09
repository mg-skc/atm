"use strict"
<!DOCTYPE html>
<html>
<head>
    <title>Testing</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
#myDIV {
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background-color: lightblue;
  margin-top: 20px;
}

#newAccountDIV {
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background-color: #e83c3c;
  margin-top: 20px;
}
</style>
</head>
<body>


<p>Click the "Try it" button to toggle between hiding and showing the DIV element:</p>
<button onclick="myFunction()">Submit</button>



<input id="pinput"></input>



<div id="myDIV">
</div>

<p><b>Note:</b> The element will not take up any space when the display property set to "none".</p>

<p id="account"><p>
<p id="account2"><p>  
<div id="newAccountDIV"> 
    <button onclick="myFunction()">Set up new account</button>
</div> 

<script>
var x = document.getElementById("myDIV");
let y = document.getElementById("newAccountDIV");
x.style.display = "none";
y.style.display = "none";

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
}



//new code below from W3 Schools

function myFunction() {
//var x = document.getElementById("myDIV");
//x.style.display = "none";
let pin = parseInt(document.getElementById("pinput").value); 
  for(let i=0; i < bankAccounts.length; i++){
    if( bankAccounts[i].pin === pin  ){
    	x.style.display = "block";
        document.getElementById("myDIV").innerHTML = "Your account balance is: " + bankAccounts[i].balance; 
        
        return; 
    //  return bankAccounts[i]; 
    }   
  }
  x.style.display = "block";
  document.getElementById("myDIV").innerHTML = "Invald PIN: please re-enter or click below to set up a new account:"; 
  y.style.display = "block";
  
  return; 
}





/*
	let pin = parseInt(document.getElementById("pinput").value); 
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var foo = function(){
  var button = document.createElement('button');
  button.innerHTML = 'click me';
  button.onclick = function(){
    alert('here be dragons');return false;
  };
  // where do we want to have the button to appear?
  // you can append it to another element just by doing something like
  // document.getElementById('foobutton').appendChild(button);
  document.body.appendChild(button);
};




*/
</script>

</body>
</html>
