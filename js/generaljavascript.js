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

function doSomething() {
    var opt = getSelectedOption(currentLocation).value;

    alert(opt);
    return false;
}

function messageTypeChanged() {
    var opt = getSelectedOption(messageType).id;

    alert(opt);
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