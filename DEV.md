
# Development

When using the @UseGuards(JwtAuthGuard), 
the strategy will retrieve the payload part from the token
making it available in the request variable
That can be acessed in the Controllers using the following:
````text
  @Request() req
````

### Migrations

Add the following code to the UP and DOWN function in the migration to run the SQL query.
```text
    await queryRunner.query(
        `SQL QUERY`,
    )
```


### Database
