async function getRandomChinese(length) {
    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    let result = "";
    let count = length;
    while (count) {
        let num = "";
        num += `${Date.now().toString().substring(8)}`;
        result += String.fromCharCode(num);
        count--;
        await delay(50);
    }
    console.log(result);
    return result;
}

getRandomChinese(4);
