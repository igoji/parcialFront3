//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({datos}) => {

    const {nombre, pajaro} = datos

  return (
    <div>
        
        <h3>Muchas Gracias {nombre}, recordaremos que tu pájaro favorito es {pajaro}</h3>

    </div>
  )
}

export default Card