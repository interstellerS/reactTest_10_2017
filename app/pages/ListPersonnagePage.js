import React from "react";
import PersonnageListContainer from "../containers/PersonnageListContainer";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";

const stylePaper = {
  textAlign: "center",
  display: "inline-block",
  width: "100%"
};
const styleBar = {
  backgroundColor: "#a5d296"
};
const iconStylesLeft = {
  color: "#f1404b"
};

export default class ListPersonnagePage extends React.Component {
  constructor(props) {
    super(props);
    this.createPersonnage = this.createPersonnage.bind(this);
    this.modifierPersonnage = this.modifierPersonnage.bind(this);
    this.supprimerPersonnage = this.supprimerPersonnage.bind(this);
  }
  createPersonnage() {
    this.context.router.push("/editPersonnage");
  }
  modifierPersonnage() {
    this.context.router.push("/editPersonnage");
  }
  supprimerPersonnage() {}
  render() {
    return (
      <div>
        <Paper style={stylePaper} zDepth={1} rounded={false}>
          <AppBar
            iconElementLeft={
              <IconButton
                onClick={() => {
                  this.createPersonnage();
                }}
                iconClassName="material-icons"
              >
                add_circle_outline
              </IconButton>
            }
            title="List Personnage"
            style={styleBar}
          />
          <PersonnageListContainer
            modifierPersonnage={this.modifierPersonnage}
            supprimerPersonnage={this.supprimerPersonnage}
          />
        </Paper>
      </div>
    );
  }
}

ListPersonnagePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};
