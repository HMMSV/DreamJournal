const DreamForm = ({handleInputChange, userInput, handleSubmit}) => {

    return(
        <form action="submit">
            <label htmlFor="newDream">Please select the date and then enter your dream here!</label>
            <input 
            type="date" 
            id="date" 
            onChange={handleInputChange}
            value={userInput} />
            <input
            className="dreamInput" 
            type="text" 
            id="newDream" 
            onChange={handleInputChange}
            value={userInput}
            />
            <button onClick={handleSubmit}>Add dream!</button>
        </form>
    )
}

export default DreamForm;