import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Tejumola', phone: '08189789089'},
    {name: 'Aromolade', phone: '08189789081'}
 ])

 const [newName, setNewName] = useState('')
 const [newNumber, setNewNumber] = useState('')
 const [query, setQuery] = useState('')



 const addContact = (e) => {
   e.preventDefault()

   if (persons.find(person => person.name === newName)) return alert    ('Name already exists')

   if (persons.find(person => person.phone === newNumber)) return alert('Number already exists')

   setPersons(persons.concat({
     name: newName,
     phone: newNumber
   }))

   setNewName('')
   setNewNumber('')
 }


const filteredPerson = query.trim() ? persons.filter(person.name.toLowerCase().includes(query.trim().toLowerCase())) : persons


  return (
    <main>
      <h1>Phonebook</h1>

      <form onSubmit={addContact}>

         Name: <input type="text" required value={newName} onChange={e => setNewName(e.target.value)}/> <br />

         Phone: <input type="number" required value={newNumber} onChange={e => e.target.value} /> <br />

         <button>Add Contact</button>

        </form>
        <br />
        <input type="search" placeholder='Search' value={query} onChange={e => setQuery(e.target.value)} />
        <ul>
          {filteredPerson.map((person, personIndex) => <li key={`person_${personIndex}`}>
           {person.name} : {person.phone}
          </li>)}
        </ul>
    </main>
  )
}

export default App
