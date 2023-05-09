create database college;

use college;

CREATE TABLE department (
  d_id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  d_initials varchar(10) NOT NULL,
  PRIMARY KEY (d_id)
);


create table student(
	s_id  int auto_increment unique,
    fname varchar(20) not null,
    lname varchar(20) not null,
    year_joined year not null,
    status int ,
    d_id int not null,
    primary key (s_id),
    foreign key (d_id) references department(d_id) ON UPDATE CASCADE ON DELETE CASCADE 
);

create table faculty(
	f_id int auto_increment unique,
    fname varchar(20) not null,
	lname varchar(20) not null,
    designation varchar(20)not null,
    d_id int not null,
    primary key (f_id),
    foreign key (d_id) references department(d_id) ON UPDATE CASCADE ON DELETE CASCADE 
);

create table workshop(
	w_id int auto_increment unique,
    category varchar(20) not null,
    wdate date,
    des varchar(500) not null,
	photo1 varchar(200) not null,
    photo2 varchar(200) not null,
    f_id int not null,
    primary key (w_id),
    foreign key (f_id) references faculty(f_id) ON UPDATE CASCADE ON DELETE CASCADE 
);

create table credits(
	c_id int auto_increment unique,
    s_id int not null,
    ste_id int not null,
    primary key (c_id),
    foreign key (s_id) references student(s_id) ON UPDATE CASCADE ON DELETE CASCADE ,
    foreign key (ste_id) references subeventtalk(ste_id) ON UPDATE CASCADE ON DELETE CASCADE 
);

create table mevent(
	e_id int auto_increment unique,
    ename varchar(20) not null,
    startdate date not null,
    photo1 varchar(200) not null,
    d_id int ,
    primary key (e_id),
    foreign key (d_id) references department(d_id) ON UPDATE CASCADE ON DELETE CASCADE 
);

create table subeventtalk(
	ste_id int auto_increment unique,
    stename varchar(20) not null,
    stedate date not null,
    credits int not null,
    stedes varchar(500) not null,
    photo1 varchar(200) not null,
    photo2 varchar(200) not null,
	d_id int,
    e_id int,
    primary key (ste_id),
    foreign key (d_id) references department(d_id) ON UPDATE CASCADE ON DELETE CASCADE , 
    foreign key (e_id) references Mevent(e_id) ON UPDATE CASCADE ON DELETE CASCADE 
);
