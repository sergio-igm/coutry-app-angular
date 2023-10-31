document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".prf").forEach(prf => {
        const { value = "0", color = "#4b4b4b", background = "", fontColor = "", parentFontColor = "" } = prf.dataset;
        prf.innerHTML = `<div class="left"><span>a</span></div><div class="right"><span>b</span></div>`;
        const width = Math.abs(value);
        const prf_percent = document.createElement("div");
        prf_percent.classList.add("prf-percent");

        prf_percent.style.width = `${100 * width}%`;

        prf_percent.style.backgroundColor = color_evaluator(color);

        prf.style.backgroundColor = background;

        prf.style.color = fontColor;

        const parent = prf.childNodes[value < 0 ? 0 : 1];
        parent.style.color = parentFontColor;

        prf_percent.style.borderRadius = getComputedStyle(parent).borderRadius.replaceAll('px', '').split(' ').map(v => v * 100 / innerWidth + "vw").join(' ');
        parent.appendChild(prf_percent);
    })
})
function color_evaluator(color) {
    if (color.startsWith("s:")) {
        switch (color.slice(2)) {
            case "random":
                return '#' + Math.floor(0x1000000 * Math.random()).toString(16).padStart(6, '0');
        }
    }
    return color
}
