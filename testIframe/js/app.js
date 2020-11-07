document.body.onload = ()=> {
    initBtns();
}

function initBtns() {
    const iframeBtnsDOM = document.querySelectorAll(".iframe__btn");
    for(let btn of iframeBtnsDOM) {
        btn.onclick = showIframe;
    }
}

function showIframe() {
    const iframeDOM = document.querySelector(`#${this.dataset.iframe}`);
    iframeDOM.removeAttribute("hidden");
    iframeDOM.src = this.dataset.src;
    const options = JSON.parse(this.dataset.options);
    for(let option of Object.keys(options)) {
        iframeDOM[option] = options[option];
    }
    this.onclick = hideIframe;
    this.innerHTML = "Hide Sample Project";
}

function hideIframe() {
    const iframeDOM = document.querySelector(`#${this.dataset.iframe}`);
    iframeDOM.setAttribute("hidden", "true");
    const options = JSON.parse(this.dataset.options);
    for(let option of Object.keys(options)) {
        iframeDOM[option] = null;
    }
    this.onclick = showIframe;
    this.innerHTML = "Show Sample Project";
}