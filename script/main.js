var username = document.getElementById("username");
var logout = document.getElementById("logout");

var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
if (loggedInUser) {
    username.innerHTML = "Welcome, " + loggedInUser.name + "!";
}

logout.addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "./index.html"; // Redirect to index.html after logout
});