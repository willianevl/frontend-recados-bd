

window.addEventListener('load', () => {
    ShowCheckedNotes();
});

function OpenURL(href){
    return window.location.href = `${href}`
}

async function ShowCheckedNotes() {
    const UserInf = localStorage.getItem('UserInf');
    const UserID = JSON.parse(UserInf)

    const data = await axios.get(`https://growdev-backend-recados.herokuapp.com/noteschecked/${UserID}`).then((response) => response.data);

    const content = document.getElementById('tableBody');

    let indice = 0;
    let i = 1;
    data.forEach((note) => {
        content.innerHTML += `
        <tr> 
            <td>${i}</td>
            <td>${note.title}</td>
            <td>${note.description}</td>
            <td>${note.date}</td>
        </tr>
        `
        i++
        indice++
    });
}

document.getElementById('homePage').addEventListener('click', () => {
    OpenURL('inLogin.html');
});

function Logout(){
    localStorage.removeItem('UserInf');
    localStorage.removeItem('NoteID');
    OpenURL('index.html');
}
