import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'
import Tag from '../Tag'

const CourseTimelineCard = props => {
  const {itemDetails} = props
  const {courseTitle, description, duration, tagsList} = itemDetails

  return (
    <div className="course-timeline-card">
      <div className="title-timeline-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="timeline-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-container">
        {tagsList.map(eachTag => (
          <Tag key={eachTag.id} tagDetails={eachTag} />
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
