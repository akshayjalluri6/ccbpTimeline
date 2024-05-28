import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {itemDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = itemDetails

  return (
    <div className="project-time-line-card">
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <p className="duration">{duration}</p>
          <AiFillCalendar className="calender-icon" />
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
