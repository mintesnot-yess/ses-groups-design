document.getElementById('menu-btn').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('h-0')) {
        menu.classList.remove('h-0');
        menu.classList.add('h-44');

    } else {
        menu.classList.add('h-0');
        menu.classList.remove('h-44');

    }
});