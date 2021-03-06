import { createClass, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayCount = createClass({
  propTypes: {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number,
    backcountry: PropTypes.number
  },
  getDefaultProps() {
    return {
      total: 50,
      powder: 50,
      backcountry: 15,
      goal: 100
    }
  },
  const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
  },
  const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  },
  export const SkiDayCount = ({total, powder, backcountry, goal}) => (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{powder}</span>
            <SnowFlake />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{backcountry}</span>
            <Terrain />
          <span>days</span>
        </div>
        <div>
          <span>
            {calcGoalProgress(
                total,
                goal
            )}
          </span>
        </div>
      </div>
  )
)}
