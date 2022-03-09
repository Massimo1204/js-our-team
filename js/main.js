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

for ( let i=0; i<team.length ; i++){
    const newCard = document.createElement('div')
    newCard.classList.add('col-4');
    newCard.innerHTML = "<img src='img/"+team[i].image+"' class='img-fluid'> <p> Name : "+team[i].name+"</p> <p> Role : "+team[i].role+"</p>";
    content.append(newCard);
}