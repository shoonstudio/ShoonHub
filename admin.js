const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "admin@shoonhub.com" && password === "Shoon@2025"){

        message.style.color="#00ff88";
        message.innerHTML="✅ Login Success...";

        setTimeout(()=>{

            window.location.href="admin.html";

        },1000);

    }else{

        message.style.color="red";
        message.innerHTML="❌ Invalid Email or Password";

    }

});
