SELECT
  e.nome as Empresa, c.nome as `Cidade`
FROM
  empresas AS e,
  empresas_unidades AS eu,
  cidades AS c
WHERE
  e.id = eu.empresa_id
AND
  c.id = eu.cidade_id
AND
  sede = 1