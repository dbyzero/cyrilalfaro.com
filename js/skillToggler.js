document.addEventListener('DOMContentLoaded', () => {
    const skills = Array.prototype.slice.call(document.querySelectorAll('.skill'), 0);

    function toggle(tag) {
        skills.forEach( el => {
            if (el.dataset.tag === tag) {
                el.classList.toggle('selected');
            }
        })
    }

    skills.forEach( el => {
        el.addEventListener('click', () => {toggle(el.dataset.tag)});
        el.addEventListener('touch', () => {toggle(el.dataset.tag)});
    });
});
