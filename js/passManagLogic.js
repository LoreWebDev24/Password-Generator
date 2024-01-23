// MASKING PASS FUNCTION

function maskPassword(password) {
    let passText = ""
    for (let index = 0; index < password.length; index++) {
        passText += "*"
    }
    return passText
}

// COPY TEXT FUNCTION :

function copyText(txt) {
    navigator.clipboard.writeText(txt);
}

// LOGIC TO FILL THE TABLE WITH DATA: 

const showPasswords = () => {
    let table = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if (data == null || JSON.parse(data).length == 0) {
        table.innerHTML = "<span>Any Password to Display</span>"
    }
    else {
        table.innerHTML = `<thead>
        <th>Website/App</th>
        <th>Username</th>
        <th>Password</th>
        <th>Delete</th>
    </thead> `
        let array = JSON.parse(data);
        let content = ""
        for (let index = 0; index < array.length; index++) {
            const element = array[index];

            content += `<tbody><tr>
    <td>${element.website} <img onclick="copyText('${element.website}')" src="img/copy.svg" alt="Copy Button" width="15" height="15">
    </td>
    <td>${element.username} <img onclick="copyText('${element.username}')" src="img/copy.svg" alt="Copy Button" width="15" height="15">
    </td>
    <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="img/copy.svg" alt="Copy Button" width="15" height="15">
    </td>
    <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
        </tr></tbody>`
        }
        table.innerHTML = table.innerHTML + content

    }
    website.value = ""
    username.value = ""
    password.value = ""
}

showPasswords()


document.querySelector(".btn").addEventListener("click", (e) => {

    e.preventDefault()


    let passwords = localStorage.getItem("passwords")

    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })

        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value, username: username.value, password: password.value })

        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords()
})

// DELETE PASSWORD

const deletePassword = (website) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) => {
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    showPasswords()
}

console.log(localStorage)

