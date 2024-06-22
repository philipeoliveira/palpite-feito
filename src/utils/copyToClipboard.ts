/**
 * @description Copia texto para área de transferência e retorna aviso pelo Toast.
 * @param {string[]} selectedNumbers Array de string -> Array com números selecionados para a cópia.
 * @param {function():void} toast Function -> Função que lida com o Toast de algum conteúdo.
 * @example
 * // Se a sequência para o palpite for copiada: 20, 27, 30, 37, 50, 58
 * // Resultado esperado: 20-27-30-37-50-58
 */

import sortNumbersAscending from './sortNumbersAscending';

export const copyToClipboard = async (selectedNumbers: string[], toast: () => void) => {
   const numbersAscending = sortNumbersAscending(selectedNumbers);
   const formattedNumbersAscending = numbersAscending.join('-');

   try {
      await navigator.clipboard.writeText(formattedNumbersAscending);
      toast();
   } catch (err) {
      console.error('Falha ao copiar texto', err);
   }
};
