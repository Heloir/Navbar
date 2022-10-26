// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const links = document.querySelector('.links')
const navbtn = document.querySelector('.nav-toggle')


navbtn.addEventListener('click', () =>{
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }
    else(
        links.classList.toggle('show-links')
    )
})