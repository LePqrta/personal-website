import React from 'react';
import Card from '../../components/Card/Card';
import profileData from '../../data/profile.json';
import styles from './Home.module.css';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('Home | Onat Kaan Atılgan');
  const contactInfo = profileData.contact.info;
  const email = contactInfo.find(info => info.label === "Email")?.value;
  const phone = contactInfo.find(info => info.label === "Phone")?.value;

  return (
    <section className={styles.introSection} id="home">
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
        <div className={styles.skillsContainer}>
          {profileData.skills.categories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <strong>{category.name}:</strong>
              <div className={styles.skillList}>
                {category.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <Card title={profileData.contact.title}>
        <div className={styles.contact}>
          {email && (
            <div className={styles.contactItem}>
              <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </div>
          )}
          {phone && (
            <div className={styles.contactItem}>
              <strong>Phone:</strong> <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
}

export default Home;