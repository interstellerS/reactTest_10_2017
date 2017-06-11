import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import * as constants from "../actions";
import { List } from "immutable";
import { Personnage } from "units";
import * as shortid from "shortid";
import { routerStateReducer } from "redux-react-router";

const update = (state, mutations) => Object.assign({}, state, mutations);

function createPersonnage(state, personnage) {
  let newPersonnage = buildPersonnage(
    personnage.name,
    personnage.type,
    personnage.dateNaissance
  );
  let newPersonnages = state.personnages.push(newPersonnage);
  let newState = update(state, { personnages: newPersonnages });
  return newState;
}

function MajPersonnage(state, personnage) {
  let itemIndex = state.personnages.findIndex(
    item => item["id"] === personnage.id
  );
  const newPersonnages = state.personnages.update(itemIndex, function(item) {
    return item.updatePersonnage(personnage);
  });
  let newState = update(state, { personnages: newPersonnages });
  return newState;
}
function supprimerPersonnage(state, personnage) {
  let newPersonnages = state.personnages.filter(
    item => item["id"] !== personnage.id
  );
  let newState = update(state, { personnages: newPersonnages });
  return newState;
}

function modifierPersonnage(state, personnage) {
  let newState = update(state, { selectedPerson: personnage });
  return newState;
}
function selectionnerPresonnage(state, personnage) {
  let newState = update(state, { selectedPerson: personnage });
  return newState;
}

function commitChanges(state, personnage) {
  if (personnage.id) {
    return MajPersonnage(state, personnage);
  }
  return createPersonnage(state, personnage);
}

function buildPersonnage(name, type, dateNaissance) {
  return new Personnage({
    id: name + "_" + shortid.generate(),
    name: name,
    type: type,
    dateNaissance: dateNaissance
  });
}

const personne1 = buildPersonnage("batman", "humain", new Date());
const personne2 = buildPersonnage("superman", "animal", new Date());
const personne3 = buildPersonnage("Djoker", "plante", new Date());

const initialState = {
  personnages: List([personne1, personne2, personne3]),
  selectedPerson: null
};

function personnage(state = initialState, action = {}) {
  switch (action.type) {
    case constants.CREER_PERSONNAGE:
      return creerPersonnage(state, action.personnage);
    case constants.MODIFIER_PERSONNAGE:
      return modifierPersonnage(state, action.personnage);
    case constants.SUPPRIMER_PERSONNAGE:
      return supprimerPersonnage(state, action.personnage);
    case constants.COMMMIT_PERSONNAGE_CHANGES:
      return commitChanges(state, action.personnage);
    case constants.SELECTIONNER_PERSONNAGE:
      return selectionnerPresonnage(state, action.personnage);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  personnage: personnage,
  router: routerStateReducer,
  form: formReducer
});

export default rootReducer;
