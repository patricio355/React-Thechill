import React, { useRef } from 'react'

export default function Form() {

    const form =  useRef();

    const handlerValidation = (e) =>{
        e.preventDefault()
        const [ name, value ] = e.target;

        let [inputs] = [{...form.current, [name]: value}];


        console.log(inputs[5])

    }



  return (
    <div>
    <div>
        <label for="firstname">Nombre<span>*</span></label>
        <input type="text" name="firstname" id="firstname" placeholder="Juan Carlos" />
        <div id="errorMessageContainerN">
            <div id="errorMessageN"></div>
        </div>
        <div></div>
    </div>
    <div>
        <label for="lastname">Apellido<span>*</span></label>
        <input type="text" name="lastname" id="lastname" placeholder="Pérez" />
        <div id="errorMessageContainerLN">
            <div id="errorMessageLN"></div>
        </div>
        <div></div>
    </div>
    <div>
        <label for="gender">Género<span>*</span></label>
        <input type="text" name="gender" id="gender" placeholder="Hombre..." />
        <div id="errorMessageContainerGen">
            <div id="errorMessageGen"></div>
        </div>
        <div></div>
    </div>
    <div>
        <label for="email">E-mail<span>*</span></label>
        <input type="text" name="email" id="email" placeholder="example@gmail.com" />
        <div id="errorMessageContainerE">
            <div id="errorMessageE"></div>
        </div>
        <div></div>
    </div>
    <div>
        <label for="mobile">Teléfono celular<span>*</span></label>
        <input type="text" name="mobile" id="mobile" placeholder="+54 9 388 454 8844" />
        <div id="errorMessageContainerT">
            <div id="errorMessageT"></div>
        </div>
    </div>
    <label for="avatar">Avatar</label>
    <input type="file" name="avatar" id="avatar" accept=".jpg, .jpeg, .png" />
    <div id="errorMessageContainerAv">
        <div id="errorMessageAv"></div>
    </div>
    <label for="pass">Contraseña<span>*</span></label>
    <input type="password" name="password" id="pass" placeholder="password" />
    <div id="errorMessageContainerP">
        <div id="errorMessageP"></div>
    </div>
    <label for="confirmedPass">Confirmar contraseña<span>*</span></label>
    <input type="password" />
</div>
  )
}
