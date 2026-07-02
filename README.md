# Задачка  Longest Repeating Character Replacement
## В коде 3 решения от самого медленного до самого быстрого комментарии в коде 
``` typescript
function characterReplacement(s: string, k: number): number {
    // const arr = s.split('');//['A','B','B']
    // const getIndex = (char:string) => {return char.charCodeAt(0)-65};
    // let hsmap = new Map();
    // let left = 0;
    // let mx = 0;
    // for (const [right,char] of arr.entries()){
    //     let current = getIndex(char);
    //     if(hsmap.has(current)){
    //         let count = hsmap.get(current) + 1
    //         hsmap.set(current,count)
    //     }
    //     else {
    //      hsmap.set(current,1)
    //     }
    //     mx = Math.max(mx,hsmap.get(current))
    //     let windowSize = right - left + 1;
    //     let replacements = windowSize - mx;

    //     if(replacements > k){
    //         const leftIndex = getIndex(arr[left])
    //         let count = hsmap.get(leftIndex) - 1
    //         hsmap.set(leftIndex,count)
    //         left++
    //     }


    // }
    // return s.length - left
    // это решение дает 58 % максимум
    // const arr = s.split('')
    // const getIndex = (char:string) => { return char.charCodeAt(0)-65}
    // let left= 0;
    // let mx = 0;
    // let charsE = new Int32Array(26);  
    // for (const [right,char] of arr.entries()){
    //     let current = getIndex(char);
    //     charsE[current]++;
    //     // mx = Math.max(mx,charsE[current])
    //     if(charsE[current]>mx){
    //         mx = charsE[current]
    //     }
    //     const windowSize =  right - left + 1;
    //     if(windowSize-mx > k) {
    //         let lefts = getIndex(arr[left])
    //         charsE[lefts]--
    //         left++
    //     }
    // }
    // return arr.length - left
    // это решение дает 78 % максимум
    let left= 0; // левый указатель
    let mx = 0; // максимальная последовательность допустимая
    let charsE = new Int32Array(26);// определяем массив который считает сколько раз встречается конкретная буква по ее индексу
    // например буква А на индексе 1 будет значение частоты А
    for (let right=0;right<s.length;++right){
        // ф-ция charCodeAt используется для получения индекса буквы
        let current = s.charCodeAt(right) -65
        charsE[current]++; // увеличиваем значение на индексе буквы
        // mx = Math.max(mx,charsE[current])
        if(charsE[current]>mx){
            mx = charsE[current]
        } // проверяем встречается ли эта буква чаще максимального
        const windowSize =  right - left + 1; // считаем само sliding windows
        if(windowSize-mx > k) { // проверяем если у нас есть достаточно k значений что бы дальше работать 
            let lefts = s.charCodeAt(left) -65;
            //если нет то уменьшаем окно просто убираее левый поинтер правее
            charsE[lefts]--
            left++
        }
    }
    return s.length - left // возращаем самую долгую последовательность
    // самое крутое решение дает 94 %
}
```
