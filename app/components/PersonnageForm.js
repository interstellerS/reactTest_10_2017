import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import TextField from "material-ui/TextField";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import Checkbox from "material-ui/Checkbox";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import DatePicker from "react-datepicker";
import RaisedButton from "material-ui/RaisedButton";
import moment from "moment";

const style = {
  margin: 12,
  width: "150px"
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />;

const renderRadioGroup = ({ input, ...rest }) =>
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />;

const renderDatePicker = ({ input, ...rest }) => {
  let dateParsed = input.value ? moment(input.value) : moment();
  //let dateParsed = new Date(input.value);
  return (
    <DatePicker
      selected={dateParsed}
      onChange={(event, value) => input.onChange(value)}
    />
  );
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) =>
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />;

let PersonnageForm = props => {
  const {
    fields: { name, id },
    handleSubmit,
    load,
    pristine,
    reset,
    submitting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="name" component={renderTextField} label="name" />
      </div>
      <div>
        <Field name="type" component={renderRadioGroup}>
          <RadioButton value="humain" label="humain" />
          <RadioButton value="animal" label="animal" />
          <RadioButton value="plante" label="plante" />
        </Field>
      </div>
      <div>
        <Field name="dateNaissance" component={renderDatePicker} label="name" />
      </div>
      <div>
        <br />
        <br />
        <RaisedButton
          label="Confirmer"
          type="submit"
          primary={true}
          style={style}
        />
        <RaisedButton
          label="Annuler"
          style={style}
          onClick={props.retourToList}
        />
      </div>
    </form>
  );
};

export default PersonnageForm;
