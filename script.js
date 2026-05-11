function loadPage(page, element) {

    // Load page
    fetch(`pages/${page}.html`)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });

    document.getElementById("page-style").href = `css/${page}.css`;

    // Active class update
    document.querySelectorAll(".nav-links li").forEach(li => {
        li.classList.remove("active");
    });
    element.classList.add("active");

    // Move pill
    movePill(element);
}
function movePill(element) {
    const pill = document.getElementById("pill");

    pill.style.width = element.offsetWidth + "px";
    pill.style.left = element.offsetLeft + "px";
}
document.addEventListener("DOMContentLoaded", () => {
    const activeTab = document.querySelector(".nav-links li.active");

    // Load page WITHOUT breaking if element missing
    loadPage("home", activeTab);

    // Wait a bit so layout is ready, then move pill
    setTimeout(() => {
        movePill(activeTab);
    }, 170);
});