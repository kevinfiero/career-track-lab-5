CREATE TABLE pokemon (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    region TEXT NOT NULL,
    url TEXT NOT NULL
);

CREATE TABLE states (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    state TEXT NOT NULL,
    capital TEXT NOT NULL,
    url TEXT NOT NULL
);