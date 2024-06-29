 function checkFilds(obj) {
    let values = Object.values(obj);
   
    let flage=true

    values.map((value) => {
        if (value==="") {
          return  flage=false
        }
        else return flage=true
    })
    return flage ? true : alert("filds missing");
}

function clearFildes(obj, setFunc) {
  for (let i in obj) {
    obj[i] = "";
  }

  setFunc(obj);
}

 const handlePrint = async (id) => {
   const printContent = document.getElementById(id);
   const printWindow = window.open("", "", "width=800,height=600");
   printWindow.document.write(`
    <!DOCTYPE html >
    <html dir="rtl" lang="ar">
      <head>
        <title>Print</title>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <style>
          /* Include any custom styles here */
        </style>
      </head>
      <body>
        ${printContent.outerHTML}
      </body>
    </html>
  `);
   printWindow.document.close();
   printWindow.focus();
   printWindow.print();
   setTimeout(() => {
     printWindow.close();
   }, 1000);
 };






module.exports={checkFilds,clearFildes ,handlePrint}







//     for (let i = 0; i < keys.length; i++){
//         if(keys)
    //     }
    
    
