-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2021 at 07:43 AM
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
-- Table structure for table `real_order_items`
--

CREATE TABLE `real_order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prod_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pay_interval_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `real_order_items`
--

INSERT INTO `real_order_items` (`id`, `order_id`, `product_id`, `product_name`, `prod_type`, `quantity`, `pay_interval_type`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Standard', 'simple', '2', 'yearly', '2021-05-29 00:40:44', '2021-05-29 00:40:44'),
(2, 1, 2, 'Premium+', 'simple', '2', 'yearly', '2021-05-29 00:40:44', '2021-05-29 00:40:44'),
(3, 1, 30, 'Ultimate', 'simple', '3', 'yearly', '2021-05-29 00:49:09', '2021-05-29 00:49:09'),
(4, 1, 28, 'Standard', 'simple', '1', 'yearly', '2021-05-29 00:49:09', '2021-05-29 00:49:09'),
(5, 2, 30, 'Ultimate', 'simple', '3', 'yearly', '2021-05-29 00:49:36', '2021-05-29 00:49:36'),
(6, 3, 28, 'Standard', 'simple', '1', 'yearly', '2021-05-29 00:49:36', '2021-05-29 00:49:36'),
(7, 4, 24, 'Ultimate', 'simple', '1', 'yearly', '2021-05-29 00:50:41', '2021-05-29 00:50:41'),
(8, 5, 25, 'Standard', 'simple', '4', 'yearly', '2021-05-29 00:50:41', '2021-05-29 00:50:41'),
(9, 4, 301, 'Washer/Dryer', 'addon', '1', 'yearly', '2021-06-02 00:29:04', '2021-06-02 00:29:04'),
(10, 5, 295, 'Booster Pump', 'addon', '1', 'yearly', '2021-06-02 00:29:04', '2021-06-02 00:29:04'),
(11, 3, 170, 'Septic System/Pumping', 'addon', '1', 'yearly', '2021-06-02 01:14:55', '2021-06-02 01:14:55'),
(12, 6, 100, 'Casita', 'addon', '1', 'yearly', '2021-06-02 01:14:55', '2021-06-02 01:14:55'),
(13, 3, 170, 'Septic System/Pumping', 'addon', '1', 'yearly', '2021-06-02 01:16:21', '2021-06-02 01:16:21'),
(14, 6, 100, 'Casita', 'addon', '1', 'yearly', '2021-06-02 01:16:21', '2021-06-02 01:16:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `real_order_items`
--
ALTER TABLE `real_order_items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `real_order_items`
--
ALTER TABLE `real_order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
