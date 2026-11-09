// Завдання 5. Створюємо масив об'єктів orders
const orders = [
  {
    orderId: 1,
    customer: { name: "Олена", email: "olena@gmail.com" },
    items: [{ name: "Ноутбук", price: 20000 }, { name: "Мишка", price: 500 }],
    total: 20500
  },
  {
    orderId: 2,
    customer: { name: "Андрій", email: "andrii@gmail.com" },
    items: [{ name: "Клавіатура", price: 1500 }],
    total: 1500
  },
  {
    orderId: 3,
    customer: { name: "Олена", email: "olena@gmail.com" },
    items: [{ name: "Монітор", price: 7000 }],
    total: 7000
  }
];

// Функція getTotalSpentByCustomer, яка приймає масив orders та ім'я клієнта
function getTotalSpentByCustomer(ordersArray, customerName) {
  // Використовуємо filter для вибору замовлень конкретного клієнта
  // та reduce для підрахунку загальної суми
  return ordersArray
    .filter(order => order.customer.name.toLowerCase() === customerName.toLowerCase())
    .reduce((sum, order) => sum + order.total, 0);
}

console.log(getTotalSpentByCustomer(orders, "Олена")); 

// Завдання 6. Створюємо масив products та масив purchases
const products = [
  { productId: 101, name: "Смартфон", price: 10000 },
  { productId: 102, name: "Навушники", price: 2000 },
  { productId: 103, name: "Годинник", price: 5000 }
];

const purchases = [
  { purchaseId: 1, productId: 101, quantity: 2 },
  { purchaseId: 2, productId: 102, quantity: 3 },
  { purchaseId: 3, productId: 101, quantity: 1 },
  { purchaseId: 4, productId: 103, quantity: 4 }
];

// Функція getTotalSales, яка об'єднує дані через reduce() та find()
function getTotalSales(productsArray, purchasesArray) {
  return purchasesArray.reduce((summary, purchase) => {
    // Знаходимо товар за productId за допомогою find()
    const product = productsArray.find(p => p.productId === purchase.productId);
    
    if (product) {
      // Обчислюємо дохід від конкретної покупки (ціна * кількість)
      const revenue = product.price * purchase.quantity;
      
      // Якщо такий товар уже є в об'єкті-акумуляторі, додаємо дохід, інакше записуємо вперше
      if (summary[product.name]) {
        summary[product.name] += revenue;
      } else {
        summary[product.name] = revenue;
      }
    }
    
    return summary;
  }, {});
}

console.log(getTotalSales(products, purchases));
