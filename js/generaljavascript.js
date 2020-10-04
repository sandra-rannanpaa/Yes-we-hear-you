var currentLocation = "currentLocation";
var recipientLocation = "recipientLocation";
var recipientName = "recipientName";
var messageType = "messageType";
var textTransferMessage = "textTransferMessage";
var voiceTransferMessage = "voiceTransferMessage";
var videoTransferMessage = "videoTransferMessage";
var dataTransferMessage = "dataTransferMessage";
var imageTransferMessage = "imageTransferMessage";
var predefinedTransferMessage = "predefinedTransferMessage";
var transferMethod = "transferMethod";
var background = "background";
var currentScenario = "";
var scenario = "Scenario";
var sendMessage = "SendMessage";
var sendMessageButton = "sendMessageButton";
var submitButton = "submitButton";


function myFunction() {
    alert("Hello World!");
}

function doSomething() {
    return false;
}

function messageTypeChanged() {
    var opt = getSelectedOption(messageType).id;

    var sel = document.getElementsByClassName("messages");

    for (var i = 0; i < sel.length; i++) {
        sel[i].style.display = "none";
    }

    sel = document.getElementById(opt+"Message");
    sel.style.display = "";
}

function setSolarSystemImage() {
    var src = "";
    if (currentScenario === "scenario1.png") {
        src = "./images/" + "transparent_scenario1.png";
    }
    if (currentScenario === "scenario2.png") {
        src = "./images/" + "transparent_scenario2.png";
    }
    if (currentScenario === "scenario3.png") {
        src = "./images/" + "transparent_scenario3.png";
    }
    var sel = document.getElementById("scenarioImage");
    sel.src = src;
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

function changeTab() {
    var tab = scenario;

    if (this.id == sendMessageButton) {
        tab = sendMessage;
    }

    changeTabs(tab);
}

function changeTabs(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "";
    setSolarSystemImage();
}

function changeScenariosEventHandler() {
    changeScenario(this.id);
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