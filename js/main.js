const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const content = document.getElementById('main-content');
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const submit = document.getElementById('submit');
const message = document.getElementById('alert');
let newMembersCounter = 0;

function displayMembers( team,content){
    content.innerHTML='';
    for ( let i=0; i<team.length ; i++){
        const newCard = document.createElement('div')
        newCard.classList.add('col-4','mt-5');
        newCard.innerHTML = "<img src='img/"+team[i].image+"' class='img-fluid'> <p class='mt-3 fs-4'>"+team[i].name+"</p> <p>"+team[i].role+"</p>";
        content.append(newCard);
    }
}

displayMembers(team,content);

submit.addEventListener('click',function(){
    message.innerHTML='';
    newMembersCounter++;
    if(newMembersCounter>0 && newMembersCounter<5){
        if(inputName.value =='' || inputRole.value == ''){
            message.innerHTML = "Don't leave Name or Role blank please.";
            newMembersCounter--;
        }else{
            const member = {
                name : inputName.value,
                role : inputRole.value,
                image : 'new-team-member-0'+newMembersCounter+'.jpg',
            }
            team.push(member);
        }
    }else if(newMembersCounter>=5){
        message.innerHTML = 'Sorry! The team is full.';
    }
    displayMembers(team,content);
});