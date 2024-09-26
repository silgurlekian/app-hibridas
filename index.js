import dotenv from 'dotenv';
import esPrimo from './primeCheck.js';

dotenv.config();

const numero = process.env.NUMERO_PRUEBA;
console.log(`¿Es el número ${numero} primo? ${esPrimo(numero)}`);
