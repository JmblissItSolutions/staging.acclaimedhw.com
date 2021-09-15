-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2021 at 07:01 AM
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
-- Table structure for table `realstate_relationships`
--

CREATE TABLE `realstate_relationships` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `location_id` bigint(20) UNSIGNED NOT NULL,
  `coverage_type_id` bigint(20) UNSIGNED NOT NULL,
  `question_type_id` bigint(20) UNSIGNED NOT NULL,
  `product_ids` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `realstate_relationships`
--

INSERT INTO `realstate_relationships` (`id`, `location_id`, `coverage_type_id`, `question_type_id`, `product_ids`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '1,2,3,4', NULL, NULL),
(2, 1, 1, 2, '5', NULL, NULL),
(3, 1, 1, 3, '6', NULL, NULL),
(4, 1, 1, 4, '7', NULL, NULL),
(5, 1, 1, 5, '8', NULL, NULL),
(6, 1, 2, 1, '1,2,4', NULL, NULL),
(7, 1, 2, 3, '6', NULL, NULL),
(8, 1, 2, 4, '7', NULL, NULL),
(9, 1, 2, 5, '8', NULL, NULL),
(10, 2, 1, 1, '1,2,3,4', NULL, NULL),
(11, 2, 1, 2, '5', NULL, NULL),
(12, 2, 1, 3, '6', NULL, NULL),
(13, 2, 1, 4, '7', NULL, NULL),
(14, 2, 1, 5, '8', NULL, NULL),
(15, 2, 2, 1, '1', NULL, NULL),
(16, 2, 2, 3, '6', NULL, NULL),
(17, 2, 2, 4, '7', NULL, NULL),
(18, 2, 2, 5, '8', NULL, NULL),
(19, 3, 1, 1, '9,10,11', NULL, NULL),
(20, 3, 1, 2, '12', NULL, NULL),
(21, 3, 1, 3, '13', NULL, NULL),
(22, 3, 1, 4, '14', NULL, NULL),
(23, 3, 1, 5, '15', NULL, NULL),
(24, 3, 2, 1, '9', NULL, NULL),
(25, 3, 2, 3, '13', NULL, NULL),
(26, 3, 2, 4, '14', NULL, NULL),
(27, 3, 2, 5, '15', NULL, NULL),
(28, 4, 1, 1, '16,10,17', NULL, NULL),
(29, 4, 1, 2, '18', NULL, NULL),
(30, 4, 1, 3, '13', NULL, NULL),
(31, 4, 1, 4, '14', NULL, NULL),
(32, 4, 1, 5, '15', NULL, NULL),
(33, 4, 2, 1, '16', NULL, NULL),
(34, 4, 2, 3, '13', NULL, NULL),
(35, 4, 2, 4, '14', NULL, NULL),
(36, 4, 2, 5, '15', NULL, NULL),
(37, 5, 1, 1, '19,20,21', NULL, NULL),
(38, 5, 1, 3, '22,23,24', NULL, NULL),
(39, 5, 1, 4, '25,26,27', NULL, NULL),
(40, 5, 1, 5, '28,29,30', NULL, NULL),
(41, 5, 2, 1, '19', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `realstate_relationships`
--
ALTER TABLE `realstate_relationships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `realstate_realationships_location_id_foreign` (`location_id`),
  ADD KEY `realstate_realationships_coverage_type_id_foreign` (`coverage_type_id`),
  ADD KEY `realstate_realationships_question_type_id_foreign` (`question_type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `realstate_relationships`
--
ALTER TABLE `realstate_relationships`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `realstate_relationships`
--
ALTER TABLE `realstate_relationships`
  ADD CONSTRAINT `realstate_realationships_coverage_type_id_foreign` FOREIGN KEY (`coverage_type_id`) REFERENCES `realstate_coverage_types` (`id`),
  ADD CONSTRAINT `realstate_realationships_location_id_foreign` FOREIGN KEY (`location_id`) REFERENCES `realstate_locations` (`id`),
  ADD CONSTRAINT `realstate_realationships_question_type_id_foreign` FOREIGN KEY (`question_type_id`) REFERENCES `realstate_questions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
