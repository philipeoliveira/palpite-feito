//import axios from 'axios';
import { ModalityProps } from '../types/ModalityProps';
import lotteryModalities from '../data/lottery-modalities.json';

export async function getModalities(): Promise<ModalityProps[]> {
   return lotteryModalities.modalities;
}
