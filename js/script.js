function Button(text) {
    this.text = text || 'HELLO!';
}
Button.prototype.create = function () {
    var self = this;
    this.element = document.createElement('button');
    this.element.innerText = this.text;
    document.body.appendChild(this.element);
    this.element.addEventListener('click', function () {
        alert(self.text);
    
    });
}

var btn1 = new Button('HELLO!');
btn1.create();


document.body.style.background = "#2a0a82";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
var btn = document.querySelector('button');
btn.style.backgroundColor = "gold";
btn.style.fontSize = "25px";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.marginTop = "50px";