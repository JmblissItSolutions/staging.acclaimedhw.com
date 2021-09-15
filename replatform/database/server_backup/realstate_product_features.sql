-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2021 at 12:40 PM
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
(23, 1, 'No Fault Coverage', '{\"title\":\"No Fault Coverage\",\"subtitle\":\"\",\"full_content\":\"<p style=\"font-size: .85em;\">Covered: This coverage option provides coverage for failures due to mismatched systems, improper installations, code violations, crane costs, haul away service for systems or appliances that have failed, as set forth hereafter.</p><p><strong>Mismatched Systems</strong>: AHW will repair or replace a system or appliance that has failed due to a mismatch in capacity or efficiency provided the system is not undersized relative to the square footage of the area being cooled and/or heated </p><p><strong>Improper Installation</strong>: AHW will replace or repair a covered item that was improperly installed, modified, or repaired prior to the effective date of this Contract. This coverage also does not include roofs </p><p><strong>Haul-Away</strong>: AHW will pay the cost to remove a covered appliance, system, or component when AHW is replacing a covered system, appliance or component </p><p><strong>Crane</strong>: AHW will cover the use of cranes or other lifting required for a covered service of a rooftop air conditioner or heating unit </p><p><strong>Code Violations</strong>: AHW will pay to correct code violations, if required to effect repair or replacement under this Contract  </p><p><strong>Permits</strong>: AHW will cover the cost of obtaining local building permits when required to commence repair or replacement of a covered item. AHW will not be responsible for replacement service if permits cannot be obtained </p>\r\n<p style=\"font-size: 0.9em\">Limits: The coverage for the No Fault Coverage Upgrade outlined above is limited to a $250 maximum in the aggregate per contract term for items related to the No Fault Coverage Upgrade.</p>\"}'),
(15, 1, 'Grills', ''),
(16, 1, 'Heat Lamps', ''),
(17, 1, 'Angle Stops and Gate Valves Toilet Replacement', ''),
(18, 1, 'Toilet Replacement', ''),
(19, 1, 'Interior Hose Bibs', ''),
(20, 1, 'Shower Heads', ''),
(21, 1, 'Shower Arms - Faucets', ''),
(22, 1, 'Premium Coverage Upgrade\r\n(adds over 40 items to standard coverage)', '{\"title\":\"Acclaimed Premium Coverage Upgrade $75\",\"subtitle\":\"(40 Additional Items included plans Premium, Premium +, Premium +1, & Ultimate)\",\"full_content\":\"<p>Covered: This coverage upgrade option provides coverage for the following items that are normally excluded from the Standard Coverage plan.</p>\r\n							<p><strong>Heating System</strong>: registers- disposable filters - grills - heat lamps </p><p><strong>Plumbing</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary) </p><p><strong>Air Conditioner</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers </p><p><strong>Refrigerator</strong> (with purchase of coverage): Freon recovery, recapture and recharge - ice maker. In cases where parts are not available, our obligation is limited to cash in lieu based on replacement cost of the ice maker </p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Water Heater</strong>: failures due to sediment </p><p><strong>Electrical</strong>: attic fans </p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket </p><p><strong>Garage Door Opener</strong>: springs - hinges - remote transmitter - keypad </p><p><strong>Oven/Range Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves – clock</p>\"}'),
(14, 1, 'Free ReKey (travel fees may apply)', ''),
(13, 1, 'Radiant Heaters - Broilers (up to $1000)', ''),
(24, 1, 'Refrigerator', ''),
(25, 1, 'Washer and Dryer', ''),
(26, 2, 'Angle Stops and Gate Valves Toilet Replacement', ''),
(27, 2, 'Interior Hose Bibs', ''),
(28, 2, 'Shower Heads', ''),
(29, 2, 'Shower Arms - Faucets', ''),
(30, 2, 'Grills', ''),
(31, 2, 'Heat Lamps', ''),
(32, 2, 'Premium Coverage Upgrade', '{\"title\":\"Acclaimed Premium Coverage Upgrade $75\",\"subtitle\":\"(40 Additional Items included plans Premium, Premium +, Premium +1, & Ultimate)\",\"full_content\":\"<p>Covered: This coverage upgrade option provides coverage for the following items that are normally excluded from the Standard Coverage plan.</p><p><strong>Heating System</strong>: registers- disposable filters - grills - heat lamps </p><p><strong>Plumbing</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary) </p><p><strong>Air Conditioner</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers </p><p><strong>Refrigerator</strong> (with purchase of coverage): Freon recovery, recapture and recharge - ice maker. In cases where parts are not available, our obligation is limited to cash in lieu based on replacement cost of the ice maker </p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Water Heater</strong>: failures due to sediment </p><p><strong>Electrical</strong>: attic fans </p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket </p><p><strong>Garage Door Opener</strong>: springs - hinges - remote transmitter - keypad </p><p><strong>Oven/Range Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves – clock</p>\"}'),
(33, 2, 'No Fault Coverage', '{\"title\":\"No Fault Coverage $60\",\"subtitle\":\"\",\"full_content\":\"<p style=\"font-size: .85em;\">Covered: This coverage option provides coverage for failures due to mismatched systems, improper installations, code violations, crane costs, haul away service for systems or appliances that have failed, as set forth hereafter.</p><p><strong>Mismatched Systems</strong>: AHW will repair or replace a system or appliance that has failed due to a mismatch in capacity or efficiency provided the system is not undersized relative to the square footage of the area being cooled and/or heated </p><p><strong>Improper Installation</strong>: AHW will replace or repair a covered item that was improperly installed, modified, or repaired prior to the effective date of this Contract. This coverage also does not include roofs </p><p><strong>Haul-Away</strong>: AHW will pay the cost to remove a covered appliance, system, or component when AHW is replacing a covered system, appliance or component </p><p><strong>Crane</strong>: AHW will cover the use of cranes or other lifting required for a covered service of a rooftop air conditioner or heating unit </p><p><strong>Code Violations</strong>: AHW will pay to correct code violations, if required to effect repair or replacement under this Contract  </p><p><strong>Permits</strong>: AHW will cover the cost of obtaining local building permits when required to commence repair or replacement of a covered item. AHW will not be responsible for replacement service if permits cannot be obtained </p><p style=\"font-size: 0.9em\">Limits: The coverage for the No Fault Coverage Upgrade outlined above is limited to a $250 maximum in the aggregate per contract term for items related to the No Fault Coverage Upgrade.</p>\"}'),
(34, 2, 'Refrigerator', ''),
(35, 2, 'Washer/Dryer', ''),
(36, 2, 'Toilet Replacement', ''),
(37, 2, 'Free ReKey (travel fees may apply)', ''),
(38, 2, 'Radiant Heaters - Broilers (up to $1000)', ''),
(39, 2, 'R-22 Conversion to 410A', ''),
(40, 2, 'No Fault (code upgrades & mismatched systems)', ''),
(41, 2, 'Exterior hose bibs', ''),
(42, 2, 'Pressure Relief Valve Inside Home', ''),
(43, 3, 'Central Vac', ''),
(44, 3, 'Registers', ''),
(45, 3, 'Grills', ''),
(46, 3, 'Heat Lamps', ''),
(47, 3, 'Angle Stops / Gate Valves', ''),
(48, 3, 'Toilet Replacement', ''),
(49, 3, 'Interior Hose Bibs', ''),
(50, 3, 'Shower Heads', ''),
(51, 3, 'Shower Arms - Faucets', ''),
(52, 3, 'Premium Coverage Upgrade', '{\"title\":\"Acclaimed Premium Coverage Upgrade $75\",\"subtitle\":\"(40 Additional Items included in Premium & Ultimate plans)\",\"full_content\":\"<p>Covered: This coverage upgrade option provides coverage for the following items that are normally excluded from the Standard Coverage plan.</p><p><strong>Heating System</strong>: registers- disposable filters - grills - heat lamps </p><p><strong>Plumbing</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary) </p><p><strong>Air Conditioner</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers </p><p><strong>Refrigerator</strong> (with purchase of coverage): Freon recovery, recapture and recharge - ice maker. In cases where parts are not available, our obligation is limited to cash in lieu based on replacement cost of the ice maker </p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Water Heater</strong>: failures due to sediment </p><p><strong>Electrical</strong>: attic fans </p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket </p><p><strong>Garage Door Opener</strong>: springs - hinges - remote transmitter - keypad </p><p><strong>Oven/Range Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves - clock</p>\"}'),
(53, 3, 'No Fault Coverage', '{\"title\":\"No Fault Coverage $60\",\"subtitle\":\"\",\"full_content\":\"<p style=\"font-size: .85em;\">Covered: This coverage option provides coverage for failures due to mismatched systems, improper installations, code violations, crane costs, haul away service for systems or appliances that have failed, as set forth hereafter.</p><p><strong>Mismatched Systems</strong>: AHW will repair or replace a system or appliance that has failed due to a mismatch in capacity or efficiency provided the system is not undersized relative to the square footage of the area being cooled and/or heated </p><p><strong>Improper Installation</strong>: AHW will replace or repair a covered item that was improperly installed, modified, or repaired prior to the effective date of this Contract. This coverage also does not include roofs </p><p><strong>Haul-Away</strong>: AHW will pay the cost to remove a covered appliance, system, or component when AHW is replacing a covered system, appliance or component </p><p><strong>Crane</strong>: AHW will cover the use of cranes or other lifting required for a covered service of a rooftop air conditioner or heating unit </p><p><strong>Code Violations</strong>: AHW will pay to correct code violations, if required to effect repair or replacement under this Contract  </p><p><strong>Permits</strong>: AHW will cover the cost of obtaining local building permits when required to commence repair or replacement of a covered item. AHW will not be responsible for replacement service if permits cannot be obtained </p><p style=\"font-size: 0.9em\">Limits: The coverage for the No Fault Coverage Upgrade outlined above is limited to a $250 maximum in the aggregate per contract term for items related to the No Fault Coverage Upgrade.</p>\"}'),
(54, 3, 'Refrigerator', ''),
(55, 3, 'Washer/Dryer', ''),
(56, 4, 'Central Vac', ''),
(57, 4, 'Angle Stops / Gate Valves', ''),
(58, 4, 'Grills', ''),
(59, 4, 'Heat Lamps', ''),
(60, 4, 'Exterior hose bibs', ''),
(61, 4, 'Shower Heads', ''),
(62, 4, 'Registers', ''),
(63, 4, 'Shower Arms - Faucets', ''),
(64, 4, 'Radiant Heaters - Broilers (up to $1000)', ''),
(65, 4, 'Beverage Dispenser', ''),
(66, 4, 'Toilet Replacement', ''),
(67, 4, 'Interior Hose Bibs', ''),
(68, 4, 'Ice Maker water line', ''),
(69, 4, 'Pressure Relief Valve Inside Home', ''),
(70, 4, 'Expansion Tanks', ''),
(71, 4, 'Code Upgrades, Mismatched Systems, Cranes', ''),
(72, 4, 'Refrigerator', ''),
(73, 4, 'Instant Hot/Cold Water Dispenser', ''),
(74, 4, 'Washer/Dryer', ''),
(75, 4, 'Ductless Systems/Mini Splits', ''),
(76, 4, 'R-22 Conversion to 410A', ''),
(77, 4, 'Premium Coverage Upgrade', '{\"title\":\"Acclaimed Premium Coverage Upgrade\",\"subtitle\":\"\",\"full_content\":\"<p><strong>Heating System</strong>: registers- disposable filters - grills - heat lamps</p><p><strong>Plumbing System</strong>: angle stop and gate ball valves - toilet replacement with like kind and quality up to $400 per occurrence - interior hose bibs - shower heads - shower arms - faucets (replaced with chrome builder standard when necessary)</p><p><strong>Water Heater</strong>: failures due to sediment</p><p><strong>Electrical</strong>: attic fans</p><p><strong>Trash Compactor</strong>: key assemblies - locks - removable bucket</p><p><strong>Air Conditioning / Cooling System</strong>: Freon recovery, recapture and recharge up to $20 per lb. (not included in Tune Up service) - window units - registers</p><p><strong>Refrigerator</strong>: Freon recovery, recapture and recharge - ice maker</p><p><strong>Dishwasher</strong>: rollers - baskets - racks - dials - door seals - hinges </p><p><strong>Oven/Range/Cooktop</strong>: racks - clocks - rotisseries - knobs - dials - handles - interior lining </p><p><strong>Built in Microwave Oven</strong>: interior lining - shelves - clock. Seller limits apply</p><p><strong>Garage Door System</strong>: springs - hinges - remote transmitter - keypad</p>\"}'),
(78, 5, 'Registers', ''),
(79, 5, 'Grills', ''),
(80, 5, 'SEER/R-410A Mods.', ''),
(81, 5, 'Angle Stops / Gate Valves', ''),
(82, 5, 'Toilet Replacement', ''),
(83, 5, 'Interior Hose Bibs', ''),
(84, 5, 'Faucets, Shower Heads & Arms', ''),
(85, 5, 'Shower/Diverter Valves', ''),
(86, 5, 'Exhaust Fan - Attic', ''),
(87, 5, 'Exhaust Fan - Whole House', ''),
(88, 5, 'Kit. Fridge w/ ice maker', ''),
(89, 5, 'Washer/Dryer', ''),
(90, 5, 'Permits', ''),
(91, 5, 'Code Violations', ''),
(92, 5, 'Haul Away', ''),
(93, 5, 'Mismatched systems', ''),
(94, 5, 'Improper Installs', ''),
(95, 5, 'Crane', ''),
(96, 5, 'Angle Stops / Gate Valves', ''),
(97, 5, 'Interior Hose Bibs', ''),
(98, 5, 'Faucets, Shower Heads & Arms', ''),
(99, 5, 'Shower/Diverter Valves', ''),
(100, 5, 'registers/grills/disposable filters', ''),
(101, 5, 'Freon recovery/recharge, window units', ''),
(102, 5, 'TC Key assemblies/locks/remv. buckets', ''),
(103, 5, 'DW-rollers/baskets/racks/dials/hinges/dr. seals', ''),
(104, 5, 'Fridge-icemaker,freon recov/recapture', ''),
(105, 5, 'Oven-racks/clocks/rotis./knob/dial/handle,int. lining', ''),
(106, 5, 'Grge Dr.-Springs/hinges, remote transmitters, keypad', ''),
(107, 1, 'R-22 Conversion to 410A', ''),
(108, 1, 'No Fault (code upgrades & mismatched systems', ''),
(109, 1, 'Exterior hose bibs', ''),
(110, 1, 'Pressure Relief Valve Inside Home', '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
