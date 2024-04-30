
<!doctype html>
<html>
  <head>
    <title>cart quantity</title>
  </head>
  <body>
    <button onclick="
    console.log('cart quantity: ${cartQuantity}');
    ">show quantity</button>
    
    <button onclick="
    cartquantity ++;
    console.log('cart quantity: ${cartQuantity}');
    ">Add to cart</button>
    
    <button onclick="
    cartquantity += 2;
    console.log('cart quantity: ${cartQuantity}');
    ">+2</button>

    <button onclick="
    cartquantity += 3;
    console.log('cartquantity: ${cartQuantity}');
    ">+3</button>

    <button onclick="
    cartquantity = 0
    console.log('cart was reset')
    console.log('cart quantity: ${cartQuantity}');
    ">reset cart</button>

    <script>
      let cartQuantity = 0;
    </script>
  </body>
</html>
