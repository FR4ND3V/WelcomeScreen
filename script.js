window.onload = function () {
  // Hacemos que el contenido esté oculto al principio
  document.getElementById("content").style.display = "none";

  // Definimos los elementos y los tiempos de animación en arrays
  const elements = [
    {
      id: "symbol-left",
      showClass: "opacity",
      time: 100,
      action: "showSymbol",
    },
    {
      id: "symbol-right",
      showClass: "opacity",
      time: 100,
      action: "showSymbol",
    },
    { id: "frandev", showClass: "typing", time: 100, action: "typing" },
    {
      id: "content",
      showClass: "opacity",
      time: 3600, // Este tiempo debe ser mayor que el de la animación para que termine primero
      action: "showContent",
    },
  ];

  // Función para mostrar el símbolo con opacidad
  function showSymbol(id, delay) {
    setTimeout(() => {
      document.getElementById(id).style.opacity = "1";
    }, delay);
  }

  // Función para aplicar el efecto de tipeo
  function typing(id, delay) {
    setTimeout(() => {
      document.getElementById(id).classList.remove("hidden");
      document.getElementById(id).classList.add("typing");
    }, delay);
  }

  // Función para mostrar el contenido con transición de opacidad
  function showContent(id, delay) {
    setTimeout(() => {
      // Primero ocultamos el código con una transición suave
      const codeElement = document.getElementById("code");
      codeElement.style.opacity = "0"; // Desvanecemos el código
      setTimeout(() => {
        codeElement.style.display = "none"; // Lo ocultamos completamente después de la transición
      }, 1000); // Sincronizamos el tiempo con la transición

      // Luego mostramos el contenido con transición de opacidad
      const content = document.getElementById(id);
      content.style.display = "block"; // Aseguramos que el contenido esté disponible
      setTimeout(() => {
        content.style.opacity = "1"; // Aparece suavemente
      }, 10); // Aseguramos que la propiedad display se haya aplicado antes
    }, delay);
  }

  // Procesar los elementos en el array
  elements.forEach((item) => {
    if (item.action === "showSymbol") {
      showSymbol(item.id, item.time);
    } else if (item.action === "typing") {
      typing(item.id, item.time);
    } else if (item.action === "showContent") {
      showContent(item.id, item.time);
    }
  });
};
