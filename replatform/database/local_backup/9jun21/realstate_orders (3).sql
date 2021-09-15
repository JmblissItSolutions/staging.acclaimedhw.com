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
-- Table structure for table `realstate_orders`
--

CREATE TABLE `realstate_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `prop_street1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prop_street2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prop_city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prop_state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prop_zipcode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buyer_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buyer_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buyer_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buyer_agentname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buyer_agentphone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buyer_agentemail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buyer_realstate_company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buyer_coordinatorname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buyer_coordinatorphone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buyer_coordinatoremail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_agentname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seller_agentphone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_agentemail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_realstate_company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_coordinatorname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_coordinatorphone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller_coordinatoremail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `escrow_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `escrow_street1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `escrow_street2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `escrow_city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `escrow_state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `escrow_zipcode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `closing_officername` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `closing_officeremail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `closing_officerphone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `closing_date` date DEFAULT NULL,
  `escrow_assistantname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `escrow_assistantemail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_biller` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_notes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sales_person` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coupon_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `realstate_orders`
--

INSERT INTO `realstate_orders` (`id`, `prop_street1`, `prop_street2`, `prop_city`, `prop_state`, `prop_zipcode`, `buyer_name`, `buyer_phone`, `buyer_email`, `buyer_agentname`, `buyer_agentphone`, `buyer_agentemail`, `buyer_realstate_company`, `buyer_coordinatorname`, `buyer_coordinatorphone`, `buyer_coordinatoremail`, `seller_name`, `seller_phone`, `seller_email`, `seller_agentname`, `seller_agentphone`, `seller_agentemail`, `seller_realstate_company`, `seller_coordinatorname`, `seller_coordinatorphone`, `seller_coordinatoremail`, `escrow_title`, `escrow_street1`, `escrow_street2`, `escrow_city`, `escrow_state`, `escrow_zipcode`, `closing_officername`, `closing_officeremail`, `closing_officerphone`, `closing_date`, `escrow_assistantname`, `escrow_assistantemail`, `order_biller`, `order_notes`, `sales_person`, `coupon_code`, `total_price`, `created_at`, `updated_at`) VALUES
(1, 'vijaynagar', 'scheme 54', 'Indore', 'Madhya', '283202', 'sunil kumar', '1236547850', 'sunil@gmail.com', 'sksingh', '2563254512', 'sk@gmail.com', 'jmbliss', 'kka', '0320232032', 'kk@gmail.com', 'shivam', '3955782364', 'shivam@gmail.com', 'talha', '86362368686', 'tp@gmail.com', 'tbcom', 'tarun', '0303030321', 'tarun@gmail.com', 'jk', 'jhbj', 'dcsc', 'asdc', 'acdas', '563203', 'asdas', 'asda@gmail.com', 'asd', '2021-05-21', 'dsad', 'sda@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '100', '2021-05-26 02:19:04', '2021-05-28 07:33:34'),
(2, 'test', 'last', 'Bhopal', 'Madhya Pradesh', '253265', 'sunil kumar', '1236000250', 'sunilkumar@gmail.com', 'sksingh12', '2563254512', 'skgg@gmail.com', 'jmbliss company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '500', '2021-05-26 02:36:11', '2021-05-26 02:36:11'),
(3, 'test', 'last', 'Bhopal', 'Madhya Pradesh', '253265', 'sunil kumar', '1236000250', 'sunilkumar@gmail.com', 'sksingh12', '2563254512', 'skgg@gmail.com', 'jmbliss company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '450', '2021-05-26 02:37:07', '2021-05-26 02:37:07'),
(4, 'test', 'last', 'Bhopal', 'Madhya Pradesh', '253265', 'sunil kumar', '1236000250', 'sunilkumar@gmail.com', 'sksingh12', '2563254512', 'skgg@gmail.com', 'jmbliss company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '520', '2021-05-26 02:37:08', '2021-05-26 02:37:08'),
(5, 'test', 'last', 'Bhopal', 'Madhya Pradesh', '253265', 'sunil kumar', '1236000250', 'sunilkumar@gmail.com', 'sksingh12', '2563254512', 'skgg@gmail.com', 'jmbliss company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '300', '2021-05-26 02:37:10', '2021-05-26 02:37:10'),
(6, 'test', 'last', 'Bhopal', 'Madhya Pradesh', '253265', 'sunil kumar', '1236000250', 'sunilkumar@gmail.com', 'sksingh12', '2563254512', 'skgg@gmail.com', 'jmbliss company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '330', '2021-05-26 02:37:12', '2021-05-26 02:37:12'),
(7, 'mahadev', 'Nagar', 'Firozabad', 'Uttar Pradesh', '25300', 'manish kumar', '1236000250', 'manishkumar@gmail.com', 'viveksingh12', '2563254512', 'vivekg@gmail.com', 'jio company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '150', '2021-05-26 02:38:48', '2021-05-26 02:38:48'),
(8, 'mahadev', 'Nagar', 'Firozabad', 'Uttar Pradesh', '25300', 'manish kumar', '1236000250', 'manishkumar@gmail.com', 'viveksingh12', '2563254512', 'vivekg@gmail.com', 'jio company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '200', '2021-05-26 02:39:16', '2021-05-26 02:39:16'),
(9, 'mahadev', 'Nagar', 'Firozabad', 'Uttar Pradesh', '25300', 'manish kumar', '1236000250', 'manishkumar@gmail.com', 'viveksingh12', '2563254512', 'vivekg@gmail.com', 'jio company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '185', '2021-05-26 02:39:17', '2021-05-26 02:39:17'),
(11, 'mahadev', 'Nagar', 'Firozabad', 'Uttar Pradesh', '25300', 'manish kumar', '1236000250', 'manishkumar@gmail.com', 'viveksingh12', '2563254512', 'vivekg@gmail.com', 'jio company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '500', '2021-05-26 08:37:29', '2021-05-26 08:37:29'),
(12, 'mahadev', 'Nagar', 'Firozabad', 'Uttar Pradesh', '25300', 'manish kumar', '1236000250', 'manishkumar@gmail.com', 'viveksingh12', '2563254512', 'vivekg@gmail.com', 'jio company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '500', '2021-05-27 02:42:09', '2021-05-27 02:42:09'),
(13, 'mahadev', 'Nagar', 'Firozabad', 'Uttar Pradesh', '25300', 'manish kumar', '1236000250', 'manishkumar@gmail.com', 'viveksingh12', '2563254512', 'vivekg@gmail.com', 'jio company', 'kka hgvh', '0320232032', 'sxaxa@gmail.com', 'shascacaca', '3955782364', 'sascacm@gmail.com', 'tascac', '0022368686', 'ascasc@gmail.com', 'tbcoascam', 'taascarun', '0303030321', 'taruascan@gmail.com', 'jacsak', 'jscahbj', 'dcascasc', 'asscadc', 'acscadas', '5623203', 'assadas', 'asdasxaaa@gmail.com', 'aasxasd', '2021-05-21', 'dsad', 'sdsxaa@gmail.com', 'sda', 'kjbk', 'jhbj', 'flat10', '500', '2021-05-27 02:49:46', '2021-05-27 02:49:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `realstate_orders`
--
ALTER TABLE `realstate_orders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `realstate_orders`
--
ALTER TABLE `realstate_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
