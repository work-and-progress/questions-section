CREATE KEYSPACE product WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

CREATE TYPE user (
  user_id UUID PRIMARY KEY,
  username TEXT,
  email TEXT,
  location TEXT
)

CREATE TABLE product.product_by_id (
  product_id INT,
  question_id TEXT,
  question_text TEXT,
  question_username user, --add this from users.csv
  question_date DATE,
  answer_id TEXT,
  answer_text TEXT,
  answer_username user, --add this from users.csv
  answer_date DATE,
  answer_helpful_yes INT,
  asnwer_helpful_no INT,
  PRIMARY KEY (product_id, review_id, answer_id)
  WITH comment = 'find products by product ID'
  previous_users list<frozen<user>>s
) WITH CLUSTERING ORDER BY (product_id ASC, question_date DESC);

----------

-- CREATE KEYSPACE product WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

-- CREATE TABLE user.user_by_id (
--   user_id UUID PRIMARY KEY,
--   username TEXT,
--   email TEXT,
--   location TEXT,
--   WITH comment = 'find users by user_id when you hover over username on the UI'
-- );

