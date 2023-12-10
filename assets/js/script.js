/* 

Utilizzando i dati forniti**, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

**dati forniti:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg


##Tools:
 -const / let;
 -array;
 -innerText / innerHtml;
 -getElementById;
 -for;
 -console.log


*/

// creo una array di oggetti con membri del team e le relative informazioni
let team = [
    {
        name: 'Wayne',
        lastname: 'Barnett',
        employment: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        lastname: 'Caroll',
        employment: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        lastname: 'Gordon',
        employment: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        lastname: 'Lopez',
        employment: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        lastname: 'Estrada',
        employment: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        lastname: 'Ramos',
        employment: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
    ]

// stampo in console le informazioni di ogni membro del team
/* console.log(team);

for (let i = 0; i < team.length; i++) {
    console.log(team[i].name);
    console.log(team[i].lastname);
    console.log(team[i].employment);
    console.log(team[i].photo);
    console.log(member);
} */


// aggiungo in una costante il mio div del HTML
const containerEl = document.getElementById('row');

// stampo le informazioni su DOM sottoforma di stringhe
for (let i = 0; i < team.length; i++) {
    const member = team[i];

    // creo una card organizzata per inserire le informazioni
    const postMarkup = 
    `
        <div class="card team_card";">
            <img src="./assets/img/${member.lastname}.jpg"" alt="${member.photo}">
            <div class="card-body d-flex flex-column justify-content-end">
                <h5 class="card-title">${member.name} ${member.lastname}</h5>
                <p class="card-text">${member.employment}</p>
            </div>
        </div>
    `

    containerEl.insertAdjacentHTML('beforeend', postMarkup);
}

