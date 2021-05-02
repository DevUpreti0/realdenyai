var mainForm = document.getElementById("mainForm");
var textField = document.getElementById("textField");
var askButton = document.getElementById("askButton");
var chatArea = document.getElementById("chatArea");

mainForm.addEventListener('submit', run, false);

function run(e)
{
    e.preventDefault();
    var textFieldText = textField.value;
    var textTrimmed = textFieldText.trim();
    var textFinal = textTrimmed.toLowerCase();

    textFinal = textFinal.replace("mayi", "may i");
    textFinal = textFinal.replace("aweosme", "awesome");
    textFinal = textFinal.replace("univese", "universe");

    chatArea.innerHTML += textFieldText + "<br/>";
    chatArea.innerHTML += textFinal + "<br/>";

}