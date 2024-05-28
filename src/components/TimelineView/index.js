import {Chrono} from 'react-chrono'
import './index.css'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimeLineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="chrono-container">
      <h1 className="my-journey-of">
        MY JOURNEY OF{' '}
        <span>
          {' '}
          <br />{' '}
        </span>{' '}
        <span className="ccbp">CCBP 4.0</span>
      </h1>
      <Chrono
        theme={{
          primary: 'blue',
          secondary: '#ffffff',
        }}
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard key={each.id} itemDetails={each} />
          }
          return <ProjectTimelineCard key={each.id} itemDetails={each} />
        })}
      </Chrono>
    </div>
  )
}

export default TimeLineView
