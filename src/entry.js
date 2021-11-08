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