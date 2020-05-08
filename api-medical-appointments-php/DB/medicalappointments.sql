-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2020 a las 00:57:30
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `medicalappointments`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointments`
--

CREATE TABLE `appointments` (
  `id_appointment` int(11) NOT NULL,
  `document` int(11) NOT NULL,
  `name` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `last_name` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `birth_date` date NOT NULL,
  `city_residence` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `neighborhood` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `cellphone` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `appointment_date` date NOT NULL,
  `appointment_hour` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `appointments`
--

INSERT INTO `appointments` (`id_appointment`, `document`, `name`, `last_name`, `birth_date`, `city_residence`, `neighborhood`, `cellphone`, `appointment_date`, `appointment_hour`) VALUES
(1, 1152440922, 'Yohan', 'Puerta', '1990-04-19', 'Medellín', 'Granizal', '3146662251', '2020-05-07', '10:20:00'),
(2, 1152440322, 'Jenni', 'Rojas', '1996-01-17', 'Medellín', 'Campo Valdés', '3146661163', '2020-05-06', '11:20:00'),
(4, 2147483647, 'Jenni', 'Rojas', '0000-00-00', 'Medellín', 'Poblado', '3146662251', '0000-00-00', '11:20:00'),
(7, 111122, 'Jenni', 'Rojas', '0000-00-00', 'Medellín', 'Poblado', '3146662251', '0000-00-00', '11:20:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id_appointment`),
  ADD KEY `index_document_user` (`document`),
  ADD KEY `index_cellphone_user` (`cellphone`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id_appointment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
