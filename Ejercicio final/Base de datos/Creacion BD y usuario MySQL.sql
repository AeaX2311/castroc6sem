CREATE DATABASE IF NOT EXISTS 19100159alanc;

USE 19100159alanc;
-- ==============================================
-- Creacion de tabla usuarios, se utiliza en el formulario de registro para usuarios.
-- Alan Castro
-- 23 mayo 2022
-- ==============================================
CREATE TABLE IF NOT EXISTS usuario (
	correo_electronico VARCHAR(200) PRIMARY KEY NOT NULL,
	nombre VARCHAR(500) NOT NULL,
	contrasenia VARCHAR(100) NOT NULL,
	apodo VARCHAR(100),
	mayor_edad BIT NOT NULL DEFAULT 0,
	municipio VARCHAR(100),
	estado VARCHAR(100),
	codigo_postal VARCHAR(10),

	CONSTRAINT chk_contrasenia CHECK (LENGTH(contrasenia) > 7)
);

-- ==============================================
-- Inserciones basicas de elementos Usuario
-- Alan Castro
-- 25 mayo 2022
-- ==============================================
INSERT INTO usuario (
	correo_electronico,
    nombre,
    contrasenia,
    apodo,
    mayor_edad,
    municipio,
    estado
) VALUES (
	'alan.ssuc2311@gmail.com',
    'Alan Castro',
    '123456789',
    'Alansillo',
    1,
    'Nuevo Laredo',
    'Tamaulipas'
);

-- ==============================================
-- Busqueda de un usuario por correo electronico (PK).
-- Alan Castro
-- 25 mayo 2022
-- ==============================================
SELECT 
	u.correo_electronico AS correoElectronico,
    u.nombre AS nombre,
    u.contrasenia AS contrasenia,
    u.apodo AS apodo,
    u.mayor_edad AS mayorEdad,
    u.municipio AS municipio,
    u.estado AS estado
FROM usuario u
WHERE u.correo_electronico = 'alan.ssuc2311@gmail.com';