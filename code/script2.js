const hawaiian = document.getElementById("hawaiian");
const pepperoni = document.querySelector("#pepperoni");
const vegetarian = document.querySelector("#vegatarian");
const form = document.querySelector("#pizzaForm");
const heroEl = document.querySelector(".hero");

/* const orderQuantity = document.querySelector("#quantityInput"); */
const subBtn = document.querySelector("#btn");
const orderConfirm = document.querySelector("#orderconfirm");

//Funktion tid och kostnad
const calculater = (ordername, orderQuantity) => {
  pizzaTime = 0;
  const price = orderQuantity * 80;
  if (orderQuantity <= 2) {
    pizzaTime = 10;
  } else if (orderQuantity <= 5) pizzaTime = 15;
  else pizzaTime = 20;
  const orderTotal = `Great, I'll get started on your ${ordername} right away,\n it will cost ${price} kr.\n The pizzas will take ${pizzaTime} minutes.`;
  return orderTotal;
};

//funktion ordername
const checkOrderName = (orderName) => {
  if (
    orderName == "hawaiian" ||
    orderName == "pepperoni" ||
    orderName == "vegetarian"
  ) {
    return orderName;
  } else {
    return null;
  }
};

//sub
const confirm = (ordername, orderquantity) => {
  const pizza = checkOrderName(ordername);
  orderConfirm.textContent = calculater(pizza, orderquantity);
};

//event
subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const orderName = document.getElementById("pizzaMenuSelect").value;
  const orderQuantity = parseInt(
    document.querySelector("#quantityInput").value
  );
  orderConfirm.style.display = "flex";
  form.style.display = "none";
  heroEl.style.display = "none";
  orderConfirm.style.height = "10rem";

  confirm(orderName, orderQuantity);
});
