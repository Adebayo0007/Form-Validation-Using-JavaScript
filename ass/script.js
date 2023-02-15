// const h1 = document.getElementById("test") 
// h1.textContent = "changed"
// h1.style.color = "red"
// const paragraphs = document.getElementsByTagName("p")
// const classes = document.getElementsByClassName("h")

// const h1 = document.querySelector("#test");
// const p = document.querySelector("p");
// const h = document.querySelector(".h");

// const className = document.getElementsByClassName("list");
// const lists = document.querySelectorAll(".list");
// const ul = document.querySelector("ul");
// console.log("first", className, querySelector);
// ul.innerHTML += `<li class="list">new name</li>`;
// console.log("second", className, querySelector);

// function generateRandomColor() {
//     let maxVal = 0xFFFFFF; // 16777215.
//     let randomNumber = Math.random() * maxVal;
//     randomNumber = Math.floor(randomNumber);
//     randomNumber = randomNumber.toString(16);
//     let randColor = randomNumber.padStart(6, 0);
//     return `#${randColor.toUpperCase()}`
// }

// const btn = document.querySelector("button");
// const print = () => {
//     const body = document.querySelector("body");
//     body.style.backgroundColor = generateRandomColor();
// }
// btn.addEventListener("mouseover", ()=>{
//    const name = window.prompt("enter your name")
//    console.log("n", name)
//    alert("Welcome " + name);
// })

// lists.forEach(l=> l.addEventListener("mouseover", ()=>{
//     l.style.color = generateRandomColor();
// }));

const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }

    return (false)
}


const form = document.querySelector("form");

const clearErrors = () => {
    console.log("begin")
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => { console.log("clearing", error.textContent) ;error.textContent = "" })
    console.log("end")
}

const validateForm = () => {
    let isValid = true;
    clearErrors();
    const inputs = document.querySelectorAll("input");
    const gender = document.querySelector("select");
    inputs.forEach(input => {
        if (input.name == "firstname" || input.name == "lastname") {
            if (input.value.trim() == "") {
                isValid = false
                const errorTag = document.querySelector(`#${input.name}`);
                errorTag.textContent = `${input.name} is required`;
            }
        }
        if (input.name == "email" && !validateEmail(input.value)) {
            isValid = false
            const errorTag = document.querySelector(`#${input.name}`);
            errorTag.textContent = `${input.name} is not valid!`;
        }
        if (input.name == "age" && (parseInt(input.value) < 18 || parseInt(input.value) > 40 || input.value.trim() == "")) {
            isValid = false
            const errorTag = document.querySelector(`#${input.name}`);
            errorTag.textContent = `${input.name} must be between 18-40!`;
        }
        const password = document.querySelector(`[name="password"]`);
        if (input.name == "password" && input.value.length < 6) {
            isValid = false
            const errorTag = document.querySelector(`#${input.name}`);
            errorTag.textContent = `${input.name} must contain 6 or more characters!`;
        }
        if (input.name == "confirm" && input.value != password.value) {
            isValid = false
            const errorTag = document.querySelector(`#${input.name}`);
            errorTag.textContent = `Passwords do not match`;
        }


    });
    if (gender.value == "") {
        isValid = false
        const errorTag = document.querySelector(`#${gender.name}`);
        errorTag.textContent = `Please select gender!`;
    }

   return isValid;
}


form.addEventListener("submit", (e) => {
    const isValid =  validateForm();
    if (isValid) {
        clearErrors()
        alert("Congratulations! Registration Sucessful");
        location.reload()

    }
    else e.preventDefault();
})

