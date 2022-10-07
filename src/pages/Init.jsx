import React from 'react'
import { useNavigate } from "react-router-dom";


// componentes importados
import HolaMundo from '../components/HolaMundo/index'

const Init = () => {
  const handleClick = () => {}
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(false);
  return (
    <div>
      <h1>hola pages</h1>
      <HolaMundo/>
      {isLoading && <h6 className="mt-8">Cargando...</h6>}
      {error && <h6 className="text-red">Ha ocurrido un error</h6>}
      <div>
        {/* {!isLoading && searchResults?.map(() => <RenderElements key={} onclick={handleClick} />)} */}
      </div>
    </div>
  )
}

export default Init
