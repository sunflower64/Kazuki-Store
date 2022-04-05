let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);

let auto = document.getElementById("auto");
let light = document.getElementById("light");
let dark = document.getElementById("dark");
const switchMode = (event) => {
    switch (event.target.value) {
        case "auto":
            auto.classList.remove("hidden");
            light.classList.add("hidden");
            dark.classList.add("hidden");
            break;
        case "light":
            auto.classList.add("hidden");
            light.classList.remove("hidden");
            dark.classList.add("hidden");
            break;
        case "dark":
            auto.classList.add("hidden");
            light.classList.add("hidden");
            dark.classList.remove("hidden");
            break;
        default:
            break;
    }
};
