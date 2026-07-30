// active nav bar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

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

// about change to dp
const aboutSection = document.querySelector("#about");
const aboutLink = document.querySelector(".about-link");

const aboutObserver = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            aboutLink.classList.remove("profile-active");
        } else {
            aboutLink.classList.add("profile-active");
        }
    },
    {
        threshold: 0.1
    }
);

aboutObserver.observe(aboutSection);

//About Animation
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

aboutAnimationObserver.observe(document.querySelector("#about"));


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

educationObserver.observe(educationSection);