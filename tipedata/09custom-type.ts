/** 
 * 
 * 
 * Kita bisa bikin tipe data kustom secara inline kayak begini:
 * 
 */

let kucing:{ color: string, nama:string, julukan: string };
kucing = {color: "Orange", nama: "Giselle", julukan: "Koceng Oren Barbar"}

console.log(`Kucing saya bernama ${kucing.nama} dan memiliki bulu berwarna ${kucing.color} dan mempunyai julukan '${kucing.julukan}'`)

//namun cara ini hanya bisa dipakai untuk satu variable. Cara yang lebih baik adalah pakai interface  