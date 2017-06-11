import { Map } from "extendable-immutable";

export default class Personnage extends Map {
  constructor(options) {
    super(options);
  }

  get id() {
    return this.get("id");
  }

  set id(value) {
    this.set("id", value);
  }

  get name() {
    return this.get("name");
  }

  set name(value) {
    this.set("name", value);
  }

  get type() {
    return this.get("type");
  }

  set type(value) {
    this.set("type", value);
  }

  get dateNaissance() {
    return this.get("dateNaissance");
  }

  set dateNaissance(value) {
    this.set("dateNaissance", value);
  }

  get dateNaissance() {
    return this.get("dateNaissance");
  }

  set dateNaissance(value) {
    this.set("dateNaissance", value);
  }

  get caracteristiques() {
    return this.get("caracteristiques");
  }

  get hasCarecteristiques() {
    return this.caracteristiques.size > 0;
  }

  setCarecteristiques(value) {
    return this.set("caracteristiques", value);
  }

  addChild(element) {
    const newCarecteristiques = this.caracteristiques.push(element);
    const other = this.setCarecteristiques(newChildren);
    return other;
  }

  updatePersonnage(values) {
    let step1, step2, step3;
    step1 = this.set("name", values.name);
    step2 = step1.set("type", values.type);
    step3 = step2.set("dateNaissance", values.dateNaissance);
    return step3;
  }

  get domProps() {
    let { name, id, type, dateNaissance, caracteristiques } = this.toJS();
    return { name, id, type, dateNaissance, caracteristiques };
  }
}
