use college;

select * from department;
select * from student;
select * from faculty;
select * from workshop;
select * from credits;
select * from mevent;
select * from subeventtalk;

/* home page */
	/* to get 10 events */ 
		select e_id , ename , photo1 , d_id from mevent order by startdate limit 10;
	/* to get 10 workshops */ 
		select w_id , category , photo1 , f_id from workshop order by wdate limit 10;
	/* to get all departmental non event activity */ 
		select ste_id , stename , photo1 from subeventtalk where e_id is null order by stedate  limit 10;
	
    /* to get all subevents of an event */
		select stename , stedate , credits , stedes , photo1 from subeventtalk where e_id =1;
	
    /* to get all faculty who attended a partucular workshop  */
		select fname , lname , designation from faculty left join workshop on faculty.f_id = workshop.f_id where w_id =1;
        
/* events page */
	/* getting unique department name */
		select distinct(name) as d_name from department;
	
    /* filter query */
		/* main events and their sub events */
			/* filter by date and department */
            select * 
			from department , mevent 
			where startdate > '2022-01-01' and  startdate < '2022-12-31'
			and department.d_id = mevent.d_id and department.d_id = 1 ;
            /* filter by date  */
            select * 
			from department , mevent 
			where startdate > '2022-01-01' and  startdate < '2022-12-31'
			and department.d_id = mevent.d_id ;
            /* sub event for event */
            select stename , stedate , credits , stedes , photo1 from subeventtalk where e_id =1;
		/* activities */
			/* filter by date and department */
			select * 
			from department , subeventtalk 
			where stedate > '2022-01-01' and  stedate < '2022-12-31'
			and department.d_id = subeventtalk.d_id and department.d_id = 1 and e_id is null ;
            /* filter by date  */
            select * 
			from department , subeventtalk 
			where stedate > '2022-01-01' and  stedate < '2022-12-31'
			and department.d_id = subeventtalk.d_id  and e_id is null ;
            
        /* workshops */
			/* filter by date and department */
			select * 
			from workshop , faculty , department
			where wdate > '2022-01-01' and  wdate < '2022-12-31' and department.d_id = faculty.d_id
			and faculty.f_id = workshop.f_id and department.d_id = 1 ;
            /* filter by date  */
            select * 
			from workshop , faculty , department
			where wdate > '2022-01-01' and  wdate < '2022-12-31' and department.d_id = faculty.d_id
			and faculty.f_id = workshop.f_id  ;

/* generate letters  page */
	/* getting unique department name */
		select distinct(name) as d_name from department;
        
	/* non event activity */
		select name , stename , stedate , credits , stedes , photo1 , photo2
		from department , subeventtalk 
		where department.d_id = subeventtalk.d_id
		and department.d_id = 1 and Month(stedate) = MONTH(Now()) and YEAR(stedate) = YEAR(NOW());
    
    /* workshop */
		select name , category , wdate , des , photo1 , photo2 , fname , lname , designation
		from department , workshop , faculty 
		where department.d_id = faculty.d_id and workshop.f_id = faculty.f_id 
		and department.d_id = 1 and Month(wdate) = MONTH(Now()) and YEAR(wdate) = YEAR(NOW());
    
    /* event */
		select name , ename , startdate , photo1
		from department , mevent 
		where department.d_id = mevent.d_id and 
		department.d_id = 1 and Month(startdate) = MONTH(Now()) and YEAR(startdate) = YEAR(NOW());
    /* sub event under event */
		select stename , credits , stedate , stedes , subeventtalk.photo1 ,photo2
		from mevent , subeventtalk
		where  mevent.e_id = subeventtalk.e_id 
		and mevent.e_id = 1 and Month(stedate) = MONTH(Now()) and YEAR(stedate) = YEAR(NOW());

/* departmental performance page */
	/* montly */    
		SELECT SUM(combo.numActivity) AS numActivity , combo.d_name
		FROM (	select count(*) as numActivity , department.name as d_name 
				from department , subeventtalk 
				where department.d_id = subeventtalk.d_id and month(stedate) = MONTH(Now())  and YEAR(stedate) = YEAR(NOW())
				group by subeventtalk.d_id
			  UNION ALL
				select count(*) as numActivity , department.name as d_name 
				from department , workshop , faculty 
				where department.d_id = faculty.d_id and workshop.f_id = faculty.f_id and MONTH(wdate) = MONTH(Now())  and YEAR(wdate) = YEAR(NOW())
				group by faculty.d_id
			  UNION ALL
				select count(*) as numActivity , department.name as d_name 
				from department , mevent ,  subeventtalk
				where department.d_id = mevent.d_id and mevent.e_id = subeventtalk.e_id and MONTH(startdate) = MONTH(Now())  and YEAR(startdate) = YEAR(NOW())
				group by mevent.d_id 
			)combo
			group by combo.d_name;
		
    /* yearly */
		call getEventsNo(8); /* send all months from 1-12 in loop */
		SELECT SUM(combo.numActivity) AS numActivity , combo.d_name
		FROM (	select count(*) as numActivity , department.name as d_name 
				from department , subeventtalk 
				where department.d_id = subeventtalk.d_id and YEAR(stedate) = YEAR(NOW())
				group by subeventtalk.d_id
			  UNION ALL
				select count(*) as numActivity , department.name as d_name 
				from department , workshop , faculty 
				where department.d_id = faculty.d_id and workshop.f_id = faculty.f_id and YEAR(wdate) = YEAR(NOW())
				group by faculty.d_id
			  UNION ALL
				select count(*) as numActivity , department.name as d_name 
				from department , mevent ,  subeventtalk
				where department.d_id = mevent.d_id and mevent.e_id = subeventtalk.e_id and YEAR(startdate) = YEAR(NOW())
				group by mevent.d_id 
			)combo
			group by combo.d_name;

/* credit hours page */
	/* update student status */
    SET SQL_SAFE_UPDATES = 0;
    update student set status = 1 where YEAR(NOW()) -  year_joined > 3;
    
    /* return only students who have completed all credits and status not 1*/
	select student.s_id as roll_no , fname , lname , sum(credits) as tot_credits
    from credits , student , subeventtalk
    where student.s_id = credits.s_id and credits.ste_id = subeventtalk.ste_id and student.status is  null
    group by (student.s_id)
    having tot_credits > 120;
    
    
    
