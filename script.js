const menu = document.getElementById("menuBtn");
        const mbMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById("menuIcon");

        menu.addEventListener("click", () => {
            mbMenu.classList.toggle('hidden');

            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
        });