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


function sendTheMessage() {
    var selectedTransferMethod = getSelectedOption(transferMethod);

    if (selectedTransferMethod.id === "laser") {
        setSolarSystemLaserImage();
    } else {
        setSolarSystemRadioImage();
    }

    return false;
}

function fileAdded() {
    var sel = document.getElementsByClassName("messages");

    var thisId = "data";

    var inputId = thisId + "Input";
    var file = document.getElementById(inputId);

    alert(thisId);
    ValidateSizeInMB(thisId, file, 500);
    var file2 = file.value.split("\\");
    var fileName = file2[file2.length-1];
}

function ValidateSizeInMB(thidId, file, maxFileSize) {
    var fileSize = file.files[0].size / 1024 / 1024; // in MB
    if (fileSize > maxFileSize) {
        alert('File size exceeds '+maxFileSize+' MB');
    } else {
        var element = document.getElementById(thisId + "Size");
        element.innerHTML = "abd";
    }
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
    if (currentScenario === "scenario1") {
        src = "./images/" + "transparent_scenario1.png";
    }
    if (currentScenario === "scenario2") {
        src = "./images/" + "transparent_scenario2.png";
    }
    if (currentScenario === "scenario3") {
        src = "./images/" + "transparent_scenario3.png";
    }
    var sel = document.getElementById("scenarioImage");
    sel.src = src;
}

function setSolarSystemLaserImage() {
    var src = "";
    if (currentScenario === "scenario1") {
        src = "./images/" + "transparent_scenario1_laser.png";
    }
    if (currentScenario === "scenario2") {
        src = "./images/" + "transparent_scenario2_laser.png";
    }
    if (currentScenario === "scenario3") {
        src = "./images/" + "transparent_scenario3_laser.png";
    }
    var sel = document.getElementById("scenarioImage");
    sel.src = src;
}

function setSolarSystemRadioImage() {
    var src = "";
    if (currentScenario === "scenario1") {
        src = "./images/" + "transparent_scenario1_radio.png";
    }
    if (currentScenario === "scenario2") {
        src = "./images/" + "transparent_scenario2_radio.png";
    }
    if (currentScenario === "scenario3") {
        src = "./images/" + "transparent_scenario3_radio.png";
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
    currentScenario = scenario;
    changeButtonState(sendMessageButton, false);
    changeTabs(sendMessage);
}

function changeButtonState(buttonId, state) {
    var button = document.getElementById(buttonId);
    button.disabled = state;
}