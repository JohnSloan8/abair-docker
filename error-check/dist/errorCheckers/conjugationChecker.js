const conjugationChecker = (word, target) => {
    // Array with all conjugations of the target verb
    const conjugations = ["Insert all other conjugations of the verb here"];
    for (let i = 0; i < conjugations.length; i++) {
        if (word == conjugations[i] && conjugations[i] != target) {
            return "other conjugation match found!";
        }
    }
    return "no other conjugation match found";
};
export default conjugationChecker;
