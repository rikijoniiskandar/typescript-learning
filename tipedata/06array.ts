/**
 * Untuk membuat variabel bertipe array kita harus mendeklarasikan tipe data setiap element didalamnya. 
 */

let nilaiSiswa: number[] = [80, 78, 90, 23, 100];
let namaSiswa: string[] = ["Bejo", "Tejo", "John"];
let tokenSiswa: any[] = [121333, "inikfkdsd2134"];

console.log(`nomor token = ${tokenSiswa[1]}`);

//output nomor token = inikfkdsd2134

/**
 * Kita juga bisa pake sintaks Generic Array.
 * 
 * let a: Array<number> = [100,200];
 * let b: Array<any> = [1,2,'a','b'];
 * 
 * Generics kita bahas lebih lanjut di bagian lain

 */