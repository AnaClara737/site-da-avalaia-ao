const section = document.querySelectorAll('.hidden')
const sectionR = document.querySelectorAll('.hiddenR')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }

    })
}) 
section.forEach((element) => {
    observer.observe(element)
})
sectionR.forEach((element) => {
    observer.observe(element)
})

