function formatInput(input) {
    if (typeof input === 'string') {
        console.log(`문자 : ${input}`);
    }
    else if (typeof input === 'number') {
        console.log(`숫자 : ${input}`);
    }
}
formatInput('문자입니다');
formatInput(123456);
export {};
