CREATE TABLE "owners"
(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "first_name" VARCHAR (50) NOT NULL
);

CREATE TABLE "pets"
(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "owner_id" INT REFERENCES "owners" ON DELETE CASCADE NOT NULL,
    "pet_name" VARCHAR (50) NOT NULL,
    "breed" VARCHAR (50) NOT NULL,
    "color" VARCHAR (50) NOT NULL,
    "status" DATE
);

INSERT INTO "owners"
    ("first_name")
VALUES
    ('Jane');
INSERT INTO "owners"
    ("first_name")
VALUES
    ('Joe');

INSERT INTO "pets"
    ("owner_id", "pet_name", "breed", "color")
VALUES
    ('1', 'marley', 'cat', 'Brown');
INSERT INTO "pets"
    ("owner_id", "pet_name", "breed", "color")
VALUES
    ('2', 'izzy', 'pug', 'white');