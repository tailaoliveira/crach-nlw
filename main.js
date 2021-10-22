const userSocialMedia = {
  github: 'tailaoliveira',
  facebook: 'tailaoliveira.372',
  youtube: 'tailadeoliveira',
  instagram: 'eu.tailaa',
  twitter: 'wtftaila'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.guthub.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => {
      response.json()
    })
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
