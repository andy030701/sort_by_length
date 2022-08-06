//let wrd = ["Google", "Apple", "Microsoft"];
let wrd = ["Leonardo", "Michelangelo", "Raphael", "Donatello"],
  newWrd = sortByLength(wrd);
console.log(newWrd);

function sortByLength(words) {
  //   let lengths = [],
  //     newWords = [];
  //   //on classe les longueurs dans un tableau
  //   for (i = 0; i < words.length; i++) lengths.push(words[i].length);

  //   //on trie les longueurs
  //   lengths = lengths.sort((a,b)=>{return a-b});
  //   for (i = 0; i < lengths.length; i++) {
  //     let j = 0;
  //     for (j = 0; j < words.length; j++) {
  //       if (words[j].length === lengths[i]) newWords.push(words[j]);
  //     }
  //   }

  //   return newWords;
  return words.sort((a, b) => {
    return a.length - b.length;
  });
}
