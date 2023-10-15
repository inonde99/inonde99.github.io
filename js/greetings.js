const loginForm = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginForm input");
const loginName = document.querySelector("h1");
const userPage = document.querySelector("#userPage");
const logoutButton = document.querySelector("#logoutButton");

const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "userName";

function paintGreetings() 
{
    const userName = localStorage.getItem(KEY_USERNAME); 
    if (userName !== null) {
        loginForm.classList.add(HIDDEN_CLASSNAME);

        loginName.innerText = `Hello ${userName}!!`;
        userPage.classList.remove(HIDDEN_CLASSNAME);
    }
    else {
        loginForm.classList.remove(HIDDEN_CLASSNAME);

        loginName.innerText = "";
        userPage.classList.add(HIDDEN_CLASSNAME);
    }
}

function onLoginFormSubmit(event)
{
    event.preventDefault();

    const userName = loginInput.value;
    localStorage.setItem(KEY_USERNAME, userName);

    paintGreetings();
}

loginForm.addEventListener("submit", onLoginFormSubmit);


paintGreetings();

