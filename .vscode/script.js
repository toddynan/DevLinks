function toggleMode() {
  const html =
    document.documentElement /*acessa e guarda a propriedade documentElement do objeto document (nossa página inteira). essa propriedade é um elemento html. */

  if (html.classList.contains("light")) {
    /* se a lista de classe do elemento html contém light */
    html.classList.remove("light") /* remove o light */
  } else {
    html.classList.add(
      "light"
    ) /* adiciona o light na lista de classes do elemento html */
  }

  /*html.classList.toggle("light") - maneira de se fazer a mesma coisa */

  // pegar a imagem //
  const image = document.querySelector("#profile img") //acessa a propriedade de procurar pelo seletor css //

  if (html.classList.contains("light")) {
    //substituir a imagem para light-mode //
    image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // manter a imagem dark mode //
    image.setAttribute("src", "./assets/avatar.png")
  }

  // pegar o alternativo //
  const alternative = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //substituir o alternativo para light-mode //
    alternative.setAttribute(
      "alt",
      "Foto de Renan Garcia sorrindo, com barba, óculos escuros e camisa preta em sua casa."
    )
  } else {
    // manter o alternativo dark mode //
    alternative.setAttribute(
      "alt",
      "Foto de Renan Garcia sorrindo, com barba e camisa preta em sua casa."
    )
  }
}
