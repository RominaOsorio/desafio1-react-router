import Registro from '../components/Registro'
import { useState } from 'react'

const Contacto = () => {
  const [alert, setAlert] = useState({ msg: '', color: '' })
  return (
    <>
      <Registro alert={alert} setAlert={setAlert} />
    </>
  )
}

export default Contacto
