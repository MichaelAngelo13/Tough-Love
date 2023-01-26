
//Update title:
const title = document.getElementsByTagName('h1')[0]
title.innerText = 'Have you heard about the \n Tough Love chrome extension?'
const subtitle = document.createElement('p')
subtitle.setAttribute('id', 'subtitle');
subtitle.innerText = "A novel extension to avoid distractions \n from our CTRI-14 Juniors: Ngoc and Michael Angelo!"
title.append(subtitle)

//Get newsletter:
document.getElementsByClassName('sub-title')[0].innerText = "Sign up for their newsletter:"

//Update testinomial
const testinomial = document.getElementsByClassName('slider-description');

//Update profile picture:
const profile_img = document.getElementsByClassName('profile-img');

//Update name:
const profile_name = document.getElementsByClassName('profile-name');

//Update designation
const profile_designation = document.getElementsByClassName('profile-designation');

const content = {
    testinomial: [
        "Tough Love was a clear favorite at the 2023 CTRI Hack-a-thon with their productivity-boosting Google Chrome extension. The team's solution was not only effective but also had a sleek and user-friendly design. The judges were impressed by the team's ability to identify a common problem and develop a solution that is easily accessible to anyone who uses Chrome. The extension stood out for its ability to integrate with other productivity tools and its ability to customize to individual needs. Congratulations to Tough Love on their outstanding achievement!",
        "Tough Love's extension at the 2023 CTRI 14 Hack-a-thon was a game-changer for the hackathon community. Their project tackled the issue of burnout and lack of motivation among participants, and provided a unique approach to keeping them engaged and productive throughout the event. Their use of gamification techniques, along with a robust set of features and tools for tracking progress, set a new standard for hackathon productivity and made it clear that Tough Love deserved to take home the top prize.",
        "At the 2023 CTRI 14 Hack-a-thon, Tough Love impressed the judges and participants with their innovative solution for increasing productivity during the event. Their unique approach incorporated a mix of fun and practicality, using gamification techniques and a variety of tools to keep participants motivated and engaged throughout the hackathon. Their project's ability to help participants stay productive, without compromising on fun and relaxation, is what set them apart and earned them the top prize. It was clear that Tough Love's solution was a cut above the rest and deserved to win."
    ],
    img: [
        'background-image:url(https://ca.slack-edge.com/T0464QV57N0-U04K5QL0PC5-50fb7377f4a0-512)',
        'background-image:url(https://ca.slack-edge.com/T0464QV57N0-U04JQMVNFA6-ea9e7acc0acc-512)',
        'background-image:url(https://ca.slack-edge.com/T0464QV57N0-U0469EUPY3W-c6ca7f442bfa-512)'       
    ],
    name: [
        'Katrina V.',
        'Clinks',
        'Xochilt L.'
    ],
    designation: [
        'Lead Engineering Instructor \n@Codesmith',
        'Engineering Instructor \n@Codesmith',
        'Program Coordinator \n@Codesmith'
    ]
}

for (let i=0; i<=3; i++){
    testinomial[i].innerText = content.testinomial[i];
    profile_img[i].setAttribute('style', content.img[i]);
    profile_name[i].innerText = content.name[i];
    profile_designation[i].innerText = content.designation[i];
}

//Get button element
const button = document.getElementById('cta_button_8882330_95d4f3dd-28c4-4a2d-9830-f5ba08696ed3');
console.log(button)