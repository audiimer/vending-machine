// Variables Initialization
const codeElements = document.querySelectorAll('#code');
const pinBtns = document.querySelectorAll('#pin-btn');
const btnClear = document.getElementById('btn-clear');
const btnEnter = document.getElementById('btn-enter');
const pinInput = document.getElementById('pinInput');
const imageContainer = document.getElementById("imageContainer");
const balanceElement = document.getElementById("balance");
let enteredCode = ""; // Variable to store the entered code

// Gives every button with id = "pin-btn" responsiveness and adds that value to the input element
pinBtns.forEach(button => {
  button.addEventListener("click", () => {
    if (pinInput.value.length < 2) { // Limit the input to 2 digits
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
        productName = "Doritos";
        productImage = `./images/dorito.webp`;
        productPrice = "$1.00";

      } else if (codeValue === 41) {
        productName = "Lays";
        productImage = `./images/lays.png`;
        productPrice = "$1.00";

      } else if (codeValue === 42) {
        productName = "Cheetos";
        productImage = `./images/cheetos.png`;
        productPrice = "$1.00";

      } else if (codeValue === 43) {
        productName = "Ruffles";
        productImage = `./images/ruffles.png`;
        productPrice = "$1.00";

      } else if (codeValue === 44) {
        productName = "Poppycock";
        productImage = `./images/poppycock.png`;
        productPrice = "$1.00";

      } else if (codeValue === 45) {
        productName = "Pretzel";
        productImage = `./images/pretzel.png`;
        productPrice = "$1.00";

      } else if (codeValue === 46) {
        productName = "Jolly Rancher";
        productImage = `./images/jolly.png`;
        productPrice = "$1.00";

      } else if (codeValue === 47) {
        productName = "Grandma Cookies";
        productImage = `./images/grandma.webp`;
        productPrice = "$1.00";

      } else if (codeValue === 11) {
        productName = "Oreos";
        productImage = `./images/oreo.jpg`;
        productPrice = "$1.00";

      } else if (codeValue === 12) {
        productName = "KitKat";
        productImage = `./images/kitkat.png`;
        productPrice = "$1.00";

      } else if (codeValue === 13) {
        productName = "Hershey's Chocolate";
        productImage = `./images/hersheys.png`;
        productPrice = "$1.00";

      } else if (codeValue === 14) {
        productName = "M&M's";
        productImage = `./images/mms.webp`;
        productPrice = "$1.00";
      }

      // Shows Modal with message and product image
      document.getElementById("modalMessage").textContent = `You just got ${productName} from the vending machine!`;
      document.getElementById("productImage").src = productImage;


      // Conditional statement that substract balance if balance is greater or equal to 1, otherwise a "not enough balance" message appears
      if (balance >= 1) {
        const image = document.createElement("img");
        image.src = productImage;

        imageContainer.appendChild(image);
        balance -= 1; // Subtract a dollar
        balanceElement.textContent = "$" + balance.toFixed(2); // Update the balance text
      } else {
        document.getElementById("modalMessage").textContent = "Sorry, not enough balance.";
        document.getElementById("productImage").src = "./images/sad.jfif";
        $('#productModal').modal('show');
      }

      $('#productModal').modal('show');
      pinInput.value = "";

      return;
    }
  });

  // Conditional where if the input code is not available in the vending machine, a message will prompt
  if (!isMatchFound) {
    document.getElementById("modalMessage").textContent = "Sorry, I don't recognize that input.";
    document.getElementById("productImage").src = "./images/sad.jfif";
    $('#productModal').modal('show');
    pinInput.value = "";
  }
});
