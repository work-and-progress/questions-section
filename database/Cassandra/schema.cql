CREATE KEYSPACE unzwilling_questions WITH REPLICATION = {'class' : 'SimpleStrategy',
'replication_factor' : 1};

describe keyspaces;

describe tables;

USE unzwilling_questions;

DROP TABLE IF EXISTS unzwilling_questions.product;

CREATE TABLE if not exists product (
  product_id INT,
  question_id TEXT,
  question_text TEXT,
  question_date DATE,
  question_user_id uuid,
  question_user_email text,
  question_username TEXT,
  question_user_location text,
  answer_id TEXT,
  answer_text TEXT,
  answer_date DATE,
  answer_user_id uuid,
  answer_user_email text,
  answer_username TEXT,
  answer_user_location text,
  answer_helpful_yes INT,
  answer_helpful_no INT,
  PRIMARY KEY (product_id),
);


-- run from root of directory
COPY product (product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location,answer_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_username,answer_user_location,answer_helpful_yes,answer_helpful_no) FROM './test_run.csv' WITH HEADER = true;


-- COPY products (product_id, question_id, question_text, question_date,question_user_id,question_user_email,question_user_username,question_user_location,answer_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_user_username,answer_user_location,answer_helpful_yes,answer_helpful_no) FROM '../../data-generation/generatedData/test-run.csv' WITH HEADER = true;

-- CREATE TYPE user (
--   user_id UUID,
--   username TEXT,
--   email TEXT,
--   location TEXT
-- )
