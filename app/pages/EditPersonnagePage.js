import React from "react";
import EditPersonnageContainer from "../containers/EditPersonnageContainer";
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

export default class EditPersonnagePage extends React.Component {
  constructor(props) {
    super(props);
    this.retourToList = this.retourToList.bind(this);
  }
  retourToList() {
    this.context.router.push("/listPersonnage");
  }

  render() {
    return (
      <div>
        <Paper style={stylePaper} zDepth={1} rounded={false}>
          <AppBar
            iconElementLeft={
              <IconButton
                onClick={() => {
                  this.retourToList();
                }}
                iconClassName="material-icons"
              >
                list
              </IconButton>
            }
            title="Modification Personnage"
            style={styleBar}
          />
          <EditPersonnageContainer retourToList={this.retourToList} />
        </Paper>
      </div>
    );
  }
}

EditPersonnagePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};
