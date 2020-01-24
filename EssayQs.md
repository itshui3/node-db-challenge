## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Explain the difference between `Relational Databases` and `SQL`.

Relational databases are a design pattern where data is stored in tables that reference one another through the use of foreign keys. SQL is the language used to interact with the databases. 

- [ ] Why do tables need a `primary key`?

To uniquely identify records

- [ ] What is the name given to a table column that references the primary key on another table.

Foreign key

- [ ] What do we need in order to have a _many to many_ relationship between two tables.

Neither individual tables can store foreign keys because each record would have more than one to keep track of. To reflect each individual relationship we will need a third table to store these references. This table will also track information relevant to the reference instance. 