const form = document.getElementById("contactForm");
const contactsTable = document.getElementById("contactsTable");

// Sample contacts array to store data temporarily
let contacts = [];

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get form data
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Add contact to the array
  contacts.push({ firstName, lastName, email, phone });
  
  // Update table
  updateTable();
  
  // Clear form
  form.reset();
});

// Function to update the table with contacts
function updateTable() {
  contactsTable.innerHTML = "";
  
  contacts.forEach((contact, index) => {
    const row = `<tr>
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
    </tr>`;
    contactsTable.innerHTML += row;
  });
}
