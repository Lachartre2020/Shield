--
-- Création de la base de données
--
CREATE DATABASE restbiblio;

--
-- Création des users
--

CREATE USER 'userrestbiblio'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'restbiblio';

--
-- Attribution des droits
--

GRANT ALL ON restbiblio.* TO 'userrestbiblio'@'localhost';

--
-- Remonté des droits
--

FLUSH PRIVILEGES
