import * as React from "react";
import { Form, FormFields, required, isEmail, maxLength } from "./Form";
import { Field } from "./Field";
import { makeStyles } from '@material-ui/core/';

/** Define form styles */
const useStyles = makeStyles((theme) => ({
    form: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'flex-start',
      paddingBottom: 5,
    },
    input: {
      width: '100%',
    },
    buttonDiv: {
      textAlign: 'center',
    },
    button: {
      marginTop: theme.spacing(1),
      background: '#40D3FD',
      color: '#FFF'
    },

}));

export interface ContactUsFormProps {
    support?: boolean, // If support is true show message box
}

export const ContactUsForm = ({support}: ContactUsFormProps) => {
  const fields: FormFields = {
    firstName: {
      id: "firstName",
      label: "First Name",
      validation: { rule: required },
      editor: "textfield"
    },
    lastName: {
      id: "lastName",
      label: "Last Name",
      validation: { rule: required }
    },
    email: {
      id: "email",
      label: "Email",
      validation: { rule: isEmail }
    },
    lab: {
      id: "lab",
      label: "Lab",
      validation: { rule: required }
    },
    role: {
      id: "role",
      label: "Role",
      validation: { rule: required }
    },
    // reason: {
    //   id: "reason",
    //   label: "Reason",
    //   editor: "dropdown",
    //   options: ["", "Marketing", "Support", "Feedback", "Jobs"],
    //   validation: { rule: required }
    // },
    message: {
      id: "message",
      label: "Message",
      editor: "multilinetextbox",
      placeholder: "I’m having trouble with Aquarium."
    }
  };
  return (
    <Form
      action="https://script.google.com/macros/s/AKfycbzYVzaqdK9KI5CJr8lY4RQLqaCqr6rhGkeK5XDwtt1tsKEk_FwP-rmgrkU204BJ_337/exec"
      fields={fields}
      classes={useStyles()}
      render={() => (
        <React.Fragment>

          <Field {...fields.firstName} />
          <Field {...fields.lastName} />
          <Field {...fields.email} />
          <Field {...fields.lab} />
          <Field {...fields.role} />
          {support &&
            <Field {...fields.message} />
          }
        </React.Fragment>
      )}
    />
  );
};
