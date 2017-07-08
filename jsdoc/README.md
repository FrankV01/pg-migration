# pg-migration
This is the API documentation for pg-migration which 
itself is a [PostgresSQL](https://www.postgresql.org/) 
migration tool. 

A migration tool allows you define forward (and sometimes)
backwards paths for database upgrades and downgrades thereby
allowing team members (and production) to "migrate" forward
version to version as changes are defined for the database.

My expectation for this process is that it's automatic and 
"*built in*" to the app. When the app is started, the database 
is migrated forward to the latest database version including any
seed or configuration data.
 
### Entry Point

The entry point to the library is `require('pg-migration')`. You can
view the relevant API documentation 
[$main](https://frankv01.github.io/pg-migration/global.html#$main) 

