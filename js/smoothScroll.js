document.addEventListener('DOMContentLoaded', () => {
    // skill
    const skillButton = document.getElementById('skill-button');
    function scrollToSkillFn() {
        const heroSkills = document.getElementById('skills');
        heroSkills.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }
    skillButton.addEventListener('click', scrollToSkillFn);
    skillButton.addEventListener('touch', scrollToSkillFn);

    // project
    const projectButton = document.getElementById('project-button');
    function scrollToProjectFn() {
        const heroProjects = document.getElementById('projects');
        heroProjects.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }
    projectButton.addEventListener('click', scrollToProjectFn);
    projectButton.addEventListener('touch', scrollToProjectFn);

    // contact
    const contactButton = document.getElementById('contact-button');
    function scrollToContactFn() {
        const heroContacts = document.getElementById('contact');
        heroContacts.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }
    contactButton.addEventListener('click', scrollToContactFn);
    contactButton.addEventListener('touch', scrollToContactFn);
});
