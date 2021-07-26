/**
 * 
 * 
 * Untuk tipe data custom yang lebih kompleks kita bahas nanti dibagian Class & Interface
 * 
 */

  interface Laptop {
    merk: string;
    type: string;
    prosesor: string;
    harga: number;
    jumlah: number;
  }

  let myLaptop:Laptop = {
    merk: "Lenovo",
    type: "Thinkpad T450s",
    prosesor: "Intel Core i5",
    harga: 19000000,
    jumlah: 1,
  }

  let laptopKamu:Laptop = {
    merk: "Macbook Pro 2020",
    type: "Retina",
    prosesor: "Intel core i7",
    harga: 30000000,
    jumlah: 1
  }
  //dengan menggunakan interface kita tidak perlu memasukkan type secara berulang-ulang.

  console.log(`Saya ingin membeli laptop yang bermerk ${laptopKamu.merk} dan juga ${myLaptop.merk} dengan total harga Rp ${laptopKamu.harga + myLaptop.harga}`)