
// Price of Mangoes
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(q, p){
    return (Math.floor(q / 3) * 2 * p) + (q % 3 * p);
  }