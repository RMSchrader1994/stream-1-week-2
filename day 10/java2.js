let num1 = prompt("Enter a number:");
            let num2 = prompt("Enter another number:");

            function multiply() {
            alert(num1 * num2);
            document.getElementById("heading").textContent=num1*num2;
            }

            multiply();