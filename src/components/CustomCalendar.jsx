import React, { useState, useEffect } from "react";
import "../styles/userPages.css";

const classSchedule = {
  1: [{ disciplina: "Programação Front-End", horario: "19:00", professor: "Débora Amorim ", local: "Campus UniFOA" }],
  2: [{ disciplina: "Programação Front-End", horario: "19:00", professor: "Bruno Correa", local: "Campus UniFOA" }],
  3: [
    { disciplina: "Programação Front-End", horario: "18:45", professor: "Luciane Carvalho ", local: "Sala Virtual" }

  ],
  4: [
    
    { disciplina: "Programação Front-End", horario: "19:00", professor: "Rafael Iacillo", local: "Campus UniFOA" }
  ],
  5: [{ disciplina: "Programação Front-End", horario: "19:00", professor: "Rafael Iacillo", local: "Campus UniFOA" }]
};

const CustomCalendar = ({ selectedDate, onDateChange }) => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [currentWeek, setCurrentWeek] = useState([]);

  useEffect(() => {
    updateWeek();
  }, [weekOffset]);

  useEffect(() => {
    onDateChange(new Date()); // Define automaticamente o dia atual ao carregar
  }, []);

  const updateWeek = () => {
    const today = new Date();
    const monday = getMonday(today, weekOffset);
    const weekDays = Array.from({ length: 5 }, (_, i) => {
      const newDate = new Date(monday);
      newDate.setDate(monday.getDate() + i);
      return newDate;
    });
    setCurrentWeek(weekDays);
  };

  const getMonday = (baseDate, offset) => {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + offset * 7);
    const day = date.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    date.setDate(date.getDate() + diff);
    return date;
  };

  const handleDateChange = (date) => {
    onDateChange(date);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="arrow-button" onClick={() => setWeekOffset(weekOffset - 1)}>← Semana Anterior</button>
        <h3>{currentWeek.length > 0 && currentWeek[0].toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}</h3>
        <button className="arrow-button" onClick={() => setWeekOffset(weekOffset + 1)}>Próxima Semana →</button>
      </div>

      <div className="week-grid">
        {currentWeek.map((date) => {
          const dayNumber = date.getDay();
          const isToday = date.toDateString() === new Date().toDateString();
          return (
            <div
              key={date.toISOString()}
              className={`day-tile ${selectedDate.toDateString() === date.toDateString() ? "selected" : ""} ${isToday ? "today" : ""}`}
              onClick={() => handleDateChange(date)}
            >
                
              <span  >{date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric" })}</span>
              {classSchedule[dayNumber]?.map((aula, index) => (
                <div key={index} className="day-tile">
                <strong className="subject">{aula.disciplina}</strong>
                <p className="location">{aula.local}</p>
                <p className="time">{aula.horario}</p>
                <p className="professor">{aula.professor}</p>
            </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
