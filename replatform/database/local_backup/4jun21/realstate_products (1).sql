-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2021 at 12:35 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laraveladmin`
--

-- --------------------------------------------------------

--
-- Table structure for table `realstate_products`
--

CREATE TABLE `realstate_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_desc` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `realstate_products`
--

INSERT INTO `realstate_products` (`id`, `name`, `short_desc`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Standard', 'Home Warranty', '300', NULL, NULL),
(2, 'Premium+', 'Home Warranty\r\n<span>+ Fridge</span>', '400', NULL, NULL),
(3, 'Premium+1', 'Home Warranty\r\n<span>+ Fridge , No Fault</span>', '450', NULL, NULL),
(4, 'Ultimate', 'Home Warranty', '500', NULL, NULL),
(5, 'Standard', 'Condo Warranty', '285', NULL, NULL),
(6, 'hidden', NULL, '595', NULL, NULL),
(7, 'hidden', NULL, '795', NULL, NULL),
(8, 'hidden', NULL, '995', NULL, NULL),
(9, 'Standard', 'Home Warranty', '375', NULL, NULL),
(10, 'Premium', 'Home Warranty', '450', NULL, NULL),
(11, 'Ultimate', 'Home Warranty\r\n<span>+ Fridge , Washer/Dryer</span>', '535', NULL, NULL),
(12, 'Standard', 'Condo Warranty', '340', NULL, NULL),
(13, 'hidden', NULL, '695', NULL, NULL),
(14, 'hidden', NULL, '895', NULL, NULL),
(15, 'hidden', NULL, '1095', NULL, NULL),
(16, 'Standard', 'Home Warranty', '350', NULL, NULL),
(17, 'Ultimate', 'Home Warranty\r\n<span>+ Fridge , Washer/Dryer</span>', '550', NULL, NULL),
(18, 'Standard', 'Condo Warranty', '300', NULL, NULL),
(19, 'Standard', 'Home Warranty', '395', NULL, NULL),
(20, 'Premium', 'Home Warranty\r\n<span>+ Fridge</span>', '495', NULL, NULL),
(21, 'Ultimate', 'Home Warranty\r\n<span>+ Fridge, Washer/Dryer, Kit Appliances</span>', '575', NULL, NULL),
(22, 'Standard', 'Home Warranty', '695', NULL, NULL),
(23, 'Premium', 'Home warranty\r\n<span>+ Fridge</span>', '895', NULL, NULL),
(24, 'Ultimate', 'Home Warranty\r\n<span>+ Fridge, Washer/Dryer, Kit Appliances</span>', '1095', NULL, NULL),
(25, 'Standard', 'Home Warranty', '935', NULL, NULL),
(26, 'Premium', 'Home Warranty\r\n<span>+ Fridge</span>', '1035', NULL, NULL),
(27, 'Ultimate', 'Home Warranty\r\n<span>+ Fridge, Washer/Dryer, Kit Appliances</span>', '1395', NULL, NULL),
(28, 'Standard', 'Home Warranty', '1195', NULL, NULL),
(29, 'Premium', 'Home Warranty\r\n<span>+ Fridge</span>', '1395', NULL, NULL),
(30, 'Ultimate', 'Home Warranty\r\n<span>+ Fridge, Washer/Dryer, Kit Appliances</span>', '1655', NULL, NULL),
(31, 'hidden', 'Home Warranty', '695', '2021-05-25 01:51:37', '2021-05-25 01:51:37'),
(32, 'hidden', 'Home Warranty', '895', NULL, NULL),
(34, 'hidden', 'Home Warranty', '1095', NULL, NULL),
(35, 'Standard', 'New Home Warranty I', '525', NULL, NULL),
(36, 'Standard', 'New Home Warranty', '595', NULL, NULL),
(37, 'Standard', 'New Home Warranty', '595', NULL, NULL),
(38, 'Standard', 'New Home Warranty', '595', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `realstate_products`
--
ALTER TABLE `realstate_products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `realstate_products`
--
ALTER TABLE `realstate_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
