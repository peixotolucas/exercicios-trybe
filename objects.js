//Exercise objects with javascript - part 1.
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  //both functions using dot notation only

  const customerInfo = (order) => {
    const courier = order.order.delivery.deliveryPerson;
    const client = order.name;
    const telephone = order.phoneNumber;
    const destiny = `${order.address.street}, Nº: ${order.address.number}, Apt: ${order.address.apartment}`;
    console.log(`Olá ${courier}, entrega para: ${client}, Telefone: ${telephone}, ${destiny}`)
	};
  customerInfo(order);

	console.log('-----------------------------------')
	const orderModifier = (order) => {
		const customer = order.name = "Luiz Silva";
		const pizzas = Object.keys(order.order.pizza);
		const drink = order.order.drinks.coke.type;
		const money = order.payment.total = 50;

		console.log(`Olá ${customer}, o total do seu pedido de ${pizzas} e ${drink} é de R$ ${money},00`)
	};

	orderModifier(order);

const pessoa = {Name: 'Rod Stewart',
Profession: 'Musician', Gender: 'Male'}

const personality = {Courage: 5.5, Spirity: 5, Sensuality: 5.5}

Object.assign(pessoa, personality)
console.log(pessoa)
