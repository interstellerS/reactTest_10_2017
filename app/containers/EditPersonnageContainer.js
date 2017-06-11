import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { commitPersonnageChanges, selectionnerPersonnage } from "actions";
import { reduxForm } from "redux-form";
import PersonnageForm from "../components/PersonnageForm";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: values => {
      dispatch(commitPersonnageChanges(values));
      dispatch(selectionnerPersonnage(null));
      ownProps.retourToList();
    },
    retourToList: (history, store, props) => {
      ownProps.retourToList();
    }
  };
};
function mapStateToProps(state) {
  return {
    initialValues: state.personnage.selectedPerson
      ? state.personnage.selectedPerson.domProps
      : null
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: "personnageNewForm",
    fields: ["name"]
  })(PersonnageForm)
);
