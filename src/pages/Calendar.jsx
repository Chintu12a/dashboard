import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';
import {scheduleData} from "../data/dummy"

const Calendar = () => {
  const eventSettings = {dataSource: scheduleData} 
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="page" title="Calendar"/>
      <ScheduleComponent height="650px"
      eventSettings={eventSettings}
      selectedDate={new Date(2021,0,9)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
