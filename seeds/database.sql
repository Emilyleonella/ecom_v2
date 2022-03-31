CREATE TABLE products(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
type INT, 
description VARCHAR (100),
price DECIMAL(3,2)
);


CREATE TABLE product_type(
id INT PRIMARY KEY AUTO_INCREMENT,
type VARCHAR(70));

-- forgot to add foriegn key to products table 
ALTER TABLE products 
ADD FOREIGN KEY (type) REFERENCES product_type(id);

-- addinng types to product_type table
INSERT INTO product_type(type)
VALUES 
(' Academic Planner');


-- adding a few products 
INSERT INTO products(name, type, description, price)
VALUES(
'Pineapple Planner',
5,
'Full year Academic planner',
10.00
);
-- fixing data type 
ALTER TABLE products
MODIFY price DECIMAL (5,2);

INSERT INTO products(name, type, description, price)
VALUES(
'Cora',
3,
'Grid Bullet Jornal',
10.00
);

-- deleting row in products page 
DELETE FROM products
WHERE id = 4;

ALTER TABLE products 
ADD images VARCHAR(500);

UPDATE products 
SET name = 'Motivate U'
WHERE id = 3;

UPDATE products 
SET images = 'images/planner 999.jpeg'
WHERE id = 2;

UPDATE products 
SET images = 'images/newbullet1.jpeg'
WHERE id = 22;

UPDATE products 
SET images = 'images/ANY111.webp'
WHERE id = 23;

UPDATE products 
SET images = 'images/planner_3.jpeg'
WHERE id = 24;

UPDATE products 
SET images = 'images/newbullet2.jpeg'
WHERE id = 25;

SELECT * FROM products
WHERE type = 1;

SELECT description FROM products;

