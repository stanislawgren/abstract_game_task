-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: abstract_game
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game_participants`
--

DROP TABLE IF EXISTS `game_participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_participants` (
  `ID_participation` int(11) NOT NULL AUTO_INCREMENT,
  `ID_game` int(11) NOT NULL,
  `ID_team` int(11) NOT NULL,
  PRIMARY KEY (`ID_participation`),
  KEY `ID_game` (`ID_game`),
  KEY `ID_team` (`ID_team`),
  CONSTRAINT `game_participants_ibfk_1` FOREIGN KEY (`ID_game`) REFERENCES `games` (`ID_game`),
  CONSTRAINT `game_participants_ibfk_2` FOREIGN KEY (`ID_team`) REFERENCES `teams` (`ID_team`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_participants`
--

LOCK TABLES `game_participants` WRITE;
/*!40000 ALTER TABLE `game_participants` DISABLE KEYS */;
INSERT INTO `game_participants` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,1);
/*!40000 ALTER TABLE `game_participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_players`
--

DROP TABLE IF EXISTS `game_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_players` (
  `ID_game_player` int(11) NOT NULL AUTO_INCREMENT,
  `ID_game` int(11) NOT NULL,
  `ID_player` int(11) NOT NULL,
  `ID_team` int(11) NOT NULL,
  PRIMARY KEY (`ID_game_player`),
  KEY `ID_game` (`ID_game`),
  KEY `ID_player` (`ID_player`),
  KEY `game_players_teams_ID_team_fk` (`ID_team`),
  CONSTRAINT `game_players_ibfk_1` FOREIGN KEY (`ID_game`) REFERENCES `games` (`ID_game`),
  CONSTRAINT `game_players_ibfk_2` FOREIGN KEY (`ID_player`) REFERENCES `players` (`ID_player`),
  CONSTRAINT `game_players_teams_ID_team_fk` FOREIGN KEY (`ID_team`) REFERENCES `teams` (`ID_team`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_players`
--

LOCK TABLES `game_players` WRITE;
/*!40000 ALTER TABLE `game_players` DISABLE KEYS */;
INSERT INTO `game_players` VALUES (1,1,1,1),(2,1,3,2),(3,1,4,3),(4,1,2,1),(5,2,1,1);
/*!40000 ALTER TABLE `game_players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `ID_game` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(60) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`ID_game`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Local Stadium','2024-02-14','17:00:00'),(2,'City Stadium','2024-02-16','15:00:00');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `players` (
  `ID_player` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `number` int(11) NOT NULL,
  `ID_team` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_player`),
  KEY `ID_team` (`ID_team`),
  CONSTRAINT `players_ibfk_1` FOREIGN KEY (`ID_team`) REFERENCES `teams` (`ID_team`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'Karol','Kowalski',9,1),(2,'Marcin','Marcinowski',2,1),(3,'Krzysztof','Krakowski',5,2),(4,'Jacek','Jackowski',7,3);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teams` (
  `ID_team` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`ID_team`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'First Team'),(2,'Secound Team'),(3,'Third Team');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01  0:25:37
