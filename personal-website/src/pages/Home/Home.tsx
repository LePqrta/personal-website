import React from 'react';
import Card from '../../components/Card/Card';
import profileData from '../../data/profile.json';
import './Home.css';

function Home() {
  return (
    <section className="intro-section" id="home">
      <Card title={profileData.intro.title}>
        <p>
          {profileData.intro.description}
        </p>
      </Card>
      <Card title={profileData.about.title}>
        <p>
          {profileData.about.description}
        </p>
      </Card>
      <Card title={profileData.skills.title}>
        <div className="skills">
          {profileData.skills.categories.map((category, index) => (
            <div key={index}>
              <strong>{category.name}:</strong> {category.items}
            </div>
          ))}
        </div>
      </Card>
      <Card title={profileData.contact.title}>
        <div className="contact">
          <strong>Email:</strong> {profileData.contact.info.find(info => info.label === "Email")?.value}<br />
          <strong>Phone:</strong> {profileData.contact.info.find(info => info.label === "Phone")?.value}
        </div>
      </Card>
    </section>
  );
}

export default Home;
