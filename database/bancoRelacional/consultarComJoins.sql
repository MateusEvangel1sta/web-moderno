SELECT * FROM
  cidades
AS
  c
INNER JOIN
  prefeitos
AS
  p
ON
  c.id = p.cidade_id;


SELECT * FROM
  cidades
AS
  c
LEFT JOIN
  prefeitos
AS
  p
ON
  c.id = p.cidade_id;


SELECT * FROM
  cidades
AS
  c
RIGHT JOIN
  prefeitos
AS
  p
ON
  c.id = p.cidade_id;


SELECT * FROM
  cidades
AS
  c
FULL JOIN
  prefeitos
AS
  p
ON
  c.id = p.cidade_id;
  