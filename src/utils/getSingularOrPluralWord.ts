/**
 * @description Verifica se a palavra no singular ou no plural é a correta de acordo com a quantidade.
 * @param {number} amount Number -> Quantidade como parâmetro de comparação.
 * @param {string} singularWord String -> Palavra no singular.
 * @param {string} pluralWord String -> Palavra no plural.
 * @return {string} String -> Texto com a quantidade e a palavra no singular ou plural.
 * @example
 * // Se o número 2 e as palavras "número" e "números" forem recebidos como argumentos da função:
 * const text = getSingularOrPluralWord(2, "número", "números");
 * console.log(text);
 * // Resultado esperado: "2 números"
 */

export function getSingularOrPluralWord(
   amount: number,
   singularWord: string,
   pluralWord: string
): string {
   return amount === 1 ? singularWord : pluralWord;
}
