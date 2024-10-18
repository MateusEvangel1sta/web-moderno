-- Alterando o CNPJ para VARCHAR
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
  (nome, cnpj)
VALUES
  ('Bradesco', 60746948000112),
  ('Vale', 33592510000154),
  ('Cielo', 01027058000191);


DESC empresas;

INSERT INTO empresas_unidades
  (empresa_id, cidade_id, sede)
VALUES
  (1, 1, 1),
  (1, 2, 0),
  (2, 1, 0),
  (2, 2, 1);
