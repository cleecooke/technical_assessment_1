function nameMenuItem(foodName) {
  return ("Delicious " + foodName)                  
                                    // COOKE-NOTE: simply result/returns
                                    //     the passed name but
}

function createMenuItem (mName, mPrice, mType) {
  var menuItem = {
    name:   mName,                  // COOKE-NOTE: bracket this was wrong, remembert {}     
    price:  mPrice,                 //     is "return menuItem" enough? Passed! But
    type:   mType,                  //     seems weird to me. Look at past Zoom/slides
  }                                 //     and YouTube this later
  return menuItem;
} 

function addIngredients (ingrType, ingrArray) {
  if (ingrArray.includes(ingrType)) {
    return false;
  } else {
    return ingrArray.push(ingrType);
  }
}

  // COOKE-NOTE: initial try:
  //          function formatPrice (initialPrice) {
  //            if (initialPrice != String.includes("$")){
  //              return ("$" + initialPrice);
  //            } else {
  //              return initialPrice;
  //            }
  //          }

  function formatPrice (itemValue) {
    var priceSignAdded = "$" + itemValue;
    return priceSignAdded;
  } 

  // COOKE-NOTE: having issues with this, trying to move forward

  function decreasePrice (currentPrice, fullPrice) {
    var priceTenPerOff = (currentPrice - currentPrice * (1 / 10));
    if (currentPrice == fullPrice) {
      return priceTenPerOff;
    } else {
      return currentPrice;
    }
  }       // ** AssertionError: expected 6 to equal 5.4, actual -6?



  function createRecipe (ingred, cost, meal) {
    var menuItemType = {
      title:      ingred,
      price:      cost,
      menuItem:   meal,
    }                                   
      return menuItemType;
    
  }
  
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
