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
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2379b290&ctz=America%2FNew_York&src=Y19tZjY1NmE0MmU2ZmpwdjFzYjFoNWM3NXYxb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%2333B679" width={1000} height={600}></iframe>
        {/*<iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=AGENDA&showTz=1&showNav=0&showPrint=0&showTabs=0&src=Y19tZjY1NmE0MmU2ZmpwdjFzYjFoNWM3NXYxb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33" width={1000} height={500} />*/}
        { /* <>
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
        */}
        </>
)
    } else{
      return(
        <p>This calendar requires JavaScript to run.</p>
      )
    }

  }
}
