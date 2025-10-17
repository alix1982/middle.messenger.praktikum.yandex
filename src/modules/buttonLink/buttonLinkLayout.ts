export function buttonLinkLayout (idButton: string, textButton: string, typeButton='button') {

  return `
      <button class='buttonLink' id=${idButton} type=${typeButton}>${textButton}</button>
  `
}
