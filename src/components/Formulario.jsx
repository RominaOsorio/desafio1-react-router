import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Formulario = ({ setAlert }) => {
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const validate = (e) => {
    e.preventDefault()

    if (
      email.trim() === '' ||
      text.trim() === ''
    ) {
      setAlert({ msg: 'Debes completar todos los campos!', color: 'warning' })
      return
    }

    setAlert({ msg: 'Tu mensaje ha sido enviado con éxito', color: 'success' })
    setEmail('')
    setText('')
  }
  return (
    <>
      <Form onSubmit={validate}>
        <Form.Group className='mb-3' controlId='Form.ControlInput'>
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type='email'
            placeholder='hola@correo.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='Form.ControlTextarea'>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as='textarea' rows={3}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </Form.Group>
        <Button type='submit' className='mb-3' variant='danger'>Enviar</Button>
      </Form>
    </>
  )
}

export default Formulario
