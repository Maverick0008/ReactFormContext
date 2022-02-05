import React from "react";

import PersonlaFormInfo from "./form/PersonlaFormInfo";
import { Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
const scheme = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Имя должно быть больше 2-х символов")
    .required("Обязательно!"),
  lastName: yup
    .string()
    .min(3, "Фамилия должна быть больше 3-х символов")
    .required("Обязательно!"),
  email: yup.string().email("Неверная почта!").required("Укажите почту"),
});
function App() {
  const methods = useForm({
    resolver: yupResolver(scheme),
  });
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className="App">
      <FormProvider {...methods} >
        <PersonlaFormInfo  />
      </FormProvider>
      
      <Button
          onClick={methods.handleSubmit(onSubmit)}
          style={{ backgroundColor: "#F7C050", marginRight: '40px' }}
          variant="contained"
          color="secondary"
        >Send</Button>
    </div>
  );
}

export default App;
