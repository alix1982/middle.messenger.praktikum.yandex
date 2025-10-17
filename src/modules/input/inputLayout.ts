
export function inputLayout(name: string, type: string, placeholder: string) {
  return `
        <input class='input' type=${type} name=${name} id=${name} placeholder=${placeholder}/>
    `
}
