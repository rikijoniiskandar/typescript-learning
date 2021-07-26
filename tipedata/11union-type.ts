/**
 * 
 * 
 * Union-type biasa digunakan untuk deklarasi variabel untuk tipe data lebih dari satu (mirip any tapi
   terbatas)
 * 
 */

  let password: string | number;
  //maksudnya adalah variabel password bisa bertipe data string ataupun number

  password = 2445325234432; 
  // okee

  password = "nabila";
  // okee

  password = true;
  //error karena password dideklarasikan untuk bertipe string or number dan tidak bisa boolean
