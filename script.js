const instructions = [
    {
        description: "You phone will start up.  <u>When you see 'Admin' at the lower left</u>, press the button below the word 'Admin'.",
        imageUrl: "image1.jpg"
    },
    {
        description: "On the number pad, type in 27238 <br>and press the button below the word 'Enter'.",
        imageUrl: "image2.jpg"
    },
    {
        description: "Using the round pad <sup>(1)</sup>, press down until your highlight <br>'Reset to Defaults'. <sup>(2)</sup><br>Press the button below the work 'Select'. <sup>(3)</sup>",
        imageUrl: "image3.jpg"
    },
    {
        description: "Now press the button below the word 'Reset'.  <br>This will restart your phone.",
        imageUrl: "image4.jpg"
    },
    {
        description: "Wait 4 minutes until the phone restarts.  Don't press any keys.  If everything worked, you will see a login screen, and go to the next screen for further instructions.<br><br>If you don't see a login screen, try power cycling your phone and try one more time.  Click on Start Over below.",
        imageUrl: "image5.jpg"
    },
    {
        description: "Type in your extension number,<br> then press the button below the word 'Enter' on screen.  <br>If you make a mistake, press the button below 'Backspace'",
		imageUrl: "image6.jpg"
    },
    {
        description: "<b>Before</b> you enter your password, press the button below 'More'.",
		imageUrl: "image7.jpg"
    },
	{
        description: "Now start entering your password. <br>Enter digits using the phone keypad. <br>To enter a symbol like '#' or '%', the button below 'Symbol'.<br>Go to the next page to learn how to enter a symbol.",
		imageUrl: "image8.jpg"
    },
	{
        description: "To enter a symbol, use the circle button <sup>(1)</sup> to move to the symbol you need <sup>(2)</sup>. <br>Press the button below 'Insert' <sup>(3)</sup>to add the symbol.",
		imageUrl: "image9.jpg"
    },
	{
        description: "When you are finished entering your password, press the button below 'More' to continue.",
		imageUrl: "image10.jpg"
    },
	{
        description: "Press the button below 'Enter' to login the phone.  It it worked, you won't need to do this again.  If the login did not work, check your extension and password and try again.",
		imageUrl: "image11.jpg"
    },
	
];

let currentPage = 0;

function showInstruction(page) {
    currentPage = page;
    const content = document.getElementById('content');
    const currentInstruction = instructions[currentPage];

    content.innerHTML = `
        <h2>${currentInstruction.description}</h1>
        <button onclick="showInstruction(${Math.max(currentPage - 1, 0)})">Previous</button>
        ${currentPage < instructions.length - 1 ? `<button onclick="showInstruction(${Math.min(currentPage + 1, instructions.length - 1)})">Next</button>` : ''}
        <button onclick="parent.location='index.html'">Start Over</button>
        <br>
        <img src="${currentInstruction.imageUrl}" alt="Instruction Image">
    `;
}

