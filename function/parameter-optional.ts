/**
 * 
 * 
 * Parameter optional dideklarasikan dengan tanda tanya "?"
 * 
 */

//parameter b optional

function perkalian(a: number, b?:number):number {
  b = b || 2;
  //maksudnya adalah jika nilai parameter b tidak ada, anggap nilainya 2
  
  return a * b ;
}

//trigger
console.log(perkalian( 5));
//output 10

console.log(perkalian(10,7));
//output 70