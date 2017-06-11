export const CREER_PERSONNAGE = "CREER_PERSONNAGE";
export const MODIFIER_PERSONNAGE = "MODIFIER_PERSONNAGE";
export const SUPPRIMER_PERSONNAGE = "SUPPRIMER_PERSONNAGE";
export const COMMMIT_PERSONNAGE_CHANGES = "COMMMIT_PERSONNAGE_CHANGES";
export const SELECTIONNER_PERSONNAGE = "SELECTIONNER_PERSONNAGE";

export function creerPersonnage(personnage) {
  return { type: CREER_PERSONNAGE, personnage };
}

export function modifierPersonnage(personnage) {
  return { type: MODIFIER_PERSONNAGE, personnage };
}

export function supprimerPersonnage(personnage) {
  return { type: SUPPRIMER_PERSONNAGE, personnage };
}

export function commitPersonnageChanges(personnage) {
  return { type: COMMMIT_PERSONNAGE_CHANGES, personnage };
}
export function selectionnerPersonnage(personnage) {
  return { type: SELECTIONNER_PERSONNAGE, personnage };
}
