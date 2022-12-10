var cls = true;
var ops;

window.onload = function() {
    document.querySelector(".container").addEventListener("mouseenter", function() {
        cls = false;
    });
    document.querySelector(".container").addEventListener("mouseleave", function() {
        cls = true;
    });
    ops = document.querySelectorAll(".container td");
    for (let i = 0; i < ops.length; i++) {
        ops[i].addEventListener("click", function() {
            document.querySelector(".position").style.display = "none";
        });
    }

    ops[0].addEventListener("click", function() {
        setTimeout(function() {
            /* YOUR FUNCTION */

        }, 50);
    });

    ops[1].addEventListener("click", function() {
        setTimeout(function() {
            /* YOUR FUNCTION */

        }, 50);
    });

    ops[2].addEventListener("click", function() {
        setTimeout(function() {
            /* YOUR FUNCTION */

        }, 50);
    });

    ops[3].addEventListener("click", function() {
        setTimeout(function() {
            /* YOUR FUNCTION */

        }, 50);
    });

    ops[4].addEventListener("click", function() {
        setTimeout(function() {
            /* YOUR FUNCTION */

        }, 50);
    });
}

document.addEventListener("contextmenu", function() {
    var e = window.event;
    e.preventDefault();
    document.querySelector(".container").style.padding = "0px";

    var x = e.clientX;
    var y = e.clientY;

    var docX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || document.body.offsetWidth;
    var docY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || document.body.offsetHeight;

    var border = parseInt(getComputedStyle(document.querySelector(".container"), null).getPropertyValue('border-width'));

    var objX = parseInt(getComputedStyle(document.querySelector(".container"), null).getPropertyValue('width')) + 2;
    var objY = parseInt(getComputedStyle(document.querySelector(".container"), null).getPropertyValue('height')) + 2;

    if (x + objX > docX) {
        let diff = (x + objX) - docX;
        x -= diff + border;
    }

    if (y + objY > docY) {
        let diff = (y + objY) - docY;
        y -= diff + border;
    }

    document.querySelector(".position").style.display = "block";

    document.querySelector(".position").style.top = y + "px";
    document.querySelector(".position").style.left = x + "px";
});

window.addEventListener("resize", function() {
    document.querySelector(".position").style.display = "none";
});

document.addEventListener("click", function() {
    if (cls) {
        document.querySelector(".position").style.display = "none";
    }
});

document.addEventListener("wheel", function() {
    if (cls) {
        document.querySelector(".position").style.display = "none";
        static = false;
    }
});