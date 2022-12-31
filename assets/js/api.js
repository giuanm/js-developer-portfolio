async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/giuanm/js-developer-portfolio/main/data/profile.json';
    
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

async function fetchProfileDataIe() {
    const url = 'https://raw.githubusercontent.com/giuanm/js-developer-portfolio/main/data/profile_english.json';
    
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}