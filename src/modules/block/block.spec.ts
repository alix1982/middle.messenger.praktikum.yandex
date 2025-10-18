// import { input } from "../input/input";
// import { block } from "./block"

// import { expect } from "chai";

// console.log('1')
// describe('Smoke test for Components', () => {
//     describe('Test block', () => {
//         // let blockClass: typeof Block;

//         function checkArgumentsBlock(arg1:any, arg2:any, arg3:any): string {
//             // return block(arg1, arg2, arg3);
//               let result = '0';
//                 try {
//                   console.log(arg1);
//                   console.log(arg2);
//                   console.log(arg3);
//                    input.block(arg1, arg2, arg3);
//                    result = '1'
//                 } catch (err) {
//                   console.log(err)
//                   result = '2'
//                   // return err
//                 }

//                 console.log(result)
//                 return result
//               }
//           // });

//          it('render block', () => {
//           expect(checkArgumentsBlock('2', [], {}), '2');
          // expect('2', '2');
        //   blockSection.prototype.block('body', ['section', 'test'], {})
        //   const element = document.querySelector('#section');
          // console.log('4')

            // const textData = 'I am div!';
            // const buttonComponent = new blockClass({text: textData})
            // const res = (buttonComponent.element as unknown as HTMLDivElement)?.innerHTML;
            // expect('4', '4');
            // expect(res).to.be.eq(textData);
        // })


        // console.log('2')
        // beforeEach(() =>  {
        //   document.body.innerHTML = '';
        //   document.body.setAttribute('id', 'body')

        //   blockSection.prototype.block = block as ()=>void;

        //   function blockSection (
        //     idComponent:string, textSection: string,
        //   ): string {
        //     return `
        //       <section id=${idComponent} class=${idComponent}>
        //         ${textSection}
        //       </section>
        //     `
        //   }
        // })
        // console.log('3')

        // it('render block', () => {
        // //   blockSection.prototype.block('body', ['section', 'test'], {})
        // //   const element = document.querySelector('#section');
        //   console.log('4')

        //     // const textData = 'I am div!';
        //     // const buttonComponent = new blockClass({text: textData})
        //     // const res = (buttonComponent.element as unknown as HTMLDivElement)?.innerHTML;
        //     expect('4', '4');
        //     // expect(res).to.be.eq(textData);
        // })

        // it('handle click', () => {
        //     const handler = Sinon.stub();
        //     const buttonComponent = new blockClass({text: 'I am button!', events:
        //         {click: handler}
        //     });

        //     const event = new MouseEvent('click');
        //     (buttonComponent.element as unknown as HTMLDivElement)?.dispatchEvent(event);

        //     expect(handler.calledOnce).to.be.true;
        // })

    // })

    // describe('Test case #4', () => {
    //     expect('2').to.be.eq('2');
    // })
// })

// describe('Footer Component Tests', () => {
//   beforeEach(() => {
//     // Create a fresh DOM environment for each test
//     document.body.innerHTML = '';
//   });

//   afterEach(() => {
//     // Clean up all Sinon stubs, mocks, and fake timers
//     Sinon.restore();
//   });

//   it('should render with the correct CSS class', () => {
//     const inputElement = input('input', 'input', 'input');

//     // Append to DOM to ensure rendering completes
//     document.body.appendChild(inputElement.getContent());

//     // Check that the footer has the correct class
//     expect(inputElement.element.className).to.include('footer');
//   });

//   it('should contain two Link components', () => {
//     const inputElement = input('input', 'input', 'input');

//     // Append to DOM to ensure rendering completes
//     document.body.appendChild(inputElement.getContent());

//     // Check that there are two links inside the footer
//     const links = inputElement.element.querySelectorAll('a');
//     expect(links.length).to.equal(2);
//   });
// });
