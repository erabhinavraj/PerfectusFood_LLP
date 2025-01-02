document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully.");

  // Close offcanvas when any non-dropdown nav-link is clicked
  document
    .querySelectorAll(".offcanvas-body .nav-link:not(.dropdown-toggle)")
    .forEach((link) => {
      link.addEventListener("click", function () {
        const offcanvasElement = document.querySelector("#offcanvasDarkNavbar");
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvas.hide();
      });
    });

  // Handle "Order Now" button click to show modal
  document.getElementById("orderNowBtn").addEventListener("click", () => {
    const orderModal = new bootstrap.Modal(
      document.getElementById("orderModal")
    );
    orderModal.show();
  });

  // Close the order modal when an option is selected
  document.querySelectorAll("#orderModal .order-option").forEach((option) => {
    option.addEventListener("click", () => {
      const orderModal = bootstrap.Modal.getInstance(
        document.getElementById("orderModal")
      );
      orderModal.hide();
    });
  });

  // Manage dropdown behavior inside the offcanvas
  const dropdownLink = document.querySelector(".nav-item.dropdown > .nav-link");
  const dropdownMenu = dropdownLink.nextElementSibling;

  let isDropdownOpen = false;

  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (isDropdownOpen) {
      // Close the dropdown
      dropdownMenu.classList.remove("show");
    } else {
      // Open the dropdown
      dropdownMenu.classList.add("show");
    }

    isDropdownOpen = !isDropdownOpen;
  });

  // Close dropdown when clicking outside, but keep the offcanvas open
  document.addEventListener("click", (e) => {
    if (!dropdownLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
      isDropdownOpen = false;
    }
  });
});

//   footer and button for back to top

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const bottomMessage = document.getElementById("bottomMessage");
  let messageTimeout;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.style.opacity = 1; // Fully visible
          bottomMessage.style.display = "block"; // Show bottom message

          // Clear and reset timeout for hiding the message
          clearTimeout(messageTimeout);
          messageTimeout = setTimeout(() => {
            bottomMessage.style.display = "none";
          }, 1500);
        } else {
          footer.style.opacity = 0.5; // Transparent
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the footer is visible
  );

  observer.observe(footer);

  // Show "Back to Top" button on scroll
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// Welcome Section Dynamic effect typing starts
// Array of phrases to simulate dynamic typing effect
const phrases = [
  "Savor the taste of perfection 🍽️",
  "Every bite is a delightful experience ✨",
  "Passion & Taste in Every Dish 😋",
  "Creating Memories One Meal at a Time 💭",
];

let index = 0;
let charIndex = 0;
const speed = 100; // Typing speed (in milliseconds)
const element = document.getElementById("dynamic-text");

// Function to simulate the typing effect
function typeEffect() {
  if (charIndex < phrases[index].length) {
    element.textContent += phrases[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 2000); // Pause for 2 seconds before erasing
  }
}

// Function to simulate deleting the text
function eraseEffect() {
  if (charIndex > 0) {
    element.textContent = phrases[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, speed);
  } else {
    index = (index + 1) % phrases.length; // Loop through the phrases
    setTimeout(typeEffect, speed);
  }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", typeEffect);
// Welcome Section Dynamic effect typing Ends above

// Menu Dynamic Effcect
// Menu categories to simulate dynamic typing effect
const menuCategories = [
  "Burgers 🍔",
  "Rice Specials 🍚",
  "Soups & Noodles 🍜",
  "Wraps & Rolls 🌯",
  "BBQ & Grills 🔥",
  "Combo Deals 🧑‍🤝‍🧑",
];

let menuIndex = 0; // Separate index for Menu Highlights
let menuCharIndex = 0; // Separate charIndex for Menu Highlights
const menuSpeed = 100; // Typing speed (milliseconds)
const menuElement = document.getElementById("dynamic-menu-text");

// Function to simulate typing effect for Menu Highlights
function typeMenuEffect() {
  if (menuCharIndex < menuCategories[menuIndex].length) {
    menuElement.textContent += menuCategories[menuIndex].charAt(menuCharIndex);
    menuCharIndex++;
    setTimeout(typeMenuEffect, menuSpeed);
  } else {
    setTimeout(eraseMenuEffect, 2000); // Pause for 2 seconds before erasing
  }
}

// Function to simulate deleting the text in Menu Highlights
function eraseMenuEffect() {
  if (menuCharIndex > 0) {
    menuElement.textContent = menuCategories[menuIndex].substring(
      0,
      menuCharIndex - 1
    );
    menuCharIndex--;
    setTimeout(eraseMenuEffect, menuSpeed);
  } else {
    menuIndex = (menuIndex + 1) % menuCategories.length;
    setTimeout(typeMenuEffect, menuSpeed);
  }
}

// Start the dynamic typing effect for the menu section
document.addEventListener("DOMContentLoaded", typeMenuEffect);

// Menu categories to simulate dynamic typing effect ends

// Order Now Dynamic Effects Typing

// Array of order highlights to simulate dynamic typing effect
const orderPhrases = [
  "Freshly Prepared Meals 🍲",
  "Fast & Reliable Delivery 🚀",
  "Tasty Combos Await You 🧑‍🤝‍🧑",
  "Quality Ingredients 🥦",
  "Affordable Prices 💰",
];

let orderIndex = 0; // Separate index for Order Highlights
let orderCharIndex = 0; // Separate charIndex for Order Highlights
const orderSpeed = 100; // Typing speed (milliseconds)
const orderElement = document.getElementById("dynamic-order-text");

// Function to simulate typing effect for the Order section
function typeOrderEffect() {
  if (orderCharIndex < orderPhrases[orderIndex].length) {
    orderElement.textContent += orderPhrases[orderIndex].charAt(orderCharIndex);
    orderCharIndex++;
    setTimeout(typeOrderEffect, orderSpeed);
  } else {
    setTimeout(eraseOrderEffect, 2000); // Pause for 2 seconds before erasing
  }
}

// Function to simulate deleting text in the Order section
function eraseOrderEffect() {
  if (orderCharIndex > 0) {
    orderElement.textContent = orderPhrases[orderIndex].substring(
      0,
      orderCharIndex - 1
    );
    orderCharIndex--;
    setTimeout(eraseOrderEffect, orderSpeed);
  } else {
    orderIndex = (orderIndex + 1) % orderPhrases.length;
    setTimeout(typeOrderEffect, orderSpeed);
  }
}

// Start the dynamic typing effect on page load
document.addEventListener("DOMContentLoaded", typeOrderEffect);

//Order Now Dyanmic Effects Typing End

//Gallery Dyanmic Effects Typing Starts
// Array of gallery highlights to simulate dynamic typing effect
const galleryPhrases = [
  "Cafe Atmosphere ☕",
  "Exquisite Food Presentation 🍽️",
  "Elegant Decor 🖼️",
  "Trendy Interiors 🏠",
  "Comfortable Seating 🪑",
];

let galleryIndex = 0;
let galleryCharIndex = 0;
const gallerySpeed = 100;
const galleryElement = document.getElementById("dynamic-gallery-text");

// Function to simulate the typing effect for the gallery section
function typeGalleryEffect() {
  if (galleryCharIndex < galleryPhrases[galleryIndex].length) {
    galleryElement.textContent +=
      galleryPhrases[galleryIndex].charAt(galleryCharIndex);
    galleryCharIndex++;
    setTimeout(typeGalleryEffect, gallerySpeed);
  } else {
    setTimeout(eraseGalleryEffect, 2000); // Pause for 2 seconds before erasing
  }
}

// Function to simulate erasing the text in the gallery section
function eraseGalleryEffect() {
  if (galleryCharIndex > 0) {
    galleryElement.textContent = galleryPhrases[galleryIndex].substring(
      0,
      galleryCharIndex - 1
    );
    galleryCharIndex--;
    setTimeout(eraseGalleryEffect, gallerySpeed);
  } else {
    galleryIndex = (galleryIndex + 1) % galleryPhrases.length;
    setTimeout(typeGalleryEffect, gallerySpeed);
  }
}

// Start the dynamic typing effect on page load
document.addEventListener("DOMContentLoaded", typeGalleryEffect);

//Gallery Dyanmic Effects Typing End

//About us Dyanmic Effects Typing Starts
// Array of key phrases for the About Us dynamic typing effect
const aboutUsPhrases = [
  "Authentic Momos 🍜",
  "Delicious Burgers 🍔",
  "Quality Ingredients 🥦",
  "Passionate Chefs 👨‍🍳",
  "Affordable Combos 💰",
];

let aboutIndex = 0;
let aboutCharIndex = 0;
const aboutSpeed = 100;
const aboutElement = document.getElementById("dynamic-about-text");

// Function to simulate typing effect for About Us section
function typeAboutUsEffect() {
  if (aboutCharIndex < aboutUsPhrases[aboutIndex].length) {
    aboutElement.textContent +=
      aboutUsPhrases[aboutIndex].charAt(aboutCharIndex);
    aboutCharIndex++;
    setTimeout(typeAboutUsEffect, aboutSpeed);
  } else {
    setTimeout(eraseAboutUsEffect, 2000); // Pause for 2 seconds before erasing
  }
}

// Function to simulate erasing the text in the About Us section
function eraseAboutUsEffect() {
  if (aboutCharIndex > 0) {
    aboutElement.textContent = aboutUsPhrases[aboutIndex].substring(
      0,
      aboutCharIndex - 1
    );
    aboutCharIndex--;
    setTimeout(eraseAboutUsEffect, aboutSpeed);
  } else {
    aboutIndex = (aboutIndex + 1) % aboutUsPhrases.length;
    setTimeout(typeAboutUsEffect, aboutSpeed);
  }
}

// Start the dynamic typing effect when the page loads
document.addEventListener("DOMContentLoaded", typeAboutUsEffect);

//About us Dyanmic Effects Typing End



// Menu Data

const menuData = [
  {
    category: "🍔 Burgers",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Crispy Aloo: B", price: 79 },
        { name: "Aloo Tikki Cheese: B", price: 69 },
        { name: "Crumbly Paneer Cheese: B", price: 109 },
        { name: "Mexican Paneer: B", price: 109 },
        { name: "Cheese Paneer: B", price: 109 },
        { name: "Spicy Paneer: B", price: 89 },
        { name: "Aloo Tikki: B", price: 49 },
        { name: "Regular Burger: B", price: 29 },
      ],
      NonVeg: [
        { name: "Mexican Chicken: B", price: 119 },
        { name: "Cheese Chicken: B", price: 109 },
        { name: "Spicy Chicken: B", price: 89 },
        { name: "Junior Egg Burger: B", price: 49 },
        { name: "Crumbly Chicken Chicken: B", price: 119 },
      ],
    },
  },


  {
    category: "🌯 Wraps & Rolls",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Mexican Paneer: W", price: 109 },
        { name: "Cheese Paneer: W", price: 109 },
        { name: "Spicy Paneer: W", price: 89 },
        { name: "Aloo Tikki: W", price: 49 },
      ],
      NonVeg: [
        { name: "Mexican Chicken: W", price: 119 },
        { name: "Cheese Chicken: W", price: 109 },
        { name: "Spicy Chicken: W", price: 89 },
        { name: "Perfect Egg: W", price: 59 },
      ],
    },
  },

  {
    category: "🍜 Noodles & Maggi",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Veg Noodles", price: 69 },
        { name: "Veg Hakka Noodles", price: 109 },
        { name: "Paneer Noodles", price: 109 },
        { name: "Veg Cheese Maggi", price: 99 },
        { name: "Veg Schezwan Noodles", price: 109 },
      ],
      NonVeg: [
        { name: "Chicken Noodles", price: 119 },
        { name: "Schezwan Chicken Noodles", price: 139 },
        { name: "Chicken Hakka Noodles", price: 149 },
        { name: "Egg Chicken Noodles", price: 129 },
        { name: "Egg Maggi", price: 69 },
      ],
    },
  },

  {
    category: "🏮 China-Town",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Chilli Paneer Full", price: 159 },
        { name: "Chilli Paneer Half", price: 79 },
        { name: "Chilli Potato", price: 89 },
        { name: "Veg Manchurian", price: 89 },
      ],
      NonVeg: [
        { name: "Chilli Chicken Full", price: 169 },
        { name: "Chilli Chicken Half", price: 89 },
        { name: "Chilli Lollipop Full", price: 209 },
        { name: "Chilli Lollipop Half", price: 109 },
        { name: "Schezwan Chicken", price: 139 },
        { name: "Chicken Manchurian", price: 149 },
      ],
    },
  },
 
  {
    category: "🍚 Rice Specials",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Mix Veg Fried Rice", price: 139 },
        { name: "Veg Fried Rice", price: 99 },
      ],
      NonVeg: [
        { name: "Egg Fried Rice", price: 99 },
        { name: "Chicken Fried Rice", price: 139 },
        { name: "Chicken Egg Fried Rice", price: 149 },
      ],
    },
  },

  {
    category: "🥪 Sandwiches",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Potato Cheese Grilled", price: 99 },
        { name: "Mayo Grilled Sandwiche", price: 89 },
      ],
      NonVeg: [{ name: "Chicken Grilled Sandwiche", price: 119 }],
    },
  },

  {
    category: "🍲 Soups",
    colorClass: "text-warning",
    subcategories: {
      Veg: [{ name: "Veg Manchow Soup", price: 69 }],
      NonVeg: [{ name: "Chicken Manchow Soup", price: 99 }],
    },
  },
  {
    category: "☕ Hot Beverage",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Chai", price: 10 },
        { name: "Coffee", price: 49 },
      ],
    },
  },
  {
    category: "🥟 Momos",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Steam Momo", price: 39 },
        { name: "Fried Momo", price: 49 },
        { name: "Peri Peri Momo", price: 59 },
        { name: "Chilli Momo", price: 69 },
      ],
      NonVeg: [
        { name: "Steam Momo", price: 59 },
        { name: "Fried Momo", price: 69 },
        { name: "Peri Peri Momo", price: 79 },
        { name: "Chilli Momo", price: 99 },
      ],
    },
  },
  {
    category: "🍟 Fried Attack",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Classic Fries", price: 89 },
        { name: "Peri Peri Fries", price: 99 },
      ],
      NonVeg: [
        { name: "Chicken Fries Half (8 PCS)", price: 99 },
        { name: "Chicken Fries Full (16 PCS)", price: 189 },
        { name: "Chicken Strips (2 PCS)", price: 89 },
        { name: "Chicken Strips (3 PCS)", price: 119 },
        { name: "Chicken Strips (4 PCS)", price: 149 },
      ],
    },
  },

  {
    category: "🔥 BBQ & Grill",
    colorClass: "text-warning",
    subcategories: {
      NonVeg: [
        { name: "Chicken Leg Thai Classic", price: 109 },
        { name: "Chicken Leg Thai Signature", price: 139 },
        { name: "Chicken Breast Classic", price: 109 },
        { name: "Chicken Breast Signature", price: 139 },
      ],
    },
  },
  {
    category: "🧑‍🤝‍🧑 Combo Offers",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        {
          name: "Budy Box Veg Deal (2 Spicy Paneer Burger + 1 Classic Fries + 2 Soft Drinks 250ml each)",
          price: 279,
        },
      ],
      NonVeg: [
        {
          name: "Budy Box Chicken Deal (2 Spicy Chicken Burger + 1 Classic Fries + 2 Soft Drinks 250ml each)",
          price: 279,
        },
      ],
    },
  },

  // If more menu comes then place here -------
];

// here menu is ended

// Function to Populate  the menu dynamically

// Function to populate the menu
function populateMenu() {
  const menuGrid = document.getElementById("menu-grid");

  // Create a copy of menuData for filtering
  let filteredMenuData = [...menuData];

  // Function to render the menu based on the filtered data
  function renderMenu(menuData) {
    menuGrid.innerHTML = ''; // Clear current menu

    menuData.forEach((section, index) => {
      // Create main category container
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "col-md-4 mb-4";

      // Create the main category header with category name
      const categoryHeaderDiv = document.createElement("div");
      categoryHeaderDiv.className = "category-header";

      // Add main category title
      categoryHeaderDiv.innerHTML = `    
        <h4 class="${section.colorClass}">${section.category}</h4>
      `;

      // Append the category header
      categoryDiv.appendChild(categoryHeaderDiv);

      // Create the toggle button just below the category name (to show/hide subcategories and visit cart button)
      const toggleButtonDiv = document.createElement("div");
      toggleButtonDiv.className = "toggle-btn-container d-flex justify-content-end";
      toggleButtonDiv.innerHTML = `  
        <button class="btn btn-info" id="toggle-btn-${index}" onclick="toggleCategory(${index})">
          Hide Items
        </button>
      `;
      categoryDiv.appendChild(toggleButtonDiv);

      // Create a container for the subcategories and the "Visit My Cart" button
      const contentDiv = document.createElement("div");
      contentDiv.className = "category-content";
      contentDiv.id = `content-${index}`;

      // Create subcategories container (visible by default)
      const subcategoriesDiv = document.createElement("div");
      subcategoriesDiv.className = "subcategory-container";
      subcategoriesDiv.id = `subcategory-${index}`;
      subcategoriesDiv.style.display = "block"; // Show by default

      // Iterate through subcategories (Veg and Non-Veg)
      Object.keys(section.subcategories).forEach((subKey) => {
        const subItems = section.subcategories[subKey];

        // Create subcategory container
        const subCategoryDiv = document.createElement("div");
        subCategoryDiv.className = "mb-3";

        // Subcategory title with symbol
        const symbol = subKey === "Veg" ? "🟢" : "🔴";
        const colorClass = subKey === "Veg" ? "text-success" : "text-danger";

        subCategoryDiv.innerHTML = `  
          <h5>
            ${symbol} <span class="${colorClass}">${subKey}</span>
          </h5>`;

        const ul = document.createElement("ul");
        ul.className = "list-unstyled";

        // Populate items for subcategory
        subItems.forEach((item) => {
          const li = document.createElement("li");
          li.className = "menu-item d-flex justify-content-between align-items-center";
          li.innerHTML = `  
            <span class="item-text">${item.name} - ₹${item.price}</span>
            <span class="menu-controls">           
              <button class="btn btn-sm btn-warning ms-2"
              onclick="removeFromMenu('${item.name}', 'count-${item.name.replace(/\s+/g, "")}')">
              <i class="bi bi-dash"></i>
            </button>
            <span id="count-${item.name.replace(/\s+/g, "")}" class="badge bg-primary ms-2">0</span>
            <button class="btn btn-sm btn-success ms-2"
              onclick="addToCart('${item.name}', ${item.price}, 'count-${item.name.replace(/\s+/g, "")}')">
              <i class="bi bi-plus"></i>
            </button>
          </span>
        `;
          ul.appendChild(li);
        });

        subCategoryDiv.appendChild(ul);
        subcategoriesDiv.appendChild(subCategoryDiv);
      });

      contentDiv.appendChild(subcategoriesDiv);

      // Add the "Visit My Cart" button at the end of the main category inside the content div
      const visitCartBtn = document.createElement("button");
      visitCartBtn.className = "btn btn-primary mt-3 visit-cart-btn";
      visitCartBtn.textContent = "Visit My Cart";
      visitCartBtn.addEventListener("click", showMyCart);

      contentDiv.appendChild(visitCartBtn);

      // Append the contentDiv to the categoryDiv
      categoryDiv.appendChild(contentDiv);

      // Append the main category to the menu grid
      menuGrid.appendChild(categoryDiv);
    });
  }

  // Initial render of the full menu (with all items visible)
  renderMenu(filteredMenuData);

  // Event listeners for filter buttons
  document.getElementById("veg-filter-btn").addEventListener("click", () => {
    alert("Filtering Veg items...");
    // Filter menu to show only Veg items
    filteredMenuData = menuData.map((section) => {
      return {
        ...section,
        subcategories: {
          Veg: section.subcategories.Veg || [], // Keep Veg, if exists, else empty
          NonVeg: [], // Hide Non-Veg items
        },
      };
    });
    renderMenu(filteredMenuData);
  });

  document.getElementById("non-veg-filter-btn").addEventListener("click", () => {
    alert("Filtering Non-Veg items...");
    // Filter menu to show only Non-Veg items
    filteredMenuData = menuData.map((section) => {
      return {
        ...section,
        subcategories: {
          Veg: [], // Hide Veg items
          NonVeg: section.subcategories.NonVeg || [], // Keep Non-Veg, if exists, else empty
        },
      };
    });
    renderMenu(filteredMenuData);
  });

  document.getElementById("clear-filter-btn").addEventListener("click", () => {
    alert("Clearing filters to show all items...");
    // Reset the filter to show all items
    filteredMenuData = [...menuData];
    renderMenu(filteredMenuData);
  });

}

// Function to toggle visibility of subcategories and "Visit My Cart" button
function toggleCategory(index) {
  const contentDiv = document.getElementById(`content-${index}`);
  const toggleButton = document.getElementById(`toggle-btn-${index}`);

  // Toggle the visibility of the content inside the category (subcategories and Visit My Cart button)
  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    toggleButton.textContent = "Hide Items"; // Update to "Hide Items"
  } else {
    contentDiv.style.display = "none";
    toggleButton.textContent = "Show Items"; // Update to "Show Items"
  }
}

  

function removeFromMenu(itemName, buttonId) {
  const existingItem = cart.find((item) => item.name === itemName);

  if (existingItem) {
    if (existingItem.count > 1) {
      existingItem.count--;
    } else {
      cart = cart.filter((item) => item.name !== itemName);
    }
    updateMenuCount(itemName, buttonId);
    updateCartUI();
    alert(`${itemName} has been removed from your cart.`);
  } else {
    alert(`${itemName} is not in your cart.`);
  }
}

// Call the function to populate the menu on page load
document.addEventListener("DOMContentLoaded", populateMenu);

// Example Add to Cart Function
function addToCart(name, price, countId) {
  const countBadge = document.getElementById(countId);
  countBadge.textContent = parseInt(countBadge.textContent) + 1;
  console.log(`Added ${name} to cart for ₹${price}`);
}


// My Cart Array
// My Cart Array
let cart = [];

// Add to Cart Function
function addToCart(itemName, itemPrice, buttonId) {
  // Find the item in the cart or add a new entry
  const existingItem = cart.find((item) => item.name === itemName);

  if (existingItem) {
    existingItem.count++;
  } else {
    cart.push({ name: itemName, price: itemPrice, count: 1 });
  }

  // Update the count in the menu
  updateMenuCount(itemName, buttonId);

  updateCartUI(); // Update the cart view
  // alert(`${itemName} has been added to your cart.`);
}

// Update Menu Count Function
function updateMenuCount(itemName, buttonId) {
  const cartItem = cart.find((item) => item.name === itemName);
  const countBadge = document.getElementById(buttonId);
  countBadge.textContent = cartItem ? cartItem.count : 0;
}

// Update Cart UI for Modal and Section
function updateCartUI() {
  const cartItemsSection = document.getElementById("cartItems");
  const totalAmountSection = document.getElementById("totalAmount");
  const cartItemsModal = document.getElementById("cartItemsModal");
  const totalAmountModal = document.getElementById("totalAmountModal");
  const cartCountSpan = document.getElementById("cartCount");

  cartItemsSection.innerHTML = "";
  cartItemsModal.innerHTML = "";
  let totalAmount = 0;
  let totalItems = 0;

  // Populate Cart Items
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.count;
    totalAmount += itemTotal;
    totalItems += item.count;

    const itemHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span>${item.name} (x${item.count}) - ₹${itemTotal}</span>
                <div>
                    <button class="btn btn-sm btn-success me-2" onclick="incrementItem(${index})">+</button>
                    <button class="btn btn-sm btn-warning me-2" onclick="decrementItem(${index})">-</button>

                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    cartItemsSection.innerHTML += itemHTML;
    cartItemsModal.innerHTML += itemHTML;
  });

  totalAmountSection.textContent = totalAmount;
  totalAmountModal.textContent = totalAmount;

  cartCountSpan.textContent = `(${totalItems})`;
}

// Increment Item Count
function incrementItem(index) {
  const item = cart[index];
  item.count++;
  updateMenuCount(item.name, `count-${item.name.replace(/\s/g, "")}`);
  updateCartUI();
}

// Decrement Item Count
function decrementItem(index) {
  const item = cart[index];
  if (item.count > 1) {
    item.count--;
    updateMenuCount(item.name, `count-${item.name.replace(/\s/g, "")}`);
  } else {
    removeFromCart(index);
  }
  updateCartUI();
}

// Remove Item from Cart
function removeFromCart(index) {
  const item = cart[index];

  // Reset the menu count to 0 for the removed item
  const buttonId = `count-${item.name.replace(/\s/g, "")}`;
  const countBadge = document.getElementById(buttonId);
  if (countBadge) {
    countBadge.textContent = 0;
  }

  // Remove the item from the cart
  cart.splice(index, 1);
  updateCartUI();
}

// Function to show the Delivery Details modal
function showDeliveryModal() {
  // Check if cart is empty
  if (cart.length === 0) {
    alert(
      "Your cart is empty. Please add items to the cart before placing an order."
    );
    return;
  }

  console.log("Opening the delivery details modal...");
  var myModal = new bootstrap.Modal(
    document.getElementById("deliveryDetailsModal")
  );
  myModal.show(); // Show the modal
}

// Form validation and order placement
// Form validation and order placement
function placeOrder() {
  // Get the current date and time
  const currentTime = new Date();
  const currentHour = currentTime.getHours(); // Get the current hour (0 to 23)
  const currentMinute = currentTime.getMinutes(); // Get the current minute (0 to 59)
  const currentDay = currentTime.getDate(); // Get the current day of the month (1 to 31)
  const currentMonth = currentTime.getMonth() + 1; // Get the current month (1 to 12)
  const currentYear = currentTime.getFullYear(); // Get the current year (e.g., 2024)

  // Format the date and time (DD/MM/YYYY HH:MM)
  const formattedDate = `${currentDay < 10 ? "0" + currentDay : currentDay}/${currentMonth < 10 ? "0" + currentMonth : currentMonth}/${currentYear}`;
  const formattedTime = `${currentHour}:${currentMinute < 10 ? "0" + currentMinute : currentMinute}`;

  // Check if the time is between 11 AM and 8:30 PM (inclusive)
  if (currentHour < 11 || (currentHour === 11 && currentMinute < 0) || currentHour > 20 || (currentHour === 20 && currentMinute > 30)) {
    if (currentHour < 11) {
      alert("Cafe will open at 11:00 AM. Please place your order after 11:00 AM.");
    } else {
      alert("Cafe is closed. Orders can only be placed between 11:00 AM and 8:30 PM.");
    }
    return; // Exit the function if the time is outside the allowed range
  }

  // Get values from the form
  const receiverName = document.getElementById("receiverName").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const deliveryAddress = document.getElementById("deliveryAddress").value;
  const couponCode = document.getElementById("offers").value.trim(); // Get the coupon code
  const deliveryOption = document.getElementById("deliveryOption").value; // Get delivery option

  // Check if all fields are filled
  if (receiverName === "" || mobileNumber === "") {
    alert("Please fill in all the details.");
    return;
  }

  // Validate Mobile Number (10 digits)
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobileNumber)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // Handle delivery options
  let deliveryMessage = "";
  let deliveryAddressField = "";
  
  if (deliveryOption === "dineIn" || deliveryOption === "takeAway") {
    deliveryMessage = "You can get your Treat in 15 minutes.";
    document.getElementById("deliveryAddressSection").style.display = "none"; // Hide delivery address
  } else if (deliveryOption === "getDelivery") {
    deliveryMessage = ""; // No specific message for delivery
    document.getElementById("deliveryAddressSection").style.display = "block"; // Show delivery address
    if (deliveryAddress === "") {
      alert("Please provide a delivery address.");
      return;
    }
  }

  // Prepare the order details with numbering and line breaks
  const orderDetails = cart
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} (x${item.count}) - ₹${item.price * item.count
        }`
    )
    .join("\n");

  let totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  console.log("Total amount before discount:", totalAmount); // Debugging step

  // Coupon Code Logic
  let discount = 0;

  // Apply Welcome10 coupon logic
  if (couponCode === "Welcome10" && totalAmount >= 200) {
    discount = totalAmount * 0.10; // 10% discount
    if (discount > 100) {
      discount = 100; // Maximum discount is ₹100
    }
    alert(`Coupon applied! You get ₹${discount} off.`);
  } else if (couponCode === "Welcome10" && totalAmount < 200) {
    alert("Coupon code is valid but the minimum cart total for this coupon is ₹200.");
  }

  // Apply NEWYEAR25 coupon logic with time constraint and fallback to Welcome10
  else if (couponCode === "NEWYEAR25" && totalAmount >= 500) {
    // Get the current time (in hours)
    const currentHour = new Date().getHours(); // Returns an integer between 0 and 23

    // Check if the current time is between 3 PM (15:00) and 7 PM (19:00)
    if (currentHour >= 15 && currentHour < 19) {
      discount = totalAmount * 0.25; // 25% discount
      if (discount > 250) {
        discount = 250; // Maximum discount is ₹250
      }
      alert(`Coupon applied! You get ₹${discount} off for the Christmas & New Year special.`);
    } else {
      // If the time is not within the allowed range, apply Welcome10 coupon instead
      alert("This coupon can only be used between 3:00 PM and 7:00 PM. Please Apply the Welcome10 coupon instead.");
      
      // Apply the Welcome10 coupon logic (assuming Welcome10 has been previously defined)
      couponCode = "Welcome10";  // Force the couponCode to "Welcome10" for this case

      // Check if Welcome10 is applicable
      if (totalAmount >= 200) {
        discount = totalAmount * 0.10; // 10% discount
        if (discount > 100) {
          discount = 100; // Maximum discount is ₹100
        }
        alert(`Coupon applied! You get ₹${discount} off with Welcome10.`);
      } else {
        alert("Coupon code is valid but the minimum cart total for Welcome10 is ₹200.");
      }
    }
  } else if (couponCode === "NEWYEAR25" && totalAmount < 500) {
    alert("Coupon code is valid but the minimum cart total for this coupon is ₹500.");
  }

  // Apply discount to the total amount
  const discountedAmount = totalAmount - discount;

  // Round the amounts
  const roundedTotalAmount = Math.round(totalAmount); // Round total amount to nearest integer
  const roundedDiscount = Math.round(discount); // Round discount to nearest integer
  const roundedDiscountedAmount = Math.round(discountedAmount); // Round discounted amount to nearest integer

  console.log("Total amount after discount:", roundedDiscountedAmount); // Debugging step

  // Add the custom message at the beginning
  const message = encodeURIComponent(`Here is my order details:- 
        
        ${orderDetails}
        
        Ordered On: ${formattedDate} @ ${formattedTime}
        
        Total Amount: ₹${roundedTotalAmount} 
        Discount: ₹${roundedDiscount}
        Payable Amount: ₹${roundedDiscountedAmount}
        
        Name: ${receiverName}
        Mobile Number: ${mobileNumber}
        Delivery Address: ${deliveryAddress || "N/A"}        
        Delivery Option: ${deliveryOption}
        

        Note: ${deliveryMessage || "You will get your Treat in 20 minutes."}

        Thank you for Shopping at perfectusfoods.com
        We hope our food makes your day even better 😊😊😊
        Wishing you a Happy & Prosperous New Year! 🌟🎆✨`);

  const whatsappURL = `https://wa.me/917250327478?text=${message}`;

  // Open WhatsApp with the order details
  window.open(whatsappURL, "_blank");
  alert("Order placed successfully! Check WhatsApp for confirmation.");

  // Clear the cart and update the UI
  cart = [];
  updateCartUI();

  // Close the delivery details modal
  const myModal = bootstrap.Modal.getInstance(
    document.getElementById("deliveryDetailsModal")
  );
  myModal.hide(); // Hide the modal after the order is placed
}



document.addEventListener("DOMContentLoaded", function () {
  // Initialize the state when the page loads
  updateDeliveryOption();
});

function updateDeliveryOption() {
  const deliveryOption = document.getElementById("deliveryOption").value;
  const deliveryAddressSection = document.getElementById("deliveryAddressSection");

  if (deliveryOption === "dineIn" || deliveryOption === "takeAway") {
    deliveryAddressSection.style.display = "none"; // Hide the delivery address field for Dine In/Take Away
  } else {
    deliveryAddressSection.style.display = "block"; // Show the delivery address field for Get Delivery
  }
}

// Function to update the delivery option message and address visibility when the user changes the option
document.getElementById("deliveryOption").addEventListener("change", function () {
  updateDeliveryOption();
  const deliveryOption = this.value;
  const deliveryMessage = document.getElementById("deliveryMessage");

  if (deliveryOption === "dineIn" || deliveryOption === "takeAway") {
    document.getElementById("deliveryAddressSection").style.display = "none";
    deliveryMessage.textContent = "You can get your Treat in 15 minutes.";
  } else {
    document.getElementById("deliveryAddressSection").style.display = "block";
    deliveryMessage.textContent = "";
  }
});


// Function to handle the button click and paste coupon code
function pasteCouponCode(code) {
  document.getElementById("offers").value = code; // Paste the coupon code in the textarea
}



// Scroll to My Cart Section
document.getElementById("myCartBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("myCart").classList.remove("d-none");
  document.getElementById("myCart").scrollIntoView({ behavior: "smooth" });
});



// Function to reveal and scroll to the My Cart section
function showMyCart() {
  const myCart = document.getElementById("myCart");
  myCart.classList.remove("d-none"); // Show the My Cart section
  myCart.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
}

// Function to hide the My Cart section
function hideMyCart() {
  const myCart = document.getElementById("myCart");
  myCart.classList.add("d-none"); // Hide the My Cart section
}

// Event listener for My Cart navigation link
document.getElementById("myCartBtn").addEventListener("click", function (e) {
  e.preventDefault();
  showMyCart();
});

// Event listener for Visit Cart button
document.getElementById("visitCartBtn").addEventListener("click", function () {
  showMyCart();
});

// Event listener for Hide Cart button
document.getElementById("hideCartBtn").addEventListener("click", function () {
  hideMyCart();
});
