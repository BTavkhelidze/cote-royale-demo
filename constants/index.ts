import { Aqua1, Aqua2, Ignisi1, Ignisi2, Terra1, Terra2 } from '../public';

export interface IPerfume {
  id: string;
  name: string;
  brand: string;
  description: string;
  feature1: string;
  feature2: string;
  feat1Icon: string;
  feat2Icon: string;
}

export const perfumeData: IPerfume[] = [
  {
    id: 'terra',
    name: 'Terra',
    brand: 'Eau de Parfum',
    description:
      'Rooted in strength, Terra is a tribute to nature’s quiet power. Deep woods and herbal notes evoke the scent of earth after rain—calm, grounded, and refined. For the man who commands attention without effort, Terra embodies the beauty of balance.',
    feature1: 'Woody & Herbal',
    feature2: 'Grounded & Sophisticated',
    feat1Icon: Terra1,
    feat2Icon: Terra2,
  },
  {
    id: 'aqua',
    name: 'Aqua',
    brand: 'Eau de Parfum',
    description:
      'Cool and invigorating, Aqua channels the untamed spirit of the ocean. Crisp aquatic notes flow over mineral woods, capturing the mystery of open water. As refreshing as a sea breeze yet as commanding as the tide, Aqua is for the man who moves with quiet strength.',
    feature1: 'Fresh & Aquatic',
    feature2: 'Refreshing & Invigorating',
    feat1Icon: Aqua1,
    feat2Icon: Aqua2,
  },
  {
    id: 'ignis',
    name: 'Ignis',
    brand: 'Eau de Parfum',
    description:
      'Forged in fire, Ignis is a bold statement of power and poise. Smoldering spices and rich woods create an intense, magnetic presence. For the man whose quiet confidence speaks volumes, this fragrance captures fire’s raw allure—uncompromising and unforgettable.',
    feature1: 'Spicy & Smoky',
    feature2: 'Bold & Seductive',
    feat1Icon: Ignisi1,
    feat2Icon: Ignisi2,
  },
];
