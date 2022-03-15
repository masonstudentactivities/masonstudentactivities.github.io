import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class DemoApp extends React.Component {
  addOneDay(dateString){
    var startDate = new Date(dateString);
    console.log(startDate);
    startDate.setDate(startDate.getDate() + 1)

    // endDate.setDate(startDate.getDate() + 1);
     var newString = startDate.toLocaleDateString("en-GB").split("/");
     return newString[2] + "-0" + newString[0] + "-0" + newString[1];
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
                end:this.addOneDay('2022-03-05 UTC-5')
            }
          ]}
      />
    )
  }

  handleEventClick = (info) => { // bind with an arrow function
    alert(info.event.title)
  }

}