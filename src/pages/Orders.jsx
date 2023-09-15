import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { pdfExport } from '@syncfusion/ej2/pivotview';

const Orders = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Orders"/>
      <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ContextMenu, Edit, Sort, Filter,Page, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders
