document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.querySelector('.theme');
    const body = document.body;
    const cardbtn = document.querySelectorAll('.r-link .btn');
    const linkBtns = document.querySelectorAll('.r-link button');
    const themeText = document.getElementById('theme');
    const cards = document.querySelectorAll('.r-card');
    const conts = document.querySelectorAll('.r-con');
    const titles = document.querySelectorAll('.title');
    const tops = document.querySelectorAll('#top');

    themeBtn.addEventListener('click', function () {
        body.classList.toggle('light-theme');

        if (body.classList.contains('light-theme')) {
            body.style.backgroundColor = 'white';
            themeBtn.querySelector("i").classList.replace("bi-moon-stars", "bi-cloud-sun");
            document.querySelector(".r-link").style.backgroundColor = "White";
            cardbtn.forEach(button => {
                button.classList.replace('btn-outline-light', 'btn-outline-dark');
            });
            linkBtns.forEach(link => {
                link.classList.replace('btn-outline-light', 'btn-outline-dark');
            });
            themeText.textContent = 'Light Mode';

            tops.forEach(top => {
                top.style.color = "black";
            });
            titles.forEach(title => {
                title.style.color = "black";
            });
            conts.forEach(cont => {
                cont.style.border = "1px solid black";
            });
            cards.forEach(card => {
                card.style.color = "black";
                card.style.border = "1px solid black";
            });

        } else {
            body.style.backgroundColor = 'black';
            document.querySelector(".r-link").style.backgroundColor = "Black";
            themeBtn.querySelector("i").classList.replace("bi-cloud-sun", "bi-moon-stars");
            cardbtn.forEach(button => {
                button.classList.replace('btn-outline-dark', 'btn-outline-light');
            });
            linkBtns.forEach(link => {
                link.classList.replace('btn-outline-dark', 'btn-outline-light');
            });
            themeText.textContent = 'Dark Mode';

            tops.forEach(top => {
                top.style.color = "white";
            });
            titles.forEach(title => {
                title.style.color = "white";
            });
            conts.forEach(cont => {
                cont.style.border = "1px solid white";
            });
            cards.forEach(card => {
                card.style.color = "white";
                card.style.border = "1px solid white";
            });
        }
    });
});