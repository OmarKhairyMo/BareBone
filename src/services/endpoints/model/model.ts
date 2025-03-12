export type TPet = {
  id: string;
  name: string;
  species: string;
  breed: string | null;
  age: number;
  // created_at: string;
  image_url: string;
};

export type TWeightLog = {
  id: string;
  pet_id: string;
  weight: number;
  date: string;
};

export type TBodyConditionLog = {
  id: string;
  pet_id: string;
  body_condition: string;
  date: string;
};

export type TVetVisitLog = {
  id: string;
  pet_id: string;
  notes: string;
  date: string;
};
