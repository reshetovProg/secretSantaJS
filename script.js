users = []
currentUser = {}


function registry(){
    name = document.getElementById("name").value;
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;
    users.push({"name": name, "login": login, "password": password});   
    // window.location.replace("index.html");
    let json = JSON.stringify(users);
    console.log(json);
}

function showUsers(){
    boxUsers = document.getElementsByClassName("users")[0]
    users.forEach(user => {
        let line = document.createAttribute("div")
        line.textContent = `${user.name} : ${user.login} : ${user.password}`
        boxUsers.setAttributeNode(line);
    });
}
