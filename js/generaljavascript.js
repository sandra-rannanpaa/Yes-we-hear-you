var currentLocation = "currentLocation";
var recipientLocation = "recipientLocation";
var recipientName = "recipientName";
var messageType = "messageType";
var transferMessage = "transferMessage";
var transferMethod = "transferMethod";
var background = "background";
var currentScenario = "";
var sendMessage = "SendMessage";
var sendMessageButton = "sendMessageButton";
var submitButton = "submitButton";

function doSomething() {
    var opt = getSelectedOption(currentLocation).value;

    return false;
}

function messageTypeChanged() {
    var opt = getSelectedOption(messageType).id;

}

function setBackground() {

    if (currentScenario != "") {
        var sel = document.getElementById(background);
        sel.style = "background-image: url('images/" + currentScenario + "')";
    } else {
        resetBackground();
    }
}

function resetBackground() {

    var sel = document.getElementById(background)
    sel.style = "background-color: black";
}

function getSelectedOption(selectedId) {

    var sel = document.getElementById(selectedId);
    var opt;

    for (var i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt;
}

function changeTab(evt, tabName) {
    changeTabs(tabName);
}

function changeTabs(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var ad = document.getElementById(tabName).style.display;
    
    document.getElementById(tabName).style.display = "";
    setBackground();
}

function changeScenario(scenario) {
    currentScenario = scenario + ".png";
    changeButtonState(sendMessageButton, false);
    changeTabs(sendMessage);
}

function changeButtonState(buttonId, state) {
    var button = document.getElementById(buttonId);
    button.disabled = state;
}