const colorFinder = (e) => {
    let box = document.getElementById("box");
    let spans = box.getElementsByTagName("span");
    if (spans.length === 0) return ;
    let firstColor = spans[0].style.backgroundColor;
    for (span of spans) {
        if (span.style.backgroundColor === firstColor) {
            span.style.backgroundColor = "rgb(0, 0, 0)";
        } else {
            span.style.backgroundColor = "rgb(255, 255, 255)";
        }
    }
};

document.addEventListener('keydown', colorFinder);