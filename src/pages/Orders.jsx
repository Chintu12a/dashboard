import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { excelExport, pdfExport } from '@syncfusion/ej2/pivotview';

const Orders = () => {
  let grid;
  const toolbar = ['PdfExport', "ExcelExport"];
  const toolbarClick = (args) => {
    if (grid) {
      if (args.item.id === 'grid_pdfexport') {
        grid.pdfExport();
      }
      else if (args.item.id == 'grid_excelexport') {
        grid.pdfExport();
      }
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id='grid'
        allowPaging
        allowSorting
        allowExcelExport={true}
        allowPdfExport={true}
        contextMenuItems={contextMenuItems}
        dataSource={ordersData}
        toolbar={toolbar}
        toolbarClick={toolbarClick}
        ref={g => grid = g}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ContextMenu, Edit, Sort, Filter, Page, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders
