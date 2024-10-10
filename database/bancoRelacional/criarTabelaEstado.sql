-- Olá, isto é um comentário em SQL.
-- Criando a tabela ESTADOS!
create table estados (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  sigla VARCHAR(2) NOT NULL,
  regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
  populacao DECIMAL(5, 2) NOT NULL,
  -- Coluna primária
  PRIMARY KEY (id),
  UNIQUE KEY (nome),
  UNIQUE KEY (sigla)
);