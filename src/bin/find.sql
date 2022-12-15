select name from department where d_id =1;

select student.s_id as roll_no ,year_joined, fname , lname , sum(credits) as tot_credits
  from credits , student , subeventtalk
  where student.s_id = credits.s_id and credits.ste_id = subeventtalk.ste_id and student.status is  null
  group by (student.s_id);
  
  select name , ename , startdate , mevent.photo1 , 
    JSON_ARRAYAGG(JSON_ARRAY (JSON_OBJECT("stename",stename, "stedate", stedate, "credits",credits,"stedes",stedes,"photo1",subeventtalk.photo1,"photo2",photo2) ) )
    as subevents
    from department , mevent
    left join subeventtalk
    on subeventtalk.e_id = mevent.e_id 
    where department.d_id = mevent.d_id and 
    department.d_id = 3 and Month(startdate) = 10 and YEAR(startdate) = YEAR(NOW())
    group by mevent.e_id;