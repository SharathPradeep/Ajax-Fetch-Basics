document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Customer -button 1

function loadCustomer(){

  const xhr=new XMLHttpRequest();

  xhr.open('GET','customer.json',true);

  xhr.onload=function(){
    if(xhr.status===200){
      // console.log(xhr.responseText);
      const customer=JSON.parse(xhr.responseText);
      const div1=document.getElementById('customer');
      
      const output=`<ul>
                        <li>ID: ${customer.id}</li>
                        <li>NAME: ${customer.name}</li>
                        <li>COMPANY: ${customer.company}</li>
                        <li>PHONE: ${customer.phone}</li>
                    </ul>`;
      div1.innerHTML=output;
    }
  }

  xhr.send();
}



// Load Customers-button 2

function loadCustomers(){

  const xhr=new XMLHttpRequest();

  xhr.open('GET','customers.json',true);

  xhr.onload=function(){
    if(xhr.status===200){
      // console.log(xhr.responseText);
      const customers=JSON.parse(xhr.responseText);
      const div2=document.getElementById('customers');
      
      let output='';

      customers.forEach(function(current){
        output+=`<ul>
                    <li>ID: ${current.id}</li>
                    <li>NAME: ${current.name}</li>
                    <li>COMPANY: ${current.company}</li>
                    <li>PHONE: ${current.phone}</li>
                </ul>`;
      })
      div2.innerHTML=output;
    }
  }

  xhr.send();
}




