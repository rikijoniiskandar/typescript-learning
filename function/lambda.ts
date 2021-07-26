  /**
   * 
   * Lambda adalah function dimana scope dari kata kunci this selalu mengacu pada objek dimana
   * function dideklarasikan, bukan object yang menjalankan function itu
   * 
   * 
   */

  let label: any = document.createElement('p');
  document.body.appendChild(label);

  let btn:any = document.createElement('button');
  btn.innerHTMl = 'CLICK ME';
  document.body.appendChild(btn);

  btn.onclick = (event:any) => {
    console.log('label', this.label);
    this.label.textContent = 'button clicked'
  }