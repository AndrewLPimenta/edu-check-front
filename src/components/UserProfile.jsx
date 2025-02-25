import React, { useState } from 'react';
import Number from './Number';
import '../styles/profilePages.css';
const UserProfile = ({ initialUsername, initialPassword, initialAvatar }) => {
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);
  const [avatar, setAvatar] = useState(initialAvatar);
  const [socialLinks, setSocialLinks] = useState({ twitter: '', instagram: '', facebook: '', linkedin: '' });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({ ...prevLinks, [name]: value }));
  };

  return (
    <div className="card-client">
      <div className='user-info'>
        <label className="user-picture" htmlFor="avatar-upload">
          <input type="file" id="avatar-upload" accept="image/*" onChange={handleFileChange} hidden />
          <img src={avatar} alt="User Avatar" className="avatar" />
        </label>
      </div>
      <div className="user-info">
        <div className="info-line">
          <h2>Andrew</h2>
          <svg className="icon-modify" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M 18.414062 2 C 18.158188 2 17.902031 2.0974687 17.707031 2.2929688 L 16 4 L 20 8 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.925594 2.0974687 18.669937 2 18.414062 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"></path>
          </svg>
        </div>
        <div>
        </div>
        <div className="info-line">
          <h4>202420108</h4>
          <svg className="icon-modify" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M 18.414062 2 C 18.158188 2 17.902031 2.0974687 17.707031 2.2929688 L 16 4 L 20 8 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.925594 2.0974687 18.669937 2 18.414062 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"></path>
          </svg>
        </div>
      </div>
      <div className='user-info'>
        <Number/>
      </div>
      {/* <div className="user-info">
        {Object.keys(socialLinks).map((platform) => (
          <input
            key={platform}
            type="text"
            name={platform}
            value={socialLinks[platform]}
            onChange={handleSocialChange}
            placeholder={`Seu ${platform}`}
            className="input-field"
          />
        ))}
      </div> */}
    </div>
  );
};

export default UserProfile;
