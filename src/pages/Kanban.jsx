import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirectiv, Drag } from "@syncfusion/ej2-react-kanban";
import Header from "../components/Header";
import { kanbanData, kanbanGrid } from '../data/dummy';

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Kanban" />
      <KanbanComponent id="kanban"
      cardSettings={{contentField: "Summary", headerField: "Id"}}
      dataSource={kanbanData}
      keyField="Status">
        <ColumnsDirective>
          {kanbanGrid.map((id,item) => 
          <ColumnsDirective key={id} {...item}/>
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban
