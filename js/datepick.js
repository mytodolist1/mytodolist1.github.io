// Assuming you have HTML elements with the IDs "eventDate" and "eventTime"
const eventDateInput = document.getElementById("eventDate");
const eventTimeInput = document.getElementById("eventTime");

// Function to handle the input and return a formatted date and time string
function getFormattedDateTime() {
    const dateValue = eventDateInput.value;
    const timeValue = eventTimeInput.value;

    // Combine date and time strings into a single string
    const dateTimeString = `${dateValue} ${timeValue}`;

    // Create a JavaScript Date object from the combined string
    const dateTime = new Date(dateTimeString);

    // Check if the date is valid
    if (isNaN(dateTime.getTime())) {
        alert("Invalid date and time");
        return null; // or handle it according to your requirements
    } else {
        // Return the formatted date and time string or the DateTime object as needed
        return dateTime.toISOString(); // or customize based on your needs
    }
}

// Example: Add an event listener to a button with ID "submitEventButton"
document.getElementById("submitEventButton").addEventListener("click", function () {
    const formattedDateTime = getFormattedDateTime();

    // Check if the date and time are valid before proceeding
    if (formattedDateTime !== null) {
        // Use the formattedDateTime variable as needed (e.g., send it in your API request)
        console.log("Scheduled date and time:", formattedDateTime);
    }
});
