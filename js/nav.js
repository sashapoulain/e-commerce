let navbar = document.querySelector(".mainmenu");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
        navbar.classList.add('sticky');
        // header.classList.add('navbarOffsetMargin');
    } else {
        navbar.classList.remove('sticky');
        // header.classList.remove('navbarOffsetMargin');
    }
});



const detailimgs = document.querySelectorAll('.detailimgs');
const targetimg = document.querySelector('.productdetailimg')
const imgchose = e => {
    // console.log(e.target.src);
    targetimg.src = e.target.src;
}

for (let img of detailimgs) {
    img.addEventListener("mouseover", imgchose);
}



window.onload = function() {
    init();
};

function init() {
    const mobileCollapse = document.querySelector('.mobileCollapse')

    if (window.innerWidth < 768) {
        mobileCollapse.classList.remove('show')
            // console.log('mobil');
    } else {
        mobileCollapse.classList.add('show')

        // console.log('desk');
    }
}

const btnAll = document.querySelector('.btn-showall');
btnAll.addEventListener('click', () => {
    console.log('tujm');
    window.location.href = '/allpro.html'
        // btnAll.setAttribute('href', '/productdetail.html')
})