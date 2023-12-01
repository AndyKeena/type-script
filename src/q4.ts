function combine<A, B>(word1: A, word2: B): "${A}${B}" {
    return `${word1}${word2}` as "${A}${B}";
}

const w1 = combine("Hello", "World");
console.log(w1);

const w2 = combine("Andrea", "22");
console.log(w2);