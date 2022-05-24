CREATE DATABASE [19100159alanc];
GO

USE [19100159alanc]
GO

-- ==============================================
-- Creacion de tabla usuarios, se utiliza en el formulario de registro para usuarios.
-- Alan Castro
-- 23 mayo 2022
-- ==============================================
CREATE TABLE usuario (
	id VARCHAR(20) PRIMARY KEY NOT NULL,
	nombre VARCHAR(500) NOT NULL,
	correo_electronico VARCHAR(200) NOT NULL,
	contrasenia VARCHAR(100) NOT NULL,
	apodo VARCHAR(100),
	mayor_edad BIT NOT NULL DEFAULT 0,
	municipio VARCHAR(100),
	estado VARCHAR(100),
	codigo_postal VARCHAR(10),

	CONSTRAINT chk_contrasenia CHECK (LEN(contrasenia) > 8)
);
GO