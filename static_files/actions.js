const navigationItems = document.querySelectorAll('.navigation-item') //nav items
const siteSections = document.querySelectorAll('section')//sections

navigationItems.forEach(navigationItem => {
    let sectionId = navigationItem.dataset.sectionId

    navigationItem.onclick = () => {
        // Scrolls on top on-click
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 

        //appending and removing active class for nav items
        const currentSection = document.querySelector('.navigation-item.active')
        currentSection.classList.remove('active')

        navigationItem.classList.add('active')

        //hide and show sections based on the pressed button
        siteSections.forEach(siteSection => {

            if(sectionId == siteSection.id){
                siteSection.style.display = 'block'
            }
            else{
                siteSection.style.display = 'none'
            }
        })

        //change page title
        document.title = navigationItem.dataset.pageTitle
    }
})

//entrance animations
const slideUps = document.querySelectorAll('.slide-up')
const fadeIns = document.querySelectorAll('.fade-in')

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
}

const elementObserver = new IntersectionObserver((entries, elementObserver) => {
    entries.forEach(entry =>  {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
            elementObserver.unobserve(entry.target)
        }
        else{return}
    })

}, observerOptions)

slideUps.forEach(slideUp => {
    elementObserver.observe(slideUp)
})

fadeIns.forEach(fadeIn => {
    elementObserver.observe(fadeIn)
})
