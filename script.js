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
        description: "Using the round pad <sup>(1)</sup>, press down until you highlight <br>'Reset to Defaults'. <sup>(2)</sup><br>Press the button below the work 'Select'. <sup>(3)</sup>",
        imageUrl: "image3.jpg"
    },
    {
        description: "Now press the button below the word 'Reset'.  <br>This will restart your phone.",
        imageUrl: "image4.jpg"
    },
    {
        description: "Wait 4 minutes until the phone restarts.  <br><br>When you see the blue box asking if you wish to <br>activate Auto Provisioning now,<br><b>press the button below 'Yes'.</b>  <br><br>Be patient while the phone restarts. <br><br>If everything worked, you will see a login screen, and go to the next screen for further instructions.<br><br>If you don't see a login screen, try power cycling your phone and try one more time.  Click on Start Over below.",
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
        description: "Your password starts with '%' so press the button below 'Symbol' on screen.",
		imageUrl: "image8.jpg"
    },
	{
        description: "Use the circle button <sup>(1)</sup> to move to the '%' symbol<sup>(2)</sup>. <br>Press the button below 'Insert' <sup>(3)</sup>to add the symbol.",
		imageUrl: "image9.jpg"
    },
	{
        description: "Now type in <b>'2637'</b> on the numberic keypad.  Then press the button below 'Symbol' again.",
		imageUrl: "image8.jpg"
    },
	{
        description: "Use the circle button <sup>(1)</sup> to move to the '#' symbol<sup>(2)</sup>. <br>Press the button below 'Insert' <sup>(3)</sup>to add the symbol.",
		imageUrl: "image9a.jpg"
    },
	{
        description: "Now type in the rest of the password that was provided to you on the numberic keypad.",
		imageUrl: "image8.jpg"
    },
	{
        description: "When you are finished entering your password, press the button below 'More' to continue.",
		imageUrl: "image10.jpg"
    },
	{
        description: "Press the button below 'Enter' to login the phone.  It it worked, you won't need to do this again.  If the login did not work, check your extension and password and try again.",
		imageUrl: "image11.jpg"
    },
	{
        description: "If all was successful you should now see a phone logged in showing your extension number. <br><br>If you are seeing something else, <br>please advise the hosts of this call.<br><br><b>Note - you <u>can not</u> make outbound calls from the phone.</b><br><br>You can proceed on the next screen to configure your Communicator Software.",
		imageUrl: "image12.jpg"
    },
	{
        description: "Next, configure the software on your computer.  Click the icon on your desktop.  <u>If you do not see the icon on your desktop, select the Windows start icon in the bottom left corner of the screen.</u>  Look for the Avaya folder and select the Avaya One-X Communicator program.",
		imageUrl: "image13.jpg"
    },
	{
        description: "Communicator will start, and you will see an installation windows for a short time.  You will then see a login screen",
		imageUrl: "image13a.jpg"
    },
	{
        description: "The login screen will appear. <b>If your extension and password are not pre-populated, enter them here.</b><br><br>  Select the Gear icon in the upper right corner of the window and select 'Settings'.",
		imageUrl: "image14.jpg"
    },
	{
        description: "From the Left-Hand Menu under Devices and Services, Select Phone Numbers.  Click Add.  A Phone Number window will appear.",
		imageUrl: "image15.jpg"
    },
	{
        description: "In the 'Name' field enter 'SIP Phone'.  In the 'Number' field enter the extension number that is on the label on the back of your phone.  Press OK",
		imageUrl: "image16.jpg"
    },
	{
        description: "From the Left-Hand Menu under Devices and Services, Select Outgoing Calls.",
		imageUrl: "image17.jpg"
    },
	{
        description: "Under Place and receive calls using, Select the dropdown arrow and Select Other Phone – SIP Phone which you added in the last step.  Click OK.",
		imageUrl: "image18.jpg"
    },
	{
        description: "You will be returned to the login screen. If your extension and password are not filled in, enter them here now and press 'Log In'.  <b>Note -</b> If you receive a message stating 'Existing Login Detected', <u>ensure you have entered your correct extension</u>. If correct, select Yes. If not correct, select No, and enter your correct extension.",
		imageUrl: "image19.jpg"
    }
	
	
		
	
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

