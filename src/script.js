 let results = document.getElementById("display");
 let inputs = ['', '', ''];
 let values = [];

 let add = function(a, b) {
     return a + b;
 }

 let substract = function(a, b) {
     return a - b;
 }

 let multiply = function(a, b) {
     return a * b;
 }

 let devide = function(a, b) {
     return a / b;
 }

 let equals = function() {
     if (inputs[1] === '+') {
         let sum = add(parseFloat(inputs[0]), parseFloat(inputs[2]))
         clear();
         values.push(sum);
     } else if (inputs[1] === '-') {
         let difference = substract(parseFloat(inputs[0]), parseFloat(inputs[2]));
         clear();
         values.push(difference);
     } else if (inputs[1] === '*') {
         let product = multiply(parseFloat(inputs[0]), parseFloat(inputs[2]));
         clear();
         values.push(product);
     } else if (inputs[1] === '/') {
         let quotient = devide(parseFloat(inputs[0]), parseFloat(inputs[2]));
         clear();
         values.push(quotient)
     }
     display();
 }

 let update = function(value) {
     inputs.push(value);
     inputs.shift();
 }

 let clear = function() {
     inputs = ['', '', ''];
     values = [];
     display();
 }

 let display = function() {
     results.innerHTML = inputs.join(' ') + " " + values.join(' ');
 }

 let del = function() {
     if (values.length > 0) {
         values.pop();
     } else {
         for (let i = 2; i >= 0; i--) {
             let x = inputs[i];
             if (inputs[i]) {
                 let y = x.slice(0, -1);
                 inputs[i] = y
             }
         }
     }
 }

 for (let i = 0; i < 11; i++) {
     document.getElementById(i).addEventListener("click", function() {
         values.push(this.innerHTML);
         display();
     })
 }

 for (let i = 11; i < 15; i++) {
     document.getElementById(i).addEventListener("click", function() {
         update(values.join(""));
         update(this.innerHTML);
         values = [];
         display();
     })
 }

 document.getElementById(15).addEventListener("click", function() {
     update(values.join(""));
     values = [];
     equals();
 })

 document.getElementById(16).addEventListener("click", function() {
     clear();
 })

 document.getElementById(17).addEventListener("click", function() {
     del();
     display();
 })