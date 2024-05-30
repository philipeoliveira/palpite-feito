/**
 * @description Ordena uma nova lista de números em ordem crescente.
 * Para ordenar, a função sort() utilizada recebe como argumento o retorno da função comparaNumbers().
 * Se o retorno recebido for negativo, ordena o primeiro número à esquerda do segundo; se for positivo,
 * ordena o primeiro número à direita do segundo.
 * @param {string[]} selectedNumbers Array de string -> Lista de números a serem ordenados.
 * @return {string[]} Array de string -> Nova lista de números ordenados.
 * @example
 * // Se a lista recebida é ["04", "02", "05"]:
 * const selected = ["04", "02", "05"];
 * const sorted = sortNumbersAscending(selected);
 * console.log(sorted);
 * // Resultado esperado: ["02", "04", "05"]
 */

export default function sortNumbersAscending(selectedNumbers: string[]): string[] {
   const sorted = [...selectedNumbers].sort(compareNumbers);

   return sorted;
}

/** --------------------------------------------------------------------------- */

/**
 * @description Efetua a subtração de dois números a serem comparados.
 * @param {string} num1 String -> Primeiro número para comparação.
 * @param {string} num2 String -> Segundo número para comparação.
 * @return {number} Number -> Resultado da subtração dos números recebidos.
 * @example
 * // Se os números 5 e 7 forem recebidos, respectivamente, como argumentos da função:
 * const result = compareNumbers("5", "7");
 * console.log(result);
 * // Resultado esperado: -2
 */

function compareNumbers(num1: string, num2: string): number {
   return parseInt(num1) - parseInt(num2);
}
