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
const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;



document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');


    if (email.value === '') {
        email.focus();
    } if (subject.value === '') {
        subject.focus();
    } if (message.value === '') {
        message.focus();
    } if (email.value && subject && message) {
        var mailto_link = 'mailto:Info@ses-groups.com';
        mailto_link += '?subject=' + encodeURIComponent(subject.value);
        mailto_link += '&body=' + encodeURIComponent(message.value);
        window.open(mailto_link, '_blank');
    }


})
