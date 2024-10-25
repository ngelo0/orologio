// Orologio
setInterval(function () {
    const now = new Date();
    let ore = now.getHours();
    let minuti = now.getMinutes();
    let secondi = now.getSeconds();
    //hours = (hours < 10 ? '0':'') + hours;
    //minutes = (minutes < 10 ? '0':'') + minutes;
    //seconds = (seconds < 10 ? '0':'') + seconds;
    $("#clock").text(ore + ':' + minuti + ':' + secondi);
}, 1000);

// Timer
let timer;
let timerSeconds = 0;

$("#start-timer").click(function () {
    $("#start-timer").prop('disabled', true);
    $("#stop-timer").prop('disabled', false);
    $("#reset-timer").prop('disabled', false);
    timer = setInterval(function () {
        timerSeconds++;
        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        $("#timer-display").text(hours + ':' + minutes + ':' + seconds);
    }, 1000);
});

$("#stop-timer").click(function () {
    clearInterval(timer);
    $("#start-timer").prop('disabled', false);
});

$("#reset-timer").click(function () {
    clearInterval(timer);
    timerSeconds = 0;
    $("#timer-display").text('00:00:00');
    $("#start-timer").prop(disabled, false);
});

// Conto alla Rovescia
let countdown;
let stopcheck = false;
let seconds;

$("#start-countdown").click(function () {

    if (!stopcheck) {
        seconds = parseInt($("#countdown-input").val());
        if (isNaN(seconds) || seconds <= 0) {
            alert('Inserisci un valore corretto!');
            return
        }
    } else {
        stopcheck = false;
    }
    $("#start-countdown").prop('disabled', true);
    $("#stop-countdown").prop('disabled', false);
    $("#reset-countdown").prop('disabled', false);
    countdown = setInterval(function () {
        if (seconds <= 0) {
            clearInterval(countdown);
            alert('Tempo scaduto!');
            $("#start-countdown").prop('disabled', false);
            $("#stop-countdown").prop('disabled', true);
            $("#reset-countdown").prop('disabled', true);
            $("#countdown-display").text('00:00');
            return;
        }
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        $("#countdown-display").text(minutes + ':' + secs);
        seconds--;
    }, 1000);
});

$("#reset-countdown").click(function () {
    clearInterval(countdown);
    stopcheck = false;
    $("#start-countdown").prop('disabled', false);
    $("#stop-countdown").prop('disabled', true);
    $("#reset-countdown").prop('disabled', true);
    $("#countdown-display").text('00:00');
    return;
});

$("#stop-countdown").click(function () {
    clearInterval(countdown);
    $("#start-countdown").prop('disabled', false);
    stopcheck = true;
});

