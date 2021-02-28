import React, { useState } from "react";
import PillButton from "../Cards/PillButton";
import Form from "../Forms/Form";
import FormField from "../Forms/FormField";
function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        usernameError: "",
        passwordError: "",
    });

    const myOnChange = function (e) {
        const { name, value } = e.currentTarget;
        //validaciones
        let error = null;
        if (name == "password") {
            error = (/^(?=.*\d)(?=.*A-Z)(?=.*a-z)(?=.*^\w\d\s:)(^\s){8,32}$/).test(value) ? null : "Contraseña Invalida";
        }
        setFormData({ formData, [name]: value }, { [name + "Error"]: error });
    };
    const myOnSubmit = function (e) {
        e.preventDefault();
        e.stopPropagation();
        const { user, pswd } = formData;
        alert(`Usuario:${user} Psswd:${pswd}`);
    };

    var myClasses = ["font-bold", "text-2xl"];

    return (
        <Form>
            <img src="https://www.flaticon.com/svg/vstatic/svg/1077/1077012.svg?token=exp=1614472741~hmac=15d0ffff37931bf9551327db9afd08f8"></img>
            <h2 className={myClasses.join(" ")}>Inicia Sesion</h2>
            <FormField
                type="text"
                id="username"
                fname="username"
                onChange={myOnChange}
                caption="Correo Electrónico"
                value={formData.username}
                error={formData.usernameError}
                placeholder="Tu correo"></FormField>
            <FormField
                type="password"
                id="password"
                fname="Contraseña"
                onChange={myOnChange}
                caption="Contraseña"
                value={formData.password}
                error={formData.passwordError}
                placeholder="Contraseña"></FormField>
            <PillButton text="Iniciar Sesión" click={(e) => {
                e.preventDefault();
                e.stopPropagation();

                alert(`Usuario:${formData.username} Psswd:${formData.password}`);
            }}></PillButton>
        </Form>
    );
}
export default Login;