// SVG loader for Mocha tests
export async function resolve(specifier, context, nextResolve) {
  // Check if the file is a SVG file
  // if (specifier.endsWith('.svg')) {
  //   return {
  //     shortCircuit: true,
  //     url: 'data:text/javascript,export default {}'
  //   };
  // }

  // Let Node.js handle all other specifiers
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  // Check if the URL is a CSS file
  // if (url.endsWith('.svg')) {
  //   return {
  //     format: 'module',
  //     shortCircuit: true,
  //     source: 'export default {};'
  //   };
  // }

  // Let Node.js handle all other URLs
  return nextLoad(url, context);
}

// не работает, доработать когда будет время
