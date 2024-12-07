const shoppingKart = () => {
  console.log('Ir para o carrinho');
};

const oneMore = (target, operation) => {
  const value = document.getElementById('value');
  if (operation === 'plus') {
    value.innerText = parseInt(value.innerText) + 1;
  } else {
    value.innerText = parseInt(value.innerHTML) - 1;
  }
};
