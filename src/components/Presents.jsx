import React from 'react';
import ".././styles/userPages.css";
const Presents = ({ students = [{ id: 1, name: 'Ninguém', registration: '000000', photo: 'https://via.placeholder.com/50' }] }) => {
  return (
    <div>
      <div className="presents-container">
        {students.length > 0 ? (
          students.map((student) => (
            <div key={student.id} className="student-card">
              <div className="student-photo" style={{ backgroundImage: `url(${student.photo})` }} />
              <div className="student-info">
                <p className="student-registration">{student.registration}</p>
                <p className="student-name">{student.name}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-card">
              <div className="empty-photo" />
              <div className="empty-info">
                <p className="empty-title">Ninguém</p>
                <p className="empty-text">Ainda não tem ninguém aqui!</p>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
  );
};


export default Presents;



