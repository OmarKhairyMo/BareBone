export const QueryKeys = {
  getAllPets: ["pets"] as const,
  getPetById: (id: string) => ["pets", id] as const,
  getWeightLogs: (petId: string) => ["weightLogs", petId] as const,
  getBodyConditionLogs: (petId: string) =>
    ["bodyConditionLogs", petId] as const,
  getVetVisitLogs: (petId: string) => ["vetVisitLogs", petId] as const,
};
