-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 07, 2021 at 06:05 AM
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
-- Table structure for table `rs_question_relationships`
--

CREATE TABLE `rs_question_relationships` (
  `id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `coverage_type_id` int(11) NOT NULL,
  `property_type_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `question_value` text NOT NULL,
  `products` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rs_question_relationships`
--

INSERT INTO `rs_question_relationships` (`id`, `location_id`, `coverage_type_id`, `property_type_id`, `question_id`, `question_value`, `products`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 'Yes', '{\"1\",\"2\",\"3\",\"4\",\"31\"}', '2021-05-20 06:01:41', '2021-05-28 10:40:41'),
(2, 1, 1, 1, 2, 'No', '{\"1\",\"2\",\"3\",\"4\"}', '2021-05-20 06:01:41', '2021-05-22 12:22:54'),
(3, 1, 2, 1, 1, 'Yes', '{\"1\",\"2\",\"4\"}', '2021-05-20 08:36:30', '2021-05-31 11:49:59'),
(4, 2, 1, 1, 1, 'Yes', '{\"1\",\"2\",\"3\",\"4\"}', '2021-05-20 09:45:13', '2021-05-22 12:22:54'),
(5, 2, 1, 1, 2, 'No', '{\"1\",\"2\",\"3\",\"4\"}', '2021-05-20 09:45:13', '2021-05-22 12:22:54'),
(6, 2, 2, 1, 1, 'Yes', '{\"1\"}', '2021-05-20 09:47:21', '2021-05-22 12:22:54'),
(7, 3, 1, 1, 1, 'Yes', '{\"9\",\"10\",\"11\"}', '2021-05-20 09:50:35', '2021-05-22 12:22:54'),
(8, 3, 1, 1, 2, 'No', '{\"9\",\"10\",\"11\"}', '2021-05-20 09:51:00', '2021-05-22 12:22:54'),
(9, 3, 2, 1, 1, 'Yes', '{\"9\"}', '2021-05-20 09:54:12', '2021-05-22 12:22:54'),
(10, 4, 1, 1, 1, 'Yes', '{\"16\",\"10\",\"17\"}', '2021-05-20 09:54:12', '2021-05-22 12:22:54'),
(11, 4, 1, 1, 2, 'No', '{\"16\",\"10\",\"17\"}', '2021-05-20 09:56:58', '2021-05-22 12:22:54'),
(12, 4, 2, 1, 1, 'Yes', '{\"16\"}', '2021-05-20 09:56:58', '2021-05-22 12:22:54'),
(13, 5, 1, 1, 1, 'Yes', '{\"19\",\"20\",\"21\"}', '2021-05-20 09:59:37', '2021-05-22 12:22:54'),
(14, 5, 1, 1, 2, 'No', '{\"19\",\"20\",\"21\"}', '2021-05-20 09:59:37', '2021-05-22 12:22:54'),
(15, 5, 2, 1, 1, 'Yes', '{\"19\"}', '2021-05-20 10:02:09', '2021-05-22 12:22:54'),
(17, 1, 1, 1, 2, 'Yes', '{\"31\"}', '2021-05-28 10:37:04', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rs_question_relationships`
--
ALTER TABLE `rs_question_relationships`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rs_question_relationships`
--
ALTER TABLE `rs_question_relationships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
