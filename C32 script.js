




function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "Блестящий") {
      window.location.href="C32 3.html";
      return false;
    } else if (password === "7892")  {
    
        window.location.href="C32 2.html";
        return false;
    }else{
        alert("Неверно")
    }
    }


