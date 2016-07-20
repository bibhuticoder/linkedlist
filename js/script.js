var list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

var canvas = $("#canvas")[0];
var ctx = canvas.getContext('2d');
var startX = 100;


$("#btnInsert").click(function () {
    var value = parseInt($("#insertValue").val());
    var position = parseInt($("#insertPosition").val());

    if (!position && value) {
        list.insert(value);
    } else if (value && position) {
        list.insert(value, position);
    }

    $("#insertValue").val("");
    $("#insertPosition").val("");
});

$("#btnDelete").click(function () {
    var value = parseInt($("#removeValue").val());
    var position = parseInt($("#removePosition").val());

    if (!position && value) {
        list.remove(value);
    } else if (!value && position) {
        list.removeAt(position);
    }

    $("#removeValue").val("");
    $("#removePosition").val("");

});

$("#btnMakeEmpty").click(function () {
    list.makeEmpty();
});

$("#btnClear").click(function () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

$("#btnRight").click(function () {
    scroll('right');
});

$("#btnLeft").click(function () {
    scroll('left');
});

$(".btnOperation").click(function () {
    drawToCanvas(list.giveArray());
});

function scroll(direction) {
    var unit = 20;
    if (direction === 'right') {
        startX -= unit;
    } else if (direction === 'left') {
        startX += unit;
    }

    drawToCanvas(list.giveArray());
}

function fixLayout() {
    $("#canvas").attr('width', window.innerWidth - 50);
}

function drawToCanvas(data) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var startY = canvas.height / 2;
    var i;

    var x = startX;
    var offsetX = 10;
    var offsetY = 10;
    var arrowWidth = 50;
    var arrowTipSize = 10;
    var dataFont = "20px sans-serif";
    var indexFont = "10px sans-serif";

    for (i = 0; i < data.length; i++) {
        var d = data[i];
        var dataWidth = parseInt(ctx.measureText(d).width) + 2 * offsetX;

        ctx.font = indexFont;
        ctx.fillRect(x - 1, startY - 10 - 1, dataWidth + 2, 10 + 2); // index box
        ctx.fillStyle = "white";
        ctx.fillText(i, x + (dataWidth / 2 - (ctx.measureText(i + '').width) / 2), startY + offsetY - 12); //index

        ctx.font = dataFont;
        ctx.fillStyle = "black";
        ctx.strokeRect(x, startY, dataWidth, 35); //rectangle
        ctx.fillText(d, x + offsetX, startY + offsetY + 15); //value

        // make arrow  
        //line
        ctx.beginPath();
        ctx.moveTo(x + dataWidth, startY + 18);
        ctx.lineTo(x + arrowWidth + dataWidth, startY + 18);
        ctx.stroke();
        //up
        ctx.beginPath();
        ctx.moveTo(x + arrowWidth + dataWidth, startY + 18);
        ctx.lineTo(x + arrowWidth + dataWidth - arrowTipSize, startY + 18 - arrowTipSize);
        ctx.stroke();
        //down
        ctx.beginPath();
        ctx.moveTo(x + arrowWidth + dataWidth, startY + 18);
        ctx.lineTo(x + arrowWidth + dataWidth - arrowTipSize, startY + 18 + arrowTipSize);
        ctx.stroke();

        x += dataWidth + arrowWidth;
    }

    ctx.fillText("NULL", x + offsetX, startY + offsetY + 15);


}

window.onresize = function () {
    fixLayout();
    drawToCanvas(list.giveArray());
}

fixLayout();

drawToCanvas(list.giveArray());