function clockHandsMove() {
    let d = new Date();
    let secs = d.getSeconds();
    let mins = d.getMinutes() + secs/60;
    let hrs = (d.getHours() % 12) + mins/60;

    let secsAngle = secs * 6;
    let minsAngle = mins * 6;
    let hrsAngle = hrs * 30;

    let secsHand = document.getElementById("seconds");
    let minsHand = document.getElementById("minutes");
    let hrsHand = document.getElementById("hours");

    secsHand.setAttribute('transform', `rotate(${secsAngle}, 244, 251)`)
    minsHand.setAttribute('transform', `rotate(${minsAngle}, 244, 251)`)
    hrsHand.setAttribute('transform', `rotate(${hrsAngle}, 244, 251)`)
}
setInterval(clockHandsMove, 1000);