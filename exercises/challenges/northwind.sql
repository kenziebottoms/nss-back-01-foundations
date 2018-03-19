-- Get a list of all the orders processed with category name (as an input parameter)

SELECT
	c.CategoryName,
    o.*,
	od.*,
    p.id
FROM Orders o
JOIN
	Category c ON c.CategoryName = "Seafood"
JOIN
    OrderDetail od ON od.OrderId = o.id AND od.ProductId = p.id
JOIN
    Product p ON p.CategoryId = c.id;

-- SELECT id FROM Category WHERE Category.CategoryName = "Seafood"

-- Get the product name, count of orders processed

-- Get the list of the months which don’t have any orders

-- Get the top 3 products which have the most orders

-- Get the list of the months which don’t have any orders for product chai

-- Get the list of the products which don’t have any orders across all the months and year as

-- Get the list of employees who processed orders for the product chai

-- Get the list of employees and the count of orders they processed in the month of march across all years

-- Get the list of employees who processed the orders that belong to the city in which they live

-- Get the list of employees who processed the orders that don’t belong to the city in which they live

-- Get the shipping companies that processed ordersfor the category Seafood

-- Get the category name and count of orders processed by employees in the USA