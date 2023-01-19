/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const highlight = document.querySelector('p');
highlight.innerHTML = highlight.innerText
                        .split(' ')
                        .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>`: word) 
                        .join(' ')

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const link = document.createElement("a") 
console.dir(link);
link.href = "http://officeipsum.com/"  
link.innerText = "Link to office ipsum" 
document.body.appendChild(link)

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
highlight.innerHTML = highlight.innerHTML.split(".").join("</p><p>")



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCount = highlight.innerText.split(" ").length
const wordCountEl = document.createElement("div")
wordCountEl.innerText = `${wordCount} words`
document.body.insertBefore(wordCountEl, highlight)

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
highlight.innerHTML = highlight.innerHTML.replaceAll('?', "🤔").replaceAll('!',"😲")
