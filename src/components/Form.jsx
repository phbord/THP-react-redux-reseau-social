import React, { useState } from 'react'

import InputText from 'components/form/InputText'
import Textarea from 'components/form/Textarea'
import InputCheckbox from 'components/form/InputCheckbox'
import InputRadioDouble from 'components/form/InputRadioDouble';
import InputPassword from 'components/form/InputPassword';
import InputEmail from 'components/form/InputEmail';
import InputNumber from 'components/form/InputNumber';
import ButtonSubmit from 'components/form/ButtonSubmit';


function App() {
  const [state, setState] = useState({
    name1: "",
    pwd1: "",
    email1: "",
    num1: "",
    desc1: "",
    cb1: false,
    rb1_1: false,
    rb1_2: false,
    submit1: ""
  })

  const handleChange = (e) => {
    let name = e.target.name
    let id = e.target.id
    let type = e.target.type
    let tagName
    if (type === 'radio' && id === `${name}-1`) {
      name = `${name}_1`
      setState(prevState => ({
        ...prevState,
        ['rb1_2']: false
      }))
  }
    if (type === 'radio' && id === `${name}-2`) {
      name = `${name}_2`
      setState(prevState => ({
        ...prevState,
        ['rb1_1']: false
      }))
  }
    if (e.target.type) type = e.target.type
    if (e.target.tagName) tagName = e.target.tagName
    const value = type === 'checkbox' || type === 'radio' ? e.target.checked : e.target.value
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault(handleSubmit)
    const data = JSON.stringify(state)
    setState({
      name1: "",
      pwd1: "",
      email1: "",
      num1: "",
      desc1: "",
      cb1: false,
      rb1_1: false,
      rb1_2: false,
      submit1: ""
    })
    console.log('DATA => ', data)
  }

  return (
    <div className="mb-5">
      <h3 className="mt-5">Formulaire</h3>
      <form onSubmit={handleSubmit}>
        <InputText name="name1" value={state.name1} onChange={handleChange}>Champ texte</InputText>
        <InputPassword name="pwd1" value={state.pwd1} onChange={handleChange}>Champ mot de passe</InputPassword>
        <InputEmail name="email1" value={state.email1} onChange={handleChange}>Champ email</InputEmail>
        <InputNumber name="num1" value={state.num1} onChange={handleChange}>Champ nombre</InputNumber>
        <Textarea name="desc1" onChange={handleChange} label="Textarea">{state.desc1}</Textarea>
        <InputCheckbox name="cb1" value={state.cb1} onChange={handleChange}>Checkbox</InputCheckbox>
        <InputRadioDouble name="rb1" value1={state.rb1_1} value2={state.rb1_2} onChange={handleChange} label1="Oui" label2="Non" />
        <ButtonSubmit>Envoyer</ButtonSubmit>
      </form>
      <h4 className="mt-5">Affichage du state</h4>
      <p className="text-danger"><b>{JSON.stringify(state)}</b></p>
    </div>
  );
}

export default App;