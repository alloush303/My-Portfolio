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

    let iconTop = document.querySelector(".iconTop");

    if (iconTop) {

        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            iconTop.style.display = "block";
        } else {
            iconTop.style.display = "none";
        }
    }


}