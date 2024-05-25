/**
 * @description Adiciona a palavra "número" no singular ou  plural.
 * @param {number} num Number -> Número de referência para adicionar a palavra "número" no singular ou plural.
 * @return {string} String -> Texto com o número precedido da palavra "número" no singular ou plural.
 * @example
 * // Se o número 20 for recebido como argumento da função:
 * const text = pluralizeNumber("20");
 * console.log(text);
 * // Resultado esperado: "20 números"
 */

export function isSelectedNumberPlural(num: number): string {
   return num + ' número' + (num != 1 ? 's' : '');
}
