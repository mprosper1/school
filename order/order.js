// const menuData = {
//   nigerian: [
//     { name: "Jollof Rice", price: 14.99 },
//     { name: "Suya", price: 12.99 },
//     { name: "Moi Moi", price: 9.99 },
//   ],
//   italian: [
//     { name: "Spaghetti Carbonara", price: 13.49 },
//     { name: "Lasagna", price: 15.99 },
//     { name: "Margherita Pizza", price: 11.49 },
//   ],
//   french: [
//     { name: "Croissant", price: 3.99 },
//     { name: "Ratatouille", price: 14.49 },
//     { name: "Bouillabaisse", price: 17.99 },
//   ],
//   chinese: [
//     { name: "Sweet and Sour Pork", price: 12.49 },
//     { name: "Kung Pao Chicken", price: 13.99 },
//     { name: "Spring Rolls", price: 5.99 },
//   ],
//   portuguese: [
//     { name: "Bacalhau", price: 16.99 },
//     { name: "Francesinha", price: 14.99 },
//     { name: "Piri Piri Chicken", price: 12.99 },
//   ],
// };

// document
//   .getElementById("cuisineSelect")
//   .addEventListener("change", function () {
//     const cuisine = this.value;
//     const menuContainer = document.getElementById("menuItemsContainer");
//     menuContainer.innerHTML = ""; // Clear old items

//     if (menuData[cuisine]) {
//       const items = menuData[cuisine];

//       const heading = document.createElement("h3");
//       heading.textContent = "Menu Items";
//       menuContainer.appendChild(heading);

//       items.forEach((item) => {
//         const menuItem = document.createElement("div");
//         menuItem.classList.add("menu-item");

//         menuItem.innerHTML = `
//         <span>${item.name} <strong>$${item.price.toFixed(2)}</strong></span>
//         <div class="qty-control">
//           <button type="button" class="minus">−</button>
//           <span class="qty">0</span>
//           <button type="button" class="plus">+</button>
//         </div>
//       `;

//         menuContainer.appendChild(menuItem);
//       });

//       addQtyButtonListeners();
//     }
//   });

// function addQtyButtonListeners() {
//   document.querySelectorAll(".menu-item").forEach((item) => {
//     const minus = item.querySelector(".minus");
//     const plus = item.querySelector(".plus");
//     const qtyDisplay = item.querySelector(".qty");

//     let count = 0;

//     minus.addEventListener("click", () => {
//       if (count > 0) count--;
//       qtyDisplay.textContent = count;
//     });

//     plus.addEventListener("click", () => {
//       count++;
//       qtyDisplay.textContent = count;
//     });
//   });
// }

// ===== MENU DATA =====
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

// ===== DOM ELEMENTS =====
const orderForm = document.getElementById("orderForm");
const cuisineSelect = document.getElementById("cuisine");
const foodOptions = document.getElementById("foodOptions");
const orderItems = document.getElementById("orderItems");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const successPopup = document.getElementById("successPopup");

// ===== STATE =====
let currentOrder = {
  items: [],
  customer: {},
  subtotal: 0,
  total: 5.0, // includes delivery
};

// ===== EVENT LISTENERS =====
cuisineSelect.addEventListener("change", loadFoodOptions);
orderForm.addEventListener("submit", placeOrder);

// ===== FUNCTIONS =====
function loadFoodOptions() {
  const cuisine = cuisineSelect.value;
  if (!cuisine) return;

  const foods = menuData[cuisine].items;
  foodOptions.innerHTML = foods
    .map(
      (food) => `
    <div class="food-item">
      <div>
        <h3>${food.name}</h3>
        <p>$${food.price.toFixed(2)}</p>
      </div>
      <div class="quantity-selector">
        <button type="button" class="quantity-btn minus" data-name="${
          food.name
        }" data-price="${food.price}">-</button>
        <span class="quantity" data-name="${food.name}">0</span>
        <button type="button" class="quantity-btn plus" data-name="${
          food.name
        }" data-price="${food.price}">+</button>
      </div>
    </div>
  `
    )
    .join("");

  // Add event listeners to new buttons
  document.querySelectorAll(".quantity-btn").forEach((btn) => {
    btn.addEventListener("click", updateQuantity);
  });
}

function updateQuantity(e) {
  const btn = e.target;
  const name = btn.dataset.name;
  const price = parseFloat(btn.dataset.price);
  const quantityEl = document.querySelector(`.quantity[data-name="${name}"]`);
  let quantity = parseInt(quantityEl.textContent);

  if (btn.classList.contains("plus")) {
    quantity++;
  } else if (btn.classList.contains("minus") && quantity > 0) {
    quantity--;
  }

  quantityEl.textContent = quantity;
  updateOrderSummary();
}

function updateOrderSummary() {
  currentOrder.items = [];
  currentOrder.subtotal = 0;

  document.querySelectorAll(".food-item").forEach((item) => {
    const name = item.querySelector("h3").textContent;
    const price = parseFloat(item.querySelector("p").textContent.slice(1));
    const quantity = parseInt(item.querySelector(".quantity").textContent);

    if (quantity > 0) {
      currentOrder.items.push({ name, price, quantity });
      currentOrder.subtotal += price * quantity;
    }
  });

  currentOrder.total = currentOrder.subtotal + 5.0; // Add delivery

  // Update UI
  if (currentOrder.items.length === 0) {
    orderItems.innerHTML = "<p>Your selected items will appear here</p>";
  } else {
    orderItems.innerHTML = currentOrder.items
      .map(
        (item) => `
      <div class="order-summary-item">
        <span>${item.quantity}x ${item.name}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `
      )
      .join("");
  }

  subtotalEl.textContent = `$${currentOrder.subtotal.toFixed(2)}`;
  totalEl.textContent = `$${currentOrder.total.toFixed(2)}`;
}

function placeOrder(e) {
  e.preventDefault();

  // Save customer info
  currentOrder.customer = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    instructions: document.getElementById("instructions").value,
  };

  // Save to localStorage
  const orders = JSON.parse(localStorage.getItem("foodiesOrders")) || [];
  orders.push({
    ...currentOrder,
    id: Date.now(),
    date: new Date().toLocaleString(),
    status: "Order Placed",
  });
  localStorage.setItem("foodiesOrders", JSON.stringify(orders));

  // Show success popup
  successPopup.classList.add("show");
  setTimeout(() => {
    successPopup.classList.remove("show");
    orderForm.reset();
    foodOptions.innerHTML = "";
    orderItems.innerHTML = "<p>Your selected items will appear here</p>";
    currentOrder = { items: [], customer: {}, subtotal: 0, total: 5.0 };
    subtotalEl.textContent = "$0.00";
    totalEl.textContent = "$5.00";
  }, 3000);
}
