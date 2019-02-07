SELECT COUNT(*) AS `nb_short-films`
FROM film
WHERE (`duration`)<42 OR (`duration`)=42;