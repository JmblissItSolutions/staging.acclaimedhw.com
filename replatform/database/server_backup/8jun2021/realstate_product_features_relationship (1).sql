-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 08, 2021 at 04:46 AM
-- Server version: 5.7.34
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `replatfo_replatform_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `realstate_product_features_relationship`
--

CREATE TABLE `realstate_product_features_relationship` (
  `id` int(11) NOT NULL,
  `feature_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `realstate_product_features_relationship`
--

INSERT INTO `realstate_product_features_relationship` (`id`, `feature_id`, `product_id`) VALUES
(1, 17, 2),
(2, 17, 3),
(3, 17, 4),
(4, 19, 2),
(5, 19, 3),
(6, 19, 4),
(7, 20, 2),
(8, 20, 3),
(9, 20, 4),
(10, 21, 4),
(11, 21, 3),
(12, 21, 2),
(13, 15, 2),
(14, 15, 3),
(15, 15, 4),
(16, 16, 2),
(17, 16, 3),
(18, 16, 4),
(19, 22, 2),
(20, 22, 3),
(21, 22, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `realstate_product_features_relationship`
--
ALTER TABLE `realstate_product_features_relationship`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `realstate_product_features_relationship`
--
ALTER TABLE `realstate_product_features_relationship`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
