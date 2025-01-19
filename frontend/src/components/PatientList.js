import React from "react";

const PatientList = ({ patients }) => {
  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
