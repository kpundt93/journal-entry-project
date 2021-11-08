export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  let bodyWordCount = this.body.split(" ").length;
  let titleWordCount = this.title.split(" ").length;
  let total = bodyWordCount + titleWordCount;

  return total;

};

Entry.prototype.getVowels = function() {
  const vowels = ["a", "e", "i", "o", "u"];
  let entry = this.title + this.body;
  let entryArray = entry.split("");
  let vowelCount = 0;

  for (let i = 0; i < entryArray.length; i++) {
    if (vowels.includes(entryArray[i])) {
      vowelCount++;
    }
  } return vowelCount;
  
};

Entry.prototype.getConsonants = function() {
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let entry = this.title + this.body;
  let entryArray = entry.split("");
  let consonantCount = 0;

  for (let i = 0; i < entryArray.length; i++) {
    if (consonants.includes(entryArray[i])) {
      consonantCount++;
    }
  } return consonantCount;
};

Entry.prototype.getTeaser = function(){
  const len = this.body.length;
  for(let i=0;i<len;i++){
    if(this.body[i]==="." || this.body[i]==="!" || this.body[i]==="?"){
      const firstSentence = this.body.slice(0,i+1);
      return firstSentence;
    }
  }
  return false;
};