let userInput: unknown;

userInput = 5;
userInput = "sad";
userInput = [2341,3452,345];


function generateError(msg: string):never{
    throw new Error(msg)
}
generateError("crasheamos D:");