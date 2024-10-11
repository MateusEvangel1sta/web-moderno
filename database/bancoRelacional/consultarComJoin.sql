-- Selecione todas as colunas da tabela estado (que está se chamando "e") e da tabela cidades (que se chama "c").
SELECT * FROM
  estados e,
  cidades c
WHERE
  e.id = c.estado_id;


SELECT
  e.nome AS Estado,
  c.nome AS Cidade,
  e.regiao AS Regiao
FROM
  estados e,
  cidades c
WHERE
  e.id = c.estado_id;


SELECT
  c.nome AS Cidade,
  e.nome AS Estado,
  regiao AS Regiao
FROM
  estados AS e
INNER JOIN
  cidades as c
ON
  e.id = estado_id;