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
var sendMessageButton = "scenarioButton";
var sendMessage = "SendMessage";
var sendMessageButton = "sendMessageButton";
var backButton = "backButton";
var submitButton = "submitButton";
var messageSize = 0;

function sendTheMessage() {
    var selectedTransferMethod = getSelectedOption(transferMethod);

    hideElement(document.getElementById("InputId"));

    if (selectedTransferMethod.id === "laser") {
        setSolarSystemLaserImage();
        updateOutPut("OutputLaserId");
    } else {
        setSolarSystemRadioImage();
        updateOutPut("OutputRadioId");
    }

    return false;
}

function fileAdded() {
    var messageElement = getSelectedOption(messageType);
    var messageElementId = messageElement.id;
    var sizeId = messageElementId + "Size";
    var inputId = messageElementId + "Input";

    var sizeElement = document.getElementById(sizeId);
    sizeElement.innerText = "";
    var file = document.getElementById(inputId);
    
    ValidateSizeInMB(file, 5 * 1024 * 1024 * 1024);

    if (messageSize > 0) {
        var message = messageElementId + " size: " + messageSize + " byte";
        sizeElement.innerText = message;
    } else {
        sizeElement.innerText = "";
    }
}

function ValidateSizeInMB(file, maxFileSize) {
    messageSize = 0;
    if (file.files.length < 1) {
        messageSize = 0;
    } else {
        var localFileSize = file.files[0].size; // in Byte
        if (localFileSize < maxFileSize) {
            messageSize = localFileSize;
        }
    }
}

function messageTypeChanged() {
    var opt = getSelectedOption(messageType).id;

    var sel = document.getElementsByClassName("messages");

    for (var i = 0; i < sel.length; i++) {
        hideElement(sel[i]);
    }

    sel = document.getElementById(opt + "Message");
    showElement(sel);
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

    if (this.id === sendMessageButton || this.id === backButton) {
        tab = sendMessage;
    }

    changeTabs(tab);
}

function changeTabs(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        hideElement(tabcontent[i]);
    }

    hideOutPut();
    showElement(document.getElementById("InputId"));
    showElement(document.getElementById(tabName));
    setSolarSystemImage();
}

function hideElement(element) {
    element.style.display = "none";
}

function showElement(element) {
    element.style.display = "";
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

function hideOutPut() {
    hideElement(document.getElementById("OutputGeneralId"));
    hideElement(document.getElementById("OutputRadioId"));
    hideElement(document.getElementById("OutputLaserId"));
}

function updateOutPut(outputId) {
    hideOutPut();
    showElement(document.getElementById("OutputGeneralId"));
    showElement(document.getElementById(outputId));
}