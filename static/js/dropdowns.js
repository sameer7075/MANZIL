document.addEventListener("DOMContentLoaded", () => {
    const optionMenus = document.querySelectorAll(".select-menu");

    optionMenus.forEach(optionMenu => {
        const selectBtn = optionMenu.querySelector(".select-btn"),
            options = optionMenu.querySelectorAll(".option"),
            sBtn_text = optionMenu.querySelector(".sBtn-text"),
            hiddenInput = optionMenu.querySelector("input[type='hidden']");

        selectBtn.addEventListener("click", () => {
            optionMenu.classList.toggle("active");
        });

        options.forEach(option => {
            option.addEventListener("click", () => {
                let selectedOption = option.querySelector(".option-text").innerText;
                sBtn_text.innerText = selectedOption;
                hiddenInput.value = selectedOption === "All" || selectedOption === "Any" ? "" : selectedOption;
                optionMenu.classList.remove("active");
            });
        });
    });

    document.addEventListener("click", e => {
        document.querySelectorAll(".select-menu.active").forEach(menu => {
            if (!menu.contains(e.target)) menu.classList.remove("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const optionMenus = document.querySelectorAll(".select-menu2");

    optionMenus.forEach(optionMenu => {
        const selectBtn = optionMenu.querySelector(".select-btn"),
            options = optionMenu.querySelectorAll(".option"),
            sBtn_text = optionMenu.querySelector(".sBtn-text"),
            hiddenInput = optionMenu.querySelector("input[type='hidden']");


        selectBtn.addEventListener("click", () => {
            optionMenu.classList.toggle("active");
        });


        options.forEach(option => {
            option.addEventListener("click", () => {
                const selectedOption = option.querySelector(".option-text").innerText;
                sBtn_text.innerText = selectedOption;
                hiddenInput.value = selectedOption === "All" ? "" : selectedOption;
                optionMenu.classList.remove("active");
            });
        });


        document.addEventListener("click", (e) => {
            if (!optionMenu.contains(e.target)) {
                optionMenu.classList.remove("active");
            }
        });
    });
});


