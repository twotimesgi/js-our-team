let teamMembers = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "img": "walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "img": "scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg"
    }
];

createCards(); 
document.getElementById("addMemberButton").addEventListener("click", function () {
    const newName = document.getElementById("name").value; 
    const newRole = document.getElementById("role").value; 
    const newImg = document.getElementById("image").value; 
    const newMember = {
        "name": newName,
        "role": newRole,
        "img": newImg
    }
    teamMembers.push(newMember);
    createCards();
});

function createCards() {
    const teamHTML = document.querySelector(".team-container");
    let items = '';
    for (let i = 0; i < teamMembers.length; i++) {
        const imgHTML = teamMembers[i].img;
        const nameHTML = teamMembers[i].name;
        const roleHTML = teamMembers[i].role;
        items += 
        `<div class="team-card">
            <div class="card-image">
                <img src="img/${imgHTML}" alt="${nameHTML}"/>
            </div>
            <div class="card-text">
            <h3>${nameHTML}</h3>
            <p>${roleHTML}</p>
            </div>
        </div>`;
    };
    teamHTML.innerHTML = items;
}
