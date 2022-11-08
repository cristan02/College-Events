const workshop = [
    {
        _id : 1 ,
        category : "Web Development" ,
        date : new Date("2022-06-20") ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." , 
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        photo2 :"https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science",
        faculty : [{
            fname : "Abishek" , 
            lname : "Guidekar" , 
            designation : "Asst Proff" 
        }]
    },
    {
        _id : 2 ,
        category : "AI" ,
        date : new Date("2022-06-20") ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." , 
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        photo2 :"https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science",
        faculty : [{
            fname : "Dikshita" , 
            lname : "Aroskar" , 
            designation : "Asst Proff" 
        }]
    },
    {
        _id : 3 ,
        category : "React" ,
        date : new Date("2022-06-20") ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." , 
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        photo2 :"https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science",
        faculty : [
            {
                fname : "Dikshita" , 
                lname : "Aroskar" , 
                designation : "Asst Proff" 
            },
            {
                fname : "Abishek" , 
                lname : "Guidekar" , 
                designation : "Asst Proff" 
            }
            
        ]
    },
    {
        _id : 4 ,
        category : "Embedded Sysytem" ,
        date : new Date("2022-06-20") ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." , 
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        photo2 :"https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science",
        faculty : [
            {
                fname : "Abishek" , 
                lname : "Guidekar" , 
                designation : "Asst Proff" 
            }     
        ]
    }
]

const student =  [ 
    {   _id : 1 ,
        fname : "Ashbourn" ,
        lanme : "DCunha" ,
        year_joined : new Date("2019") ,
        status : null ,
        department : "Computer Science",
        credits : [
            {
                eid : 1,
                subid : 2
            },
            {
                eid : 1,
                subid : 2
            },
            {
                eid : 1,
                subid : 1
            },
            {
                eid : 5
            }
        ] 
    } ,
    {   _id : 2 ,
        fname : "Moses" ,
        lanme : "Crasto" ,
        year_joined : new Date("2019") ,
        status : null ,
        department : "Computer Science",
        credits : [
            {
                eid : 4
            },
            {
                eid : 1,
                subid : 2
            },
            {
                eid : 1,
                subid : 1
            },
            {
                eid : 6
            }
        ] 
    } ,
    {   _id : 3 ,
        fname : "Reeve" ,
        lanme : "Barretto" ,
        year_joined : new Date("2019") ,
        status : null ,
        department : "Computer Science" ,
        credits : [
            {
                eid : 7
            },
            {
                eid : 1,
                subid : 2
            }
        ] 
    } 
]

const event = [
    {   
        _id : 1 ,
        name :  "TechFeast" ,
        date : new Date("2022-06-20") ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science",
        type : "event" , 
        subevent : [
            {   _id : 1 ,
                name : "FIFA" ,
                date : new Date("2022-06-20") ,
                credits : 5 ,
                des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
                photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" 
            } ,
            {   _id : 2 ,
                name : "Blind Coder" ,
                date : new Date("2022-06-20") ,
                credits : 2 ,
                des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
                photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" 
            }
        ]
    } ,
    {   
        _id : 2 ,
        name :  "IRIX" ,
        date : new Date("2022-06-20") ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "event" , 
        subevent : []
    } ,
    {   
        _id : 3 ,
        name :  "Tatastu" ,
        date : new Date("2022-06-20") ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "College" , 
        type : "event" , 
        subevent : []
    },
    {   
        _id : 4 ,
        name : "Time Management" ,
        date : new Date("2022-06-20") ,
        credits : 2 ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "activity" 
    } ,
    {   
        _id : 5 ,
        name : "Photography" ,
        date : new Date("2022-06-20") ,
        credits : 2 ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "activity" 
    } ,
    {   
        _id : 6 ,
        name : "Painting" ,
        date : new Date("2022-06-20") ,
        credits : 5 ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "activity" 
    } ,
    {   
        _id : 7 ,
        name : "Futsal" ,
        date : new Date("2022-06-20") ,
        credits : 2 ,
        stedes : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "activity" 
    }
]


//use college;

db.createCollection("workshop");
db.createCollection("student");
db.createCollection("event");


db.student.find().pretty();
db.workshop.find().pretty();
db.event.find().pretty();

/* home page */
	/* to get 10 events */ 
        db.event.find(
            {
                type:"activity"
            },
            {}
        )
        .pretty()
        .sort(
            {
                date:-1
            }
        )
        .limit(10);
	/* to get 10 workshops */ 
        db.workshop.find(
            {},
            {}
        )
        .pretty()
        .sort(
            {
                date:-1
            }
        )
        .limit(10);
	/* to get all departmental non event activity */ 
        db.event.find(
            {
                type:"event"
            },
            {}
        )
        .pretty()
        .sort(
            {
                date:-1}
        )
        .limit(10);
	
    /* to get all subevents of an event */
        db.event.find(
            {
                $and : [
                    { _id : 1 } , 
                    {type : "event"}
                ] 
            },
            { 
                name : 1 , date:1 , department : 1 , photo1:1 , subevent : 1 , subevent :
                {
                    _id : 1 ,name : 1, credits:1 , date:1,des:1,photo1:1,photo2:1
                }
            }
        )
        .pretty();
	
    /* to get all get activity details */
        db.event.find(
            {
                $and : [
                    { 
                        _id : 4 
                    } , 
                    {
                        type : "activity"
                    }
                ] 
            },
            {
                name : 1 , date:1 , department : 1 , photo1:1 , photo2:1 , credits :1 , des:1 , department:1
            }
        )
        .pretty();

    /* to get all faculty who attended a partucular workshop  */
        db.workshop.find( 
            { 
                _id : 1 
            }
            ,
            {
                _cat : 1 , date:1 , des : 1 , photo1:1 , photo2:1 , faculty :1
            }
        )
        .pretty();

        
/* events page */
	/* getting unique department name */
        db.event.distinct( 
            "department" ,
            {
                department :  
                { 
                    $ne: "College"
                }
            }
        );
	
   /* filter query */
		/* main events and their sub events */
			/* filter by date and department */
           db.event.find(
                {
                    $and : [
                        {date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {
                            date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {
                            type: "event" 
                        } , 
                        {
                            department : "Computer Science"
                        } 
                    ]
                }
            )
            .pretty();
            /* filter by date  */
            db.event.find(
                {
                    $and : [
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {
                            type: "event" 
                        } 
                    ]
                }
            )
            .pretty();
           
		/* activities */
			/* filter by date and department */
			db.event.find(
                {
                    $and : [
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {
                            date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {type: "activity" } , 
                        {
                            department : "Computer Science"
                        } 
                    ]
                }
            )
            .pretty();
            /* filter by date  */
            db.event.find(
                {
                    $and : [
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {
                            type: "activity" 
                        } 
                    ]
                }
            )
            .pretty();
        /* workshops */
			/* filter by date and department */
			db.workshop.find(
                {
                    $and :[
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {
                            date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {
                            "department" : "Computer Science"
                        }
                    ]
                }
            ).pretty();
            /* filter by date  */
            db.workshop.find(
                {
                    $and : [
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {
                            date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        }
                    ]
                }
            )
            .pretty();
            
        
		

/* generate letters  page */
	/* getting unique department name */
        db.event.distinct("department" , {department :  { $ne: "College" }});
		
        
	/* non event activity */
		/* montly */ 
        db.event.aggregate(
            [
              {
                $project:
                  {
                    name: "$name",
                    date: "$date",
                    credits : "$credits",
                    des : "$des",
                    photo1 : "$photo1",
                    photo2 : "$photo2",
                    department : "$department",
                    type : "$type",
                    year: { $year: "$date" },
                    month: { $month: "$date" }
                  }
              },
              { $match : { "month" : 6, "year": 2022  , type : "activity" , department : "Computer Science"} }
            ]
         )
    
    /* workshop */
        db.workshop.aggregate(
            [
            {
                $project:
                {
                    category: "$category",
                    date: "$date",
                    des : "$des",
                    photo1 : "$photo1",
                    photo2 : "$photo2",
                    faculty : "$faculty",
                    type : "$type",
                    department : "$department" ,
                    year: { $year: "$date" },
                    month: { $month: "$date" }
                }
            },
            { $match : { "month" : 6, "year": 2022 , department : "Computer Science"} }
            ]
        )     
		
    
    /* event */
        db.event.aggregate(
            [
                {
                    $project:
                    {
                        name: "$name",
                        date: "$date",
                        credits : "$credits",
                        des : "$des",
                        photo1 : "$photo1",
                        photo2 : "$photo2",
                        department : "$department",
                        type : "$type",
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    }
                },
                { 
                    $match : 
                    { 
                        "month" : 6,
                        "year": 2022  , 
                        type : "event" , 
                        department : 
                        "Computer Science"
                    } 
                }
            ]
        )
				

    /* departmental performance page */
        /* montly */    
            /* call montly event 12 times in a loop to get points for line graph */
            /* events */
         db.event.aggregate( [
            {
                $project:
                {

                    department : "$department",
                    month: { $month: "$date" } , 
                    year: { $year: "$date" }
                }
            },
            { 
                $match : 
                { 
                    "month" : 6, 
                    "year" : 2022,
                    department :  
                    { 
                        $ne: "College"
                    }
                } 
            },
            {
               $group: {
                  _id: "$department",
                  numEvents: {
                     $count: {}
                  }
               }
            },
            {
                $sort : { _id: 1 }
            }
         ] )
         /* workshop */
         db.workshop.aggregate( [
            {
                $project:
                {

                    department : "$department",
                    month: { $month: "$date" } , 
                    year: { $year: "$date" }
                }
            },
            { 
                $match : 
                { 
                    "month" : 6,
                    "year" : 2022,
                } 
            },
            {
               $group: {
                  _id: "$department",
                  numWorkshops: {
                     $count: {}
                  }
               }
            },
            {
                $sort : { _id: 1 }
            }
         ] )
            
        /* yearly */
            /* events */
            db.event.aggregate( [
                {
                    $project:
                    {
    
                        department : "$department",
                        year: { $year: "$date" }
                    }
                },
                { 
                    $match : 
                    { 
                        "year" : 2022,
                        department :  
                        { 
                            $ne: "College"
                        }
                    } 
                },
                {
                   $group: {
                      _id: "$department",
                      numEvents: {
                         $count: {}
                      }
                   }
                },
                {
                    $sort : { _id: 1 }
                }
             ] )
             /* workshop */
             db.workshop.aggregate( [
                {
                    $project:
                    {
    
                        department : "$department",
                        year: { $year: "$date" }
                    }
                },
                { 
                    $match : 
                    { 
                        "year" : 2022,
                    } 
                },
                {
                   $group: {
                      _id: "$department",
                      numEvents: {
                         $count: {}
                      }
                   }
                },
                {
                    $sort : { _id: 1 }
                }
             ] )
            

    /* credit hours page */
        /* fild old students with year greater then 3 */
        db.student.aggregate( [ 
            { 
                $project: 
                { 
                    _id : 1,
                    fname : 1 ,
                    lname : 1 ,
                    year: { $year : "$year_joined" }
                }
            },
            {
                $set : 
                {
                    dateDifference: { $subtract: [ { $year : "$$NOW" }, "$year" ] }
                }
            },
            {
                $match : 
                {
                    dateDifference : { $gt : 3}
                }
            }
        ] );
         /* update student status */
        db.student.updateMany(
            {
                year_joined : {$lt : new Date("2019")}
            } ,
            {
                $set : 
                {
                    status:1
                }
            }
        );

    
        /* get all students who have more the 120 credits  */   
        db.student.aggregate( [
            {
               $lookup: {
                  from: "event",
                  localField: "credits.eid",   
                  foreignField: "_id",  
                  pipeline : [
                    { 
                        $unwind: 
                        { 
                            path: "$subevent",
                            preserveNullAndEmptyArrays: true 
                        } 
                    }
                  ],
                  as: 'participated'
               },
               
            },
            { 
                $unwind: 
                { 
                    path: "$participated",
                    preserveNullAndEmptyArrays: true 
                } 
            },
            {
                $sort:{ fname : 1 }
            },
            {
                $group:
                  {
                    _id : "$fname",
                    sumevents : { $sum : "$participated.credits"} ,
                    sumactivity : { $sum : "$participated.subevent.credits"} 
                  }
            },
            {
                $set : {
                    tot_credits : { $sum: ["$sumevents" , "$sumactivity"] }
                }
            },
            {
                $sort : {tot_credits : -1}
            },  
            {
              $match: { tot_credits : { $gte: 10 } }
            }
         ] );
        

       /* activities and events names attended by students */
        db.student.aggregate( [
            {
               $lookup: {
                  from: "event",
                  localField: "credits.eid",   
                  foreignField: "_id",  
                  pipeline : [
                    {
                        $project : 
                        {
                            _id : 0 ,
                            id : 0 , 
                            department : 0,
                            type:0,
                            date : 0 ,
                            des: 0,
                            stedes : 0,
                            photo1 : 0,
                            photo2:0 ,
                            subevent : { 
                                id: 0 ,
                                date : 0 ,
                                des: 0,
                                photo1 : 0,
                                photo2:0
                            },
                        }
                    }
                  ],
                  as: 'participated'
               },
               
            },
            {
                $project : {
                    id : 0 , 
                    year_joined : 0 ,
                    status : 0,
                    department : 0 ,
                    credits : 0
                }
            },
            {
                $sort : {fname : 1}
            }     
         ] ).pretty();

        // activities and events names attended by particular student
        db.student.aggregate( [
            {
               $lookup: {
                  from: "event",
                  localField: "credits.eid",   
                  foreignField: "_id",  
                  pipeline : [
                    {
                        $project : 
                        {
                            _id : 0 ,
                            id : 0 , 
                            department : 0,
                            type:0,
                            date : 0 ,
                            des: 0,
                            stedes : 0,
                            photo1 : 0,
                            photo2:0 ,
                            subevent : { 
                                id: 0 ,
                                date : 0 ,
                                des: 0,
                                photo1 : 0,
                                photo2:0
                            },
                        }
                    }
                  ],
                  as: 'participated'
               },
               
            },
            {
                $project : {
                    id : 0 , 
                    year_joined : 0 ,
                    status : 0,
                    department : 0 ,
                    credits : 0
                }
            },
            {
                $match : {fname : "Moses"}
            } 
         ] ).pretty();



    /* find workshop attended by a articular tr */
    db.workshop.aggregate( [
        { 
            $unwind: 
            { 
                path: "$faculty",
                preserveNullAndEmptyArrays: true 
            } 
        },
        {
            $match : 
            {       
                'faculty.fname' : "Abishek",
                'faculty.lname' : "Guidekar",
            }
        },
        {
            $project : {
                date : 0 , 
                des : 0 ,
                photo1 : 0,
                photo2 : 0 ,
                department : 0,
                faculty : 0
            }
        },
        // {
        //     $group: {
        //         _id: { fname : "$faculty.fname" , lname : "$faculty.lname" },
        //         event : { "$first" : "$category"}
        //       }
        // },
     ] ).pretty();