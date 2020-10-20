DROP DATABASE IF EXISTS unzwilling;

CREATE DATABASE unzwilling;

USE unzwilling;

-- CREATE TABLE [IF NOT EXISTS] products (
--   product_id INT PRIMARY KEY,
-- );

CREATE TABLE [IF NOT EXISTS] questions_and_answers (
  product_id INT PRIMARY KEY,
  question_id TEXT PRIMARY KEY,
  question_text TEXT,
  question_username TEXT, --add this from users.csv
  question_date TEXT,
  answer_id TEXT,
  answer_text TEXT,
  answer_username TEXT, --add this from users.csv
  answer_date TEXT,
  answer_helpful_yes INT,
  asnwer_helpful_no INT,
);

CREATE TABLE [IF NOT EXISTS] users (
  user_id UUID PRIMARY KEY,
  username TEXT,
  email TEXT,
  location TEXT,
);

-- example
COPY persons(first_name, last_name, dob, email)
FROM 'C:\sampledb\persons.csv'
DELIMITER ','
CSV HEADER;
