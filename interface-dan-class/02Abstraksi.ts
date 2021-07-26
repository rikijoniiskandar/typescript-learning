/**
 * 
 * 
 * Abstraksi (abstraction) menawarkan fleksibilitas dalam penulisan kode. Caranya kita pake
tipe data yang abstrak atau generik setiap kali kita bikin variabel. Maksudnya supaya
variabel yang kita buat nggak terikat pada satu macam tipe data / objek aja, tapi bisa dipake
bermacam objek yang kompatibel. Abstraksi bisa bantu kita menyederhanakan kode karena
variabel yang kita buat bisa dipake untuk menyimpan data yang beda-beda tapi masih
kompatibel satu sama lain tergantung situasi. Dengan kata lain, variabel yang kita buat
bersifat polimorfis.

Polimorfisme asalnya dari bahasa Yunani (polys, morphs) yang artinya banyak bentuk.
Dalam bahasa OOP, fitur ini adalah implementasi dari Liskov Substitution Principle yang
bunyinya (kurang lebih):

Interface adalah tipe data abstrak karena hanya berisi deklarasi variabel & function, tanpa
nilai/isi.
 * 
 */

interface Pekerjaan{
  programmer(): void;
}

class Riki implements Pekerjaan{
  programmer(): void{
    console.log('Ngoding pakai Macbook Pro');
  }
}

class Bayu implements Pekerjaan{
  programmer(): void{
    console.log("Ngoding pakai laptop Lenovo")
  }
}

let lagiNgoding:Pekerjaan[] = [ new Riki(), new Bayu()];
let l:Pekerjaan;
while(lagiNgoding.length > 0 ) {
  l = lagiNgoding.shift();
  l.programmer();
}