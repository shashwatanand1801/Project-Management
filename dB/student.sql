CREATE TABLE `dbms_project`.`student` (
  `sid` VARCHAR(15) NOT NULL,
  `courses` VARCHAR(60) NOT NULL,
  `fname` VARCHAR(15) NOT NULL,
  `lname` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`sid`));

INSERT INTO `project_management`.`student` (`sid`, `courses`, `fname`, `lname`) VALUES ('2019B3A70718H', 'CSF222', 'Shashwat', 'Anand');
INSERT INTO `project_management`.`student` (`sid`, `courses`, `fname`, `lname`) VALUES ('2019B3A70706H', 'CSF313', 'Parth', 'Kulkarni');
INSERT INTO `project_management`.`student` (`sid`, `courses`, `fname`, `lname`) VALUES ('2019B4A70880H', 'CSF121', 'Hiten', 'Vidhani');
INSERT INTO `project_management`.`student` (`sid`, `courses`, `fname`, `lname`) VALUES ('2019B4A70900H', 'CSF213', 'Dhruv', 'Saxena');