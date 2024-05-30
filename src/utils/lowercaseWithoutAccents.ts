/**
 * @description Remove acentos e converte as letras para minúsculas.
 * @param {string} text String -> Texto para ser formatado.
 * @return {string} String -> Texto formatado sem acentos e com letras minúsculas.
 * @example
 * // Se a palavra Lotofácil for recebida como argumento da função:
 * const text = lowercaseWithoutAccents("Lotofácil");
 * console.log(text);
 * // Resultado esperado: "lotofacil"
 */

export function lowercaseWithoutAccents(text: string): string {
   const textFormatted = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

   return textFormatted.toLocaleLowerCase();
}
