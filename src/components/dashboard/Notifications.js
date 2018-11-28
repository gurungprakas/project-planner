import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
         {/* to check that notifications actually exists (in line 4), do this before map */}
            { notifications && notifications.map(item => {
              return (
                <li key={item.id}>
                <span className="green-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="red-text note-date">
                {moment(item.time.toDate()).fromNow()}
                </div>
                </li>
                )
            })}

          </ul>
        </div>
      </div>
    </div>

  )
}

export default Notifications;