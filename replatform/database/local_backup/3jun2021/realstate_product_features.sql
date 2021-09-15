-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2021 at 08:09 AM
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
-- Table structure for table `realstate_product_features`
--

CREATE TABLE `realstate_product_features` (
  `id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `realstate_product_features`
--

INSERT INTO `realstate_product_features` (`id`, `location_id`, `name`, `content`) VALUES
(23, 1, 'No Fault Coverage', '{\"title\":\"No Fault Coverage $60\",\"subtitle\":\"\",\"full_content\":\"<p style=\"font-size: .85em;\">Covered: This coverage option provides coverage for failures due to mismatched systems, improper installations, code violations, crane costs, haul away service for systems or appliances that have failed, as set forth hereafter.</p><p><strong>Mismatched Systems</strong>: AHW will repair or replace a system or appliance that has failed due to a mismatch in capacity or efficiency provided the system is not undersized relative to the square footage of the area being cooled and/or heated </p><p><strong>Improper Installation</strong>: AHW will replace or repair a covered item that was improperly installed, modified, or repaired prior to the effective date of this Contract. This coverage also does not include roofs </p><p><strong>Haul-Away</strong>: AHW will pay the cost to remove a covered appliance, system, or component when AHW is replacing a covered system, appliance or component </p><p><strong>Crane</strong>: AHW will cover the use of cranes or other lifting required for a covered service of a rooftop air conditioner or heating unit </p><p><strong>Code Violations</strong>: AHW will pay to correct code violations, if required to effect repair or replacement under this Contract  </p><p><strong>Permits</strong>: AHW will cover the cost of obtaining local building permits when required to commence repair or replacement of a covered item. AHW will not be responsible for replacement service if permits cannot be obtained </p>\r\n<p style=\"font-size: 0.9em\">Limits: The coverage for the No Fault Coverage Upgrade outlined above is limited to a $250 maximum in the aggregate per contract term for items related to the No Fault Coverage Upgrade.</p>\"}'),
(15, 1, 'Grills', ''),
(16, 1, 'Heat Lamps', ''),
(17, 1, 'Angle Stops and Gate Valves Toilet Replacement', ''),
(18, 1, 'Toilet Replacement', ''),
(19, 1, 'Interior Hose Bibs', ''),
(20, 1, 'Shower Heads', ''),
(21, 1, 'Shower Arms - Faucets', ''),
(22, 1, 'Premium Coverage Upgrade', '{\"title\":\"Acclaimed Premium Coverage Upgrade $75\",\"subtitle\":\"(40 Additional Items included plans Premium, Premium +, Premium +1, & Ultimate)\",\"full_content\":\"<p>Covered: This coverage upgrade option provides coverage for the following items that are normally excluded from the Standard Coverage plan.</p>\r\n							<p><strong>Heating System</strong>: registers- disposable filters - grills - heat lamps </p><p><strong>Plumbing</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary) </p><p><strong>Air Conditioner</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers </p><p><strong>Refrigerator</strong> (with purchase of coverage): Freon recovery, recapture and recharge - ice maker. In cases where parts are not available, our obligation is limited to cash in lieu based on replacement cost of the ice maker </p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Water Heater</strong>: failures due to sediment </p><p><strong>Electrical</strong>: attic fans </p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket </p><p><strong>Garage Door Opener</strong>: springs - hinges - remote transmitter - keypad </p><p><strong>Oven/Range Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves – clock</p>\"}'),
(14, 1, 'Registers', ''),
(13, 1, 'Central Vacuum', ''),
(24, 1, 'Refrigerator', ''),
(25, 1, 'Washer and Dryer', ''),
(26, 2, 'Central Vacuum', ''),
(27, 2, 'Registers', ''),
(28, 2, 'Free ReKey (travel fees may apply)', ''),
(29, 2, 'Grills', ''),
(30, 2, 'Heat Lamps', ''),
(31, 2, 'Exterior hose bibs', ''),
(32, 2, 'Pressure Regulator Valve', ''),
(33, 2, 'Angle Stops, and Gate Valves', ''),
(34, 2, 'Toilet Replacement', ''),
(35, 2, 'Interior Hose Bibs', ''),
(36, 2, 'Shower Heads', ''),
(37, 2, 'Shower Arms - Faucets', ''),
(38, 2, 'Toilet replacement', ''),
(39, 2, 'Premium Coverage Upgrade', '{\"title\":\"Acclaimed Premium Coverage Upgrade $75\",\"subtitle\":\"(40 Additional Items included plans Premium, Premium +, Premium +1, & Ultimate)\",\"full_content\":\"<p>Covered: This coverage upgrade option provides coverage for the following items that are normally excluded from the Standard Coverage plan.</p><p><strong>Heating System</strong>: registers- disposable filters - grills - heat lamps </p><p><strong>Plumbing</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary) </p><p><strong>Air Conditioner</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers </p><p><strong>Refrigerator</strong> (with purchase of coverage): Freon recovery, recapture and recharge - ice maker. In cases where parts are not available, our obligation is limited to cash in lieu based on replacement cost of the ice maker </p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Water Heater</strong>: failures due to sediment </p><p><strong>Electrical</strong>: attic fans </p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket </p><p><strong>Garage Door Opener</strong>: springs - hinges - remote transmitter - keypad </p><p><strong>Oven/Range Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves – clock</p>\"}'),
(40, 2, 'Refrigerator', ''),
(41, 2, 'R-22 Conversion', ''),
(42, 2, 'No Fault (code upgrades & mismatched systems)', ''),
(43, 2, 'No Fault Coverage', '{\"title\":\"No Fault Coverage $60\",\"subtitle\":\"\",\"full_content\":\"<p style=\"font-size: .85em;\">Covered: This coverage option provides coverage for failures due to mismatched systems, improper installations, code violations, crane costs, haul away service for systems or appliances that have failed, as set forth hereafter.</p><p><strong>Mismatched Systems</strong>: AHW will repair or replace a system or appliance that has failed due to a mismatch in capacity or efficiency provided the system is not undersized relative to the square footage of the area being cooled and/or heated </p><p><strong>Improper Installation</strong>: AHW will replace or repair a covered item that was improperly installed, modified, or repaired prior to the effective date of this Contract. This coverage also does not include roofs </p><p><strong>Haul-Away</strong>: AHW will pay the cost to remove a covered appliance, system, or component when AHW is replacing a covered system, appliance or component </p><p><strong>Crane</strong>: AHW will cover the use of cranes or other lifting required for a covered service of a rooftop air conditioner or heating unit </p><p><strong>Code Violations</strong>: AHW will pay to correct code violations, if required to effect repair or replacement under this Contract  </p><p><strong>Permits</strong>: AHW will cover the cost of obtaining local building permits when required to commence repair or replacement of a covered item. AHW will not be responsible for replacement service if permits cannot be obtained </p><p style=\"font-size: 0.9em\">Limits: The coverage for the No Fault Coverage Upgrade outlined above is limited to a $250 maximum in the aggregate per contract term for items related to the No Fault Coverage Upgrade.</p>\"}'),
(44, 2, 'Radiant heating/broiler', ''),
(45, 2, 'Washer and Dryer', ''),
(46, 3, 'Central Vacuum', ''),
(47, 3, 'Registers', ''),
(48, 3, 'Grills', ''),
(49, 3, 'Heat Lamps', ''),
(50, 3, 'Angle Stops, and Gate Valves', ''),
(51, 3, 'Interior Hose Bibs', ''),
(52, 3, 'Shower Heads', ''),
(53, 3, 'Shower Arms - Faucets', ''),
(54, 3, 'Premium Coverage Upgrade', '{\"title\":\"Acclaimed Premium Coverage Upgrade $75\",\"subtitle\":\"(40 Additional Items included in Premium & Ultimate plans)\",\"full_content\":\"<p>Covered: This coverage upgrade option provides coverage for the following items that are normally excluded from the Standard Coverage plan.</p><p><strong>Heating System</strong>: registers- disposable filters - grills - heat lamps </p><p><strong>Plumbing</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary) </p><p><strong>Air Conditioner</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers </p><p><strong>Refrigerator</strong> (with purchase of coverage): Freon recovery, recapture and recharge - ice maker. In cases where parts are not available, our obligation is limited to cash in lieu based on replacement cost of the ice maker </p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Water Heater</strong>: failures due to sediment </p><p><strong>Electrical</strong>: attic fans </p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket </p><p><strong>Garage Door Opener</strong>: springs - hinges - remote transmitter - keypad </p><p><strong>Oven/Range Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves - clock</p>\"}'),
(55, 3, 'No Fault Coverage', '{\"title\":\"No Fault Coverage $60\",\"subtitle\":\"\",\"full_content\":\"<p style=\"font-size: .85em;\">Covered: This coverage option provides coverage for failures due to mismatched systems, improper installations, code violations, crane costs, haul away service for systems or appliances that have failed, as set forth hereafter.</p><p><strong>Mismatched Systems</strong>: AHW will repair or replace a system or appliance that has failed due to a mismatch in capacity or efficiency provided the system is not undersized relative to the square footage of the area being cooled and/or heated </p><p><strong>Improper Installation</strong>: AHW will replace or repair a covered item that was improperly installed, modified, or repaired prior to the effective date of this Contract. This coverage also does not include roofs </p><p><strong>Haul-Away</strong>: AHW will pay the cost to remove a covered appliance, system, or component when AHW is replacing a covered system, appliance or component </p><p><strong>Crane</strong>: AHW will cover the use of cranes or other lifting required for a covered service of a rooftop air conditioner or heating unit </p><p><strong>Code Violations</strong>: AHW will pay to correct code violations, if required to effect repair or replacement under this Contract  </p><p><strong>Permits</strong>: AHW will cover the cost of obtaining local building permits when required to commence repair or replacement of a covered item. AHW will not be responsible for replacement service if permits cannot be obtained </p><p style=\"font-size: 0.9em\">Limits: The coverage for the No Fault Coverage Upgrade outlined above is limited to a $250 maximum in the aggregate per contract term for items related to the No Fault Coverage Upgrade.</p>\"}'),
(56, 3, 'Refrigerator', ''),
(57, 3, 'Washer and Dryer', ''),
(58, 4, 'Grills', ''),
(59, 4, 'Heat Lamps', ''),
(60, 4, 'Freon Recovery / Recapture / Recharge', ''),
(61, 4, 'Window Units', ''),
(62, 4, 'Registers', ''),
(63, 4, 'Kitchen Refrigerator W/Ice Maker', ''),
(64, 4, 'Attic Fans', ''),
(65, 4, 'Angle Stop And Gate Valves', ''),
(66, 4, 'Toilet Replacement', ''),
(67, 4, 'Interior Hose Bibs', ''),
(68, 4, 'Shower Heads / Arms', ''),
(69, 4, 'Faucets', ''),
(70, 4, 'Water Heater Failures Due To Sediment', ''),
(71, 4, 'Mismatched Systems', ''),
(72, 4, 'Improper Installation', ''),
(73, 4, 'Haul Away', ''),
(74, 4, 'Crane', ''),
(75, 4, 'Code Violations', ''),
(76, 4, 'Permits', ''),
(77, 4, 'Premium Coverage Upgrade', '{\"title\":\"Acclaimed Premium Coverage Upgrade\",\"subtitle\":\"\",\"full_content\":\"<p><strong>Heating System</strong>: registers- disposable filters - grills - heat lamps</p><p><strong>Plumbing System</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary)</p><p><strong>Water Heater</strong>: failures due to sediment</p><p><strong>Electrical</strong>: attic fans</p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket</p><p><strong>Air Conditioning / Cooling System</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers</p><p><strong>Refrigerator</strong>: Freon recovery, recapture and recharge - ice maker</p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Oven/Range/Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves - clock. Seller limits apply</p><p><strong>Garage Door System</strong>: springs - hinges - remote transmitter - keypad</p>\"}'),
(78, 4, 'Washer/Dryer', ''),
(79, 4, 'Prof. Series -Appliance -Kitchen', ''),
(80, 5, 'Free ReKey on Ultimate plans', ''),
(81, 5, 'A/C Swamp Cooler', ''),
(82, 5, 'Heating System / Furnace', ''),
(83, 5, 'Heat Pump', ''),
(84, 5, 'Radiant Heating', ''),
(85, 5, 'Thermostat', ''),
(86, 5, 'Duct from Heating or Cooling Unit', ''),
(87, 5, 'Toilets (Parts)', ''),
(88, 5, 'Drain Line Stoppages', ''),
(89, 5, 'Water Heater(1)', ''),
(90, 5, 'Shower and Diverter Valves', ''),
(91, 5, 'Plumbing Leaks (Water, Drains, Gas, or Vent)', ''),
(92, 5, 'Electrical System', ''),
(93, 5, 'Panels and Subpanels', ''),
(94, 5, 'Exhaust Fans', ''),
(95, 5, 'Circuit Breakers', ''),
(96, 5, 'Ceiling Fans', ''),
(97, 5, 'Garage Door System', ''),
(98, 5, 'Oven', ''),
(99, 5, 'Range / Cook Top', ''),
(100, 5, 'Dishwasher', ''),
(101, 5, 'Built in Microwave', ''),
(102, 5, 'Garbage Disposal', ''),
(103, 5, 'Trash Compactor', ''),
(104, 5, 'Central Vacuum', ''),
(105, 5, 'Registers', ''),
(106, 5, 'Grills', ''),
(107, 5, 'Heat Lamps', ''),
(108, 5, 'Angle Stops, and Gate Valves', ''),
(109, 5, 'Toilet Replacement', ''),
(110, 5, 'PRV (Pressure Regulator Valve) inside homes', ''),
(111, 5, 'Interior Hose Bibs', ''),
(112, 5, 'Shower Heads', ''),
(113, 5, 'Shower Arms - Faucets', ''),
(114, 5, 'Premium Coverage Upgrade (adds over 40 items to standard coverage)', ''),
(115, 5, 'Refrigerator', ''),
(116, 5, 'No Fault (code upgrades & mismatched systems)', ''),
(117, 5, 'Exterior hose bibs', ''),
(118, 5, 'Washer and Dryer', ''),
(119, 5, 'R-22 Conversion', ''),
(120, 3, 'Toilet Replacement', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `realstate_product_features`
--
ALTER TABLE `realstate_product_features`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `realstate_product_features`
--
ALTER TABLE `realstate_product_features`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
