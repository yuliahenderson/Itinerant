INSERT INTO expedia (location, arrival, date) VALUES($1, $2, $3) RETURNING *;
