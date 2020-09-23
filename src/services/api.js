import axios from 'axios';

export const apiGerente = axios.create({
  baseURL: 'http://localhost:4000/gerentes',
});

export const apiClientes = axios.create({
  baseURL: 'http://localhost:4000/clientes',
});
