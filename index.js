addEventListener("DOMMouseScroll", handleScroll, false);
addEventListener("mousewheel", handleScroll, false);

var check = false;

function handleScroll(event) {
    event.stopPropagation();

    var delta = event.wheelDelta ? event.wheelDelta : -event.detail;
    var move = (delta < 0 ? 1 : -1);

    if (!check) {
        check = true;

        let reachHeight = parseInt(window.scrollY) + (window.innerHeight * move);
        window.scrollTo({
            top: reachHeight,
            behavior: 'smooth'
        });

        let interval = setInterval(function () {
            let current = window.scrollY;

            if (current - 5 <= reachHeight <= current + 5) {
                setTimeout(function () {
                    check = false;
                }, 1500);

                clearInterval(interval);
            }
        }, 15);
    }
}