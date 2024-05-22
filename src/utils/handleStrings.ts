/**
 * @description Adiciona um zero à esquerda se o número recebido for de 1 a 9.
 * @param {string} numString String -> Número a ser verificado para modificá-lo, se necessário.
 * @return {string} String -> Número modificado com o zero à esquerda ou o próprio número recebido.
 * @example
 * // Se o número 3 for recebido como argumento da função:
 * const number = addNumberZero("3");
 * console.log(number);
 * // Resultado esperado: "03"
 */

export function addNumberZero(numString: string): string {
   if (+numString <= 9) {
      return '0' + numString;
   }
   return numString;
}

/** --------------------------------------------------------------------------- */

/**
 * @description Adiciona a palavra "número" no singular ou  plural.
 * @param {string | number} num String ou Number -> Número de referência para adicionar a palavra "número" no singular ou plural.
 * @return {string} String -> Texto com o número precedido da palavra "número" no singular ou plural.
 * @example
 * // Se o número 20 for recebido como argumento da função:
 * const text = numbersInSingularOrPlural("20");
 * console.log(text);
 * // Resultado esperado: "20 números"
 */

export function numbersInSingularOrPlural(num: string | number): string {
   return num + ' número' + (num != 1 ? 's' : '');
}
