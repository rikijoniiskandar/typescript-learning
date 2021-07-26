/**
 * 
 * 
 * Type Assertion adalah cara untuk memproses data sesuai tipenya. Dalam bahasa lain disebut
    Type Cast.
 * 
 */

  let angka: any = 1;
   console.log( (angka as number).toFixed(9));


   /**
    * Let atau Var ?
    * 
    * ECMAScript 2015 (dikenal juga dengan nama ECMAScript 6/ES6) memperkenalkan cara baru
      untuk deklarasi variabel dengan kata kunci let. Apa bedanya dengan var? Beda scope. Scope
      dari var adalah function di mana variabel dideklarasikan. let bersifat block-scoped, hanya
      berlaku di dalam blok di mana variabel kita deklarasikan.

      
    */