const DreamCard = ({dream, handleRemoveMessage}) => {
  
  return (
    <li>
      <p>{dream.name}</p>
      <button onClick={() => handleRemoveMessage(dream.key)}>Remove dream
      </button>
    </li>
  )
}

export default DreamCard;