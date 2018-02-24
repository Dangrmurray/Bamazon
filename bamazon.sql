DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Foam Roller', 'Medical', 19.75, 500),
		('LG Television', 'Technology', 699.25, 627),
		('Ash Trey', 'Home Goods', 4.99, 300),
		('iPhone', 'Technology', 1004.25, 400),
		('Onion', 'Grocery', 0.85, 800),
		('Technics 1200 Turntable', 'Technology', 430.90, 10000),
		('Sonos Speaker', 'Technology', 84.95, 267),
		('Hue Light Strip', 'Technology', 74.50, 200),
		('Roomba', 'Home Goods', 502.55, 476),
		('Sonicare Electric Toothbrush', 'Technology', 75.99, 575),
		('Degree Deoderant', 'Home Goods', 3.52, 423),
		('Hugo Boss Sports Coat', 'Clothing', 809.75, 150),
		('Tampons', 'Home Goods', 5.99, 89),
		('BosVision Computer Stand', 'Technology', 20.00, 120),
		('Under Armour Running Pants', 'Clothing', 15.77, 250),
		('Orijen Adult Dog Food', 'Pet', 90.99, 157),
		('Cat Nip', 'Pet', 8.50, 163),
		('Ziploc Freezer Bags', 'Grocery', 5.25, 389),
		('Inversion Table', 'Medical', 343.85, 550),
		('Porchini Mushrooms', 'Grocery', 4.99, 432);