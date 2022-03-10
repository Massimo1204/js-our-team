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
const inputImage = document.getElementById('image');
const submit = document.getElementById('submit');
const message = document.getElementById('alert');
let newMembersCounter = 0;

content.innerHTML = "<div class='col-12 py-4'><h1 class='text-uppercase fw-bold'>our team</h1></div>";
for ( let i=0; i<team.length ; i++){
    const newCard = document.createElement('div')
    newCard.classList.add('col-4','mt-5','card');
    newCard.innerHTML = "<img src='img/"+team[i].image+"' class='my-img'> <p class='mt-3 fs-4'>"+team[i].name+"</p> <p>"+team[i].role+"</p>";
    content.append(newCard);
}

function displayMembers( team,content){
    const newCard = document.createElement('div')
    newCard.classList.add('col-4','mt-5','card');
    newCard.innerHTML = "<img src='"+team[team.length-1].image+"' class='my-img'> <p class='mt-3 fs-4'>"+team[team.length-1].name+"</p> <p>"+team[team.length-1].role+"</p>";
    content.append(newCard);
}

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
                image : inputImage.value,
            }
            team.push(member);
        }
    }
    displayMembers(team,content);
});