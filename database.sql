create database if not exists backend_dojo;

use backend_dojo;

create table `track` (
    `id` INT primary key NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(128) NOT NULL,
    `youtube_url` VARCHAR(255)  NOT NULL,
    `id_album` int not null,
    constraint fk_id_album
    foreign key (id_album)
    references album(id)
); 

create table `album` (
    `id` INT primary key NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255)  NOT NULL,
    `picture` VARCHAR(255)  NOT NULL,
    `artist` VARCHAR(255)  NOT NULL,
);

INSERT INTO
  track (title, youtube_url, id_album)
VALUES
  (
    'The End',
    'https://www.youtube.com/watch?v=VScSEXRwUqQ',
    '1'
  ),
  (
    'When The Music over',
    'https://www.youtube.com/watch?v=nOJSmXSFCWk',
    '2'
  ),
  (
    'Light my fire',
    'https://www.youtube.com/watch?v=cq8k-ZbsXDI',
    '3'
  ),
  (
    'Spanish Caravan',
    'https://www.youtube.com/watch?v=6zrwCjjUqs0',
    '4'
  ),
  (
    'Light my fire',
    'https://www.youtube.com/watch?v=cq8k-ZbsXDI',
    '5'
  ),
  (
    'Riders of the storm',
    'https://www.youtube.com/watch?v=1hrgT_ZDUvs&t=89s',
    '6'
  );

  INSERT INTO
  album (title, genre, picture, artist)
VALUES
  (
    'The Doors',
    'Rock',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rhino.com%2Farticle%2Fjanuary-1967-the-doors-debut-with-the-doors&psig=AOvVaw3EWv1hPAX2gWsXW1afNUfG&ust=1668609558224000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjPxpK1sPsCFQAAAAAdAAAAABAY',
    'Jim Morrison'
  ),
  (
    'LA woman',
    'Rock',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F7IKUTIc9UWuVngyGPtqNHS&psig=AOvVaw3EWv1hPAX2gWsXW1afNUfG&ust=1668609558224000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjPxpK1sPsCFQAAAAAdAAAAABAO',
    'Jim Morrison'
  ),
  (
    'Strange Days',
    'Rock',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F6v5IVMmY1IvWtbfnQoiFSf&psig=AOvVaw2gymd0nxk1JTB6kwPwwoJ5&ust=1668610352203000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIi_0oy4sPsCFQAAAAAdAAAAABAE',
    'Jim Morrison'
  ),
  (
    'Maria',
    'Rock',
    'maria.iskandar@example.com',
    'Jim Morrison'
  ),
  (
    'Jane',
    'Rock',
    'jane.doe@example.com',
    'Jim Morrison'
  ),
  (
    'Johanna',
    'Rock',
    'johanna.martino@example.com',
    'Jim Morrison'
  );