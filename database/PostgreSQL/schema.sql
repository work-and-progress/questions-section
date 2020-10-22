-- useful commands
psql -h localhost
\list -- to show dbs
DROP DATABASE IF EXISTS unzwilling;
CREATE DATABASE unzwilling;
\c unzwilling; -- to switch into unzwilling from karinaizawa, not USE unzwilling;
\dt -- to show tables
\! clear -- to clear screen

-- in case you mess up
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS temporary_table;

------------------------------------------------------------------------
CREATE TABLE if not exists questions (
  question_id uuid PRIMARY KEY, --uuid
  product_id integer,
  question_text varchar (150),
  question_date DATE,
  question_user_id uuid, --uuid
  question_user_email varchar (50),
  question_username varchar (50),
  question_user_location varchar (150)
)

CREATE TABLE if not exists answers (
  answer_id uuid PRIMARY KEY, --uuid
  product_id integer, -- type serial or type integer? idk
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

-- create a temporary table with all the data https://stackoverflow.com/a/12619903/14330883
-- create table temporary_table (
create temporary table temporary_table (
  answer_id uuid PRIMARY KEY, --uuid
  question_id uuid, --uuid
  product_id integer,
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

------------------------------------------------------------------------
-- copy the entire csv to this temporary table
copy temporary_table(product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location,answer_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_username,answer_user_location,answer_helpful_yes,answer_helpful_no)
from '/Users/karinaizawa/Desktop/questions-section/data-generation/generatedData/appa.csv'
DELIMITER ','
CSV HEADER;

-- FIRST, insert into answers table the relevant information
-- insert into answers table from temporary table
insert into answers(answer_id,product_id,question_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_username,answer_user_location,answer_helpful_yes,answer_helpful_no)
select answer_id,product_id,question_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_username,answer_user_location,answer_helpful_yes,answer_helpful_no
from temporary_table


-- NEXT,  we must make some adjustments to the temporary table so for the questions table.
-- we have to delete the duplicate question_ids bc question_id is a primary keyxw
-- https://stackoverflow.com/a/12963112/14330883 this is the one that is used here, https://stackoverflow.com/a/46775289/14330883 another alternative that was explored
DELETE FROM temporary_table a USING (
  SELECT MIN(ctid) as ctid, question_id
    FROM temporary_table
    GROUP BY question_id HAVING COUNT(*) > 1
) b
WHERE a.question_id = b.question_id
AND a.ctid <> b.ctid

-- FINALLY, insert into questions table from temporary table
insert into questions(product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location)
select product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location
from temporary_table

-- delete the temporary table because it's useless now
DROP TABLE IF EXISTS temporary_table;

-------------------------------------------------------------------------
-- inner join
SELECT
  questions.question_id,
	questions.product_id,
	questions.question_text,
	questions.question_date,
	questions.question_username,
	answers.answer_id,
	answers.answer_text,
	answers.answer_date,
	answers.answer_username,
	answers.answer_helpful_yes,
	answers.answer_helpful_no
FROM questions
INNER JOIN answers ON questions.question_id = answers.question_id
WHERE questions.product_id = 9999999;


-------------------------------------------------
SELECT
   COUNT(*)
FROM
   answers;

---------------------------------------------------
create index on questions (product_id);
create index on answers (product_id);

--******************** important!!
create index on questions (question_id);
create index on answers (question_id);