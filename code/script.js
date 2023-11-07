const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;
const pizzaMenuArray = [
  { pizzaName: "vegetarian", price: 80 },
  { pizzaName: "hawaiian", price: 80 },
  { pizzaName: "pepperon", price: 80 },
];
//Put your Javscript code here:

const greeting = alert(
  `Hey! Happy to serve your pizza.\nOn our menu we have\n${vegetarian}, ${hawaiian} and ${pepperoni}`
);

//const orderName = prompt( `Enter the name of the pizza you want to order today.`);

/* const orderTotal = orderQuantity * pizzaPrice; */

/* const confirmation = alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
);
 */

const checkOrderName = (orderName) => {
  let pizzaName = orderName.toLowerCase();
  if (
    pizzaName == "hawaiian" ||
    pizzaName == "pepperoni" ||
    pizzaName == "vegetarian"
  ) {
    return true;
  } else {
    return false;
  }
};

let orderCorrect = false;
let orderName = "";
while (!orderCorrect) {
  orderName = prompt(`Enter the name of the pizza you want to order today.`);
  orderCorrect = checkOrderName(orderName);
  if (!orderCorrect) {
    alert("Not on the menu");
  }
}
const orderQuantity = prompt(`How many of ${orderName} do you want?`);

const resultCheckOrderName = checkOrderName(orderName);
console.log(resultCheckOrderName);

const cookingTime = (orderQuantity) => {
  pizzaTime = 0;
  if (orderQuantity <= 2) {
    return (pizzaTime = 10);
  } else if (orderQuantity <= 5) return (pizzaTime = 15);
  else {
    return (pizzaTime = 20);
  }
};
const resultCookingTime = cookingTime(orderQuantity);
//console.log(cookingTime(orderQuantity));

const totalCost = (orderQuantity) => {
  return orderQuantity * 80;
};
//console.log(totalCost(orderQuantity));
const resultTotalCost = totalCost(orderQuantity);

const order = alert(
  `Great, I'll get started on your ${resultCheckOrderName} right away, it will cost ${resultTotalCost} kr. The pizzas will take ${resultCookingTime} minutes.`
);
