-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: discountmate
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `recommendation`
--

DROP TABLE IF EXISTS `recommendation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recommendation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `itemid` int NOT NULL,
  `userid` int NOT NULL,
  `RecType` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `LastUpdate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=579 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recommendation`
--

LOCK TABLES `recommendation` WRITE;
/*!40000 ALTER TABLE `recommendation` DISABLE KEYS */;
INSERT INTO `recommendation` VALUES (559,759,1,'HistoryBased','1','2022/05/23'),(560,761,1,'HistoryBased','1','2022/05/23'),(561,764,1,'HistoryBased','1','2022/05/23'),(562,764,1,'HistoryBased','1','2022/05/23'),(563,765,1,'HistoryBased','1','2022/05/23'),(564,759,43,'HistoryBased','1','2022/05/23'),(565,763,43,'HistoryBased','1','2022/05/23'),(566,767,43,'HistoryBased','1','2022/05/23'),(567,767,43,'HistoryBased','1','2022/05/23'),(568,760,43,'HistoryBased','1','2022/05/23'),(569,764,43,'HistoryBased','1','2022/05/24'),(570,767,43,'HistoryBased','1','2022/05/24'),(571,763,43,'HistoryBased','1','2022/05/24'),(572,767,43,'HistoryBased','1','2022/05/24'),(573,759,43,'HistoryBased','1','2022/05/24'),(574,760,53,'HistoryBased','1','2022/05/24'),(575,761,53,'HistoryBased','1','2022/05/24'),(576,760,53,'HistoryBased','1','2022/05/24'),(577,761,53,'HistoryBased','1','2022/05/24'),(578,760,53,'HistoryBased','1','2022/05/24');
/*!40000 ALTER TABLE `recommendation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-26 12:32:30
