const quotes = [
  {
    quotess: `I'm selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can't handle me
          at my worst, then you sure as hell don't deserve me at my best.`,
    person: `Marilyn Monroe`,
    image: 'm_m.jpg',
  },
  {
    quotess: `Two things are infinite: the universe and 
    human stupidity; and I'm not sure about the universe.`,
    person: `Albert Einstein`,
    image: 'a_a.jpg',
  },
  {
    quotess: `Be who you are and say what you feel, because those who
    mind don't matter, and those who matter don't mind.`,
    person: `Bernard M. Baruch`,
    image: 'b_b.jpg',
  },
  {
    quotess: ` Be the change that you wish to see in the world.`,
    person: `Mahatma Gandhi`,
    image: 'm_g.jpg',
  },
  {
    quotess: ` If you tell the truth, you don't have to remember anything.`,
    person: `Mark Twain`,
    image: 'Mark_Twain.jpg',
  },
  {
    quotess: ` Darkness cannot drive out darkness: only light can do that. Hate cannot drive out 
    hate: only love can do that.`,
    person: `Martin Luther King Jr.`,
    image: 'm_l_k.jpg',
  },
  {
    quotess: ` It is better to be hated for what you are
     than to be loved for what you are not.`,
    person: `Andre Gide`,
    image: 'a_g.jpg',
  },
  {
    quotess: `Logic will get you from A to Z; imagination will get you everywhere.`,
    person: `Albert Einstein`,
    image: 'a_a.jpg',
  },
  {
    quotess: `The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.`,
    person: `Bob Marley`,
    image: 'b_m.jpg',
  },
  {
    quotess: `Folks are usually about as happy as they make their minds up to be.`,
    person: `Abraham Lincoln`,
    image: 'a_l.jpg',
  },
  {
    quotess: `Success is not final, failure is not fatal: it is the courage to continue that counts.`,
    person: `Winston S. Churchill`,
    image: 'w_c.jpg',
  },
]

const btn = document.querySelector('#btnQuote')
const quote = document.querySelector('.quote')
const person = document.querySelector('.person')
const img = document.getElementById('img')
let random = 0
btn.addEventListener('click', function () {
  // let random = Math.floor(Math.random() * quotes.length)
  random++
  if (random == quotes.length) {
    random = 0
  }

  quote.innerHTML = quotes[random].quotess
  person.innerHTML = quotes[random].person
  img.src = quotes[random].image
})
