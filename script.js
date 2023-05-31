const pinBtns = document.querySelectorAll('#pin-btn');
const btnClear = document.getElementById('btn-clear');
const btnEnter = document.getElementById('btn-enter');
const pinInput = document.getElementById('pinInput');


pinBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (pinInput.value.length < 2) {
            pinInput.value += button.textContent;
          }
    });
  });

  btnClear.addEventListener("click", () => {
    pinInput.value = "";
  });

  btnEnter.addEventListener("click", () => {

  });
