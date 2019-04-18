window.onload = () => {
    var header = document.getElementsByTagName("header")[0];
    document.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else if (header.classList.contains("scrolled")) {
            header.classList.remove("scrolled");
        }

        console.log(window.pageYOffset);
    });
};