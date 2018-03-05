# Introduction to SQL queries with Music History

For each of the following exercises, provide the appropriate query. Everything from class and the [Sqlite](http://www.sqlite.org/) documentation for SQL [keywords](https://www.sqlite.org/lang.html) and [functions](https://www.sqlite.org/lang_corefunc.html) is fair game.

- [x] Query all of the entries in the `Genre` table
- [x] Using the `INSERT` statement, add one of your favorite artists to the `Artist` table.
- [x] Using the `INSERT` statement, add one, or more, albums by your artist to the `Album` table.
- [x] Using the `INSERT` statement, add some songs that are on that album to the `Song` table.
- [x] Write a `SELECT` query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the [`LEFT JOIN`](https://www.tutorialspoint.com/sql/sql-using-joins.htm) keyword sequence to connect the tables, and the `WHERE` keyword to filter the results to the album and artist you added. Here is some more info on [joins](http://www.dofactory.com/sql/join) that might help.
    > **Reminder:** Direction of join matters. Try the following statements and see the difference in results.

    ```
    SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
    SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;
    ```
- [x] Write a `SELECT` statement to display how many songs exist for each album. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
- [x] Write a `SELECT` statement to display how many songs exist for each artist. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
- [x] Write a `SELECT` statement to display how many songs exist for each genre. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
- [x] Using `MAX()` function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
- [x] Using `MAX()` function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
- [x] Modify the previous query to also display the title of the album.