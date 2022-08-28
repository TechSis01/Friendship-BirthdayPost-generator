const celebrantsName = document.querySelector('#firstname')
const birthDate = document.querySelector('#date')
const birthMonth = document.querySelector('#month')
const friendshipLength = document.querySelector('#how-long')
const thingsYouLove = document.querySelector('#love')
const thingsYouWish = document.querySelector('#want')
const bestMoment = document.querySelector('#moment')
const container = document.querySelector('.form-container')
const generateMessageBtn = document.querySelector('#generate-btn')
const gender = document.querySelector('#gender')
const displayMessageContainer = document.querySelector('.display-Message')

const nameTagsA = ["My baby","My love","My darling","Baby","Babe","Sweetheart","Boo","My treasure","Hey hun"]
const nameTagsB = ["My guy","My Bro","My guy","My Bro","My guy","My Bro","My guy","My Bro"]
const quality = [
    "Everytime I try to define Beauty , you come to my mind and with each new age the definition gets even better",
    "Everytime I try to define true friendship,you always come in to my mind each time",
    "Having you as a friend reminds me each time that true friends actually exist",
    "You are so pretty, so beautiful inside out",
    "I feel so grateful having you as a friend",
    "I feel so lucky to have you as a friend",
    "Having you as my friend is one thing I will never be sad for",
    "You're not special because its your birthday, you're special because you are you",

]
const openingLine = [
    "Birthdays remind us how much we love,and I hope my little message makes you know how much love you have around you",
    "for me your birthday is not the only time to celebrate you,If I had my way I'd do it always",
    "you are so amazing, but I want to remind you more how amazing you are because it is your special day",
    "Birthdays are a new start, a fresh beginning and a time to pursue and complete your goals,celebrating you today because you deserve everything beautiful",
    "a birthday is like a new year and my wish for you , is a great year full of happiness and sunshine",
    "Birthdays are a chance to let people know how much they matter to you, and this is me letting you know how much you it means to me that you're alive and well today",
    "a birthday is like a new year and my wish for you , is a great year full of happiness and sunshine",
    "Birthdays are a chance to let people know how much they matter to you, and this is me letting you know how much you it means to me that you're alive and well today"

]

const friendshipPeriod = [
    "and I'd never take any moment of it back",
    "and I'd never take any moment of it for granted",
    "and If I was asked to do this friendship as a jail term,I'd do it over and over again",
    "and,I would not mind starting all over again as long as I still get to be friends with you",
    "and you have literally given me every reason to keep you in my life.",
    "and I'd never take any moment of it back",
    "and I'd never take any moment of it for granted",
    "and If I was asked to do this friendship as a jail term,I'd do it over and over again",
    "and,I would not mind starting all over again as long as I still get to be friends with you",
]

const loveAttributes = [
    "are the things that make me thank God everyday that we ever crossed paths",
    "make me wish that everyone in the world could see the amazing things that you are made up of",
    "make you stand out in the midst of a thousand people,you are such a star my darling",
    "makes you the unique human being that you are,and I love this so much for you",
    "are my favourites things about you, you literally give me reasons to keep this friendship no matter what happens",
    "makes you one of the most special humans on earth,and it just makes being with you so much more easy",
    "are my favourites things about you, you literally give me reasons to keep this friendship no matter what happens",
    "makes you one of the most special humans on earth,and it just makes being with you so much more easy"


]

const myWishes = [
    "Is all I want for you, and I really hope my wishes for you come to pass",
    "is most definitely going to yours,and I pray that everything else you want and more on this day, be given onto you",
    "all these and more, I genuinely pray God gives to you because you truly deserve",
    "I could go on and on, but these are the things I genuinely proclaim onto your life",
    "Is all I want for you, and I really hope my wishes for you come to pass",
    "is most definitely going to yours,and I pray that everything else you want and more on this day, be given onto you",
    "all these and more, I genuinely pray God gives to you because you truly deserve",
    "I could go on and on, but these are the things I genuinely proclaim onto your life"
]

const moments = [
    "made me realise how much you mean in my life as a friend, I will never forget this moment,",
    "was the turning point for me in our friendship, that was the moment I realised I had found a real on one in you,",
    "my most memorable moment with you,its engraved in my memory, that even a vampire cannot compel me to forget,",
    "this moment sealed everything for me in our friendship, you might not know it but this was literally one of my best moments with you,",
    "made me realise how much you mean in my life as a friend, I will never forget this moment,",
    "was the turning point for me in our friendship, that was the moment I realised I had found a real on one in you,",
    "my most memorable moment with you,its engraved in my memory, that even a vampire cannot compel me to forget,",
    "this moment sealed everything for me in our friendship, you might not know it but this was literally one of my best moments with you,"
]

const birthday = [
    "One of the most amazing humans ever on earth was born, and I'm lucky to have you in my life",
    "One of the sweetest persons alive was born , and having you as my friend is just so surreal to me",
    "the most thoughtful person I know was born, I'm so glad you get to live to see this day everysingle year ",
    "the most thoughtful person I know was born, I'm so glad you get to live to see this day everysingle year ",
    "One of the most amazing humans ever on earth was born, and I'm lucky to have you in my life",
    "One of the sweetest persons alive was born , and having you as my friend is just so surreal to me",
    "the most thoughtful person I know was born, I'm so glad you get to live to see this day everysingle year ",
    "One of the most amazing humans ever on earth was born, and I'm lucky to have you in my life",
]

const finalMessage = [
    "you are truly an amazing person, happy birthday!. Somebody as extraordinary as you deserves a birthday celebration just as amazing! Hope your big day is epic!",
    "Happy birthday. You're a wonderful person who knows how to love, inspire, empower, spoil and appreciate everyone in your life. May everything you bring everybody came back to you a million-fold.",
    "Happy birthday to a truly spectacular individual. You’re the shining star in everybody's orbit, now and forever. May your celebration be a shining example of love for you.",
    "Happy birthday. May the joy, kindness, laughter and wonder that you spread each and every day of your life turn your special day into the birthday celebration of the century.",
    "Happy birthday. You deserve all the love, joy, inspiration and adventure that you bring everybody. Wishing you an epic birthday celebration, as extraordinary as you are.",
    "Even when your big day's done, And everyone's out the door, I'll be there to honor you, There's nothing I'd like more.Happy Birthday sweetheart.",
    "If our journey through life is more important than our ultimate destination, I'm glad I had the chance to take to the road with you and see the sights. Happy birthday to the best traveler this world has ever known.",
    "Happy birthday. You light up everybody's life. Here’s to you: may you only know the brightest of birthdays today and an especially bright year ahead.",
]

function displayBirthdayMessage(){
    const randomNumber = Math.floor(Math.random() * 8)
    if(celebrantsName.value === ""){
        container.style.display = 'block'
        alert('empty field')
    }
    else if(gender.value === 'female' || gender.value === 'Female'){
        displayMessageContainer.innerHTML = `
        <div class="display">
        <p>${nameTagsA[randomNumber]},${openingLine[randomNumber]},${quality[randomNumber]},
        ${birthDate.value},${birthMonth.value},${birthday[randomNumber]},${friendshipLength.value} ${friendshipPeriod[randomNumber]},
        . ${bestMoment.value} ${moments[randomNumber]},${thingsYouLove.value} ${loveAttributes[randomNumber]},
        ${thingsYouWish.value} ${myWishes[randomNumber]}.${celebrantsName.value},${finalMessage[randomNumber]}</p>
        <button class="new-message" onclick = "displayForm()">Generate new message</button>
        </div>`
    }
    else if(gender.value === 'male' || gender.value === 'Male'){
        displayMessageContainer.innerHTML = `<div class="display"><p>${nameTagsB[randomNumber]},${openingLine[randomNumber]},${quality[randomNumber]},
        ${birthDate.value},${birthMonth.value},${birthday[randomNumber]},${friendshipLength.value} ${friendshipPeriod[randomNumber]},
        . ${bestMoment.value} ${moments[randomNumber]},${thingsYouLove.value} ${loveAttributes[randomNumber]},
        ${thingsYouWish.value} ${myWishes[randomNumber]}.${celebrantsName.value},${finalMessage[randomNumber]}</p
        <button class="new-message" onclick = "displayForm()">Generate new message</button></div>`
    }
    celebrantsName.value = ""
    gender.value = ""
    birthMonth.value = ""
    birthDate.value = ""
    friendshipLength.value = ""
    thingsYouWish.value = ""
    thingsYouLove.value = ""
    bestMoment.value = ""
}

generateMessageBtn.addEventListener('click',()=>{
    container.style.display = 'none'
    displayBirthdayMessage()
})

function displayForm(){
    container.style.display = 'block'
    displayMessageContainer.style.display = 'none'

}