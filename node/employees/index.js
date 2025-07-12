const url =
  'https://raw.githubusercontent.com/MateusEvangel1sta/fictitiousData/refs/heads/main/employees.json';
const axios = require('axios');

axios.get(url).then((response) => {
  const employees = response.data;
  console.log(employees);
});
