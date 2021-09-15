-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2021 at 01:06 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rs_question_relationships`
--

INSERT INTO `rs_question_relationships` (`id`, `location_id`, `coverage_type_id`, `property_type_id`, `question_id`, `question_value`, `products`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 'Yes', '1,2,3,4', '2021-05-20 06:01:41', '2021-06-04 06:04:40'),
(2, 1, 1, 1, 2, 'No', '1,2,3,4', '2021-05-20 06:01:41', '2021-06-04 05:41:19'),
(3, 1, 2, 1, 1, 'Yes', '1,2,4', '2021-05-20 08:36:30', '2021-06-04 05:41:19'),
(4, 2, 1, 1, 1, 'Yes', '1,2,3,4', '2021-05-20 09:45:13', '2021-06-04 05:41:19'),
(5, 2, 1, 1, 2, 'No', '1,2,3,4', '2021-05-20 09:45:13', '2021-06-04 05:41:19'),
(6, 2, 2, 1, 1, 'Yes', '1', '2021-05-20 09:47:21', '2021-06-04 05:41:19'),
(7, 3, 1, 1, 1, 'Yes', '9,10,11', '2021-05-20 09:50:35', '2021-06-04 05:41:19'),
(8, 3, 1, 1, 2, 'No', '9,10,11', '2021-05-20 09:51:00', '2021-06-04 05:41:19'),
(9, 3, 2, 1, 1, 'Yes', '9', '2021-05-20 09:54:12', '2021-06-04 05:41:19'),
(10, 4, 1, 1, 1, 'Yes', '16,10,17', '2021-05-20 09:54:12', '2021-06-04 05:41:19'),
(11, 4, 1, 1, 2, 'No', '16,10,17', '2021-05-20 09:56:58', '2021-06-04 05:41:19'),
(12, 4, 2, 1, 1, 'Yes', '16', '2021-05-20 09:56:58', '2021-06-04 05:41:19'),
(13, 5, 1, 1, 1, 'Yes', '19,20,21', '2021-05-20 09:59:37', '2021-06-04 05:41:19'),
(14, 5, 1, 1, 2, 'No', '19,20,21', '2021-05-20 09:59:37', '2021-06-04 05:41:19'),
(15, 5, 2, 1, 1, 'Yes', '19', '2021-05-20 10:02:09', '2021-06-04 05:41:19'),
(17, 1, 1, 1, 2, 'Yes', '35', '2021-05-28 10:37:04', '2021-06-04 06:43:14'),
(18, 2, 1, 1, 2, 'Yes', '35', '2021-06-04 06:47:03', '0000-00-00 00:00:00'),
(19, 3, 1, 1, 2, 'Yes', '36', '2021-06-04 06:50:17', '0000-00-00 00:00:00'),
(20, 4, 1, 1, 2, 'Yes', '37', '2021-06-04 06:51:39', '2021-06-04 06:55:01'),
(21, 5, 1, 1, 2, 'Yes', '38', '2021-06-04 06:58:11', '0000-00-00 00:00:00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
