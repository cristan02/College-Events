DELIMITER $$
USE `college`$$
CREATE DEFINER=`root`@`localhost` TRIGGER `student_status` BEFORE INSERT ON `student` FOR EACH ROW BEGIN
    IF YEAR(NOW()) -  new.year_joined > 3 THEN
		set new.status=1;
    END IF; 
END
DELIMITER ;
