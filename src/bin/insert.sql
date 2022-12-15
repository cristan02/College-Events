use college;

insert into department values (null , "Computer Science");
insert into department values (null , "Chemistry");

insert into student values ( null , "Ashbourn" , "DCunha" , 2019 , null , 1);
insert into student values ( null , "Moses" , "Crasto" , 2020 , null , 1);
insert into student values ( null , "Reeve" , "Barretto" , 2022 , null , 1);

insert into faculty values ( null , "Abishek" , "Guidekar" , "Asst Proff" , 1);
insert into faculty values ( null , "Dikshita" , "Aroskar" , "Asst Proff" , 1);

insert into workshop values ( null , "Web Development" , "2022-08-10" , "held on ...." , "Image link 1" , "Image link 2" , 1);
insert into workshop values ( null , "AI" , "2022-08-10" , "held on ...." , "Image link 1" , "Image link 2" , 2);

insert into credits values ( null , 1 , 1);
insert into credits values ( null , 1 , 2);
insert into credits values ( null , 1 , 1);
insert into credits values ( null , 2 , 4);

insert into mevent values ( null , "IRIX" , "2022-08-10" , "Image link 1" , 1);
insert into mevent values ( null , "TechFeast" , "2022-06-20" , "Image link 1" , 1);
insert into mevent values ( null , "Tatastu" , "2022-06-20" , "Image link 1" , null);


insert into subeventtalk values ( null , "FIFA" , "2022-08-10" , 5 , "event description" , "Image link 1" , "Image link 2" ,null  , 1);
insert into subeventtalk values ( null , "Blind Coder" , "2022-08-10" , 2 , "event description" , "Image link 1" , "Image link 2", null  , 1);
insert into subeventtalk values ( null , "Time Management" , "2022-08-10" , 2  , "talk description" , "Image link 1" , "Image link 2" , 1 ,null );
insert into subeventtalk values ( null , "Photography" , "2022-08-10" , 2 , "talk description" , "Image link 1" , "Image link 2" , 1 , null );
insert into subeventtalk values ( null , "Painting" , "2022-08-10" , 5 , "event description" , "Image link 1" , "Image link 2" , 2 , null );
insert into subeventtalk values ( null , "Futsal" , "2022-08-10" , 2 , "event description" , "Image link 1" , "Image link 2", 2 , null );

