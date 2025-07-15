const url =
  'https://raw.githubusercontent.com/MateusEvangel1sta/fictitiousData/refs/heads/main/employees.json';
const axios = require('axios');

axios.get(url).then((response) => {
  const employees = response.data;

  const higherSalary = employees
    .filter((current) => {
      return current.endereco.estado === 'RO';
    })
    .reduce((acc, current) => {
      if (acc.salario < current.salario) {
        acc = current;
      }

      return acc;
    });

  console.log(higherSalary);
});
