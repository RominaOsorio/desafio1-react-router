import Formulario from './Formulario'
import Alert from './Alert'

const Registro = ({ alert, setAlert }) => {
  return (
    <>
      <div className='container border border-light-subtle rounded-5 bg-white p-5 mt-5 text-center'>
        <h1 className='fs-1 text-center mb-5'>Cuéntanos, ¿En qué te podemos ayudar?</h1>
        <Formulario setAlert={setAlert} />
        {alert.msg !== '' && <Alert msg={alert.msg} color={alert.color} />}
      </div>
    </>
  )
}

export default Registro
