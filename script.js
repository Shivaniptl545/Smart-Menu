document.addEventListener('DOMContentLoaded', function () {
  let cart = [];

  const buttons = document.querySelectorAll('.menu-item button');
  const orderBtn = document.querySelector('.order-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.menu-item'); // Ensures correct block
      const name = item.querySelector('h3').innerText;
      const price = parseInt(item.querySelector('p').innerText.replace("Rs. ", ""));
      cart.push({ name, price });
      alert(`${name} added to cart!`);
    });
  });

  orderBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let summary = "Your Order:\n";
    let total = 0;

    cart.forEach(item => {
      summary += `- ${item.name}: Rs. ${item.price}\n`;
      total += item.price;
    });

    summary += `\nTotal: Rs. ${total}`;
    alert(summary);
  });
});
