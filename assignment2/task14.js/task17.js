// Display 3 cards in a row through js
const cards = [
    {
      id: 1,
      name: "Card 1",
      image: "image1.jpg"
    },
    {
      id: 2,
      name: "Card 2",
      image: "image2.jpg"
    },
    {
      id: 3,
      name: "Card 3",
      image: "image3.jpg"
    },
    {
      id: 4,
      name: "Card 4",
      image: "image4.jpg"
    },
    {
      id: 5,
      name: "Card 5",
      image: "image5.jpg"
    }
  ];
  
  const cardHTML = cards.map((card, index) => {
    return `
      <div class="card">
        <img src="${card.image}" alt="${card.name}">
        <h2>${card.name}</h2>
      </div>
    `;
  }).join("");
  
  document.getElementById("cards").innerHTML = cardHTML;