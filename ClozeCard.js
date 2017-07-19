//create scope-safe constructor 
function ClozeCard(text, cloze){
	
 	if (this instanceof ClozeCard){
 		this.cloze = cloze;
 		this.fullText = text;
 	}else{
 		return new ClozeCard(text, cloze);
 	}
//if indexOf ==-1 the text didnt exits and this doesn't work 
	var pos = this.fullText.indexOf(this.cloze);

	if (pos == -1 ){
		console.log("This doesn't work!");
	}else{
		console.log("This works");
		this.partial = this.fullText.replace(this.cloze, "...");
		console.log(this.partial);
	}
};




module.exports = ClozeCard;

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = ClozeCard("This doesn't work", "oops");
