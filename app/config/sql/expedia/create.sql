INSERT INTO expedia (location, arrival, dateto, user_id) VALUES($1, $2, $3, $4) RETURNING *;
