// Menu Data
const menuData = {
  nigeria: {
    name: "Nigerian",
    items: [
      { name: "Jollof Rice", price: 14.99 },
      { name: "Pounded Yam & Egusi Soup", price: 16.99 },
      { name: "Suya (Spicy Grilled Beef)", price: 12.99 },
      { name: "Moi Moi", price: 9.99 },
      { name: "Plantain (Fried or Roasted)", price: 5.99 },
      { name: "Chin Chin", price: 4.99 },
      { name: "Zobo Drink", price: 3.99 },
      { name: "Palm Wine", price: 7.99 },
    ],
  },
  china: {
    name: "Chinese",
    items: [
      { name: "Peking Duck", price: 22.99 },
      { name: "Xiao Long Bao", price: 10.99 },
      { name: "Kung Pao Chicken", price: 14.99 },
      { name: "Mapo Tofu", price: 12.99 },
      { name: "Spring Rolls", price: 6.99 },
      { name: "Fried Rice", price: 8.99 },
      { name: "Bubble Tea", price: 5.99 },
      { name: "Baijiu", price: 9.99 },
    ],
  },
  portugal: {
    name: "Portuguese",
    items: [
      { name: "Bacalhau à Brás", price: 18.99 },
      { name: "Francesinha", price: 16.99 },
      { name: "Arroz de Marisco", price: 21.99 },
      { name: "Cozido à Portuguesa", price: 19.99 },
      { name: "Pasteis de Nata", price: 4.99 },
      { name: "Pão com Chouriço", price: 7.99 },
      { name: "Vinho Verde", price: 8.99 },
      { name: "Ginjinha", price: 6.99 },
    ],
  },
  italy: {
    name: "Italian",
    items: [
      { name: "Spaghetti Carbonara", price: 16.99 },
      { name: "Risotto alla Milanese", price: 18.99 },
      { name: "Osso Buco", price: 24.99 },
      { name: "Margherita Pizza", price: 14.99 },
      { name: "Bruschetta", price: 8.99 },
      { name: "Tiramisu", price: 7.99 },
      { name: "Chianti Wine", price: 9.99 },
      { name: "Limoncello", price: 6.99 },
    ],
  },
  france: {
    name: "French",
    items: [
      { name: "Boeuf Bourguignon", price: 22.99 },
      { name: "Coq au Vin", price: 20.99 },
      { name: "Ratatouille", price: 16.99 },
      { name: "Duck Confit", price: 24.99 },
      { name: "French Onion Soup", price: 9.99 },
      { name: "Crème Brûlée", price: 8.99 },
      { name: "Bordeaux Wine", price: 12.99 },
      { name: "Champagne", price: 14.99 },
    ],
  },
};

class MenuItem {
  constructor(name, price, description = "") {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  render() {
    return `
      <div class="menu-item">
        <div>
          <h3 class="food_name">${this.name}</h3>
          <p class="food_description">${this.description}</p>
        </div>
        <span class="price">$${this.price.toFixed(2)}</span>
      </div>
    `;
  }
}

class MenuRenderer {
  constructor(countryKey, data) {
    this.country = countryKey;
    this.menu = data[countryKey];
    this.container = document.getElementById("menu-container");
    this.title = document.getElementById("menu-title");
  }

  renderMenu() {
    this.title.textContent = `${this.menu.name} Menu`;

    const descriptions = {
      "Jollof Rice": "Aromatic rice cooked in a rich tomato sauce with spices.",
      "Pounded Yam & Egusi Soup":
        "Smooth yam paste with melon seed soup and assorted meats.",
      "Suya (Spicy Grilled Beef)":
        "Skewered beef with peanut spice rub, served with onions.",
      "Moi Moi": "Steamed bean pudding with fish and boiled eggs.",
      "Plantain (Fried or Roasted)":
        "Sweet ripe plantain prepared to your preference.",
      "Chin Chin": "Crunchy fried dough snacks, lightly sweetened.",
      "Zobo Drink": "Refreshing hibiscus tea with ginger and pineapple.",
      "Palm Wine": "Traditional fermented palm sap (alcoholic).",
      "Peking Duck": "Crispy imperial duck with pancakes & hoisin sauce.",
      "Xiao Long Bao": "Juicy pork dumplings with hot soup inside.",
      "Kung Pao Chicken": "Spicy stir-fry with chicken, peanuts, and chili.",
      "Mapo Tofu": "Spicy tofu with minced pork in chili sauce.",
      "Spring Rolls": "Crispy fried rolls stuffed with fresh veggies.",
      "Fried Rice": "Wok-tossed rice with eggs, veggies, and soy sauce.",
      "Bubble Tea": "Sweet tea with chewy tapioca pearls.",
      Baijiu: "Strong Chinese liquor with bold, fiery taste.",
      "Bacalhau à Brás": "Shredded cod with eggs, potatoes, and olives.",
      Francesinha:
        "Layered sandwich with meats, melted cheese, and beer sauce.",
      "Arroz de Marisco": "Rich seafood rice simmered in savory broth.",
      "Cozido à Portuguesa":
        "Hearty Portuguese stew with meats, veggies, and sausages.",
      "Pasteis de Nata": "Creamy custard tarts with flaky pastry.",
      "Pão com Chouriço": "Smoky chorizo baked in fresh bread.",
      "Vinho Verde": "Young, crisp Portuguese green wine.",
      Ginjinha: "Sweet cherry liqueur from Portugal.",
      "Spaghetti Carbonara": "Creamy pasta with eggs, cheese, and pancetta.",
      "Risotto alla Milanese": "Creamy saffron-infused Italian rice dish.",
      "Osso Buco": "Braised veal shanks with gremolata.",
      "Margherita Pizza": "Classic tomato, mozzarella, and basil pizza.",
      Bruschetta: "Toasted bread topped with tomatoes and basil.",
      Tiramisu: "Coffee-soaked layers with mascarpone cream.",
      "Chianti Wine": "Robust Italian red from Tuscany.",
      Limoncello: "Zesty Italian lemon liqueur.",
      "Boeuf Bourguignon": "Slow-cooked beef in red wine sauce.",
      "Coq au Vin": "Chicken braised in red wine.",
      Ratatouille: "Provençal vegetable stew with herbs.",
      "Duck Confit": "Slow-cooked duck in its own fat.",
      "French Onion Soup": "Caramelized onion soup with cheesy toast.",
      "Crème Brûlée": "Creamy custard with caramelized sugar top.",
      "Bordeaux Wine": "Elegant French red blend.",
      Champagne: "Bubbly French sparkling wine.",
    };

    const left = this.menu.items.slice(0, 4);
    const right = this.menu.items.slice(4);

    const leftHTML = left
      .map((item) => {
        const desc = descriptions[item.name] || "";
        return new MenuItem(item.name, item.price, desc).render();
      })
      .join("");

    const rightHTML = right
      .map((item) => {
        const desc = descriptions[item.name] || "";
        return new MenuItem(item.name, item.price, desc).render();
      })
      .join("");

    this.container.innerHTML = `
      <div class="menu-column">
        <h2 class="menu_subheading">Main Dishes</h2>
        ${leftHTML}
      </div>
      <div class="menu-column">
        <h2 class="menu_subheading">Sides & Drinks</h2>
        ${rightHTML}
      </div>
    `;
  }
}

const country = document.body.dataset.country;
const renderer = new MenuRenderer(country, menuData);
renderer.renderMenu();
