require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const { json } = require('body-parser')

import { inject } from '@vercel/analytics';
inject();

app.use(cors())
app.use(json())

const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect()

app.get('/', (req, res) => {
  res.send('College events!!')
})

app.get('/home/event', (req, res) => {
  const q =
    'select e_id,ename,startdate,photo1,mevent.d_id,name from mevent left join department on department.d_id = mevent.d_id order by startdate limit 10;'
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/home/subevent', (req, res) => {
  const q =
    'select stename ,stedate, ste_id , credits,stedes,photo1,photo2,department.d_id,e_id ,name from subeventtalk , department where department.d_id = subeventtalk.d_id and e_id is null order by stedate  limit 10;'
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/home/workshop', (req, res) => {
  const q =
    'select w_id , category, wdate ,des,photo1,photo2,name,fname,lname from workshop ,faculty,department where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id order by wdate limit 10;'
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/home/events/:id', (req, res) => {
  const q =
    'select stename , stedate , credits , stedes , photo1 from subeventtalk where e_id =?;'
  connection.query(q, [req.params.id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/event/filter/departments', (req, res) => {
  const q = 'select d_id , name from department;'
  connection.query(q, [req.params.id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/event/filter/events', (req, res) => {
  const q = 'select distinct(ename) , e_id from mevent where year(startdate) = year(now()) order by startdate desc;'
  connection.query(q, [req.params.id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/event/filter/event/:id/:start/:end', (req, res) => {
  const q = `select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
  from mevent,subeventtalk,department
  where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id and startdate > ? and startdate < ? and department.d_id = ?
  group by mevent.e_id;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/event/filter/activity/:id/:start/:end', (req, res) => {
  const q = `select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department 
  from subeventtalk,department
  where department.d_id = subeventtalk.d_id and stedate > ? and stedate < ? and department.d_id = ?;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/event/filter/workshop/:id/:start/:end', (req, res) => {
  const q = `select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
  from workshop , faculty , department
  where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id and wdate > ? and wdate < ? and department.d_id = ?
  group by  workshop.w_id;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/event/filter/event/:start/:end', (req, res) => {
  const q = `select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
  from mevent,subeventtalk,department
  where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id and startdate > ? and startdate < ?
  group by mevent.e_id;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/event/filter/activity/:start/:end', (req, res) => {
  const q = `select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department 
  from subeventtalk,department
  where department.d_id = subeventtalk.d_id and stedate > ? and stedate < ? ;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/event/filter/workshop/:start/:end', (req, res) => {
  const q = `select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
  from workshop , faculty , department
  where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id and wdate > ? and wdate < ?
  group by  workshop.w_id;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/faculty', (req, res) => {
  const q = `select f_id , fname , lname from faculty;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/eventnames', (req, res) => {
  const q = `select e_id,ename from mevent;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/years', (req, res) => {
  const q = `select  distinct(year(startdate)) as year from mevent union
  select  distinct(year(stedate)) as year from subeventtalk union
  select distinct(year(wdate)) as year from workshop
  order by  year;`
  connection.query(
    q,
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/event/:id/:year/:month', (req, res) => {
  const q = `select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
  from mevent,subeventtalk,department
  where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id and year(startdate) = ? and month(startdate) = ? and department.d_id =  ?
  group by mevent.e_id;`
  connection.query(
    q,
    [req.params.year, req.params.month, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/activity/:id/:year/:month', (req, res) => {
  const q = `select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department 
  from subeventtalk,department
  where department.d_id = subeventtalk.d_id and year(stedate) = ? and month(stedate) = ? and department.d_id = ?;`
  connection.query(
    q,
    [req.params.year, req.params.month, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/workshop/:id/:year/:month', (req, res) => {
  const q = `select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
  from workshop , faculty , department
  where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id and year(wdate) = ? and month(wdate) = ? and department.d_id = ?
  group by  workshop.w_id;`
  connection.query(
    q,
    [req.params.year, req.params.month, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})


app.get('/letter/event/:id/:year', (req, res) => {
  const q = `select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
  from mevent,subeventtalk,department
  where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id and year(startdate) = ? and department.d_id =  ?
  group by mevent.e_id;`
  connection.query(
    q,
    [req.params.year,req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/activity/:id/:year', (req, res) => {
  const q = `select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department 
  from subeventtalk,department
  where department.d_id = subeventtalk.d_id and year(stedate) = ? and department.d_id = ?;`
  connection.query(
    q,
    [req.params.year, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/workshop/:id/:year', (req, res) => {
  const q = `select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
  from workshop , faculty , department
  where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id and year(wdate) = ? and department.d_id = ?
  group by  workshop.w_id;`
  connection.query(
    q,
    [req.params.year,  req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/eventcollege/:year/:month', (req, res) => {
  const q = `select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
  from mevent,subeventtalk,department
  where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id and year(startdate) = ? and month(startdate) = ? 
  group by mevent.e_id;`
  connection.query(
    q,
    [req.params.year, req.params.month],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/activitycollege/:year/:month', (req, res) => {
  const q = `select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department 
  from subeventtalk,department
  where department.d_id = subeventtalk.d_id and year(stedate) = ? and month(stedate) = ? ;`
  connection.query(
    q,
    [req.params.year, req.params.month],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/workshopcollege/:year/:month', (req, res) => {
  const q = `select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
  from workshop , faculty , department
  where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id and year(wdate) = ? and month(wdate) = ? 
  group by  workshop.w_id;`
  connection.query(
    q,
    [req.params.year, req.params.month],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/event/:year', (req, res) => {
  const q = `select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
  from mevent,subeventtalk,department
  where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id and year(startdate) = ? 
  group by mevent.e_id;`
  connection.query(
    q,
    [req.params.year],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/activity/:year', (req, res) => {
  const q = `select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department 
  from subeventtalk,department
  where department.d_id = subeventtalk.d_id and year(stedate) = ? ;`
  connection.query(
    q,
    [req.params.year],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/letter/workshop/:year', (req, res) => {
  const q = `select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
  from workshop , faculty , department
  where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id and year(wdate) = ? 
  group by  workshop.w_id;`
  connection.query(
    q,
    [req.params.year],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})


//graph
app.get('/graph/montly', (req, res) => {
  const q = `SELECT SUM(combo.numActivity) AS value , combo.d_name as name , combo.d_initials as d_initials
  FROM (	select count(*) as numActivity , department.name as d_name  , d_initials
      from department , subeventtalk 
      where department.d_id = subeventtalk.d_id and month(stedate) = MONTH(Now())  and YEAR(stedate) = YEAR(NOW())
      group by subeventtalk.d_id
      UNION ALL
      select count(*) as numActivity , department.name as d_name  , d_initials
      from department , workshop , faculty 
      where department.d_id = faculty.d_id and workshop.f_id = faculty.f_id and MONTH(wdate) = MONTH(Now())  and YEAR(wdate) = YEAR(NOW())
      group by faculty.d_id
      UNION ALL
      select count(*) as numActivity , department.name as d_name  , d_initials
      from department , mevent ,  subeventtalk
      where department.d_id = mevent.d_id and mevent.e_id = subeventtalk.e_id and MONTH(startdate) = MONTH(Now())  and YEAR(startdate) = YEAR(NOW())
      group by mevent.d_id 
    )combo
    group by combo.d_name;`
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/graph/yearly', (req, res) => {
  const q = `SELECT SUM(combo.numActivity) AS value , combo.d_name as name , combo.d_initials as d_initials
              FROM (	select count(*) as numActivity , department.name as d_name ,d_initials  from department , subeventtalk   
              where department.d_id = subeventtalk.d_id and YEAR(stedate) = YEAR(NOW()) 
              group by subeventtalk.d_id 
            UNION ALL select count(*) 
              as numActivity , department.name as d_name   ,d_initials
              from department , workshop , faculty 
              where department.d_id = faculty.d_id and workshop.f_id = faculty.f_id and YEAR(wdate) = YEAR(NOW()) 
              group by faculty.d_id 	
            UNION ALL select count(*) as numActivity , department.name as d_name ,d_initials 
                  from department , mevent ,  subeventtalk 
                  where department.d_id = mevent.d_id and mevent.e_id = subeventtalk.e_id and YEAR(startdate) = YEAR(NOW()) 
                  group by mevent.d_id  )combo group by combo.d_name;`
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/credits', (req, res) => {
  const q = `select student.s_id as roll_no ,year_joined, fname , lname , sum(credits) as tot_credits
  from credits , student , subeventtalk
  where student.s_id = credits.s_id and credits.ste_id = subeventtalk.ste_id and student.status is  null
  group by (student.s_id);`
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/rollno', (req, res) => {
  const q = `select s_id from student;`
  connection.query(
    q,
    [req.params.start, req.params.end, req.params.id],
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    },
  )
})

app.get('/get/rollno', (req, res) => {
  const q =
    'select s_id as sid , fname , lname from student;'
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})
app.get('/get/activities', (req, res) => {
  const q =
    'select ste_id as eid , stename as ename from subeventtalk;'
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/get/test1', (req, res) => {
  const q =
  `
  select mevent.e_id as _id ,ename as name,startdate as date ,mevent.photo1,name as department ,JSON_ARRAYAGG(JSON_OBJECT("_id",ste_id,"name",stename,"des",stedes,"credits",credits,"date",stedate,"photo1",subeventtalk.photo1,"photo2",subeventtalk.photo2)) as subevents
  from mevent,subeventtalk,department
  where subeventtalk.e_id = mevent.e_id and department.d_id = mevent.d_id
  group by mevent.e_id;
  `
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/get/test2', (req, res) => {
  const q =
  `
  select ste_id as _id, stename as name, stedate as date , credits , stedes as des, photo1,photo2,name as department from subeventtalk,department
  where department.d_id = subeventtalk.d_id;
  `
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/get/test3', (req, res) => {
  const q =
  `
  select w_id as _id , category, wdate as date , des , photo1 , photo2 , JSON_ARRAYAGG(JSON_OBJECT("fname",fname,"lname",lname,"designation",designation ))as faculty
  from workshop , faculty , department
  where department.d_id = faculty.d_id and faculty.f_id = workshop.f_id
  group by  workshop.w_id;
  `
  connection.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.post('/post/event', (req, res) => {
  const q =
    'insert into mevent (ename,startdate,photo1,d_id) values (  ? , ? , ? , ?);'
  const { ename, startdate, photo1, d_id } = req.body
  connection.query(q, [ename, startdate, photo1, d_id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.post('/post/subevent', (req, res) => {
  const q =
  'insert into subeventtalk(stename , stedate , credits , stedes , photo1 , photo2 ,e_id ) values (?,?,?,?,?,?,?);'
  const { stename, stedate, credits, stedes, photo1, photo2, e_id } = req.body
  connection.query(q, [stename, stedate, credits, stedes, photo1, photo2, e_id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.post('/post/workshop', (req, res) => {
  const q = 'insert into workshop ( category , wdate , des , photo1, photo2 , f_id) values ( ? , ? , ? , ? , ? , ?);'
  const { category, wdate, des, photo1, photo2, f_id } = req.body
  connection.query(q, [category, wdate, des, photo1, photo2, f_id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.post('/post/activity', (req, res) => {
  const q =
    'insert into subeventtalk(stename , stedate , credits , stedes , photo1 , photo2 ,d_id ) values (?,?,?,?,?,?,?);'
  const { stename, stedate, credits, stedes, photo1, photo2, d_id } = req.body
  connection.query(q, [stename, stedate, credits, stedes, photo1, photo2, d_id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.post('/post/credits', (req, res) => {
  const q = 'insert into credits (s_id , ste_id) values (? , ?);'
  const { s_id, ste_id } = req.body
  connection.query(q, [s_id, ste_id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.put('/student/update/:id', (req, res) => {
  const q = `
  update student
  set fname = ?, lname = ?
  where s_id = ?
  `
  const { fname, lname } = req.body
  connection.query(q, [fname, lname, req.params.id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.delete('/student/delete/:id', (req, res) => {
  const q = 'delete from student where s_id = ?'
  connection.query(q, [req.params.id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.listen(port, () => {
  console.log(`server up and running!!`)
})

module.exports = app