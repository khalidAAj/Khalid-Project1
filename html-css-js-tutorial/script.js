function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".personality-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDescription() {
    var description = document.getElementById('project-description');
    var button = document.getElementById('see-more-button');

    var isHidden = description.classList.contains('project-description-hidden');

    if (isHidden) {
        description.classList.remove('project-description-hidden');
        button.innerText = 'See less';
    } else {
        description.classList.add('project-description-hidden');
        button.innerText = 'See more';
    }
}

