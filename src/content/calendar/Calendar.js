import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class DemoApp extends React.Component {
  addOneDay(dateString){
      try{
        var startDate = new Date(Date.parse(dateString));
        startDate.setMinutes(startDate.getMinutes() + startDate.getTimezoneOffset());

        startDate.setDate(startDate.getDate() + 1);
        console.log(startDate);
        // endDate.setDate(startDate.getDate() + 1);
        return startDate.toISOString().split('T')[0];
      } catch{
          console.error("Malformed date string " + dateString);
        return "";
      }
  }
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        eventClick={this.handleEventClick}
        events={[
            { title: 'event 1', date: '2022-03-01' },
            { title: 'event 1', date: '2022-03-02' },
            { title: 'event 2', date: '2022-03-02' },
            {
                title:"Multiple days",
                start:'2022-03-02',
                end:this.addOneDay('2022-03-05')
            }
          ]}
      />
    )
  }

  handleEventClick = (info) => { // bind with an arrow function
    alert(info.event.title)
  }

}