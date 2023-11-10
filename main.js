

/* menu déroulant*/

const menu = document.getElementById("menu");
        const menuItems = menu.querySelectorAll('li');

        menu.addEventListener("mouseenter", () => {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.display = "block";
                }, index * 100);
            });
        });

        menu.addEventListener("mouseleave", () => {
            menuItems.forEach((item) => {
                item.style.display = "none";
            });
        });

