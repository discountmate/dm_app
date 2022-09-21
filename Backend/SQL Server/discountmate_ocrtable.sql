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
-- Table structure for table `ocrtable`
--

DROP TABLE IF EXISTS `ocrtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ocrtable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food` text,
  `Cost` text,
  `Receipt_ID` text,
  `Supermarket` text,
  `date` date DEFAULT NULL,
  `Store` text,
  `Processed` int DEFAULT '0',
  `UserID` varchar(255) DEFAULT NULL,
  `StoreID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5807 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ocrtable`
--

LOCK TABLES `ocrtable` WRITE;
/*!40000 ALTER TABLE `ocrtable` DISABLE KEYS */;
INSERT INTO `ocrtable` VALUES (5747,'ern','8.25','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5748,'DAIRY FULL CREAM SLITRE','6.30','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5749,'KELLOGGS CORN FLAKES OSGRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5750,'COBS CHEDDAR CHEESE GRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5751,'COBS GLUTTEN ZGRAM','0.70','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5752,'OBS POPCORN FOR','0.95','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5753,'COLES MWAVE POPCORN GRAM','8.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5754,'KELLOGGS COCO POPS BGRAM','9.00','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5755,'BLACKBERRIES GRAM','4.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5756,'STRAWBERRIES FOR','7.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5757,'BLACK GRAPES PERKG','0.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5758,'WILLTAM BARTLT PEARS PERKG','4.48','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5759,'ern','8.25','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5760,'DAIRY FULL CREAM SLITRE','6.30','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5761,'KELLOGGS CORN FLAKES OSGRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5762,'COBS CHEDDAR CHEESE GRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5763,'COBS GLUTTEN ZGRAM','0.70','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5764,'OBS POPCORN FOR','0.95','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5765,'COLES MWAVE POPCORN GRAM','8.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5766,'KELLOGGS COCO POPS BGRAM','9.00','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5767,'BLACKBERRIES GRAM','4.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5768,'STRAWBERRIES FOR','7.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5769,'BLACK GRAPES PERKG','0.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5770,'WILLTAM BARTLT PEARS PERKG','4.48','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'1','233'),(5771,'ern','8.25','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5772,'DAIRY FULL CREAM SLITRE','6.30','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5773,'KELLOGGS CORN FLAKES OSGRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5774,'COBS CHEDDAR CHEESE GRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5775,'COBS GLUTTEN ZGRAM','0.70','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5776,'OBS POPCORN FOR','0.95','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5777,'COLES MWAVE POPCORN GRAM','8.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5778,'KELLOGGS COCO POPS BGRAM','9.00','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5779,'BLACKBERRIES GRAM','4.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5780,'STRAWBERRIES FOR','7.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5781,'BLACK GRAPES PERKG','0.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5782,'WILLTAM BARTLT PEARS PERKG','4.48','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5783,'ern','8.25','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5784,'DAIRY FULL CREAM SLITRE','6.30','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5785,'KELLOGGS CORN FLAKES OSGRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5786,'COBS CHEDDAR CHEESE GRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5787,'COBS GLUTTEN ZGRAM','0.70','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5788,'OBS POPCORN FOR','0.95','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5789,'COLES MWAVE POPCORN GRAM','8.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5790,'KELLOGGS COCO POPS BGRAM','9.00','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5791,'BLACKBERRIES GRAM','4.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5792,'STRAWBERRIES FOR','7.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5793,'BLACK GRAPES PERKG','0.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5794,'WILLTAM BARTLT PEARS PERKG','4.48','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'43','233'),(5795,'ern','8.25','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5796,'DAIRY FULL CREAM SLITRE','6.30','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5797,'KELLOGGS CORN FLAKES OSGRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5798,'COBS CHEDDAR CHEESE GRAM','2.85','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5799,'COBS GLUTTEN ZGRAM','0.70','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5800,'OBS POPCORN FOR','0.95','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5801,'COLES MWAVE POPCORN GRAM','8.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5802,'KELLOGGS COCO POPS BGRAM','9.00','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5803,'BLACKBERRIES GRAM','4.50','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5804,'STRAWBERRIES FOR','7.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5805,'BLACK GRAPES PERKG','0.80','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233'),(5806,'WILLTAM BARTLT PEARS PERKG','4.48','7155\n\n','Coles','2022-04-03','965 - CS WESTMEAD -\n\n',1,'53','233');
/*!40000 ALTER TABLE `ocrtable` ENABLE KEYS */;
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