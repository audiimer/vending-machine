// Variables Initialization
const codeElements = document.querySelectorAll(".code");
const pinBtns = document.querySelectorAll("#pin-btn");
const btnClear = document.getElementById("btn-clear");
const btnEnter = document.getElementById("btn-enter");
const pinInput = document.getElementById("pinInput");
const imageContainer = document.getElementById("imageContainer");
const currentContent = imageContainer.textContent;
const balanceElement = document.getElementById("balance");
const existingH3 = imageContainer.querySelector("h3");
let enteredCode = ""; // Variable to store the entered code

// Gives every button with id = "pin-btn" responsiveness and adds that value to the input element
pinBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (pinInput.value.length < 2) {
      // Limit the input to 2 digits
      pinInput.value += button.textContent;
    }
  });
});

// Clears any input from input element
btnClear.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  pinInput.value = "";
});

/* Event where if the enter button is clicked, it stores the input value in the enteredCode variable and
verifies if a match exist or not */
btnEnter.addEventListener("click", (e) => {
  e.preventDefault();

  enteredCode = parseInt(pinInput.value);
  let isMatchFound = false;

  codeElements.forEach((codeElement) => {
    const codeValue = parseInt(codeElement.textContent);

    if (enteredCode === codeValue) {
      isMatchFound = true;

      let productName = "";
      let productImage = "";
      let productPrice = "";
      let balance = parseFloat(balanceElement.textContent.slice(1)); // Extract the numerical value from the balance text

      if (codeValue === 40) {
        productName = "Sundae";
        productImage = `./images/icecream.png`;
        productPrice = 2.0;
      } else if (codeValue === 41) {
        productName = "Cupcake";
        productImage = `./images/cupcake.png`;
        productPrice = 2.0;
      } else if (codeValue === 42) {
        productName = "Cake";
        productImage = `./images/cake.png`;
        productPrice = 2.0;
      } else if (codeValue === 43) {
        productName = "Burger";
        productImage = `./images/burger.png`;
        productPrice = 3.0;
      } else if (codeValue === 44) {
        productName = "Pizza";
        productImage = `./images/pizza.png`;
        productPrice = 2.5;
      } else if (codeValue === 45) {
        productName = "Taco";
        productImage = `./images/taco.png`;
        productPrice = 1.5;
      } else if (codeValue === 10) {
        productName = "Chips";
        productImage = `./images/chips.png`;
        productPrice = 1.0;
      } else if (codeValue === 11) {
        productName = "Donut";
        productImage = `./images/donut.png`;
        productPrice = 1.0;
      } else if (codeValue === 12) {
        productName = "Chocolate";
        productImage = `./images/chocolate.png`;
        productPrice = 1.0;
      } else if (codeValue === 13) {
        productName = "Milkshake";
        productImage = `./images/shake.png`;
        productPrice = 3.0;
      } else if (codeValue === 14) {
        productName = "Water";
        productImage = `./images/water.png`;
        productPrice = 1.0;
      } else if (codeValue === 15) {
        productName = "Water";
        productImage = `./images/water.png`;
        productPrice = 1.0;
      }

      if (balance >= productPrice) {
        // Sufficient balance to purchase the product
        document.getElementById(
          "modalMessage"
        ).textContent = `You just got ${productName} from the vending machine!`;
        document.getElementById("productImage").src = productImage;

        const defaultImage = imageContainer.textContent.trim() === "⟱";

        if (defaultImage) {
          // If the default image is found, remove it
          imageContainer.textContent = "";
          imageContainer.style.backgroundColor = "black";
        }

        // Create a new image element
        const image = document.createElement("img");
        image.src = productImage;

        // Append the new image to the imageContainer
        imageContainer.appendChild(image);
        balance -= productPrice; // Subtract the product price from the balance
        balanceElement.textContent = "$" + balance.toFixed(2); // Update the balance text
      } else {
        // Not enough balance to purchase the product
        document.getElementById("modalMessage").textContent =
          "Sorry, not enough balance.";
        document.getElementById("productImage").src = "./images/sad.jfif";
        $("#productModal").modal("show");
      }

      $("#productModal").modal("show");
      pinInput.value = "";

      return;
    }
  });

  // Conditional where if the input code is not available in the vending machine, a message will prompt
  if (!isMatchFound) {
    document.getElementById("modalMessage").textContent =
      "Sorry, I don't recognize that input.";
    document.getElementById("productImage").src = "./images/sad.jfif";
    $("#productModal").modal("show");
    pinInput.value = "";
  }
});
