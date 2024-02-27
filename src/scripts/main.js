AOS.init();

const dataEvent = new Date("oct 5, 2024 10:00:00");
const timeStampEvent = dataEvent.getTime();
const acountHours = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const timeUntilEvent = timeStampEvent - timeStampNow

    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minutMs = 1000 *  60;

    const daysUntilEnvent = Math.floor(timeUntilEvent / dayMs)
    const hourUntilEvent = Math.floor((timeUntilEvent % dayMs) / hourMs)
    const minutMsUntilEvent = Math.floor((timeUntilEvent % hourMs) / minutMs)
    const secondsUntilEvent = Math.floor((timeUntilEvent % minutMs) / 1000)

    const dateEvent = document.querySelector('.contador').innerHTML = `${daysUntilEnvent}d ${hourUntilEvent}h ${minutMsUntilEvent}m ${secondsUntilEvent}s`

    if (daysUntilEnvent < 0) {
        document.querySelector('.contador').innerHTML = "Parabém por techegado ate qui."
    }

}, 1000);