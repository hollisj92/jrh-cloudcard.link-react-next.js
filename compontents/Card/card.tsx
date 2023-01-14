import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image"
import profilePic from "../../media/pics/profilepic.png"
import content from '../../resume.json'
import { BsArrowDownRightSquareFill } from 'react-icons/bs';


function MyCard() {
  const [currentDiv, setCurrentDiv] = useState(1);

  const pageClick = () => {
    setCurrentDiv((currentDiv % 5) + 1);
  }

  const [flip, setFlip] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
  }
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div className={styles.CardRoot} onClick={() => setFlip(!flip)}>
        <div className={styles.bodyIntro}>
          <h1>{content.basics.name}</h1>
          <h2>{content.role}</h2>
          <Image className={styles.cardPic} src={profilePic} width={500} height={500} alt={"myface"}></Image>
          <div className={styles.linkBar}>
            <p onClick={handleClick}><Link onClick={handleClick} href={""}>www.jrh-cloudblog.link</Link>.<Link onClick={handleClick} href={""}>www.example.com</Link></p>
          </div>
          
        </div>
      </div>
      <div className={styles.CardRoot}>
        <div className={styles.bodySidebar} onClick={() => setFlip(!flip)}>
          <Image className={styles.cardPic2} src={profilePic} width={250} height={250} alt={"myface"}></Image>
          <div className={styles.sideContainer} >
            <h3>{content.basics.name}</h3>
            <ul>
              <li>{content.basics.phone}</li>
              <li>{content.basics.email}</li>
              <li>{content.basics.location.address}</li>
              <li><Link href={""}>{content.basics.website}</Link></li>
              <li>{content.misson}</li>
              <li>
                <Link href={"../../media/pdf/ResumeTemplatev1.pdf"} download={"ResumeTemplatev1.pdf"}>
                  <p onClick={handleClick}>Resume Download</p>
                </Link>
              </li>
              </ul>
            <br />
          </div>
          <div onClick={handleClick} className={styles.contentContainer}>
          <div>
              <button className={styles.slideButton} onClick={pageClick}><BsArrowDownRightSquareFill size="10x"/></button>
              {currentDiv === 1 && <div className={styles.experienceContainer}  >
                {content.work.map((work, index) => (
                  <div key={index} className={styles.workItem}>
                    <h4>{work.position} at {work.company}</h4>
                    <p>{work.highlights}</p>
                  </div>
                ))}
              </div>}
              {currentDiv === 2 && <div className={styles.eduContainer} >
                {content.education.map((edu, index) => (
                    <div key={index} className={styles.credItem}>
                      <h4>{edu.area}</h4>
                      <h5>{edu.institution}</h5>
                      <h6>{edu.startDate} - {edu.endDate}</h6>
                      <p>{edu.gpa}</p>
                    </div>
                  ))}
              </div>}
              {currentDiv === 3 && <div className={styles.skillsContainer} >
                {content.skills.map((skills, index) => (
                  <div key={index} className={styles.skillCatagory}>
                    <h4>{skills.name}</h4>
                    <h5>{skills.level}</h5>
                      <ul>{skills.keywords.map((keys, index) => (
                        <div key={index} className={styles.skillItems}>
                        <li>{keys}</li>
                        </div>
                      ))}</ul>
                      <br />
                  </div>
                ))}</div>}
              {currentDiv === 4 && <div className={styles.projContainer} >
                {content.projects.map((projects, index) => (
                  <div key={index} className={styles.credItem}>
                    <h4>{projects.name}</h4>
                    <h5>{projects.description}</h5>
                    <Link href={""}>{projects.url}</Link>
                  </div>
                ))}</div>}
              {currentDiv === 5 && <div className={styles.credContainer} >
              {content.awards.map((award, index) => (
                  <div key={index} className={styles.credItem}>
                    <h4>{award.title}</h4>
                    <h5>{award.date}</h5>
                    <p>{award.awarder}</p>
                  </div>
                ))}</div>}
            </div>
            
            
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default MyCard;
