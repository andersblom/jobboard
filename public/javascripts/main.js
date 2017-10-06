var SimpleMDE = require("SimpleMDE");
var entries = document.getElementsByClassName("job--entry");

for (i = 0; i < entries.length; i++) {
    entries[i].addEventListener("mouseover", function() {
        this.classList.add("hover");
    });
    entries[i].addEventListener("mouseleave", function() {
        this.classList.remove("hover");
    });
}

var simplemde = new SimpleMDE({ element: document.getElementById("jobBody") });
simplemde.value('"Howdy cap\'n. \n Do you know NodeJS \'n stuff? \n Cool! Come work for us. Please."');

console.log(SimpleMDE);