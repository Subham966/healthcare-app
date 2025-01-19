import React, { useState } from 'react';

const AddPatientForm = ({ onAddPatient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [condition, setCondition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddPatient function passed as a prop
    onAddPatient({ name, age, condition });
    setName('');
    setAge('');
    setCondition('');
  };

  return (
    <div>
      <h2>Add New Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Condition:</label>
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
