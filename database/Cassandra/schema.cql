cqlsh
describe keyspaces;
describe tables;
USE unzwilling_questions;

---------------------------------------------------------------------------------
CREATE KEYSPACE unzwilling_questions WITH REPLICATION = {
  'class' : 'SimpleStrategy',
  'replication_factor' : 1
};
USE unzwilling_questions;
DROP TABLE IF EXISTS unzwilling_questions.questions_by_product_id;

CREATE TABLE if not exists questions_by_product_id (
  product_id INT,
  question_id uuid, --uuid
  question_text TEXT,
  question_date DATE,
  question_user_id uuid, --uuid
  question_user_email text,
  question_username TEXT,
  question_user_location text,
  answer_id uuid, --uuid
  answer_text TEXT,
  answer_date DATE,
  answer_user_id uuid, --uuid
  answer_user_email text,
  answer_username TEXT,
  answer_user_location text,
  answer_helpful_yes INT,
  answer_helpful_no INT,
  PRIMARY KEY ((product_id), question_date)
);

COPY questions_by_product_id (product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location,answer_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_username,answer_user_location,answer_helpful_yes,answer_helpful_no) FROM './data-generation/generatedData/appa.csv' WITH HEADER = true;
----------------------------------------------------------------------------------
SELECT
  product_id,
  question_date,
  question_id,
	question_text,
	question_username,
	answer_id,
	answer_text,
	answer_date,
  answer_username,
	answer_helpful_yes,
	answer_helpful_no
FROM unzwilling_questions.questions_by_product_id
where product_id = 9999999
order by question_date desc;

insert into unzwilling_questions.questions_by_product_id (
  product_id,
  question_date,
  question_id,
	question_text,
	question_username,
	answer_id,
	answer_text,
	answer_date,
  answer_username,
	answer_helpful_yes,
	answer_helpful_no
)
values (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8,
  $9,
  $10,
  $11
);

-------------------
--indexing
create index question_date on unzwilling_questions.questions_by_product_id(question_date);

-- not sure if it even helped