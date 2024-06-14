document.querySelector("form").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!username || !email || !password) {
        event.preventDefault();
        alert("Please fill in all fields.");
    }
});
