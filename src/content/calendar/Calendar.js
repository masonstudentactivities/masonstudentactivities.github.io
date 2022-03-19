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
    parse(events){
        for(let i = 0;i<events.length;i++){
            /*            {
                title:"Multiple days",
                start:'2022-03-02',
                end:this.addOneDay('2022-03-05 UTC-5')
            } */
            events[i].title = events[i].name
            events[i].url = "/mhs/calendar/" + events[i].name.replaceAll(" ","-").toLowerCase();
            if(events[i].date.split("-").length > 1){
                let date = events[i].date.split("-");
                events[i].start = this.formatDate(date[0],0);
                events[i].end = this.formatDate(date[1],1);
                delete events[i].date;
            } else{
              let date = events[i].date;
              events[i].start = this.formatDate(date,0);
            }
            console.log(events[i]);
        }
        return events;
    }
  formatDate(dateString,offset){
      try{
        var startDate = new Date(Date.parse(dateString));
        startDate.setMinutes(startDate.getMinutes() + startDate.getTimezoneOffset());

        startDate.setDate(startDate.getDate() + offset);
        console.log(startDate);
        // endDate.setDate(startDate.getDate() + 1);
        return startDate.toISOString().split('T')[0];
      } catch{
          console.error("Malformed date string " + dateString);
        return "";
      }
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