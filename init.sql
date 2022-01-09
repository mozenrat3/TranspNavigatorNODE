CREATE TABLE IF NOT EXISTS users
(
	id               SERIAL         PRIMARY KEY,
	login            VARCHAR(20)       NOT NULL  ,
	password         VARCHAR(20)       NOT NULL  ,
	role             INTEGER
);

CREATE TABLE IF NOT EXISTS user_info
(
	id               SERIAL        PRIMARY KEY,
	email            VARCHAR(30)   UNIQUE CHECK(Email!=''),
	phone            VARCHAR(18)   UNIQUE CHECK(Phone!=''),
	user_id           INTEGER      
);       

 CREATE TABLE IF NOT EXISTS transport
(
	id               SERIAL        PRIMARY KEY	,
	type             TEXT          NOT NULL
);

CREATE TABLE IF NOT EXISTS stops
(
	id               SERIAL         PRIMARY KEY ,
	name             VARCHAR(40)       NOT NULL	,
	coords           POINT          NOT NULL
);
CREATE TABLE IF NOT EXISTS routes
(
	id               SERIAL          PRIMARY KEY ,
	number           INTEGER                     ,
	stop_start       INTEGER                     ,
	stop_end         INTEGER        
);

CREATE TABLE IF NOT EXISTS routes_Stops
(
	id               SERIAL          PRIMARY KEY,
	routes_id        INTEGER                    ,
	stopes_id        INTEGER                    ,
	sort             INTEGER	
);

CREATE TABLE IF NOT EXISTS timetable
(
	id               SERIAL          PRIMARY KEY,
	route_id         INTEGER                    ,
	transport_id     INTEGER                    ,
	arrival_time     TIME            NOT NULL   ,
	weekdays         INTEGER         NOT NULL   ,
	stop_id          INTEGER        
);

CREATE TABLE IF NOT EXISTS reviews
(
	id               SERIAL          PRIMARY KEY,
	route_id         INTEGER                    ,
	user_id          INTEGER                    ,
	comment          CHAR(2000)                 ,
	rate             INTEGER         NOT NULL   ,
	dates            TIMESTAMP 
);

ALTER TABLE user_info 
  ADD CONSTRAINT FK_user_info_user_id_users_id
  FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE routes 
  ADD CONSTRAINT FK_routes_stop_start_stops_id
  FOREIGN KEY (stop_start) REFERENCES stops(id)
    ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE routes 
  ADD CONSTRAINT FK_routes_stop_end_stops_id
  FOREIGN KEY (stop_end) REFERENCES stops(id)
    ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE routes_stops 
  ADD CONSTRAINT FK_routes_wtops_routes_id_routes_id
  FOREIGN KEY (routes_id) REFERENCES routes(id) 
    ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE routes_stops 
  ADD CONSTRAINT FK_routes_stops_stopes_id_stops_id
  FOREIGN KEY (stopes_id) REFERENCES stops(id)
    ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE timetable 
  ADD CONSTRAINT FK_timetable_route_id_routes_id
  FOREIGN KEY (route_id) REFERENCES routes(id)
    ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE timetable 
  ADD CONSTRAINT FK_timetable_transport_id_transport_id
  FOREIGN KEY (transport_id) REFERENCES transport(id) 
    ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE timetable 
  ADD CONSTRAINT FK_timetable_stop_id_stops_id
  FOREIGN KEY (stop_id) REFERENCES stops(id) 
    ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE reviews 
  ADD CONSTRAINT FK_reviews_route_id_routes_id
  FOREIGN KEY (route_id) REFERENCES routes(id) 
    ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE reviews 
  ADD CONSTRAINT FK_reviews_user_id_user_info_id
  FOREIGN KEY (user_id) REFERENCES user_info(id) 
    ON DELETE CASCADE
	ON UPDATE CASCADE; 



INSERT INTO users(id,login,password,role) VALUES
		(1,'mozzy','mozzy_3',0),
		(2,'moz','moz_3',1),
		(3,'mozz','mozz_3',1),
		(4,'mozy','mozy_3',1),
		(5,'mozzyy','mozzyy_3',1);
	
INSERT INTO user_info(id,email,phone,user_id) VALUES
		(1,'mozzy@mail.ru','+46364534',1),
		(2,'moz@mail.ru','+455543454',2),
		(3,'mozz@mail.ru','+46365646',3),
		(4,'mozy@mail.ru','+32454354',4),
		(5,'mozzyy@mail.ru','+546764567',5);
INSERT INTO transport(id,type) VALUES
		(1,'bus'),
		(2,'tram'),
		(3,'trolleybus'),
		(4,'tram'),
		(5,'trolleybus');
INSERT INTO stops(id,name,coords) VALUES
 		(1,'School num 31', '49.234 , 2.5273'),
 		(2,'School num 32', '41.234 , 2.4273'),
		(3,'School num 33', '11.214 , 1.4273'),
		(4,'School num 34', '51.234 , 6.4273'),
		(5,'School num 35', '71.234 , 5.4273');
	
INSERT INTO routes(id,number,stop_start,stop_end) VALUES
		(1,10,1,5),
		(2,4,1,3),
 		(3,5,2,5),
		(4,19,1,5),
		(5,11,1,4);
		
INSERT INTO routes_stops(id,routes_id,stopes_id,sort) VALUES
		(1,2, 4, 1 ),
		(2,1,4, 0 ),
 		(3,4,5, 1 ),
		(4,3,5, 0 ),
		(5,1,5,1);
	
INSERT INTO timetable(id,route_id,transport_id,arrival_time,weekdays,stop_id) VALUES
		(1,1,1, '04:05:06', 4, 1 ),
		(2,5,2, '14:25:10', 3, 2 ),
 		(3,2,5, '04:06:03', 1, 3 ),
		(4,3,4, '10:05:36', 7, 4 ),
		(5,4,3, '04:15:56', 6, 5 );
	
INSERT INTO reviews (id,route_id,user_id,comment,rate,dates) VALUES
		 (5,2,1,'my comment', 5, '2020-06-11 14:35:11'),
		 (2,1,2,'my com', 4, '2021-06-01 04:55:31'),
		 (1,4,3,'comment', 5, '2021-07-10 14:55:24'),
		 (4,5,4,'my', 2, '2015-01-11 05:25:10'),
		 (3,3,5,'mycomment', 1, '2021-07-10 04:35:11');