const customerName = "Ayesha";
const customerAge = 20;
let availableBalance = 50;

console.log("Customer Name:", customerName);
console.log("Customer Age:", customerAge);
console.log("Available Balance: $", availableBalance);

// Restaurant Menu//

console.log("===== RESTAURANT MENU =====");
console.log("1. Burger - $10");
console.log("2. Pizza - $15");
console.log("3. Sandwich - $8");
console.log("4. Pasta - $12");
console.log("5. Exit - $0");

// Customer Choice//

let choice = Number(prompt("Enter your choice (1-5):"));

let foodName;
let foodPrice;

switch (choice) {
  case 1:
    foodName = "Burger";
    foodPrice = 10;
    break;

  case 2:
    foodName = "Pizza";
    foodPrice = 15;
    break;

  case 3:
    foodName = "Sandwich";
    foodPrice = 8;
    break;

  case 4:
    foodName = "Pasta";
    foodPrice = 12;
    break;

  case 5:
    console.log("Thank you for visiting!");
    break;

  default:
    console.log("Invalid choice!");
}

// Check Customer Age//

if (choice >= 1 && choice <= 4) {
  if (customerAge >= 18) {
    console.log("You selected " + foodName + ". Price: $" + foodPrice);

    // Check Available Balance//

    if (availableBalance >= foodPrice) {
      availableBalance = availableBalance - foodPrice;

      console.log("Order successful!");
      console.log("Remaining Balance: $" + availableBalance);
    } else {
      console.log("Insufficient balance!");
      console.log("Your balance is: $" + availableBalance);
    }
  } else {
    console.log("Sorry! You must be 18 or older to order.");
  }
}
