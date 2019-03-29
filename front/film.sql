-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Ven 29 Mars 2019 à 20:29
-- Version du serveur :  5.7.25-0ubuntu0.18.10.2
-- Version de PHP :  7.2.15-0ubuntu0.18.10.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `film`
--

-- --------------------------------------------------------

--
-- Structure de la table `infos`
--

CREATE TABLE `infos` (
  `id` int(11) NOT NULL,
  `name` longtext,
  `photo` longtext,
  `category` longtext,
  `description` longtext,
  `year` longtext,
  `name_actors` longtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `infos`
--

INSERT INTO `infos` (`id`, `name`, `photo`, `category`, `description`, `year`, `name_actors`) VALUES
(2, 'Deadpool 2', 'http://www.zupimages.net/up/18/06/trju.jpg', 'Superhero Film', 'After the pair decide to start a family together, the target tracks Wilson down and inadvertently kills Vanessa. Wilson kills the man in revenge. He blames himself for her death and attempts to commit suicide six weeks later by blowing himself up. Wilson has a vision of Vanessa in the afterlife. Wilson is left with only a Skee-Ball token, as a final memento of Vanessa.', '2018', '	\nRyan Reynolds\nJosh Brolin\nMorena Baccarin\nJulian Dennison\nZazie Beetz\nT.J. Miller\nBrianna Hildebrand\nJack Kesy'),
(17, 'Jurassic Park 3D', 'https://wallpapersite.com/images/wallpapers/jurassic-park-1280x720-3d-hd-4k-8k-13418.jpg', 'Science Fiction', 'Jurassic Park is a 1993 American science fiction adventure film directed by Steven Spielberg and produced by Kathleen Kennedy and Gerald R. Molen. The first installment in the Jurassic Park franchise, it is based on the 1990 novel of the same name by Michael Crichton and a screenplay by Crichton and David Koepp.', '1993', '	\nSam Neill\nLaura Dern\nJeff Goldblum\nRichard Attenborough\nBob Peck\nMartin Ferrero\nBD Wong\nSamuel L. Jackson\nWayne Knight\nJoseph Mazzello\nAriana Richards'),
(19, 'Black Panther', 'https://wefuzz.fr/wp-content/uploads/2018/02/Black-Panther-Set-Photos-Banner.png', 'Superhero film', 'Thousands of years ago, five African tribes war over a meteorite containing vibranium. One warrior ingests a \"heart-shaped herb\" affected by the metal and gains superhuman abilities, becoming the first \"Black Panther\". He unites all but the Jabari Tribe to form the nation of Wakanda.', '2018', '	\nChadwick Boseman\nMichael B. Jordan\nLupita Nyong\'o\nDanai Gurira\nMartin Freeman\nDaniel Kaluuya\nLetitia Wright\nWinston Duke\nAngela Bassett\nForest Whitaker\nAndy Serkis'),
(22, 'Me before you', 'https://www.ocean985.com/wp-content/uploads/sites/18/2016/07/me-before-you.jpg', 'Romantic drama film', 'Louisa Clark (Emilia Clarke) is a happy, outgoing woman who lives with and supports her working-class family. After losing her job at a local cafe, she is hired as a companion for Will Traynor (Sam Claflin), a former successful banker and once active young man who became paralyzed after being involved in a motorcycle accident two years prior.', '2016', '	\nEmilia Clarke\nSam Claflin\nJenna Coleman\nCharles Dance\nJanet McTeer\nMatthew Lewis'),
(23, 'A star is born', 'https://images5.alphacoders.com/954/thumb-1920-954497.jpg', 'Musical romantic drama', 'A remake of the 1937 film of the same name, it stars Cooper, Lady Gaga, Dave Chappelle, Andrew Dice Clay, and Sam Elliott, and follows a hard-drinking musician (Cooper) who discovers and falls in love with a young singer (Gaga). It marks the third remake of the original 1937 film, after the 1954 musical and the 1976 musical. The film has grossed $432 million worldwide and received critical acclaim.', '2018', '	\nBradley Cooper\nLady Gaga\nAndrew Dice Clay\nDave Chappelle\nSam Elliott'),
(24, 'First Man', 'https://static.checkthefilm.com/2018/06/first-man-ryan-gosling.jpg', 'Biography, drama, history', 'A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969. First Man had its world premiere at the Venice Film Festival on August 29, 2018, and was theatrically released in the United States on October 12, 2018, by Universal Pictures.', '2018', '	\nRyan Gosling\nClaire Foy\nJason Clarke\nKyle Chandler\nCorey Stoll\nChristopher Abbott\nCiarán Hinds');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `infos`
--
ALTER TABLE `infos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `infos`
--
ALTER TABLE `infos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
