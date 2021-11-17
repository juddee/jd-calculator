   var inputDisplay = document.getElementById('cacInput');
   var outputDisplay = document.getElementById('cacOutput');


   function displayText(number) {
        inputDisplay.innerText += number;
    }

    function calculate() {
        if(inputDisplay.innerText !==""){
            var result = eval(inputDisplay.innerText);
            outputDisplay.innerText = result;
        }
    }

    function deleteText() {
        inputDisplay.innerText = inputDisplay.innerText.slice(0,-1);
    }

    function clearText() {
        inputDisplay.innerText ="";
        outputDisplay.innerText="";
        
    }