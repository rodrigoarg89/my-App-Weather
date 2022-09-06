const Card2 = ({hobbies, myHobbies}) => {
  
  const alertTitle = () => alert("mis hobbies")

  // const hobbies = {
  //   'durante la semana': ['Trabajar,', ' aprender a programar'],
  //  'fines de semanas': [' Aprender de politica,', ' economía,', 'y finanzas'],
  //   'durante todo el mes': 'Pasar tiempo con mi hijo'
  // }

  return (
    <div className='card' onClick={alertTitle}>
      <h2>{hobbies}</h2>
     <p>{myHobbies['durante todo el mes']}</p>
     <p> {myHobbies['durante la semana']}</p>
     <p> {myHobbies['fines de semanas']}</p>
     {/* <button onClick={sobreMi}>Sobre mi</button> */}
    </div>
  )
}

export default Card2;