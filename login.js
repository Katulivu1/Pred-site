document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password123") {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "admin.html";
    } else {
        document.getElementById("login-error").style.display = "block";
    }
});

if (localStorage.getItem("isAdmin") === "true") {
    window.location.href = "admin.html";
}