// dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon_DB'
});


function validation(value) {
	// function parses an argument and returns a floating point number
	var integer = Number.isInteger(parseFloat(value));
	// returns the sign of a number, indicating whether the number is positive, negative or zero. 
	var sign = Math.sign(value);
		// console.log(sign)

	// conditional to assure only positive itergers can be entered
	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'User must enter a whole number above zero. Thank you!'
	}
}

function promptChoice(){

	inquirer.prompt([
	{

		type: 'input',
		name: 'item_id',
		message: 'Please enter the corresponding item # you would like to purchase',
		// us validation function to assure only positive itergers can be entered
		validate: validation,
		// Receive the user input and return the filtered value to be used inside the program. 
		filter: Number
	},
	{

		type: 'input',
		name: 'quantity',
		message: 'How many of this item would you like to purchase?',
		validate: validation,
		filter: Number
	}
		]).then(function(input){

			var item = input.item_id;
			var quantity = input.quantity;
			

		connection.query("SELECT * FROM products WHERE ?", {item_id: item}, function(err, data){

		if(err) throw err;

		if(data.length === 0) {
			console.log("Please enter a valid item ID number");
			displayItems();
		} else{
			var productData = data[0]
		if (quantity <= productData.stock_quantity) {
			console.log("The product is in stock. Placing Order!");

			var queryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

		connection.query(queryStr, function(err, data){
			if (err) throw err;
			console.log("Your order has been placed!") 
			console.log("Your total is $" + productData.price * quantity);
			console.log("Thank you!")

			connection.end();
		})
			} else {
				console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
				console.log('Please modify your order.');

				displayItems();
			}
				
		}

	})
  })
}

function displayItems(){

	connection.query("SELECT * FROM products", function(err,data){
		if (err) throw err;

		console.log("Our Inventory: ");

		var displayIt = "";
		for (var i = 0; i < data.length; i++){
			displayIt = "";
			displayIt += "Item ID #: " + data[i].item_id + " || ";
			displayIt += "Product Name: " + data[i].product_name + " || ";
			displayIt += "Department: " + data[i].department_name + " || ";
			displayIt += "Price: $" + data[i].price + "\n";

			console.log(displayIt);
		}

		promptChoice();
	})

}

function runApp() {

	displayItems();
}

runApp();

