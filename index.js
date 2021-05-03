function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return 'This one is on me!'
  } else if (feet > 2500){
    return 'No can do.'
  } else if (feet > 2000){
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let message = city==="NYC" ? 'Ok, sounds good.' : 'No go.'
  return message
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch(tip) {
    case "generous":
      message = 'Thank you so much.';
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    default:
      message = "Bye.";
      break;
  }
  return message
}