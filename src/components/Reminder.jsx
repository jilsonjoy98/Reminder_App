import React,{useState} from 'react'
import './Reminder.css'
function Reminder() {

    const [reminder, setReminder] = useState([]);
    const [newReminder, setNewReminder] = useState("");

    const handleInputChange=(event)=>{
 setNewReminder(event.target.value)
    }

    const handleAddReminder=()=>{
        
        if(newReminder.trim()){
            setReminder([...reminder,newReminder])
            setNewReminder("")
        }
    }
const handleDeleteReminder=(index)=>{

    setReminder(reminder.filter((item,itemIndex)=> itemIndex !=index))

}
  return (
    <div className="container">
      <h1>Reminder App</h1>
      <div className="input_container">
        <input
          type="text"
          value={newReminder}
          placeholder="Enter a Reminder"
          onChange={handleInputChange}
        />
        <button className="add_btn" onClick={handleAddReminder}>
          Add Reminder
        </button>
      </div>
      {
        reminder.length > 0 ? (
        <ul className="reminder_list">
          {reminder.map((reminder, index) => (
            <li key={index}>
              {reminder}
              <button
                onClick={() => handleDeleteReminder(index)}
                className="delete_btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>):
        <p>No reminders found</p>
      }
    </div>
  );
}

export default Reminder