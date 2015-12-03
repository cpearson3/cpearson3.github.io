var memory = "0"; // initialise memory variable
var current = "0"; //   and value of Display ("current" value)
var operation = 0; // Records code for eg * / etc.
var  MAXLENGTH = 30; // maximum number of digits before decimal!

 // addDigit - add a digit to display
 function addDigit(dig) {
   if (current.length > MAXLENGTH) {
     current = "Too long"; //limit length
   } else {
     if ((eval(current) == 0) && (current.indexOf(".") == -1)) {
       current = dig;
     } else {
       current = current + dig;
     }
   }

   $('#display').text(current);
 }

 // addDot - add decimal point
 function addDot() {
   //no leading ".", use "0."
   if (current.length == 0) {
     current = "0.";
   } else {
     if (current.indexOf(".") == -1) {
       current = current + ".";
     };
   };
   $('#display').text(``)
 }

 // plusMinus
 function plusMinus() {
   if (current.indexOf("e") != -1) //if there is an exponent:
   {
     var epos = current.indexOf("e-");
     if (epos != -1) {
       current = current.substring(0, 1 + epos) + current.substring(2 + epos); //clip -ve exp 
     } else {
       epos = current.indexOf("e");
       current = current.substring(0, 1 + epos) + "-" + current.substring(1 + epos); //insert
     };
   } else //there is NO exponent:
   {
     if (current.indexOf("-") == 0) {
       current = current.substring(1);
     } else {
       current = "-" + current;
     };
   };
   $('#display').text(current);
 }

 // clear and all clear
 function clearDisplay() {
   current = "0";
   $('#display').text(current);
 }

 function allClear() {
   current = "0";
   operation = 0; //clear operation
   memory = "0"; //clear memory
   $('#display').text(current);
 }

 // handle operation buttons
 function operate(op) {
   operation = op;

   memory = current; //store value
   current = ""; //or we could use "0"
   $("#display").text(current);
 }

 // calculate
 function calculate() //PERFORM CALCULATION (= button)
   {
     if (operation == '*') {
       current = eval(memory) * eval(current);
     };
     if (operation == '/') {
       current = eval(memory) / eval(current);
     };
     if (operation == '+') {
       current = eval(memory) + eval(current);
     };
     if (operation == '-') {
       current = eval(memory) - eval(current);
     };
     
     operation = 0; //clear operation
     memory = "0"; //clear memory
     $('#display').text(current);
   }

 //document ready
 $(document).ready(function() {

 });