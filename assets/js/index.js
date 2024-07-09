document
  .getElementById("copy-email")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita la acción predeterminada del enlace

    const email = "joaquin@example.com";
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Mostrar el tooltip
    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block";
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;

    // Ocultar el tooltip
    setTimeout(() => {
      tooltip.style.display = "none";
    }, 3000);
  });
