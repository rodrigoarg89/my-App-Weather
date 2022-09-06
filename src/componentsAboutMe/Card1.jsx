const Card1 = ({title, me}) => {
  
  const alertTitle = () => alert("sobre mi")


  // const me = {
  //   nacionalidad: 'Argentino',
  //   movie: "The Wolf of Wall Street",
  //   music: "Clasic"
  // }

  return (
    <div className='card' onClick={alertTitle}>
      <h2>{title}</h2>
     <p>Soy {me.nacionalidad}</p>
     <p>Pelicula favorita: {me.movie}</p>
     <p>Musica: {me.music}</p>
     {/* <button onClick={sobreMi}>Sobre mi</button> */}
    </div>
  )
}

export default Card1;