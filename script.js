   // Navbar Section
const menu = document.getElementById("menuBtn");
        const mbMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById("menuIcon");

        menu.addEventListener("click", () => {
            mbMenu.classList.toggle('hidden');

            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
        });


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.classList.remove('bg-black','text-white');
    navbar.classList.add('bg-transparent','backdrop-blur-md','text-black')
  } else{
    navbar.classList.remove('bg-transparent','backdrop-blur-md','text-black');
    navbar.classList.add('bg-black','text-white');
  }
})



        
        //Projects section

const cards = [
    {
    ProjectTitle: "Beauty Parlour",
    ProjectImage: "Assects/verse-black-1.png",
    ProjectDescription: "A modern beauty parlour website.",
    ProjectLink: "https://beauty-parlour-opal.vercel.app/"
  },
  {
    ProjectTitle: "Restaurant Website",
    ProjectImage: "Assects/Restarents.jpeg",
    ProjectDescription: "Food ordering and restaurant UI.",
    ProjectLink: "https://yourprojectlink.com"
  },
  {
    ProjectTitle: "Portfolio",
    ProjectImage: "Assects/portFolio.png",
    ProjectDescription: "Personal portfolio website.",
    ProjectLink: "https://yourprojectlink.com"
  },
  {
    ProjectTitle: "E-Commerce Store",
    ProjectImage: "Assects/ECom.jpeg",
    ProjectDescription: "Online shopping platform.",
    ProjectLink: "https://yourprojectlink.com"
  }
];


const cardContainer = document.getElementById('cardContainer');

cards.forEach(card => {
    const cardPro = document.createElement("a");

    cardPro.href = card.ProjectLink;
    cardPro.target = "_blank";
    cardPro.className = `
    bg-white rounded-xl shadow-md overflow-hidden 
    hover:shadow-xl transition cursor-pointer`;

    cardPro.innerHTML = ` 
            <img src="${card.ProjectImage}" alt="${card.ProjectTitle}" class="h-40 p-1 w-full object-cover">

            <div class="p-4">
                <h2 class="text-lg font-semibold mb-2">${card.ProjectTitle}</h2>
                <p class="text-gray-600 text-sm">${card.ProjectDescription}</p>
            </div>
`;
cardContainer.appendChild(cardPro);
});