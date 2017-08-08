CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

INSERT INTO "users" (username, password)
VALUES ('Bob', 1234);

CREATE TABLE "user_writing" (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "users",
  writing VARCHAR (100000)
);

INSERT INTO "user_writing" ("writing", "user_id")
VALUES ('Preface: The sky grew dark. The air, charged with with particles, blew across your fur as it stood on end. There was another death today. No one you knew, but how long would that last? Everyone in your clan, even your friends and family, grew wary of one another. Who would be next? Intro: You hop out across the grassy field, sparse with flowers. As you move from one clover patch to the next, you grow thirsty and your long ears catch the trickle of water in the distance. As you move down to the river, something inside you tells you to run. You quickly move down the hill and into the shadows cast by looming trees. They seem to move on their own, pulling the air around rather than being pushed by the brisk breeze. Their limbs stretch across your path overhead, seeming ever closer, causing you to', 1);
