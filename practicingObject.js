const monitor = {
    powerStatus : true,
    color : "black",
    monitorNum : {
        left : "left",
        rigth : "right"
    },
    powerSwitch : function (power) {
        this.powerStatus = power;
        return this.powerStatus
    },
    screenSize : 27,
    name : "Sceptre",

};

const table = {
    length : 80,
    color : "Black",
    drawerAmount : 10,
    pen : {
        color : ["Black", "Blue", "Red"],
        capStatus : false,
        inkAmount : 70
    },
    weight : 100,
    cost : 300

};


console.log("status of monitor", monitor.powerSwitch(false));
console.log("table length", table.length)