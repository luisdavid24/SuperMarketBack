# Final examen
By Luis David Lopez Mendoza

## Brief Project Description

This project responds to the challenge posed by the teacher.

## Table of Contents

- [Configuration](#configuration)
- [Usage](#usage)
- [Technology](#technology)
- [Contact](#contact)

## Configuration

1. Database Configuration:
   - Before starting, make sure you have PostgreSQL installed on your machine. You will need to change the settings in the 'application.properties' file.
   - You must create a database with the name 'SpringBootGraphQl'. The creation of the tables will be done by Spring Boot during the execution process.

2. Running the database script:

 ```sql
INSERT INTO public.provider(
	id, bank_account, category, description, direction, name)
	VALUES (1, 'ES7921000813610123456789', 'Alimentos', 'Proveedor de alimentos frescos', 'Calle 123, Ciudad', 'Proveedor A');

INSERT INTO public.provider(
	id, bank_account, category, description, direction, name)
	VALUES (2, 'ES6821000813610987654321', 'Bebidas', 'Proveedor de bebidas alcohólicas y no alcohólicas', 'Avenida 45, Ciudad', 'Proveedor B');

INSERT INTO public.provider(
	id, bank_account, category, description, direction, name)
	VALUES (3, 'ES6621000813610432198765', 'Limpieza', 'Proveedor de productos de limpieza', 'Calle 67, Ciudad', 'Proveedor C');
INSERT INTO public.provider(
	id, bank_account, category, description, direction, name)
	VALUES (4, 'ES6521000813610654321987', 'Electrónica', 'Proveedor de dispositivos electrónicos', 'Boulevard 89, Ciudad', 'Proveedor D');
INSERT INTO public.product(
	id, name, buying_price, sale_price, brand, category, provider_id)
	VALUES (1, 'Manzanas Fuji', 1, 2, 'FruitCo', 'Alimentos', 1);

INSERT INTO public.product(
	id, name, buying_price, sale_price, brand, category, provider_id)
	VALUES (2, 'Jugo de Naranja', 3, 4, 'DrinkCo', 'Bebidas', 2);

INSERT INTO public.product(
	id, name, buying_price, sale_price, brand, category, provider_id)
	VALUES (3, 'Detergente XYZ', 5, 7, 'CleanCo', 'Limpieza', 3);

INSERT INTO public.product(
	id, name, buying_price, sale_price, brand, category, provider_id)
	VALUES (4, 'Televisor 50"', 200, 250, 'ElectroBrand', 'Electrónica', 4);

INSERT INTO public.product(
	id, name, buying_price, sale_price, brand, category, provider_id)
	VALUES (5, 'Peras Williams', 2, 3, 'FruitCo', 'Alimentos', 1);

INSERT INTO public.product(
	id, name, buying_price, sale_price, brand, category, provider_id)
	VALUES (6, 'Cerveza Lager', 2, 3, 'DrinkCo', 'Bebidas', 2);

INSERT INTO public.product(
	id, name, buying_price, sale_price, brand, category, provider_id)
	VALUES (7, 'Limpiador Multiusos', 4, 6, 'CleanCo', 'Limpieza', 3);

INSERT INTO public.product(
	id, name, buying_price, sale_price, brand, category, provider_id)
	VALUES (8, 'Laptop 15"', 500, 650, 'ElectroBrand', 'Electrónica', 4);


```
## Usage:
To use the project, you must first run the backend (implemented in Spring Boot) and then execute the SQL file to set up the database. Afterward, you can start the frontend using a live server.

## Technology
The technologies used in the project were:

- Spring Boot
- Bootstrap
- Chart.js
- HTML
- CSS
- GraphQl

## Contact

If you have any questions, comments, or suggestions about the project, feel free to reach out to me.

- Name: Luis David
- Email: luis_lopez82201@elpoli.edu.co
