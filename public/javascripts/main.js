var entries = document.getElementsByClassName("job--entry");

for (i = 0; i < entries.length; i++) {
    entries[i].addEventListener("mouseover", function() {
        this.classList.add("hover");
    });
    entries[i].addEventListener("mouseleave", function() {
        this.classList.remove("hover");
    });
}