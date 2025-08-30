export default 
function ( name, type, placeholder, value) {
    return `
        <input class='input' type=${type} name=${name} placeholder=${placeholder}/>
    `
}
