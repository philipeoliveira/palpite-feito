/**
 * @description Verifica se às palavras "número selecionado" devem estar no singular ou plural.
 * @param {number} num Number -> Número de referência para verificar o plural das palavras
 * @return {string} String -> Texto no singular ou plural precedido do número de referência.
 * @example
 * // Se o número 20 for recebido como argumento da função:
 * const text = isSelectedNumbersPlural("20");
 * console.log(text);
 * // Resultado esperado: "20 números selecionados"
 */

export function isSelectedNumbersPlural(num: number): string {
   const isPlural = num === 1 ? '' : 's';
   return `${num} número${isPlural} selecionado${isPlural}`;
}
