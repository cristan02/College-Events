const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')
const mysql = require('mysql2')

const mongoose = require('mongoose')

var db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Dcunha@2002',
  database: 'college',
})

const app = express()
const port = 5000

app.use(cors())
app.use(json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home/event', (req, res) => {
  const q =
    'select e_id,ename,startdate,photo1,mevent.d_id,name from mevent left join department on department.d_id = mevent.d_id order by startdate limit 10;'
  db.query(q, (err, rows) => {
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
  db.query(q, (err, rows) => {
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
  db.query(q, (err, rows) => {
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
  db.query(q, [req.params.id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/event/filter/departments', (req, res) => {
  const q = 'select d_id , name from department;'
  db.query(q, [req.params.id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/event/filter/event/:id/:start/:end', (req, res) => {
  const q = `select name , ename , startdate , mevent.photo1 , 
    JSON_ARRAYAGG(JSON_ARRAY (JSON_OBJECT("stename",stename, "stedate", stedate, "credits",credits,"stedes",stedes,"photo1",subeventtalk.photo1,"photo2",photo2) ) )
    as subevents
    from department , mevent
    left join subeventtalk
    on subeventtalk.e_id = mevent.e_id 
    where department.d_id = mevent.d_id and 
    department.d_id = 3 and Month(startdate) = 10 and YEAR(startdate) = YEAR(NOW())
    group by mevent.e_id;`
  db.query(
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
  const q = `select * 
  from department , subeventtalk 
  where stedate > ? and  stedate < ?
  and department.d_id = subeventtalk.d_id and department.d_id = ? and e_id is null ;`
  db.query(
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
  db.query(
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
  db.query(
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
  const q = `select * 
  from workshop , faculty , department
  where wdate > ? and  wdate < ? and department.d_id = faculty.d_id
  and faculty.f_id = workshop.f_id and department.d_id = ? ;`
  db.query(
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

//graph
app.get('/graph/montly', (req, res) => {
  const q = `SELECT SUM(combo.numActivity) AS value , combo.d_name as name
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
                group by combo.d_name;`
  db.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/graph/yearly', (req, res) => {
  const q = `SELECT SUM(combo.numActivity) AS value , combo.d_name as name
                FROM (	select count(*) as numActivity , department.name as d_name  from department , subeventtalk  
                where department.d_id = subeventtalk.d_id and YEAR(stedate) = YEAR(NOW()) 
                group by subeventtalk.d_id 
              UNION ALL select count(*) 
                as numActivity , department.name as d_name  
                from department , workshop , faculty 
                where department.d_id = faculty.d_id and workshop.f_id = faculty.f_id and YEAR(wdate) = YEAR(NOW()) 
                group by faculty.d_id 	
              UNION ALL select count(*) as numActivity , department.name as d_name  
                    from department , mevent ,  subeventtalk 
                    where department.d_id = mevent.d_id and mevent.e_id = subeventtalk.e_id and YEAR(startdate) = YEAR(NOW()) 
                    group by mevent.d_id  )combo group by combo.d_name;`
  db.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/credits', (req, res) => {
  const q = `select student.s_id as roll_no , fname , lname , sum(credits) as tot_credits
  from credits , student , subeventtalk
  where student.s_id = credits.s_id and credits.ste_id = subeventtalk.ste_id and student.status is  null
  group by (student.s_id);`
  db.query(q, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rows)
    }
  })
})

app.get('/rollno', (req, res) => {
  const q = `select s_id from student;`
  db.query(
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

app.get('/rollno', (req, res) => {
  const q = `select s_id from student;`
  db.query(
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

app.post('/post/event', (req, res) => {
  const q = 'insert into mevent values ( null , ? , ? , ? , ?);'
  const { name, date, image, id } = req.body
  db.query(q, [name, date, image, id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.post('/post/subevent', (req, res) => {
  const q =
    'insert into subeventtalk values ( null , ? ,  ? , ? , ? , ? , ? , null  , ?);'
  const { name, date, credit, des, photo1, photo2, e_id } = req.body
  db.query(q, [name, date, credit, des, photo1, photo2, e_id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.post('/post/workshop', (req, res) => {
  const q = 'insert into workshop values ( null , ? , ? , ? , ? , ? , ?);'
  const { name, date, des, photo1, photo2, f_id } = req.body
  db.query(q, [name, date, des, photo1, photo2, f_id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.post('/post/activity', (req, res) => {
  const q =
    'insert into subeventtalk values ( null , ? ,  ? , ? , ? , ? , ? , ? , null);'
  const { name, date, credit, des, photo1, photo2, d_id } = req.body
  db.query(q, [name, date, credit, des, photo1, photo2, d_id], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

app.post('/post/credits', (req, res) => {
  const q = 'insert into credits values( null,?,?);'
  const { sid, eid } = req.body
  db.query(q, [sid, eid], (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Success')
    }
  })
})

// app.put("/api/appointment/:id", (req, res) => {
//   const q = `
//   update appointment
//   set status = ?, fees_charged = ?, observations = ?, prescription = ?
//   where id = ?
//   `;
//   const { status, fees_charged, observations, prescription } = req.body;
//   db.query(
//     q,
//     [status, fees_charged, observations, prescription, req.params.id],
//     (err, rows) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send("Success");
//       }
//     }
//   );
// });

// app.delete("/api/appointment/:id", (req, res) => {
//   const q = "delete from appointment where id = ?";
//   db.query(q, [req.params.id], (err, rows) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("Success");
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
