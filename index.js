const shoppingKart = () => {
  console.log('Ir para o carrinho');
};

const decrementIncrement = (id, operation) => {
  const qtdPizza = document.getElementById(id);

  if (operation === 'plus') {
    qtdPizza.innerText = parseInt(qtdPizza.innerText) + 1;
    console.log(qtdPizza);
    return;
  } else {
    if (parseInt(qtdPizza.innerText) > 0) {
      qtdPizza.innerText = parseInt(qtdPizza.innerText) - 1;
      console.log(qtdPizza);
      return;
    }
    console.log(qtdPizza);
  }
};
