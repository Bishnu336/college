// Faculty
// Sample data for each department
const facultyData = {
    artsAndHumanities: [
        { image: "img/10.jpeg", name: "Kelzang Namgay", role: " Lecturer" },
        { image: "img/26.png", name: "Yangdon Tshomo", role: " Lecturer" },
        { image: "img/17.jpeg", name: "Sonam Zangpo", role: "  Lecturer" },
        { image: "img/27.png", name: "Ngawang Tengay", role: " Lecturer" },
        { image: "img/28.png", name: "Dr. S Chitra", role: "Assistant Professor" },
        { image: "img/2.jpeg", name: "Tshering Samdrup", role: "Associate Lecturer" },
        { image: "img/8.jpeg", name: "Sangay Choden", role: "Associate Lecturer" },
        { image: "img/12.jpeg", name: "Anju Chhetri", role: "Lecturer" },
        { image: "img/9.jpeg", name: "Sangay Lhaden", role: "Associate Lecturer" }
    ],
    socialScience: [
        { image: "img/13.jpeg", name: "Leki Sangay", role: "Lecturer" },
        { image: "img/31.png", name: "Tandin Penjor", role: "Associate Lecturer" },
        { image: "img/30.png", name: "Chandra Lal Adhakari", role: "Associate Lecturer" },
        { image: "img/4.jpeg", name: "Jeewan Kumar Bastola", role: "Associate Lecturer" },
        { image: "img/18.png", name: "Ugyen Lhendup", role: "Lecturer" },
        { image: "img/15.png", name: "Dr. Yezer", role: "Lecturer" },
        { image: "img/14.png", name: "Sonam Dendup", role: "Lecturer" },
        { image: "img/29.png", name: "Sonam Choeki Wangmo", role: " Asssistant Lecturer" },
    ],
    lifeScience: [
        { image: "img/34.png", name: "Karma Wangchu", role: "Lecturer" },
        { image: "img/33.png", name: "Ugyen Dorji Tamang", role: "Assistant Lecturer" },
        { image: "img/32.png", name: "Tshering Dekar", role: "Associate Lecturer" },
        { image: "img/1.jpeg", name: "Mohan singh Rana", role: "Associate Lecturer" },
        { image: "img/11.jpeg", name: "Yangchen Tshomo", role: "Assistant Lecturer" }
    ],
    MathematicalScience : [
        { image: "img/25.png", name: "Sangay Thinley", role: "Lecturer" },
        { image: "img/21.jpeg", name: "Norbu Zangpo", role: "Assistant Lecturer" },
        { image: "img/23.png", name: "Pema Wangdi", role: "Lecturer" },
        { image: "img/20.png", name: "Dechen Lhendup", role: "Associate Lecturer" },
        { image: "img/5.jpeg", name: "Ugyen Sandruo Tshering", role: "Assistant Lecturer" },
        { image: "img/6.jpeg", name: "Manju Gurung", role: "Associate Lecturer" },
        { image: "img/7.jpeg", name: "Chimi Lhazom", role: "Assistant Lecturer" },
        { image: "img/35.png", name: "Paul Raj ", role: "Assistant Professor" },
        { image: "img/36.png", name: "Karma Dorji", role: "Associate Lecturer" },
        { image: "img/37.png", name: "R. Balamurugan", role: "Assistant Professor" }
    ],
    PhysicalScience: [
        { image: "img/3.jpeg", name: "Dr. Jas Raj Subba", role: "Lecturer" },
        { image: "img/19.jpeg", name: "Mon Bahadhur Ghalley", role: "Associate Lecturer" },
        { image: "img/41.png", name: "Tshewnag Dendup", role: "Assistant Professor" },
        { image: "img/40.png", name: "Punam Mafchan", role: "Lecturer" },
        { image: "img/39.png", name: "Yetho Lhamo", role: "Assistant Lecturer" },
        { image: "img/38.png", name: "Sonam Phuntsho", role: "Assistant Lecturer" },
        { image: "img/24.jpeg", name: "Shacha Thinley", role: "Associate Lecturer" }

    ]
};

// Function to create faculty cards for a department
function loadFacultyCards(departmentId, facultyArray) {
    const container = document.getElementById(departmentId);
    facultyArray.forEach(faculty => {
        // Create card element
        const card = document.createElement('div');
        card.classList.add('faculty-card');

        // Faculty image
        const img = document.createElement('img');
        img.src = faculty.image;
        img.alt = `${faculty.name} photo`;
        card.appendChild(img);

        // Faculty info container
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('faculty-info');

        // Faculty name
        const name = document.createElement('div');
        name.classList.add('faculty-name');
        name.textContent = faculty.name;
        infoContainer.appendChild(name);

        // Faculty role
        const role = document.createElement('div');
        role.classList.add('faculty-role');
        role.textContent = faculty.role;
        infoContainer.appendChild(role);

        // Append info container to card
        card.appendChild(infoContainer);

        // Append card to container
        container.appendChild(card);
    });
}

// Load faculty profiles on page load for each department
window.onload = () => {
    loadFacultyCards("artsAndHumanities", facultyData.artsAndHumanities);
    loadFacultyCards("socialScience", facultyData.socialScience);
    loadFacultyCards("lifeScience", facultyData.lifeScience);
    loadFacultyCards("MathematicalScience", facultyData.MathematicalScience);
    loadFacultyCards("PhysicalScience", facultyData.PhysicalScience);
};


