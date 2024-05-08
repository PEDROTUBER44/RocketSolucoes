async function fazPost(url, body) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(body)
    });
    return response.json();
}

async function cadastraUsuario() {
    let url = "http://127.0.0.1:8080/users";
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let body = {
        "email": email,
        "password": password
    };

    fazPost(url, body);
}