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

export default function addNumberZero(numString: string): string {
   if (+numString <= 9) {
      return '0' + numString;
   }
   return numString;
}
