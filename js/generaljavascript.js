class MessageInformation {
    constructor(location, rlocation, rname, type, method) {
        this.location = location;
        this.rlocation = rlocation;
        this.rname = rname;
        this.type = type;
        this.method = method;
    }
}

var currentLocation = "currentLocation";
var recipientLocation = "recipientLocation";
var recipientName = "recipientName";
var messageType = "messageType";
var transferMessage = "transferMessage";
var transferMethod = "transferMethod";
var background = "background";

function doSomething() {
    var opt = getSelectedOption(currentLocation).value;

    alert(opt);
    return false;
}

function messageTypeChanged() {
    var opt = getSelectedOption(messageType).id;

    alert(opt);
}

function setBackground() {

    var sel = document.getElementById(background)

    sel.style = "background-image: url('images/scenario2.png')";
}
function resetBackground() {

    var sel = document.getElementById(background)
    sel.style = "background-color: black";
}

function getSelectedOption(selectedId) {

    var sel = document.getElementById(selectedId)
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
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    if (tabName != "Scenario") {
        setBackground();
    } else {
        resetBackground();
    }
}

function changeScenario(scenario) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    if (scenario != "Scenario") {
        setBackground();
    } else {
        resetBackground();
    }
}