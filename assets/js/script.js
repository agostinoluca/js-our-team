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
 -function
 -addEventListener(e)
 -.preventDefault()
 -.push
 -.insertAdiacentHtml

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

    // utilizzo una funzione per creare il markup della card
    createCard(member, containerEl);
}

// richiamo tramite id il mio form per l'inserimento di nuovi membri
const addMember = document.getElementById('addMember');

// aggiungo un evento al submit del form
addMember.addEventListener('submit', function(e){
    // previene l'aggiornamento della pagina
    e.preventDefault();

    // pesco i dati dalle value del form e l'inserisco in una costante
    const newMember = {
        name: document.getElementById('nameMember').value,
        lastname: document.getElementById('lastNameMember').value,
        employment: document.getElementById('employmentMember').value,
        photo: document.getElementById('lastNameMember').value
    }

    // inserisco nella array il nuovo oggetto
    team.push(newMember);

    // creo la nuova card richiamando la funzione
    createCard(newMember, containerEl);

    // dopo il click cancello gli input dei value
    document.getElementById('nameMember').value = "";
    document.getElementById('lastNameMember').value = "";
    document.getElementById('employmentMember').value = "";
    document.getElementById('photoMember').value = "";
});


// funzione per la creazione del markup delle card dei membri
function createCard(prospect, parent){

        // creo una card organizzata per inserire le informazioni
        const postMarkup = 
        `
            <div class="card team_card";">
                <img src="./assets/img/${prospect.lastname}.jpg"" alt="${prospect.photo}">
                <div class="card-body d-flex flex-column justify-content-end">
                    <h5 class="card-title">${prospect.name} ${prospect.lastname}</h5>
                    <p class="card-text">${prospect.employment}</p>
                </div>
            </div>
        `

        // inserisco l'html appena scritto (prima del tag di chiusura) 
        parent.insertAdjacentHTML('beforeend', postMarkup);
};
