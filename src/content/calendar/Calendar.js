import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interaction from "@fullcalendar/interaction"
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import events from "../../eventsMHS.json";
import "../../styles/calendarStyle.css";
export default class Calendar extends React.Component {
  render() {
    if (typeof window !== "undefined") {
      return (
        <>
        <FullCalendar
          plugins={[interaction, dayGridPlugin,googleCalendarPlugin ]}
          googleCalendarApiKey= 'AIzaSyC9Z83mzJ3NX6c21TPhqy0fF9oVvz2akBo'
          events= {
            {googleCalendarId: 'c_mf656a42e6fjpv1sb1h5c75v1o@group.calendar.google.com'}
          }

          dayMaxEventRows={3}
          views={
            {
              dayGridMonth: {
                dayMaxEventRows: 3 // adjust to 6 only for timeGridWeek/timeGridDay
              },
              dayGridWeek:{
                dayMaxEventRows: 3
              }
            }
          }
          height={this.props.view === "dayGridWeek" ? 200 : "100vh"}
          contentHeight={"auto"}
          initialView={this.props.view}
          headerToolbar={this.props.view === "dayGridMonth" ? {
            start: 'title', // will normally be on the left. if RTL, will be on the right
            center: '',
            end: 'prev,next,today' // will normally be on the right. if RTL, will be on the left
          } : false}
        />
        </>
      )
    } else{
      return(
        <p>This calendar requires JavaScript to run.</p>
      )
    }

  }
}