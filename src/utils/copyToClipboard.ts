import sortNumbersAscending from './sortNumbersAscending';

/**
 * @description Copia texto para área de transferência e retorna aviso pelo Toast.
 * @param {string[] | string} targetToCopy Array de string ou string -> Conteúdo para ser copiado.
 * @param {function():void} toast Function -> Função que lida com o Toast de algum conteúdo.
 * @example
 * // Se o conteúdo para ser copiado for: 20, 27, 30, 37, 50, 58
 * // Resultado esperado: 20-27-30-37-50-58
 */

export const copyToClipboard = async (
   targetToCopy: string[] | string,
   toast: () => void
) => {
   let target;

   if (typeof targetToCopy === 'object') {
      const numbersAscending = sortNumbersAscending(targetToCopy);
      target = numbersAscending.join('-');
   } else {
      target = targetToCopy;
   }

   try {
      await navigator.clipboard.writeText(target);
      toast();
   } catch (err) {
      console.error('Falha ao copiar texto', err);
   }
};
