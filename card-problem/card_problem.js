const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //

for (var i = 0; i < cardData.length; i++) {
    // for all Questions
    let value = cardData[i].value;
    let suit = cardData[i].suit;
    //findCard(value, suit);
  }
  

  function findCard(value, suit) {
    if (suit == "heart" && value == 5) {
      console.log(false);
    } else if (value == 10 && suit == "club") {
      console.log(true);
    }
  }


/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


getSuits(cardData); 

function getSuits(cardData) {
    // write your code here
    let array1 = [];
    for (var i = 0; i < cardData.length; i++) {
      array1.push(cardData[i].suit);
    }
    const Uniq=array1.filter((item, index) => array1.indexOf(item) === index);

    console.log(Uniq);
}



/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //

getSuitCount(cardData);

function getSuitCount(cardData) {
    // write your code here
    let array1;
    for (var i = 0; i < cardData.length; i++) {
      array1 = (cardData[i].suit);
    }
    const result=array1.filter((item, index) => array1.indexOf(item) === index);

    console.log(result);
    
}

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    let a=""
  for(var i=0;i<cardData.length;i++){
    let value=cardData[i].value;
    let suit=cardData[i].suit;
    if(suit=="heart"){
        console.log(a+=value)
    }else if(suit=="diamond"){
        console.log("diamond",a+=value+" ")
    }else if(suit=="club"){
        console.log("club",a+=value+" ")
    }
  }
} 
// }
/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
*/