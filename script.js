// menu toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


//scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });


    //sticky header 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

    let footer = document.querySelector('.footer');

    if (footer) {
        footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
        )
    }
    // ----------------------------------------------------------------------

    //-----------------  GO TO TOP -------------------------------

    let iconTop = document.querySelector(".iconTop");


    if (document.documentElement.scrollTop > 800) {
        iconTop.style.display = "block";
    } else {
        iconTop.style.display = "none";
    }


}


// -------------------------------------------------------------------

// ----------------------------- Translate ------------------------------

const translations = {
    ar: {
        home: "الرئيسية",
        about: "نبذة عني",
        education: "التعليم",
        skills: "المهارات",
        contact: "التواصل",
        title: "مرحباً, أنا علي علوش",
        jop: "مطور واجهات أمامية",
        aboutMe: "مطور Front-End طموح ممتد بأساس قوي في تقنيات الويب الأساسية (HTML, CSS, JavaScript). لدي شغف كبير ببناء واجهات مستخدم جذابة ومتجاوبة، وأسعى دائمًا لتطوير مهاراتي ومواكبة أحدث إطارات العمل مثل React. أبحث عن فرص لتطبيق ما تعلمته في مشاريع حقيقية والمساهمة في بناء حلول رقمية مبتكرة.",
        hireMe: "وظفني",
        letsTalk: "تواصل معي"
    },
    en: {
        home: "Home",
        about: "About Me",
        education: "Education",
        skills: "Skills",
        contact: "Contact",
        title: "Hi, I'm Ali Alloush",
        jop: "Frontend Developer",
        aboutMe: "An ambitious Front-End Developer with a solid foundation in core web technologies (HTML, CSS, and JavaScript). I have a strong passion for building visually appealing, responsive user interfaces and am always eager to upgrade my skills and keep pace with modern frameworks like React. I am looking for opportunities to apply my knowledge in real-world projects and contribute to building innovative digital solutions.",
        hireMe: "hireMe",
        letsTalk: "let'sTalk"

    }
}


function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]')

    elements.forEach(element => {
        const key = element.getAttribute('data-lang')

        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key]
        }
    });

    if (lang === 'ar') {
        document.documentElement.dir = 'rtl'
        document.documentElement.lang = 'ar'
    } else {
        document.documentElement.dir = 'ltr'
        document.documentElement.lang = 'en'
    }
}