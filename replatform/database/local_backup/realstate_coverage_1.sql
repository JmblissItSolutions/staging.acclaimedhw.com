-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2021 at 01:06 PM
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
-- Table structure for table `realstate_coverage`
--

CREATE TABLE `realstate_coverage` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `coverage_type` varchar(255) NOT NULL,
  `coverage_name` varchar(255) NOT NULL,
  `coverage_price` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `realstate_coverage`
--

INSERT INTO `realstate_coverage` (`id`, `product_id`, `coverage_type`, `coverage_name`, `coverage_price`, `content`, `info`) VALUES
(1, 1, 'checkbox', 'Refrigerator', '50', '', ''),
(2, 1, 'number', 'Washer & Dryer', '85', '', ''),
(3, 1, 'number', 'Second Kitchen (does not incl fridge)', '85', '', ''),
(4, 1, 'number', 'Discounted Service Call', '50', '', ''),
(5, 1, 'number', 'Grinder Pump', '155', '', ''),
(6, 1, 'number', 'Swimming Pool/Spa Equipment', '175', '', ''),
(7, 1, 'number', 'Booster Pump', '85', '', ''),
(8, 1, 'checkbox', '3rd Year Coverage', '300', '', ''),
(9, 1, 'default', 'Additional Refrigerator/Freezer', '40', '', ''),
(10, 1, 'number', 'Water Softener', '50', '', ''),
(11, 1, 'number', 'Appliance Limits Increase (adds on $1000 coverage on built in kitchen appliances)', '85', '', ''),
(12, 1, 'checkbox', 'Casita', '150', '', '{\"title\":\"Casita\",\"full_content\":\"<p style=\"font-size: .85em;\">Covered: Building separate from main\r\nfoundation. Covered items: Plumbing,\r\nElectrical, Appliances, Garage. Not\r\nCovered: Fridge, HVAC. All covered\r\nitems as per contract terms.</p>\"}'),
(13, 1, 'number', 'Roof Leak Repairs', '100', '', ''),
(14, 1, 'number', 'Salt Water Swimming Pool', '350', '', ''),
(15, 1, 'number', 'No-Fault Coverage', '60', '', '{\"title\":\"No Fault Coverage\",\"full_content\":\"<p style=\"font-size: .85em;\">Covered: This coverage option provides coverage for failures due to mismatched systems, improper installations, code violations, crane costs, haul away service for systems or appliances that have failed, as set forth hereafter.</p><p><strong>Mismatched Systems</strong>: AHW will repair or replace a system or appliance that has failed due to a mismatch in capacity or efficiency provided the system is not undersized relative to the square footage of the area being cooled and/or heated </p><p><strong>Improper Installation</strong>: AHW will replace or repair a covered item that was improperly installed, modified, or repaired prior to the effective date of this Contract. This coverage also does not include roofs </p><p><strong>Haul-Away</strong>: AHW will pay the cost to remove a covered appliance, system, or component when AHW is replacing a covered system, appliance or component </p><p><strong>Crane</strong>: AHW will cover the use of cranes or other lifting required for a covered service of a rooftop air conditioner or heating unit </p><p><strong>Code Violations</strong>: AHW will pay to correct code violations, if required to effect repair or replacement under this Contract  </p><p><strong>Permits</strong>: AHW will cover the cost of obtaining local building permits when required to commence repair or replacement of a covered item. AHW will not be responsible for replacement service if permits cannot be obtained </p><p style=\"font-size: 0.9em\">Limits: The coverage for the No Fault Coverage Upgrade outlined above is limited to a $250 maximum in the aggregate per contract term for items related to the No Fault Coverage Upgrade.</p>\"}'),
(16, 1, 'checkbox', 'Extra Water Heater', '50', '', ''),
(17, 1, 'number', 'Enhanced External Pipe Leak Coverage', '100', '', ''),
(18, 1, 'checkbox', 'Premium Coverage Upgrade\r\n(adds over <a href=\"\">40 items</a> to standard coverage)', '75', '{\"title\":\"Additional Coverage Upgrade\",\"full_content\":\"<p>ADDITIONAL COVERAGE UPGRADES</p><p><strong>Heaters</strong>: registers- disposable filters – grills – heat lamps. </p><p><strong>Plumbing</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary) </p><p><strong>Air Conditioner</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers </p><p><strong>Refrigerator (with purchase of coverage)</strong>: Freon recovery, recapture and recharge - ice maker. In cases where parts are not available, our obligation is limited to cash in lieu based on replacement cost of the ice maker </p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Water Heater</strong>: failures due to sediment </p><p><strong>Electrical</strong>: attic fans </p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket </p><p><strong>Garage Door Opener</strong>: springs - hinges - remote transmitter - keypad </p><p><strong>Oven/Range Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves – clock</p>\"}', ''),
(19, 1, 'number', 'Septic System/Pumping', '100', '', ''),
(20, 1, 'number', 'Well Pump', '100', '', ''),
(21, 1, 'checkbox', '2nd Year Coverage', '300', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `realstate_coverage`
--
ALTER TABLE `realstate_coverage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `realstate_coverage`
--
ALTER TABLE `realstate_coverage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
