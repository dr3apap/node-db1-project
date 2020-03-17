-- Database Queries

-- Find all customers with postal code 1010
SELECT  * FROM Customers WHERE PostalCode = 1010;

-- Find the phone number for the supplier with the id 11 
SELECT Phone  FROM Suppliers WHERE SupplierID = 11;


-- List first 10 orders placed, sorted descending by the order date
SELECT TOP 10 * FROM [ORDERS] ORDER BY OrderDate DESC;

-- Find all customers that live in London, Madrid, or Brazil
SELECT Country, City, CustomerName,ContactName FROM Customers WHERE Country = 'Brazil'or City = 'London' or City =  'Madrid';
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO [Customers] (CustomerName,ContactName, Address, City, Country, PostalCode) VALUES("The Shire","Bilbo Baggins","1 Hobbit-Hole","Bag End", "Middle Earth", "111" );

-- Update Bilbo Baggins record so that the postal code changes to "11122"

UPDATE [Customers]  SET PostalCode = '11122' WHERE CustomerName ='The Shire';

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT COUNT(DISTINCT City) FROM Customers;

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT * FROM [Suppliers] WHERE LENGTH(SupplierName) > 20 ;