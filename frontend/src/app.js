import React, { useState, useEffect } from 'react';
import AddPatientForm from './components/AddPatientForm';

const App = () => {
  const [patients, setPatients] = useState([]);

  // Fetch the patient list when the component mounts
  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:5000/patients');
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Failed to load patients:', error);
    }
  };

  const addPatient = async (patient) => {
    try {
      const response = await fetch('http://localhost:5000/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
      });

      if (response.ok) {
        fetchPatients(); // Refresh patient list after adding
      } else {
        console.error('Error adding patient');
      }
    } catch (error) {
      console.error('Failed to add patient:', error);
    }
  };

  return (
    <div>
      <h1>Healthcare Application</h1>

      {/* Display AddPatientForm and pass addPatient function */}
      <AddPatientForm onAddPatient={addPatient} />

      <h2>Patient List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.name} (Age: {patient.age}, Condition: {patient.condition})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
