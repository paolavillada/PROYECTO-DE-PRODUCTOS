-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-05-2021 a las 22:35:02
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `producto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos`
--

DROP TABLE IF EXISTS `datos`;
CREATE TABLE IF NOT EXISTS `datos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(248) COLLATE utf8_bin NOT NULL,
  `reference` varchar(30) COLLATE utf8_bin NOT NULL,
  `stock` int(45) NOT NULL,
  `price` float NOT NULL,
  `currency` varchar(45) COLLATE utf8_bin NOT NULL,
  `imagen` longblob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `datos`
--

INSERT INTO `datos` (`id`, `description`, `reference`, `stock`, `price`, `currency`, `imagen`) VALUES
(8, 'carro', 'toy', 5, 350000, 'USD', 0x433a66616b6570617468706c616e20646520616c63616e63652070616c6d206c6f676f2e706e67),
(6, 'Carro Azul', 'renaull', 300, 320000, 'USD', 0x433a66616b657061746854657874696c2070616c6d2e706e67);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
