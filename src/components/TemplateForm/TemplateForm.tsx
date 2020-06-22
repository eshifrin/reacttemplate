import React, { useState } from "react";
import {Form as GrommetForm, FormField, TextInput, Box, Button, Grid, Grommet} from "grommet";
import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router-dom";

export default function TemplateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();

  const validatePassword = (pw: string) => {
    const errorMessage = 'Password must be at least three letters and have one capital';
    if(pw.length < 3 || pw.toLowerCase() === pw) {
      return errorMessage;
    }

    return undefined;
  };

  const onSubmitRoute = () => {
    history.push("/");
  };

  const onSubmitError = () => {
    setFormErrors({
      name: 'That aint real',
      password: 'weeaaaak'
    })
  };

  const onSubmit = (cb: Function) => (e:any) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false)
      cb();
    }, 2000)
  };

  console.log("What")

  return (
    <div className={"TemplateForm"}>
      <div className={"container"}>
        <Grommet>
          <Spinner show={isSubmitting}/>
          <Box width={"large"} pad={"large"}>
            <GrommetForm onSubmit={onSubmit(onSubmitError)} errors={formErrors}>
              <FormField name="name" htmlFor="nameinput" label="Name" required={true}>
                <TextInput id="nameinput" name="name" />
              </FormField>
              <FormField name="password" htmlFor="passwordinput" label="Password" required={true} validate={validatePassword}>
                <TextInput id="passwordinput" name="password" />
              </FormField>
              <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
              </Box>
            </GrommetForm>
          </Box>
        </Grommet>
      </div>
    </div>
  );
}



