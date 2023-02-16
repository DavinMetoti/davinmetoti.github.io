import { Component, OnInit } from '@angular/core';
import { Karyawan } from 'src/app/api/karyawan';
import { ProductService } from 'src/app/service/productservice';
import { SortEvent } from 'primeng/api'
import * as FileSaver from 'file-saver';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Product } from 'src/app/api/product';


@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
})
export class TabelComponent implements OnInit {

  products1: Product[];
  selectedKaryawan: Karyawan[];
  productService: any;

  constructor(productService: ProductService) { }

  cols: any;
  exportColumns: any[];
  jsPDF: any;

  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.products1 = data);
  };

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
    this.cols = [
      {  header: 'NAMA', field: 'nama',},
      {  header: 'EMAIL', field: 'email', },
      { header: 'CABANG',field: 'Cabang',  },
      { header: 'DIVISI',field: 'Divisi',  }
  ];

  this.exportColumns = this.cols.map(col => ({title: ['Nama','Email','Cabang','Divisi'], dataKey: col.field}));
}

exportPdf() {
    import("jspdf-autotable").then(x => {
  const doc = new jsPDF('p','pt');
  doc['autoTable'](this.exportColumns, this.products1);
  // doc.autoTable(this.exportColumns, this.products);
  doc.save("Data_Karyawan.pdf");
    })
}


exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.products1);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "Data Karyawan");
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
}

