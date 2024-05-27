import axios from 'axios';
import { ModalityProps } from '../types/Modality';

export async function getModalities(): Promise<ModalityProps[]> {
   const response = await axios.get('src/data/lottery-modalities.json');
   return response.data.modalities;
}
