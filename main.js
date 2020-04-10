const navigationBar = document.querySelectorAll('[data-nav-list]');

navigationBar.forEach(navigation => {
    navigation.addEventListener('click', e => {
        const active = document.querySelector('.active');
        active.classList.remove('active');
        navigation.classList.add('active');
    });
});