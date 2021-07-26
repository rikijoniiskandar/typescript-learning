interface IsUser{
  //hanya deklarasi
  read: boolean;
  post: boolean;
  delete(): void;
  update(): void;
}

class User implements IsUser {
  //implementasi IsUser

  //buat definisi variable dan function
  read: true;
  post: true;
  delete(): void {
    console.log("is deleted");
  };
  update(): void {
    console.log("is updated");
  };
}

/** 
 * Penulisan variabel dalam sebuah kelas/interface nggak pakai kata kunci
let atau var. Function juga nggak pakai kata kunci function.
 */


// Sebuah class bisa menginplementasikan lebih dari satu interface\

interface IsWebsite {
  website(): void;
}

class Blog implements IsUser, IsWebsite {
  //implementasi IsUser
  read: true;
  post: true;
  delete(): void {
    console.log("is deleted");
  };
  update(): void {
    console.log("is updated");
  };


  //Implementasi IsWebsite
  website(): void {
    console.log("Online");
  }
}