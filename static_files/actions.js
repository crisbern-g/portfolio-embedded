const navigationItems = document.querySelectorAll('.navigation-item')
const siteSections = document.querySelectorAll('section')

navigationItems.forEach(navigationItem => {
    let sectionId = navigationItem.dataset.sectionId

    navigationItem.onclick = () => {
        const currentSection = document.querySelector('.navigation-item.active')
        currentSection.classList.remove('active')

        navigationItem.classList.add('active')

        siteSections.forEach(siteSection => {

            if(sectionId == siteSection.id){
                siteSection.style.display = 'block'
            }
            else{
                siteSection.style.display = 'none'
            }
        })

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
