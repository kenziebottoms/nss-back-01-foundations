-- 1. Get a list of all the orders of Products in a given Category (as an input parameter).
SELECT
    o.*,
    od.*,
    c.CategoryName
FROM Orders o
LEFT JOIN
    Category c ON c.CategoryName = `${catName}`
JOIN
    OrderDetail od ON od.OrderId = o.id AND od.ProductId = p.id
JOIN
    Product p ON p.CategoryId = c.id;

-- 2. Get the name and Order count for each Product.
SELECT
    p.ProductName,
    (SELECT
        COUNT(*)
        FROM OrderDetail od
        WHERE od.ProductId = p.Id
    ) as OrderCount
FROM Product p;

-- 3. Get the list of the months which don’t have any Orders.
    -- Kenzie: These are the list of the months which _have_ orders. Don't know how to get ####-## strings that are not in the DB from the DB.
SELECT
    SUBSTR(o.OrderDate,0,8) as Month,
    (SELECT
        COUNT(*)
        FROM Orders o2
        WHERE SUBSTR(o2.OrderDate,0,8) = SUBSTR(o.OrderDate,0,8)
    ) as OrderCount
FROM Orders o
GROUP BY Month;

-- 4. Get the 3 Products with the most Orders.
SELECT
    p.ProductName,
	(SELECT
        COUNT(*)
        FROM OrderDetail od
        WHERE od.ProductId = p.Id
    ) as OrderCount
FROM Product p
ORDER BY OrderCount DESC
LIMIT 3;

-- 5.  Get the list of the months which don’t have any Orders for the Product "chai".
    -- Kenzie: same problem as with #3

-- 6. Get the list of the Products which don’t have any Orders.

-- 7. Get the list of Employees who processed Orders for the Product "chai".

-- 8. Get the list of Employees and the count of Orders they processed in the month of March across all years.

-- 9. Get the list of Employees who processed Orders that belong to the city in which they live.

-- 10. Get the list of Employees who processed Orders that don’t belong to the city in which they live.

-- 11. Get the Shippers that processed Orders for the Category "Seafood".

-- 12. Get the name and number of Orders processed by Employees in the USA for each Category.