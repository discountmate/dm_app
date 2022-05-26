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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(9) NOT NULL,
  `permission` int NOT NULL,
  `postcode` int NOT NULL,
  `searchradius` int NOT NULL,
  `active` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','test','test@test.com','04040404',1,0,0,1),(2,'test','test','test2@test.com','04040404',0,0,0,1),(39,'wixxx','$2b$10$e9KtXdPPlQM9kI12Np4cM.V.i.BU8Rt2MtgJ3t2qMT2EYvFMveIqe','123','123',0,2020,100,1),(40,'TestCreate','$2b$10$WoLxrQ6XJAIS99QGdcl.KegXzRCeUdcfQNzs4KIFs6jBwFM5XgnkS','email@email.com','04040404',0,2020,100,1),(41,'wix','$2b$10$lUjIbWlZfn6WY9PYNwb/D.kqZXHDLRxLeBv5Ueb8YWaA9rNRUHzyq','123','123',0,2020,100,1),(42,'test222','$2b$10$qxUC.RpRXCpiCpfq6oAQJ.ygHycRjgukU6OK8O0HKP76QHR.ESoua','email@email.com','200202020',0,2020,100,1),(43,'wixx','$2b$10$4ynEThxBadY51T0P0EQe8uqECXAYz.xqddNUS0xaaxYMUVy9.KL7O','123','123',0,2020,100,1),(44,'azum','$2b$10$PM6.mnifgWV6Sr7rnV1tyej2DsBtiIJm1lqN0GdlaHWKTf08ZmTvS','test@gmail.com','040000000',0,2020,100,1),(45,'iazum','$2b$10$t6NYRZHLxpCld.TKi.13x.fMDuRwAIvbNcFb/qGuOKCSmdLh6oiDG','iazum@edu.au','044444444',0,2020,100,1),(46,'12333','$2b$10$Sa03vmczKlGF1WTUKiT3I.4QmIjHPjNo8ArgrTDokUqEkYmMChhF.','123','123',0,2020,100,1),(47,'wixxxx','$2b$10$Gji2JxuWz1AgUsRBKUClEOjm.Y5ktecmiBZkbvzwtFSG0CaALhG..','wix@gmail.com','12321',0,2020,100,1),(48,'wixtest','$2b$10$eyLQVALSHIZVUDqYQ2s9ZOJQtDw4NvsUPYezQYR/oWZRdpqxMy8jq','wix@gmail.com','424156325',0,2020,100,1),(49,'testwix','$2b$10$J08NBHP1oHdF1OfvjEL7nerJyqD1R7yMxluvPsWOUoYcdg9GQ9Tv2','wix@gmail.com','156325456',0,2020,100,1),(50,'testing','$2b$10$u5GG2Ut/fPAqy9XkMzvdLOLTLDQ5Pkuxc4VlemVC28Kr7Hy0xgvtm','wix@gmail.com','123456789',0,2020,100,1),(51,'qwe123','$2b$10$PdWpUs7RPN5p3mHaHWVJH.oEoRDhlPAwJdJXGoJCJ.yaYog9/QU7m','wix@gmail.com','789456123',0,2020,100,1),(54,'testing123','$2b$10$8qNO408nc6gI2hnT1Q7dj./qVU.BDIPrTnHo2iYKEqTx36vQw9GhG','wix@gmail.com','431234123',0,2020,100,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-26 12:32:31
