# Introduction to q Language

q is a vector-based programming language used for array processing and querying databases. It is often used with the kdb+ database.

## Basic Syntax

### Variables
Variables in q are dynamically typed and can be assigned without explicit declaration.

```q
a: 10
b: "Hello, q!"
c: 3.14
```

### Lists
Lists can hold elements of different types.

```q
list: (1; "two"; 3.0)
```

### Functions
Functions are defined using the syntax `{[parameters] expression}`.

```q
add:{[x;y] x + y}
result: add[2;3]  / result is 5
```

### Tables
Tables are a key data structure in q, used for storing tabular data.

```q
table: (`name`age!(`Alice`Bob`Charlie; 25 30 35))
```

### Queries
You can query tables using the `select` statement.

```q
select name from table where age > 30
```

## Example
Here is a simple example that demonstrates creating a table and querying it.

```q
/ Create a table
people: (`name`age!(`Alice`Bob`Charlie; 25 30 35))

/ Query the table
adults: select name from people where age >= 30
```

This will return a table with the names of people who are 30 years old or older.

## Conclusion
This document provides a brief introduction to the q language. For more detailed information, refer to the official q documentation.
