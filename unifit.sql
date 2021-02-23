SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "-4:00";

USE UNIFIT
--Online User
CREATE TABLE USER(
  ID int(11) NOT NULL,
  NAME varchar(32) NOT NULL,
  PASSWORD varchar(32) NOT NULL,
  CONFIRMPASSWORD varchar(32) NOT NULL,
  PRIMARY KEY (ID)
) 

CREATE TABLE `User` (
  `oId` int(11) NOT NULL,
  `fName` varchar(32) NOT NULL,
  `lName` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `phoneNumber` int(9) NOT NULL,
  `email` varchar(64) NOT NULL,
  CONSTRAINT PK_User PRIMARY KEY (oId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `onlineUser` (`oId`, `fName`, `lName`, `password`, `phoneNumber`, `email`) VALUES
(1, 'Pratesh', 'Gartaula', 123456, 6461234,'pratesh@gmail.com'),
(2, 'Rohan', 'Singh', 123456, 6465678, 'rohan@gmail.com');


--Sponsored User
CREATE TABLE `sponsoredUser` (
  `sId` int(11) NOT NULL,
  `fName` varchar(32) NOT NULL,
  `lName` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `phoneNumber` int(9) NOT NULL,
  `email` varchar(64) NOT NULL,
  CONSTRAINT PK_SponsoredUser PRIMARY KEY (sId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `sponsoredUser` (`sId`, `fName`, `lName`, `password`, `phoneNumber`, `email`) VALUES
(3, 'Samarth', 'Gawda', 123456, 6464321,'samarth@gmail.com'),
(4, 'Dacvu', 'Ho', 123456, 6466789,'dacvu@gmail.com'),
(5, 'Annet', 'John', 123456, 6468765, 'annet@gmail.com');

--Trainer
CREATE TABLE `trainer` (
  `trainerId` int(11) NOT NULL,
  `trainerName` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  CONSTRAINT PK_Trainer PRIMARY KEY (trainerId),
  CONSTRAINT FK_OnlineUser FOREIGN KEY (oId) REFERENCES onlineUser(oId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `trainer` (`trainerId`, `trainerName`, `email`) VALUES
(11, 'Lisa', 'lisa@gmail.com'),
(22, 'David', 'david@gmail.com');

--Freemium
CREATE TABLE `freemium` (
  `freeId` int(11) NOT NULL,
  `sId` int(11) NOT NULL,
  CONSTRAINT PK_Freemium PRIMARY KEY (freeId),
  CONSTRAINT FK_Freemium FOREIGN KEY (sId) REFERENCES sponsoredUser(sId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO `freemium` (`freeId`, `sId`) VALUES
(1,3),
(1,4),
(1,5);

--Subscription
CREATE TABLE `subscription` (
  `subId` int(11) NOT NULL,
  `oId` int(11) NOT NULL,
  `trainerId` int(11) NOT NULL,
  CONSTRAINT PK_Subscription PRIMARY KEY (subId),
  CONSTRAINT FK_Subscription FOREIGN KEY (oId) REFERENCES onlineUser(oId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO `subscription` (`freeId`, `sId`, `trainerId`) VALUES
(2,1,11),
(2,2,12);


--Payment
CREATE TABLE `payment` (
  `freeId` int(11) NOT NULL,
  `cardId` int(11) NOT NULL,
  `payId` int(11) NOT NULL,
  `accNumber` int(11) NOT NULL,
  `cvv` int(11) NOT NULL,
  `validYear` int(11) NULL,
  `validMonth` int(11) NULL,
  CONSTRAINT PK_Payment PRIMARY KEY (payId),
  CONSTRAINT FK_Freemium FOREIGN KEY (freeId) REFERENCES freemium(freeId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO `payment` (`freeId`, `cardId`,`payId`, `accNumber`,`cvv`, `validYear`,`validMonth`) VALUES
(1,1234567,1,137468262,463,2028,2),
(1,2234326,2,227842863,293,2029,3),
(1,3342345,3,352436724,923,2030,4);

--Bill
CREATE TABLE `bill` (
  `billId` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `freeId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `paymentDate` date DEFAULT NULL,
  `planID` int(11) NULL,
  `payId` int(11) NULL,
  CONSTRAINT PK_Bill PRIMARY KEY (billId),
  CONSTRAINT FK_Bill FOREIGN KEY (payId) REFERENCES payment(payId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



ALTER TABLE `onlineUser`
  ADD CONSTRAINT PK_OnlineUser PRIMARY KEY (`oId`);
ALTER TABLE `sponsoredUser`
  ADD CONSTRAINT PK_SponsoredUser PRIMARY KEY (`sId`);
ALTER TABLE `freemium`
  ADD CONSTRAINT PK_Freemium PRIMARY KEY (`freeId`),
  ADD CONSTRAINT FK_Freemium FOREIGN KEY (sId) REFERENCES sponsoredUser(sId);
ALTER TABLE `subscription`
  ADD CONSTRAINT PK_Subscription PRIMARY KEY (`subId`),
  ADD CONSTRAINT FK_Subscription FOREIGN KEY (oId) REFERENCES onlineUser(oId);
ALTER TABLE `payment`
  ADD CONSTRAINT PK_Payment PRIMARY KEY (`payId`),
  ADD CONSTRAINT FK_Freemium FOREIGN KEY (freeId) REFERENCES freemium(freeId);
ALTER TABLE `bill`
  ADD CONSTRAINT PK_Bill PRIMARY KEY (`billId`),
  ADD CONSTRAINT FK_Bill FOREIGN KEY (payId) REFERENCES payment(payId);


ALTER TABLE `onlineUser`
  MODIFY `oId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `sponsoredUser`
  MODIFY `sId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `freemium`
  MODIFY `freeId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `subscription`
  MODIFY `subId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `payment`
  MODIFY `payId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `bill`
  MODIFY `billId` int(11) NOT NULL AUTO_INCREMENT;
  