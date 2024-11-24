const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const cantidad = document.querySelector(".cantidad");
const mas = document.querySelector(".mas");
const menos = document.querySelector(".menos");
const total = document.querySelector(".valor-total");

mas.addEventListener("click", () => {
  cantidad.innerHTML++;
  total.innerHTML = cantidad.innerHTML * precio;
});

menos.addEventListener("click", () => {
  if (cantidad.innerHTML > 0) {
    cantidad.innerHTML--;
    total.innerHTML = cantidad.innerHTML * precio;
  }
});
