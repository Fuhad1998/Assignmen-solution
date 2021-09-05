function updatePrice(id){
    
    if(id === '8GB'){
        
        updateSpanText('memoty cost', 0)
    } 
    else if(id === '16GB'){
       
        updateSpanText('memoty cost', 180);
    }
    else if(id === '256GB'){
        
        updateSpanText('Storage Cost', 0);
    }
    else if(id === '512GB'){
       
        updateSpanText('Storage Cost', 100);
        
    }
    else if(id === '1TB'){
      
        updateSpanText('Storage Cost', 180);
    }
    else if(id === 'Friday,Aug 25'){
        
        updateSpanText('Delivery charge', 0);
    }
    else if(id === 'Friday,Aug 21'){
        updateSpanText('Delivery charge', 20);
    }
    updateSubtotal()
   
}

function updateSpanText(id, price){
    document.getElementById(id).innerText = price;
}

 function getSpanText(id){
     const price = document.getElementById(id).innerText;
     return parseInt(price);
 }

 function updateSubtotal(){
     const total = 1299 + getSpanText('memoty cost') + getSpanText('Storage Cost') + getSpanText('Delivery charge');
     console.log(total);
     updateSpanText('total-cost', total)
     updateSpanText('discount-total-price', total)
 }
 function couponHendelar(){
     const couponCode = document.getElementById('coupon-code').value;
     
     if(couponCode === 'stevekaku'){
       const total = getSpanText('total-cost');
       const discountTotal = total * .80;
       updateSpanText('discount-total-price', discountTotal);

     }
 }