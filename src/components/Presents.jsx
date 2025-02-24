import React from 'react';
import styled from 'styled-components';
import ".././styles/userPages.css";
const Presents = ({ students = [{ id: 1, name: 'Ninguém', registration: '000000', photo: 'https://via.placeholder.com/50' }] }) => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .presents-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
  }

  .student-card, .empty-card {
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 300px;
    padding: 15px;
    border-radius: 12px;
    

  }

  .student-photo, .empty-photo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;

  }

  .student-info, .empty-info {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
  }

  .student-registration {
    font-weight: bold;
    font-size: 14px;

  }

  .student-name {
    font-size: 16px;

  }

  .empty-state {
    text-align: center;
    width: 100%;
  }

  .empty-title {
    font-size: 18px;
    font-weight: bold;
  }

  .empty-text {
    font-size: 14px;
  }

`;

export default Presents;
