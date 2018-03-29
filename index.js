
if (process.argv.length > 2) {
  if (process.argv[2] === "encrypt"){
    let message = process.argv[3];
    let keyword = process.argv[4];
    encrypt(message, keyword);
  }
  else if (process.argv[2] === "decrypt") {
    let cipherText = process.argv[3];
    let keyword = process.argv[4];
    encrypt(cipherText, keyword);
  }
}


function encrypt(message, keyword){
  let encrypted_message = "";

  // Produce an array of letters
  let alphabet_array = ("abcdefghijklmnopqrstuvwxyz").split("");

  let alphabet_array_length = alphabet_array.length;

  let message_array = message.split("");
  console.log("Message array => ", message_array);

  let keyword_array = keyword.split("");
  console.log("Keyword array => ", keyword_array);

  // Loop through the indexes of both the message and keyword array since they have the same length
  for (var i = 0; i < message_array.length; i++) {
    console.log("\n Inside for loop...");

    let message_index = alphabet_array.indexOf(message_array[i]);
    console.log("Index of message => ", message_index);
    let keyword_index = alphabet_array.indexOf(keyword_array[i]);
    console.log("Index of keyword => ", keyword_index);
    let alphabet_index = message_index + keyword_index;
    console.log("Alphabet index => ", alphabet_index);

    if (alphabet_index > alphabet_array_length) {
      console.log("Alphabet index overflowed...");
      let overflowed_alphabet_index = alphabet_index % alphabet_array_length;
      console.log("Encrypted alphabet => ", alphabet_array[overflowed_alphabet_index]);
      encrypted_message += alphabet_array[overflowed_alphabet_index];
    }
    else {
      console.log("Encrypted alphabet => ", alphabet_array[alphabet_index]);
      encrypted_message += alphabet_array[alphabet_index];
    }
  }

  console.log("\n Encrypted message => ", encrypted_message);
}

function decrypt(cipherText, keyword){
  // Logic goes like this
  // Index of letter in cipherText MINUS index of letter in keyword
    // Positive result => use that index to find the letter in the alphabet
    // Append letter to the plainText

    // Negative result => add 26 to the index and use that index to find the letter in the alphabet
    // Append letter to the plainText

   // Print out the plainText
}
