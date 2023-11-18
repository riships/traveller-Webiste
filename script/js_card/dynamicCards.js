// Assuming you have a container element with class 'card-wrapper'
const mainDiv = document.getElementsByClassName('card-wrapper')[0];

const cardData = [
    {
        imgUrl: "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
        heading: "Card Heading",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.",
        buttonLink: "#",
        buttonText: "Find out more"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
        heading: "Card Heading 1",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.",
        buttonLink: "#",
        buttonText: "Find out more"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
        heading: "Card Heading 2",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.",
        buttonLink: "#",
        buttonText: "Find out more"
    }
];
// Loop through the cardData array
cardData.forEach(data => {
    // Create elements dynamically for each item in the array
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card swiper-slide';

    const imgElement = document.createElement('img');
    imgElement.src = data.imgUrl;
    imgElement.alt = "";

    const cardContentDiv = document.createElement('div');
    cardContentDiv.className = 'card-content';

    const headingElement = document.createElement('h2');
    headingElement.className = 'card-h2';
    headingElement.textContent = data.heading;

    const paragraphElement = document.createElement('p');
    paragraphElement.className = 'card-p';
    paragraphElement.textContent = data.paragraph;

    const linkElement = document.createElement('a');
    linkElement.href = data.buttonLink;
    linkElement.className = 'button card-a';
    linkElement.textContent = data.buttonText;

    const spanElement = document.createElement('span');
    spanElement.className = 'material-symbols-outlined';
    spanElement.textContent = 'arrow_right_alt';

    // Build the structure
    mainDiv.appendChild(cardDiv);
    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(cardContentDiv);
    cardContentDiv.appendChild(headingElement);
    cardContentDiv.appendChild(paragraphElement);
    cardContentDiv.appendChild(linkElement);
    linkElement.appendChild(spanElement);
});
