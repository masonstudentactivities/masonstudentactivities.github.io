import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interaction from "@fullcalendar/interaction"
import events from "../../eventsMHS.json";
export default class Calendar extends React.Component {
  constructor(){
    super();
    this.calendarRef = React.createRef();
    this.a = 5;
    console.log(this.calendarRef);
  }
  someMethod() {
    console.log(this.a);
    console.log(this.calendarRef);
    let calendarApi = this.calendarRef.current.getApi()
    calendarApi.next()
  }
  render() {
    return (
      <>
      <FullCalendar
        plugins={[interaction, dayGridPlugin ]}
        events={this.parse(events)}
        ref={this.calendarRef}
        dayMaxEventRows={3}
        views={
          {
            dayGridMonth: {
              dayMaxEventRows: 3 // adjust to 6 only for timeGridWeek/timeGridDay
            }
          }
        }
        initialView="dayGridMonth"
        headerToolbar={false}
      />
      <button onClick={this.someMethod.bind(this)}>Hello</button>
      </>
    )
  }

}