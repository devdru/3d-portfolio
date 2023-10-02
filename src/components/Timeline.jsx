import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import experiences from '../components/timeline';
import { textVariant } from '../components/utils/motion';
import '../assets/css/timeline.css';
import '../assets/css/central.css'
import Img from'../assets/img/samp8.png'



const ExperienceCard = ({ experience }) => {
  const iconStyle = { backgroundColor: experience.iconBg };
  const contentStyle = { 
    background: `linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 64%, rgba(23,22,22,1) 64%, rgba(15,15,15,1) 95%, rgba(0,0,0,1) 96%), 
    rgb(0,0,0)`,
    color: '#fff'
  };
  const contentArrowStyle = { borderRight: '7px solid #232631' };
  const titleStyle = { color: 'white', fontSize: '24px', fontWeight: '400' };
  const listStyle = { marginTop: '5px', marginLeft: '20px', listStyleType: 'disc' };
  const listItemStyle = { paddingLeft: '10px' }; 
  return (
    <VerticalTimelineElement 
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={experience.date}
      iconStyle={iconStyle}
      icon={
        <div id="t1">
          <img src={experience.icon} alt={experience.company_name} style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
        </div>
      }
    >
      <div>
        <h3 id='h2' style={titleStyle}>{experience.title}</h3>
        <p style={{ margin: '0' }}>{experience.company_name}</p>
      </div>
      <ul style={listStyle}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} style={listItemStyle}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <div id='Exp'style={{scrollMarginTop:"130px"}} >
      <motion.div id='cp' variants={textVariant()}>
        <div style={{display:"flex"}}>
        <p id='h3'>Work Experience and education</p>
        <img style={{width:"10%",padding:"0px 15px"}} src={Img} alt="char" />
        </div>
        <h2 id='h1'> What I have done so far</h2>
      </motion.div>

      <div id="t4">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
