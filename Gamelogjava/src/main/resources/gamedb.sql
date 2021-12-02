-- Drop table

-- DROP TABLE gamedb.games;

CREATE TABLE gamedb.games (
	gameid serial NOT NULL,
	userid int4 NOT NULL,
	gamename varchar(50) NULL,
	gamesystem varchar(20) NULL,
	playtime float4 NULL DEFAULT 0,
	dateadded date NULL,
	datechanged date NULL,
	apiid int2 NULL DEFAULT 0,
	completion varchar(20) NULL,
	CONSTRAINT "Check_Completion" CHECK ((((completion)::text = 'completed'::text) OR ((completion)::text = 'beaten'::text) OR ((completion)::text = 'unplayed'::text) OR ((completion)::text = 'playing'::text))),
	CONSTRAINT games_pk PRIMARY KEY (gameid),
	CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES gamedb."user"(userid)
);

-- Drop table

-- DROP TABLE gamedb."user";

CREATE TABLE gamedb."user" (
	userid serial NOT NULL,
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (userid)
);