const doc = document;

doc.body.onload = function() {
    const button = doc.querySelector("button");
    button.onclick = function() {
        if(this.dataset.clicked != "true") {
            this.dataset.clicked = true;
            sendEmail(this);
        }
    }
}

function sendEmail(button) {
    fetch('email.php')
    .then(response=> {
        console.log('file retrieved');
        button.dataset.clicked = false;
    })
    .catch(err=> {
        console.warn(err);
        button.dataset.clicked = false; 
    });
}