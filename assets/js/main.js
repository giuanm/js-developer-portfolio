
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const intro1 = document.getElementById('intro1')
    intro1.innerText = profileData.intro1

    const intro2 = document.getElementById('intro2')
    intro2.innerText = profileData.intro2

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
    
    const graduation1 = document.getElementById('graduation1')
    graduation1.innerText = profileData.graduation1

    const graduation2 = document.getElementById('graduation2')
    graduation2.innerText = profileData.graduation2
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const language = document.getElementById('language')
    language.innerText = profileData.language

    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const descPortifolio = document.getElementById('descPortfolio')
    descPortifolio.innerText = profileData.descPortfolio

    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const experience = document.getElementById('acordeonExperience')
    experience.innerText = profileData.experience

    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

function updateContact(profileData) {
    const contact = document.getElementById('contact')
    contact.innerText = profileData.contactForm

    const profileContact = document.getElementById('profile.contact')
    profileContact.innerHTML = profileData.contact.map(contact => {
        return `
            <li>
                <h3 class="title">${contact.name}</h3>
                <a href="${contact.url}" target="_blank">${contact.url}</a>
            </li>
        `
    }).join('')
}

let funFetch = fetchProfileData();

(async function profi() {
    const profileData = await funFetch
    
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    updateContact(profileData)
})()
async function profi() {
    const profileData = await funFetch
    
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    updateContact(profileData)
}

const flagBr = document.getElementById('flag1')
flagBr.addEventListener('click', (e)=> {
    funFetch = fetchProfileData();
    profi();
})


const flagIe = document.getElementById('flag2')
flagIe.addEventListener('click', (e)=> {
    funFetch = fetchProfileDataIe();
    profi();
})

