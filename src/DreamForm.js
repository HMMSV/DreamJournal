const DreamForm = ({handleInputChange, userInput, handleSubmit}) => {

    return(
        <form action="submit">
            <label htmlFor="newDream">Please select the date and then enter your dream below! &#128564;</label>
            <input 
            type="date" 
            id="date" 
            onChange={handleInputChange}
            value={userInput} />
            <textarea
            className="dreamInput" 
            type="text" 
            id="newDream"
            wrap="soft" 
            onChange={handleInputChange}
            value={userInput}
            />
            <button onClick={handleSubmit}>Add dream!</button>
        </form>
    )
}

export default DreamForm;