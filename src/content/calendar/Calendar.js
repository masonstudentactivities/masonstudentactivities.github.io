import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import events from "../../eventsMHS.json";
export default class DemoApp extends React.Component {
    parse(events){
        for(let i = 0;i<events.length;i++){
            
        }
    }
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
        events={parse(events)}
      />
    )
  }

  handleEventClick = (info) => { // bind with an arrow function
    alert(info.event.title)
  }

}