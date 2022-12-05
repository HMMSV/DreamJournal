import firebase from './firebase';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import Header from './Header.js';
import Footer from './Footer';
import './App.css';
import DreamCard from './DreamCard';
import DreamForm from './DreamForm';

function App() {

const [dreams, setDreams] = useState([]);
const [userInput, setUserInput] = useState('');

  useEffect(() =>{
    // create a variable that holds database details
    const database = getDatabase(firebase)
    
    // create a variable that makes reference to database
    const dbRef = ref(database)

    // add an event listener to that variable that will fire from the database, and call that data 'response'.
    onValue(dbRef, (response) => {
      // create a variable to store the new state for the app
      const newState = [];
    // store the response from query to Firebase, inside of a variable (data), using .val to get info that is needed
      const data = response.val();
    // use a for loop to iterate through data
    for (let key in data) {
      //push each dream to array
      newState.push({key: key, name: data[key]});
    }
    // call setDreams to update the component's state using array newState
    setDreams(newState);
    })
  }, [])

  // event to fire every time there is a change in the input it is attached to
  const handleInputChange = (event) => {
    // update the state of our App component to equal whatever the value is of what is in the input field
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    // prevent the default action (form submission/page refresh)
    event.preventDefault();

    const database = getDatabase(firebase)
    const dbRef = ref(database)

    // push value of userInput state to database
    push(dbRef, userInput);

    // reset state to empty string
    setUserInput('');
  }

  const [dreamToDeleteId, setDreamToDeleteId] = useState(undefined)

  const handleRemoveMessage = (dreamId) => {
    setDreamToDeleteId(dreamId)
  }

  const handleRemoveDream = (dreamId) => {
        // reference the database
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${dreamId}`);
    
    remove(dbRef)
    setDreamToDeleteId(undefined)
  }


  return (
    <div className='wrapper'>
    <Header />
    <DreamForm handleInputChange={handleInputChange} userInput={userInput} handleSubmit={handleSubmit}  />
      <ul>
        {dreams.map((dream) => {
          return (
            <DreamCard key={dream.key} dream={dream} handleRemoveMessage={handleRemoveMessage} />
          )
        })
        }
      </ul>
        {dreamToDeleteId && (
        <div>Are you sure you want to delete your dream?
          <button onClick={() => handleRemoveDream(dreamToDeleteId)}>Delete it!</button>
        </div>
        )} 
      <Footer />
    </div>
  );
}

export default App;
