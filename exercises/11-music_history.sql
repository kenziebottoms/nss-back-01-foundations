-- 1. Retrieve all entries in the Genre table
SELECT * from Genre;

-- 2. Add an artist to the Artist table.
INSERT INTO Artist VALUES(null, "Marianas Trench", 2001)

-- 3. Add an album by your artist to the Album table.
INSERT INTO Album VALUES(null, "Astoria", "2015", 3289, "604 Records, Inc.", 31, 3);
INSERT INTO Album VALUES(null, "Ever After", "2012", 3209, "604 Records, Inc.", 31, 3);

-- 4. Add some songs from that album to the Song table.
INSERT INTO Song VALUES(null, "Desperate Measures", 349, "2012", 3, 31, 30);
INSERT INTO Song VALUES(null, "This Means War", 325, "2015", 3, 31, 29);

-- 5. Retrieve the song titles, album title, and artist name for all of the data you just entered in.
SELECT
	s.ReleaseDate AS ReleaseDate,
	s.Title AS Title,
	art.ArtistName AS Artist,
	al.Title AS Album,
	g.Label AS Genre,
	s.SongLength AS Duration
FROM Song s
LEFT JOIN
	Album al ON al.AlbumId = s.AlbumId
LEFT JOIN
	Artist art ON art.ArtistId = s.ArtistId
LEFT JOIN
	Genre g ON g.GenreId = s.GenreId;

-- 6. Retrieve the song count for each album.
SELECT
	al.Title AS Album,
	ar.ArtistName AS Artist,
	(SELECT COUNT(*) FROM Song s
		WHERE s.AlbumId = al.AlbumId) AS SongCount
FROM Album al
LEFT JOIN
	Song s ON s.AlbumId = al.AlbumId
LEFT JOIN
	Artist ar ON ar.ArtistId = al.ArtistId
GROUP BY al.AlbumId;

-- 7. Retrieve the song count for each artist.
SELECT
	ar.ArtistName AS Artist,
	(SELECT COUNT(*) FROM Song s
		WHERE s.ArtistId = ar.ArtistId) AS SongCount
FROM Artist ar
LEFT JOIN
	Song s ON s.ArtistId= ar.ArtistId
GROUP BY ar.ArtistId;

-- 8. Retrieve the song count for each genre.
SELECT
	g.Label,
	(SELECT COUNT(*) FROM Song s
		WHERE s.GenreId = g.GenreId) AS SongCount
FROM Genre g
LEFT JOIN
	Song s ON s.GenreId = g.GenreId
GROUP BY g.GenreId;

-- 9. Retrieve the album with the longest duration. Display the album title and the duration.
SELECT
	al.Title,
	MAX(al.AlbumLength) AS Duration
FROM Album al;

-- 10. Retrieve the song with the longest duration. Display the song title and the duration.
SELECT
	s.Title,
	MAX(s.SongLength) AS Duration
FROM Song s;

-- 11. Modify the previous query to also display the title of the album.
SELECT
	s.Title,
	MAX(s.SongLength) AS Duration,
	al.Title
FROM Song s
LEFT JOIN
	Album al ON al.AlbumId = s.AlbumId;