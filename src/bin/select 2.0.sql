use college ;
				
select * from subeventtalk;
select * from mevent;
select * from workshop;
select * from faculty;
select * from department;

/* filter events */
select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
from mevent,subeventtalk,department
where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id and startdate > '2022-01-01' and startdate < '2022-12-31' and department.d_id =  1
group by mevent.e_id;

select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department 
from subeventtalk,department
where department.d_id = subeventtalk.d_id and stedate > '2022-01-01' and stedate < '2022-12-31' and department.d_id = 1;

select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
from workshop , faculty , department
where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id and wdate > '2022-01-01' and wdate < '2022-12-31' and department.d_id = 1
group by  workshop.w_id;


select * from credits;

SELECT  *
		FROM (	
				select ename , department.d_id , stename , mevent.e_id , department.name as d_name 
				from department , mevent ,  subeventtalk
				where department.d_id = mevent.d_id and mevent.e_id = subeventtalk.e_id 
				
			)combo
			;
            
            
/* getting unique year */
select  distinct(year(startdate)) as year from mevent union
select  distinct(year(stedate)) as year from subeventtalk union
select distinct(year(wdate)) as year from workshop
order by  year;


/* letter
 */
select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
from mevent,subeventtalk,department
where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id and year(startdate) = 2022 and month(startdate) = 8 and department.d_id =  1
group by mevent.e_id;

select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department 
from subeventtalk,department
where department.d_id = subeventtalk.d_id and year(stedate) = 2022 and month(stedate) = 8 and department.d_id = 1;

select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
from workshop , faculty , department
where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id and year(wdate) = 2022 and department.d_id = 1
group by  workshop.w_id;


