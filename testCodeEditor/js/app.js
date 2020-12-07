document.body.onload = function() {
    initEditor();
}

function initEditor() {
    const editor = document.querySelector('.editor');
    editor.onsubmit = previewCode;
    const codes = document.querySelectorAll('.code');
    for(let code of codes) {
        code.onkeydown = customKeys;
        code.onkeyup = function(e) {
            const index = currentKeys.findIndex(key=> key == e.keyCode);
            currentKeys.splice(index, 1);
        }
    }
}

/**
 * 
 * @param {event} e 
 */
function previewCode(e) {
    e.preventDefault();
    const preview = document.querySelector('.preview');
    preview.innerHTML = this.html.value;

    const previewJS = document.querySelector('.previewJS');
    const jsCode = document.querySelector('.js');
    const newJS = document.createElement('script');
    newJS.innerHTML = jsCode.value;
    previewJS.innerHTML = '';
    previewJS.appendChild(newJS);
}

/**
 * 
 * @param {event} e 
 */
function customKeys(e) {
    currentKeys.push(e.keyCode);
    if(e.keyCode == 9) {
        e.preventDefault();
        const pos = this.selectionStart;
        let chars = this.value.split('');
        // console.log(pos);
        chars.splice(pos, 0, '    ');
        this.value = chars.join('');
        this.selectionStart = pos+4;
        this.selectionEnd = pos+4;
    }
}

const currentKeys = [];