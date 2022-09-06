const Card3 = ({free, freeTime}) => {
  
  const alertTitle = () => alert("En mi tiempo libre")



  return (
    <div className='card' onClick={alertTitle}>
      <h2>{free}</h2>
     <p> {freeTime.weekends}</p>
     <p> {freeTime.whenCan}</p>
     <p>{freeTime.sometimes}</p>

    </div>
  )
}

export default Card3;