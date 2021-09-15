-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 31, 2021 at 01:54 AM
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
-- Table structure for table `realstate_propertype_question_relationship`
--

CREATE TABLE `realstate_propertype_question_relationship` (
  `id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `coverage_type_id` int(11) NOT NULL,
  `property_type_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `realstate_propertype_question_relationship`
--

INSERT INTO `realstate_propertype_question_relationship` (`id`, `location_id`, `coverage_type_id`, `property_type_id`, `question_id`) VALUES
(1, 1, 1, 1, 1),
(2, 1, 1, 1, 2),
(3, 1, 2, 1, 1),
(4, 2, 1, 1, 1),
(5, 2, 1, 1, 2),
(6, 2, 2, 1, 1),
(7, 3, 1, 1, 1),
(8, 3, 1, 1, 2),
(9, 3, 2, 1, 1),
(10, 4, 1, 1, 1),
(11, 4, 1, 1, 2),
(12, 4, 2, 1, 1),
(13, 5, 1, 1, 1),
(14, 5, 1, 1, 2),
(15, 5, 2, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `realstate_propertype_question_relationship`
--
ALTER TABLE `realstate_propertype_question_relationship`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `realstate_propertype_question_relationship`
--
ALTER TABLE `realstate_propertype_question_relationship`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
