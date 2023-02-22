// import { caolLeathanChecker } from "./caolLeathanChecker";
import { conjugationChecker, fadaChecker, typoChecker, } from "./errorCheckers/index.js";
const runErrorCheck = (word, target) => {
    // This is where the four error functions are used and output is decided
    const conjugationOutput = conjugationChecker(word, target);
    const fadaOutput = fadaChecker(word, target);
    const typoOutput = typoChecker(word, target);
    return {
        word: word,
        target: target,
        conjugationOutput: conjugationOutput,
        fadaOutput: fadaOutput,
        typoOutput: typoOutput,
    };
};
export default runErrorCheck;
