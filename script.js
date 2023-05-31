const codeElements = document.querySelectorAll('#code');
const pinBtns = document.querySelectorAll('#pin-btn');
const btnClear = document.getElementById('btn-clear');
const btnEnter = document.getElementById('btn-enter');
const pinInput = document.getElementById('pinInput');
const code = "1234"; // Replace with your desired pin code

const imageContainer = document.getElementById("imageContainer");

let enteredCode = ""; // Variable to store the entered code

pinBtns.forEach(button => {
  button.addEventListener("click", () => {
    if (pinInput.value.length < 2) { // Limit the input to 4 digits
      pinInput.value += button.textContent;
      enteredCode = pinInput.value; // Update the entered code variable
    }
  });
});

btnClear.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  pinInput.value = "";
  enteredCode = ""; // Clear the entered code variable
});

btnEnter.addEventListener("click", (e) => {
  e.preventDefault();

  const enteredCode = pinInput.value;
  const parsedCode = parseInt(enteredCode);
  let isMatchFound = false;

  codeElements.forEach((codeElement) => {
    const codeValue = parseInt(codeElement.textContent);

    if (parsedCode === codeValue) {
      isMatchFound = true;

      let productName = "";
      let productImage = "";
      let productPrice = "";

      if (codeValue === 40) {
        productName = "Dorito";
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

      document.getElementById("modalMessage").textContent = `You just got ${productName} from the vending machine!`;
      document.getElementById("productImage").src = productImage;



      // Update the balance by subtracting a dollar
      const balanceElement = document.getElementById("balance");
      let balance = parseFloat(balanceElement.textContent.slice(1)); // Extract the numerical value from the balance text
      console.log(balance)

      if (balance >= 1) {
        const image = document.createElement("img");
        image.src = productImage;

        imageContainer.appendChild(image);
        balance -= 1; // Subtract a dollar
        balanceElement.textContent = "$" + balance.toFixed(2); // Update the balance text

      }
      else {
        document.getElementById("modalMessage").textContent = "Sorry, not enough balance.";
        document.getElementById("productImage").src = "./images/sad.jfif"; // Clear the product image
        $('#productModal').modal('show');
      }

      $('#productModal').modal('show');
      pinInput.value = "";


      return;
    }
  });

  if (!isMatchFound) {
    document.getElementById("modalMessage").textContent = "Sorry, I don't understand that input.";
    document.getElementById("productImage").src = "./images/sad.jfif"; // Clear the product image
    $('#productModal').modal('show');
  }
});
