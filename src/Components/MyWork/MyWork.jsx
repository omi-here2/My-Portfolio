import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Work And Projects</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a
            key={index}
            href={work.w_url} // Use the project URL from mywork_data
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security improvement for new tab
            className="project-link"
          >
            <img
              src={work.w_img}
              alt={work.w_name} // Use project name for alt text
              className="project-image"
            />
          </a>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
