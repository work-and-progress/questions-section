psql -h localhost
\list -- to show dbs
DROP DATABASE IF EXISTS unzwilling;
CREATE DATABASE unzwilling;
\c unzwilling; -- to switch into unzwilling from karinaizawa, not USE unzwilling;
\dt -- to show tables

DROP TABLE IF EXISTS questions;

CREATE TABLE if not exists questions (
  question_id varchar PRIMARY KEY, --uuid
  product_id SERIAL,
  question_text varchar (150),
  question_date DATE,
  question_user_id uuid, --uuid
  question_user_email varchar (50),
  question_username varchar (50),
  question_user_location varchar (150)
)

CREATE TABLE if not exists answers (
  answer_id varchar PRIMARY KEY, --uuid
  product_id SERIAL,
  question_id uuid,
  answer_text varchar (150),
  answer_date DATE,
  answer_user_id uuid, --uuid
  answer_user_email varchar (50),
  answer_username varchar (50),
  answer_user_location varchar (150),
  answer_helpful_yes integer,
  answer_helpful_no integer
)

------------------------------------------------------------------------
-- create a temporary table with all the data
-- https://stackoverflow.com/a/12619903/14330883

DROP TABLE IF EXISTS temporary_table;

--create temporary table temporary_table (
create table temporary_table (
  answer_id uuid PRIMARY KEY, --uuid
  product_id SERIAL,
  question_id uuid, --uuid
  question_text varchar (150),
  question_date DATE,
  question_user_id uuid, --uuid
  question_user_email varchar (50),
  question_username varchar (50),
  question_user_location varchar (150),
  answer_text varchar (150),
  answer_date DATE,
  answer_user_id uuid, --uuid
  answer_user_email varchar (50),
  answer_username varchar (50),
  answer_user_location varchar (150),
  answer_helpful_yes integer,
  answer_helpful_no integer
);

-- copy the entire csv to this temporary table
copy temporary_table(product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location,answer_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_username,answer_user_location,answer_helpful_yes,answer_helpful_no)
from '/Users/karinaizawa/Desktop/questions-section/data-generation/generatedData/100-tester.csv'
DELIMITER ','
CSV HEADER;

-- need to delete the duplicate questions .. not sure if this will work
-- https://stackoverflow.com/a/12963112/14330883 this is the one that is displayed
-- https://stackoverflow.com/a/46775289/14330883

DELETE FROM temporary_table a USING (
  SELECT MIN(ctid) as ctid, question_id
    FROM temporary_table
    GROUP BY question_id HAVING COUNT(*) > 1
) b
WHERE a.question_id = b.question_id
AND a.ctid <> b.ctid

-- insert into questions table
insert into questions(product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location)
select product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location
from temporary_table


-- example
COPY questions(product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location)
FROM '/Users/karinaizawa/Desktop/questions-section/data-generation/generatedData/100-tester.csv'
DELIMITER ','
CSV HEADER;

COPY answers(product_id,answer_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_username,answer_user_location,answer_helpful_yes,answer_helpful_no)
FROM './data-generation/generatedData/100-tester.csv'
DELIMITER ','
CSV HEADER;
