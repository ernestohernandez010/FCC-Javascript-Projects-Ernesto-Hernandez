const Alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const Cipher = ['X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'];
//DOING A KEY OF 3, IMPROVEMENT = LET USER INPUT SHIFT NUMBER, 
//GENERATE CIPHER TEXT BASED ON THAT KEY --> map? shift?


//Encode from plain text to 
function encodeText(str)
{
    let codedMessage = "";

    for(i = 0; i < str.length; i++)
    {
        let piece = str[i];
        
        //CHECK FOR EMPTY SPACE, ENSURE IT IS TRANSFERRED OVER TO ENCRYPTED TEXT
        if (piece == " " || piece == ' ')
        {
            codedMessage += " ";
            
        }

        else{
            let index = Alpha.indexOf(piece);
            let coded = Cipher[index];
            codedMessage +=  coded;
            
        }
    }

    console.log("ENCODE = " + codedMessage);
    return codedMessage;
}


function decodeText(str)
{
    let decodedMessage = "";

    for(i = 0; i < str.length; i++)
    {
        let piece = str[i];

        if (piece == " " || piece == ' ')
        {
            decodedMessage += " ";
        }

        else{
            let index = Cipher.indexOf(piece);
            let decoded = Alpha[index];
            decodedMessage += decoded;
        }
    }

    console.log("DECODE = " + decodedMessage);
    return decodedMessage;
}


let x = "SINGLE";
let y = "MUL TI";

decodeText(encodeText(x));
encodeText(y);