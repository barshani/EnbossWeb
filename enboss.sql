-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2024 at 10:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enboss`
--

-- --------------------------------------------------------

--
-- Table structure for table `parks`
--

CREATE TABLE `parks` (
  `id` int(11) NOT NULL,
  `parkName` varchar(255) DEFAULT NULL,
  `parkNameHeb` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `addressHeb` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `imgAlt` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `areaHeb` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `map` varchar(255) DEFAULT NULL,
  `lightHourHeb` varchar(255) DEFAULT NULL,
  `openHourHeb` varchar(255) DEFAULT NULL,
  `lightHour` varchar(255) DEFAULT NULL,
  `openHour` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `parking` tinyint(1) DEFAULT NULL,
  `helmet` tinyint(1) DEFAULT NULL,
  `cooler` tinyint(1) DEFAULT NULL,
  `price` tinyint(1) DEFAULT NULL,
  `shade` tinyint(1) DEFAULT NULL,
  `food` tinyint(1) DEFAULT NULL,
  `seat` tinyint(1) DEFAULT NULL,
  `toilet` tinyint(1) DEFAULT NULL,
  `guard` tinyint(1) DEFAULT NULL,
  `bomb` tinyint(1) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `note1` varchar(255) DEFAULT NULL,
  `note2` varchar(255) DEFAULT NULL,
  `note3` varchar(255) DEFAULT NULL,
  `noteHeb` varchar(255) DEFAULT NULL,
  `noteHeb1` varchar(255) DEFAULT NULL,
  `noteHeb2` varchar(255) DEFAULT NULL,
  `noteHeb3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parks`
--

INSERT INTO `parks` (`id`, `parkName`, `parkNameHeb`, `address`, `addressHeb`, `img`, `imgAlt`, `area`, `areaHeb`, `video`, `map`, `lightHourHeb`, `openHourHeb`, `lightHour`, `openHour`, `year`, `parking`, `helmet`, `cooler`, `price`, `shade`, `food`, `seat`, `toilet`, `guard`, `bomb`, `note`, `note1`, `note2`, `note3`, `noteHeb`, `noteHeb1`, `noteHeb2`, `noteHeb3`) VALUES
(1, 'Netanya', 'נתניה', 'Winter Puddle Park, Sderot Ben Gurion, Netanya.', 'פארק אגם שלולית החורף, שדרות בן גוריון, נתניה.', '/assets/images/Park480-webp/netanya.webp', 'Netanya Skatepark', 'center', 'מרכז', '', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107930.0936650375!2d34.843241!3d32.28994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d408a622fc7a5%3A0x483cda69048d5741!2sSkatepark!5e0!3m2!1sen!2sus!4v1720022089292!5m2!1sen!2sus\" width=\"600\" h', '', '<p class=\"bold\">כל השבוע :</p>:08:00-23:00<br><p class=\"bold\">חופשות וחגים :</p>08:00-00:00', '', '<p class=\"bold\">Everyday :</p>:08:00-23:00<br><p class=\"bold\">Holidays :</p>08:00-00:00', 2016, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 'Scooter and bike riders are not allowed to enter.', '', '', '', 'הכניסה לרוכבי קורקינג ואופניים אסורה.', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `subCategory` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productName`, `size`, `color`, `img`, `alt`, `category`, `subCategory`, `price`) VALUES
(1, 'חולצת ENBOSS Blading', 'S', 'grey', 'https://enboss.co/images/Park1500-webp/kiryat-ata.webp', 'ENBOSS Blading חולצת', 'רולר', 'חולצות', 100),
(2, 'שעוות גולגולת', 'S', 'Blue', 'https://enboss.co/images/Park480-webp/zichron-yaakov.webp', 'Blue ENBOSS wax', 'Wax', 'Wax', 50),
(3, 'מדבקות Color Blading', '', '', 'https://enboss.co/images/Park480-webp/ramat-gan(2).webp', 'מדבקות', 'רולר', 'מדבקות', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parks`
--
ALTER TABLE `parks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parks`
--
ALTER TABLE `parks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
