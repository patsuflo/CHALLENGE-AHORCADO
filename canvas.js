


function dibujarCanvas() {
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "blueviolet";
    pincel.strokeStyle = "black";
    pincel.fillRect(0, 0, 450, 450);

    pincel.beginPath();
    pincel.moveTo(50, 450);
    pincel.lineTo(350, 450);
    pincel.stroke();
    pincel.closePath();

    pincel.beginPath();
    pincel.moveTo(60, 100);
    pincel.lineTo(60, 450);
    pincel.stroke();
    pincel.closePath();

    pincel.beginPath();
    pincel.moveTo(60, 100);
    pincel.lineTo(250, 100);
    pincel.stroke();
    pincel.closePath();

    pincel.beginPath();
    pincel.moveTo(250, 100);
    pincel.lineTo(250, 150);
    pincel.stroke();
    pincel.closePath();
}

function dibujarHorca(cantErrores) {


    if (cantErrores == 1) {
        pincel.beginPath();
        pincel.arc(250, 180, 28, 0, 2 * 3.14)
        pincel.stroke();
        pincel.closePath();
    }

    if (cantErrores == 2) {
        pincel.beginPath();
        pincel.moveTo(250, 210);
        pincel.lineTo(250, 330);
        pincel.stroke();
        pincel.closePath();
    }
    if (cantErrores == 3) {
        pincel.beginPath();
        pincel.moveTo(250, 330);
        pincel.lineTo(300, 380);
        pincel.stroke();
        pincel.closePath();
    }
    if (cantErrores == 4) {
        pincel.beginPath();
        pincel.moveTo(250, 330);
        pincel.lineTo(200, 380);
        pincel.stroke();
        pincel.closePath();
    }
    if (cantErrores == 5) {
        pincel.beginPath();
        pincel.moveTo(250, 210);
        pincel.lineTo(300, 260);
        pincel.stroke();
        pincel.closePath();
    }
    if (cantErrores == 6) {

        pincel.beginPath();
        pincel.moveTo(250, 210);
        pincel.lineTo(200, 260);
        pincel.stroke();
        pincel.closePath();
    }
}

function seAhorco() {

    pincel.strokeStyle = "red";
    pincel.beginPath();
    pincel.moveTo(210, 210);
    pincel.lineTo(280, 213);
    pincel.stroke();
    pincel.closePath();
}

