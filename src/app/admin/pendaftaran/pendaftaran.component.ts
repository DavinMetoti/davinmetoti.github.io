import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendaftaran',
  templateUrl: './pendaftaran.component.html',
})
export class PendaftaranComponent implements OnInit {
  
  isLoading: boolean = false;
  kelamin:any;
  selectedkelamin:any;
  dateValue: Date;
  dateNow = new Date();
  umur: any;
  bulan: any;
  hari: any;
  goldarah:any;
  selectgoldarah:any;
  selectagama:any;
  agama:any;
  selectpendidikan:any;
  pendidikan:any
  pekerjaan:any
  selectpekerjaan:any

  pilihpekerjaan= [
    {kerja : "Guru"},
    {kerja : "Dokter"},
    {kerja : "Wiraswasta"},
    {kerja : "PNS"},
    {kerja : "Swasta"},
    {kerja : "Wirausaha"},
    {kerja : "Lainnya"},
  ]

  pilihpendidikan= [
    {pend : "SD"},
    {pend : "SMP"},
    {pend : "SMA/SMK"},
    {pend : "D3"},
    {pend : "S1"},
    {pend : "S2"},
    {pend : "S3"},
  ]

  pilihanagama=[
    {agama : "Islam"},
    {agama : "Kristen"},
    {agama : "Khatolik"},
    {agama : "Budha"},
    {agama : "Hindu"},
    {agama : "Konghucu"},
  ]

  golongandarah=[
    {gol : "-"},
    {gol : "A"},
    {gol : "B"},
    {gol : "AB"},
    {gol : "O"},
    {gol : "A+"},
    {gol : "B+"},
    {gol : "AB-"},
  ]

  dropdownkelamin=[
    {jenis : "Laki Laki"},
    {jenis : "Perempuan"}
  ]

  constructor() {
    // this.dateNow = new Date();
   }

  ngOnInit() {
  }

  search(): void {
    this.isLoading = true;
    //lakukan proses pencarian data
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); //setelah 2 detik isLoading diubah kembali menjadi false
  }
  
  onDateChange(): void {
    const today = new Date();
    const birthDate = new Date(this.dateValue);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.umur = age + " Tahun";

    // Hitung selisih bulan antara hari ini dan tanggal lahir
    let bulanDiff = today.getMonth() - birthDate.getMonth();
    if (bulanDiff < 0) {
      bulanDiff += 12;
    }

    // Hitung selisih hari antara hari ini dan tanggal lahir
    let hariDiff = today.getDate() - birthDate.getDate();
    if (hariDiff < 0) {
      hariDiff += new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate();
      bulanDiff--;
    }

    this.bulan = bulanDiff + " Bulan";
    this.hari = hariDiff + " hari";
  }

}
