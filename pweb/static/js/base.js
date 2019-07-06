window.onload = () => {
    var header = document.getElementsByTagName("header")[0];

    var home = document.getElementById("home");
    var homeButton = document.getElementById("home-button");
    homeButton.focus();

    var about = document.getElementById("about");
    var aboutButton = document.getElementById("about-button");

    var portfolio = document.getElementById("portfolio");
    var portfolioButton = document.getElementById("portfolio-button");

    var contact = document.getElementById("contact");
    var contactButton = document.getElementById("contact-button");

    checkScroll();
    document.addEventListener("scroll", () => checkScroll());

    function checkScroll() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else if (header.classList.contains("scrolled")) {
            header.classList.remove("scrolled");
        }

        if (window.scrollY < about.offsetTop) {
            homeButton.focus();
        }
        else if (window.scrollY < portfolio.offsetTop) {
            aboutButton.focus();
        }
        else if (window.scrollY < contact.offsetTop) {
            portfolioButton.focus();
        }
        else {
            contactButton.focus();
        }
    }
};