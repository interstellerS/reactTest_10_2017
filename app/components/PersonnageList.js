import React, { Component, PropTypes } from "react";
import List from "material-ui/List/List";
import Subheader from "material-ui/Subheader";
import ListItem from "material-ui/List/ListItem";
import ActionGrade from "material-ui/svg-icons/action/android";
import Avatar from "material-ui/Avatar";
import { pinkA200 } from "material-ui/styles/colors";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import FlatButton from "material-ui/FlatButton";
import Snackbar from "material-ui/Snackbar";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";

const buttonStyle = {
  backgroundColor: "transparent",
  color: "white"
};

const stylePaper = {
  textAlign: "left"
};
const iconStyle = {
  color: "#f1404b"
};
const iconStylesLeft = {
  color: "#fff"
};

const personneList = {
  marginTop: 50
};
class PersonnageList extends Component {
  static contextTypes = {
    router: PropTypes.object,
    history: PropTypes.object,
    store: React.PropTypes.object.isRequired
  };

  handleRequestClose = () => {
    this.props.resetAdminEvent();
  };
  renderPersonnages(personnages) {
    const iconButtonElement = (
      <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400} />
      </IconButton>
    );
    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem
          onClick={event => {
            alert("wawww");
          }}
        >
          Modifier
        </MenuItem>
        <MenuItem>Supprimer</MenuItem>
      </IconMenu>
    );
    return personnages.map(personnage => {
      return (
        <ListItem
          primaryText={personnage.name}
          key={personnage.id}
          style={stylePaper}
          rightIconButton={
            <div>
              <FlatButton
                onClick={this.props.modifierPersonnage.bind(null, personnage)}
                label="Modifier"
                labelPosition="before"
                primary={true}
                icon={<FontIcon className="material-icons">mode_edit</FontIcon>}
              />
              <FlatButton
                onClick={this.props.supprimerPersonnage.bind(null, personnage)}
                label="Supprimer"
                labelPosition="before"
                secondary={true}
                icon={
                  <FontIcon className="material-icons">delete_sweep</FontIcon>
                }
              />
            </div>
          }
        />
      );
    });
  }

  render() {
    return (
      <div style={personneList}>
        <List style={stylePaper}>
          {this.renderPersonnages(this.props.personnages)}
        </List>
      </div>
    );
  }
}

export default PersonnageList;
