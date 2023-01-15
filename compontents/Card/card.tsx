import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import content from "../../resume.json";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { MdFlipCameraAndroid } from "react-icons/md";
import { AiFillRightCircle } from "react-icons/ai";


function MyCard() {
  const [currentDiv, setCurrentDiv] = useState(1);

  const pageClick = () => {
    setCurrentDiv((currentDiv % 5) + 1);
  };

  const [flip, setFlip] = useState(false);
  function handleClick(e:any) {
    e.stopPropagation();
  }
  return (
    <>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className={styles.CardRootFront} onClick={() => setFlip(!flip)}>
          <div className={styles.bodyIntro}>
            <div className={styles.cloudIcon}>
              <BsCloudHaze2Fill size={200} color={'white'}/>
            </div>  
            
            <div className={styles.linkBar}>
              <div className={styles.introName}>
                <h1 className={styles.firstName}>JOSHUA R. HOLLIS</h1>
              </div>
              <h3 className={styles.introRole}>{content.role}</h3>
              <Link
                onClick={handleClick}
                href={""}
                className={styles.frontlink}
              >
                www.jrh-cloudblog.link
              </Link>
            </div>
            <div className={styles.flipPrompt}>
              <MdFlipCameraAndroid size={35} />
            </div>
          </div>
        </div>
        <div className={styles.CardRootBack}>
          <div className={styles.bodySidebar} onClick={() => setFlip(!flip)}>
            
            <div className={styles.sideContainer}>

              <ul className={styles.bioList}>
                <li><h1>{content.basics.phone}</h1></li>
                <li>{content.basics.email}</li>
                <li>{content.basics.location.address}</li>
                <li>
                  <Link className={styles.frontlink} href={""}>{content.basics.website}</Link>
                </li>
                <li><p>{content.misson}</p></li>
                <li>
                  <Link className={styles.bioListLink}
                    href={"https://drive.google.com/drive/folders/1vy6rZlfveUzKd3p2v5cVqtzgVC0HANZQ?usp=sharing"}

                  >
                    <p className={styles.frontlink} onClick={handleClick}>Resume Download</p>
                  </Link>
                </li>
              </ul>
              <br />
            </div>
            <div onClick={handleClick} className={styles.contentContainer}>
              
                <button className={styles.slideButton} onClick={pageClick}>
                  <AiFillRightCircle size="10x" color={'white'}/>
                </button>
                {currentDiv === 1 && (
                  <div className={styles.experienceContainer}>
                    {content.work.map((work, index) => (
                      <div key={index} className={styles.workItem}>
                        <h1>
                          {work.position} at {work.company}
                        </h1>
                        <hr />
                        <h2>
                          {work.startDate} - {work.endDate} - {work.location} - <a href={work.website}>Website</a>
                        </h2>
                        <p>{work.highlights}</p>
                      </div>
                    ))}
                  </div>
                )}
                {currentDiv === 2 && (
                  <div className={styles.eduContainer}>
                    {content.education.map((edu, index) => (
                      <div key={index} className={styles.credItem}>
                        <h1>{edu.area}</h1>
                        <h2>{edu.institution}</h2>
                        <p>
                          {edu.startDate} - {edu.endDate}
                        </p>
                        <p>{edu.gpa}</p>
                      </div>
                    ))}
                  </div>
                )}
                {currentDiv === 3 && (
                  <div className={styles.skillsContainer}>
                    {content.skills.map((skills, index) => (
                      <div key={index} className={styles.skillCatagory}>
                        <h1>{skills.name}</h1>
                        <h5>{skills.level}</h5>
                        <ul>
                          {skills.keywords.map((keys, index) => (
                            <div key={index} className={styles.skillItems}>
                              <li>{keys}</li>
                            </div>
                          ))}
                        </ul>
                        <br />
                      </div>
                    ))}
                  </div>
                )}
                {currentDiv === 4 && (
                  <div className={styles.projContainer}>
                    {content.projects.map((projects, index) => (
                      <div key={index} className={styles.projItem}>
                        <h1>{projects.name}</h1>
                        <hr />
                        <h2>{projects.description} - <Link href={""}>{projects.url}</Link></h2>
                        {projects.keywords.map((keys, index) => (
                            <div key={index} className={styles.stackObjects}>
                              <li>{keys}</li>
                            </div>
                          ))}
                        
                      </div>
                    ))}
                  </div>
                )}
                {currentDiv === 5 && (
                  <div className={styles.credContainer}>
                    {content.awards.map((award, index) => (
                      <div key={index} className={styles.credItem}>
                        <h1>{award.title}</h1>
                        <h2>{award.date}</h2>
                        <p>{award.awarder}</p>
                      </div>
                    ))}
                  </div>
                )}

            </div>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
}

export default MyCard;
