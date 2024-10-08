export interface ModalityProps {
   id: string;
   name: string;
   minNumbersToBet: string;
   maxNumbersToBet: string;
   totalNumbersAvailable: string;
   numberOfColumns: number;
   countHalf: boolean; // contagem de números nas duas metades da aposta
   countIntoGroups: boolean; // contagem baseada na diagramação do volante
}
