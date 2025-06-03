const productos = [
  {
    nombre: 'Portátil HP 15"',
    descripcion: 'Portátil con procesador Intel i5 y 8GB RAM.',
    precio: 599.99,
    imagen: 'img/portatil.avif',
  },
  {
    nombre: 'Auriculares Bluetooth',
    descripcion: 'Auriculares inalámbricos con cancelación de ruido.',
    precio: 89.99,
    imagen: 'img/cascos.jpg',
  },
  {
    nombre: 'Smartphone Galaxy X',
    descripcion: 'Pantalla AMOLED, cámara triple, 128GB.',
    precio: 399.99,
    imagen: 'img/samsung_x.jpg',
  },
  {
    nombre: 'Teclado Mecánico RGB',
    descripcion: 'Interruptores azules, retroiluminación LED.',
    precio: 59.99,
    imagen: 'img/teclado.jpg',
  }
];

const productList = document.getElementById('product-list');

productos.forEach(producto => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='img/placeholder.jpg'; this.alt='Imagen no disponible';">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <div class="precio">${producto.precio.toFixed(2)} &euro;</div>
  `;

  productList.appendChild(card);
});

// Validación de formulario de contacto
const form = document.getElementById('form-contacto');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por contactarnos! Te responderemos pronto.');
  form.reset();
});