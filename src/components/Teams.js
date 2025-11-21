import React from "react";
import "./Teams.css";

function Title({ text }) {
  return <div className="title">{text}</div>;
}

function Card({ name, role, id, photo, type }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className={`card ${hover ? (type === "teacher" ? "card-hover-teacher" : "card-hover-student") : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Circle Photo */}
      <div className="card-photo">
        <img
          src={photo}
          alt="profile"
          className="card-photo-img"
        />
      </div>

      {/* Name */}
      <div className="card-name">{name}</div>

      {/* Role */}
      <div className="card-role">{role}</div>

      {/* ID */}
      <div className="card-id">{id}</div>

      {/* Icons */}
      <div className="card-icons">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          width="30"
          height="30"
          alt="insta"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          width="30"
          height="30"
          alt="mail"
        />
      </div>
    </div>
  );
}

function Teams() {
  const teachers = [
    ["Teacher A", "HOD", "TEA1001", "yourphoto.jpg"],
    ["Teacher B", "Professor", "TEA1002", "yourphoto.jpg"],
    ["Teacher C", "Mentor", "TEA1003", "yourphoto.jpg"],
    ["Teacher D", "Coordinator", "TEA1004", "yourphoto.jpg"],
  ];

  const students = [
    ["Student 1", "Developer", "CSE001", "yourphoto.jpg"],
    ["Student 2", "Designer", "CSE002", "yourphoto.jpg"],
    ["Student 3", "Editor", "CSE003", "yourphoto.jpg"],
    ["Student 4", "UI/UX", "CSE004", "yourphoto.jpg"],
    ["Student 5", "Backend", "CSE005", "yourphoto.jpg"],
    ["Student 6", "Frontend", "CSE006", "yourphoto.jpg"],
    ["Student 7", "Tester", "CSE007", "yourphoto.jpg"],
    ["Student 8", "ML Engineer", "CSE008", "yourphoto.jpg"],
    ["Student 9", "Cloud", "CSE009", "yourphoto.jpg"],
  ];

  return (
    <div className="app-container">
      {/* Teachers */}
      <Title text="Our Teachers" />
      <div className="teachers-grid">
        {teachers.map((t, index) => (
          <Card
            key={index}
            name={t[0]}
            role={t[1]}
            id={t[2]}
            photo={t[3]}
            type="teacher"
          />
        ))}
      </div>

      {/* Students */}
      <Title text="Our Students" />
      <div className="students-grid">
        {students.map((s, index) => (
          <Card
            key={index}
            name={s[0]}
            role={s[1]}
            id={s[2]}
            photo={s[3]}
            type="student"
          />
        ))}
      </div>
    </div>
  );
}

export default Teams;