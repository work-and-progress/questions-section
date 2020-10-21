# DBMS Benchmarking
- 37,495,494 total rows imported into Cassandra (around 1 hr 15 min)
- 37,500,494 total rows imported into PostgresSQL (not sure why this number is higher)
  - 37,500,494 rows in answers table
  - 24,999,590 rows in questions table

## Cassandra (winner)
- around 2-10 ms typically
<img src="design-and-docs/cassandraquery1.png">

- highest number seen is 61 ms
<img src="design-and-docs/cassandraquery2.png">

## PostgreSQL

- join operation takes around 70-90 ms
<img src="design-and-docs/postgresquery.png">

- not too great
<img src="design-and-docs/postgresql2.png">