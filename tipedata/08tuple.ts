/**
 * 
 * Tuple adalah array yang jumlah awal elemennya fixed. Tipe data setiap elemennya boleh
   berbeda. Nilai awal tuple harus sesuai dengan urutan yang ditentukan waktu kita deklarasi
   variabelnya.
 * 
   Contoh tuple 3 element pertama string, kedua number dan yang ketiga boolean
 */

   let marvel: [string, number, boolean];

   marvel = ["Spiderman", 2, false]; 
   // OK

   marvel = [true, "Spiderman", 2];
   //error karena yang pertama harus string
