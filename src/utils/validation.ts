export function validationName(str: string) {
    let isName = false;
    // console.log(str)
    const reg = /^[A-Za-zА-Яа-я\-]+$/;
    const regFirstSymbol = /[A-ZА-Я]/;
    if (reg.test(str) && regFirstSymbol.test(str[0])) {
        isName = true;
    };
    // console.log(isName)
    return isName;
}

export function validationLogin(str: string) {
    let isName = false;
    // // str.length >= 3 && str.length <= 20 &&
    //     reg.test(str)
    //     // &&
    //     // str.match(regSymbol)
    // console.log(str)
    const reg = /^[A-Za-z0-9_\-]+$/gi;
    const regSymbol = /[A-Za-z]/;
    // console.log(reg.test(str))
    if (
        str.length >= 3 && str.length <= 20 &&
        reg.test(str) && str.match(regSymbol)
    ) {
        // console.log('ok')
        isName = true;
    }
    // console.log(isName)
    return isName;
}

export function validationEmail(str: string) {
    let isName = false;
    let substr = '';
    // console.log(str)
    const reg = /^[A-Za-z0-9_@.\-]+$/;
    const regSymbol = /[A-Za-z]/;
    if ( reg.test(str) ) {
        substr = str.substring(str.indexOf('@'));
        if (regSymbol.test(substr[1]) && substr.includes('.')) {
            isName = true;
        }
    }
    // console.log(isName)
    return isName;
}

export function validationPassword(str: string) {
    let isName = false;
    const regNumber = /[0-9]/;
    const regSymbol = /[A-ZА-Яa-z]/;
    if (
        str.length >= 3 && str.length <= 40 &&
        str.match(regNumber) && str.match(regSymbol)
    ) {
        isName = true;
    }
    return isName;
}

export function validationPhone(str: string) {
    let isName = false;
    const reg = /^[0-9]+$/;
    if (str.length >= 10 && str.length <= 15) {
        if (str[0] === '+') {
            str = str.substring(1)
        }
        if (reg.test(str)) {
            isName = true;
        }
    }
    return isName;
}

export function validationMessege(str: string) {
    let isName = false;
    if (str.length >= 1) {
        isName = true;
    }
    return isName;
}

export function validationId(str: number) {
    let isName = false;
    if (typeof str === 'number' && str !== 0) {
        isName = true;
    }
    return isName;
}
