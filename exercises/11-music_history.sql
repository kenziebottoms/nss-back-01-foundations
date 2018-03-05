-- 1. Retrieve all entries in the Genre table
SELECT * from Genre;

-- 2. Add an artist to the Artist table.
INSERT INTO Artist VALUES(null, "Marianas Trench", 2001)

-- 3. Add an album by your artist to the Album table.
INSERT INTO Album VALUES(null, "Astoria", "2015", 3289, "604 Records, Inc.", 30, 3);
INSERT INTO Album VALUES(null, "Ever After", "2012", 3209, "604 Records, Inc.", 30, 3);

-- 4. Add some songs from that album to the Song table.
INSERT INTO Song VALUES(null, "Desperate Measures", 349, "2012", 3, 30, 30);
INSERT INTO Song VALUES(null, "This Means War", 325, "2015", 3, 30, 29);

-- 5. Retrieve the song titles, album title, and artist name for all of the data you just entered in.
SELECT
	s.ReleaseDate as ReleaseDate,
	s.Title as Title,
	art.ArtistName as Artist,
	al.Title as Album,
	g.Label as Genre,
	s.SongLength as Duration
FROM Song s
LEFT JOIN
	Album al ON al.AlbumId = s.AlbumId,
	Artist art ON art.ArtistId = s.ArtistId,
	Genre g ON g.GenreId = s.GenreId;