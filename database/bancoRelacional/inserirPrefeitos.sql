SELECT * FROM cidades;

INSERT INTO prefeitos (
  nome,
  cidade_id
) VALUES 
  ('Rodrigo Neves', 2),
  ('Raquel Lyra', (SELECT id FROM cidades WHERE nome = 'Caruaru')),
  ('Zenaldo Coutinho', null);

INSERT INTO prefeitos (
  nome,
  cidade_id
) VALUES
  ('Rafael Greca', null);

INSERT INTO prefeitos (
  nome,
  cidade_id
) VALUES
  ('Rodrigo Pinheiro', 3);

SELECT * FROM prefeitos;