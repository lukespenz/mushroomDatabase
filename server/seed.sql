CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username varchar(40) NOT NULL,
  password varchar(40) NOT NULL,
  mushrooms_added INT NOT NULL,
  favorites INT
);

CREATE TABLE mushrooms (
  mushroom_id SERIAL PRIMARY KEY NOT NULL,
  image_url varchar(500),
  mushroom_name varchar(100),
  location varchar(100),
  date DATE NOT NULL,
  who INT NOT NULL,
  altitude INT,
  habitat varchar(40),
  substrate varchar(40),
  spore_print varchar(40),
  edible BOOLEAN,
  psychoactive BOOLEAN,
  notes varchar(2000)
);

 INSERT INTO mushrooms (image_url,
  mushroom_name,
  location,
  date,
  who,
  altitude, 
  habitat,
  substrate, 
  spore_print, 
  edible,
  psychoactive, 
  notes
)
values('https://imgs.search.brave.com/pZESp20kyuSS6AhaA0JxW8Zd5HL8dIAKN__KjwQQl08/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/MjBJcWpOQjFCaGVn/MTFtTU5uMGFBSGFI/YSZwaWQ9QXBp',
'anamita muscaria',
'Salt Lake',
'01/01/2022',
5,
4500,
'Forest',
'Wood',
'Black',
true,
true,
'noted'
);

