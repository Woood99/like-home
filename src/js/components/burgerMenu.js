function burgerMenu() {

    let isOpen = false;

    const path = document.querySelector('[data-menu-path]');
    const target = document.querySelector('[data-menu-target]');

    if (!(path && target)) return;

    path.addEventListener('click', () => {
        if (isOpen) {
            path.classList.remove('_menu-open');
            target.classList.remove('_menu-open');
            isOpen = false;
        } else {
            path.classList.add('_menu-open');
            target.classList.add('_menu-open');
            isOpen = true;
        }
    })

};

export default burgerMenu;