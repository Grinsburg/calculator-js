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

 let percent = function(a, b) {
     return (100 * a) / b;
 }

 let sqrt = function(a) {
     return Math.sqrt(Number(a))
 }

 let pow = function(a, b) {
     return a ** b
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
     } else if (inputs[1] === '%') { /////sdasdasdasd
         let perc = percent(parseFloat(inputs[0]), parseFloat(inputs[2]));
         clear();
         values.push(perc)
         display();
     } else if (inputs[0] === '√') { /////sdasdasdasd
         let sqrts = sqrt(parseFloat(inputs[1]));
         clear();
         values.push(sqrts)
         display();
     } else if (inputs[1] === 'x^2') { /////sdasdasdasd
         let pows = pow(parseFloat(inputs[0]), parseFloat(inputs[2]));
         clear();
         values.push(pows)
         display();
     }
     display();
 }
 let update = function(value) {
     inputs.push(value);
     inputs.shift();
 }

 let clear = function() {
     inputs = ["", "", ""];
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


 document.addEventListener('keydown', function(event) {
     if ((event.keyCode > 47) && (event.keyCode < 58)) {
         values.push(event.keyCode - 48);
     } else if ((event.keyCode > 95) && (event.keyCode < 106)) {
         values.push(event.keyCode - 95);
     } else if (event.keyCode == 106) {
         update(values.join(""));
         update("*");
         values = [];
     } else if (event.keyCode == 107) {
         update(values.join(""));
         update("+");
         values = [];
     } else if (event.keyCode === 109) {
         update(values.join(""));
         update("-");
         values = [];
     } else if (event.keyCode === 110) {
         values.push(".");
     } else if (event.keyCode === 111) {
         update(values.join(""));
         update("/");
         values = [];
     } else if (event.keyCode === 12 || 13) {
         update(values.join(""));
         values = [];
         equals();
     }
 })