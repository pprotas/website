window.onload = () => {
    var header = document.getElementsByTagName("header")[0];

    var homeButton = document.getElementById("home-button");

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

        if (window.scrollY + window.innerHeight / 2 < about.offsetTop) {
            homeButton.classList.add("active");
            aboutButton.classList.remove("active");
            portfolioButton.classList.remove("active");
            contactButton.classList.remove("active");
        }
        else if (window.scrollY + window.innerHeight / 2 < portfolio.offsetTop) {
            homeButton.classList.remove("active");
            aboutButton.classList.add("active");
            portfolioButton.classList.remove("active");
            contactButton.classList.remove("active");
        }
        else if (window.scrollY+ window.innerHeight / 2  < contact.offsetTop) {
            homeButton.classList.remove("active");
            aboutButton.classList.remove("active");
            portfolioButton.classList.add("active");
            contactButton.classList.remove("active");
        }
        else {
            homeButton.classList.remove("active");
            aboutButton.classList.remove("active");
            portfolioButton.classList.remove("active");
            contactButton.classList.add("active");
        }
    }
};