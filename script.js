function registry(){
    let readJson = localStorage.getItem("users")
    let users = readJson ? JSON.parse(readJson) : [];

    name = document.getElementById("name").value;
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;
    users.push({"name": name, "login": login, "password": password});
    let json = JSON.stringify(users);
    localStorage.setItem("users",json);   
    window.location.replace("index.html");
}

function showUsers(){
    boxUsers = document.getElementsByClassName("users")[0]
    let json = localStorage.getItem("users")
    let users = JSON.parse(json)
    users.forEach(user => {
        let line = document.createElement("div")
        line.textContent = `${user.name} : ${user.login} : ${user.password}`
        boxUsers.appendChild(line);
    });
}

function clearUsers(){
    localStorage.clear();
}
