let hidden = document.querySelectorAll(".child");
let control = document.querySelector(".control");

let checker = true;
const Resizing = () => console.log(screen.width);

function execute(e) {
    if (checker) {
        for (i = 0; i < 4; i++) {
            hidden[i].style.display = "inherit";
        }
        checker = false;
    } else {
        for (i = 0; i < 4; i++) {
            hidden[i].style.display = "none";
        }

        checker = true;
    }
}
control.addEventListener("click", execute);