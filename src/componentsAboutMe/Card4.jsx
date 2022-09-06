const Card4 = ({comida, misComidas}) => {
  
  const alertTitle = () => alert("Comida favorita!")

  // const misComidas = {
  //   carne: 'asado',
  //   vegetales: 'ensaldas',
  //   masas: 'pizzas'
  // }


  return (
    <div className='card' onClick={alertTitle}>
      <h2>{comida}</h2>
     <p>{misComidas.carne}</p>
     <p>{misComidas.vegetales}</p>
     <p>{misComidas.masas}</p>

    </div>
  )
}

export default Card4;