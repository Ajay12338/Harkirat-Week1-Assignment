/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function isItemPresent(item,category){
  for(let i=0;i<item.length;i++){
    if(item[i] === category) return true;
  }
  return false;
}
function calculateTotalSpentByCategory(transactions) {
  let category_amount = [];
  let items = [];
  let cost_of_each_items = [];
  for(let currObj of transactions) {
    if(isItemPresent(items,currObj.category))
    {
      let currIndex  = items.indexOf(currObj.category);
      cost_of_each_items[currIndex] += currObj.price;
    }
    else
    {
      items.push(currObj.category);
      cost_of_each_items.push(currObj.price);
    }
  }
  for(let i = 0; i < items.length;i++)
  {
    category_amount.push({category:items[i],totalSpent:cost_of_each_items[i]});
  }
  return category_amount;
}
module.exports = calculateTotalSpentByCategory;
