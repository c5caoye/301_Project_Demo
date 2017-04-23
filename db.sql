DROP TABLE IF EXISTS users;
CREATE TABLE users (
	username VARCHAR(64) PRIMARY KEY,
	password VARCHAR(64),
	email VARCHAR(64)
);


INSERT INTO users VALUES ('ryan', '123', 'ryan@gmail.com');
						