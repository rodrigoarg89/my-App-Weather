const User5 = ({stack}) => {
  
  const alertTitle = () => alert("Mi stack!")

  return (
    <div className='card' onClick={alertTitle}>
      <h2>{stack}</h2>
     <p>JS</p>
     <p>Html/CSS</p>
     <p>REACT.</p>

    </div>
  )
}

export default User5;