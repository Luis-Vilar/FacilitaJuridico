-- criar base de dados facilita_database
CREATE DATABASE facilita_database 

-- criar tabela de clientes , para isto deve-se rodar o comando abaixo no contexto da base de dados anteriormente criada
CREATE TABLE clients (
    id SERIAL NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    latitud DECIMAL(10, 8) NOT NULL,
    longitud DECIMAL(11, 8) NOT NULL,
    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

