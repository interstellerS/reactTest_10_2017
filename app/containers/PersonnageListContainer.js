import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
  creerPersonnage,
  modifierPersonnage,
  supprimerPersonnage
} from "actions";
import PersonnageList from "components/PersonnageList";

function mapStateToProps(state) {
  return {
    personnages: state.personnage.personnages
  };
}

@connect(mapStateToProps)
class PersonnageListContainer extends Component {
  contextTypes: {
    router: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.creerPersonnage = this.creerPersonnage.bind(this);
    this.modifierPersonnage = this.modifierPersonnage.bind(this);
    this.supprimerPersonnage = this.supprimerPersonnage.bind(this);
  }

  creerPersonnage(personnage) {
    const { dispatch } = this.props;
    dispatch(creerPersonnage(personnage));
  }
  modifierPersonnage(personnage) {
    const { dispatch } = this.props;
    dispatch(modifierPersonnage(personnage));
    this.props.modifierPersonnage();
  }
  supprimerPersonnage(personnage) {
    const { dispatch } = this.props;
    dispatch(supprimerPersonnage(personnage));
    this.props.supprimerPersonnage();
  }

  render() {
    return (
      <PersonnageList
        personnages={this.props.personnages}
        modifierPersonnage={this.modifierPersonnage}
        supprimerPersonnage={this.supprimerPersonnage}
      />
    );
  }
}

export default PersonnageListContainer;
