const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const mobileCurrent = document.querySelector(".mobile-current");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");


// Active navbar section

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );

                if (activeLink) {

                    activeLink.classList.add("active");

                    if (mobileCurrent) {

                        const sectionName = activeLink.querySelector(
                        ".section-name"
                    );

                    if (sectionName) {
                      mobileCurrent.textContent = sectionName.textContent;
                    } else {
                        mobileCurrent.textContent = activeLink.textContent.trim();
                    }

                    }
                }
            }
        });
    },
    {
        threshold: 0.4
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// About change to DP

const aboutSection = document.querySelector("#about");
const aboutLink = document.querySelector(".about-link");

const aboutObserver = new IntersectionObserver(
    ([entry]) => {

        if (entry.isIntersecting) {

            if (aboutLink) {
                aboutLink.classList.remove("profile-active");
            }

        } else {

            if (aboutLink) {
                aboutLink.classList.add("profile-active");
            }
        }

    },
    {
        threshold: 0.1
    }
);

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}


// About animation

const aboutAnimationObserver = new IntersectionObserver(
    ([entry]) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("animate");

        } else {

            entry.target.classList.remove("animate");

        }

    },
    {
        threshold: 0.2
    }
);

if (aboutSection) {
    aboutAnimationObserver.observe(aboutSection);
}


// Education animation

const educationSection = document.querySelector("#educations");

const educationObserver = new IntersectionObserver(
    ([entry]) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("animate");

        } else {

            entry.target.classList.remove("animate");

        }

    },
    {
        threshold: 0.25
    }
);

if (educationSection) {
    educationObserver.observe(educationSection);
}


// Mobile menu

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


// Close mobile menu after clicking a navigation link

if (navMenu) {

    navMenu.querySelectorAll(".nav-link").forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });

}