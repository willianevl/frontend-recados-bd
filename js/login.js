function OpenURL(href){
    return window.location.href = `${href}`
}

function showPassword(){        
    const input = document.getElementById('password');
    const icon = document.getElementById('visibility');
    
if(input.type === 'password'){
    input.type = 'text';
    icon.innerHTML = 'visibility';
} else {
    input.type = 'password';
    icon.innerHTML = 'visibility_off';
}
}

function OpenURL(href){
    return window.location.href = `${href}`
}

async function login(){
    const listOfUsers = await axios.get("https://growdev-backend-recados.herokuapp.com/user").then((response) => {
        return(response.data);
    });

    const userName = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    const user = listOfUsers.find((f) => f.username === userName);

    console.log(user)
    // if (!user){
    //     return modalLoginFailbyUserName();
    // } 
    // if(user.password !== password){
    //     return modalLoginFailbyPassword();
    // }

    // if(user.username === userName && user.password === password){
    //     return OpenURL('inLogin.html');
    // }

    // const UserInf = JSON.stringify(user.id)
    // localStorage.setItem('UserInf', UserInf)
}

function modalLoginFailbyUserName(){
    var myModal = new bootstrap.Modal(document.getElementById('loginFailbyUser'), {});
    myModal.show();
}

function modalLoginFailbyPassword(){
    var myModal = new bootstrap.Modal(document.getElementById('loginFailbyPassword'), {});
    myModal.show();
}