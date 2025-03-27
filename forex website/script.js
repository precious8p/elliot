document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.3)";
        });

        button.addEventListener("mouseout", () => {
            button.style.boxShadow = "none";
        });
    });
});
