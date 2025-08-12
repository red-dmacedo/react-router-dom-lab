# Mailboxes
- `_id`:  unique box number
- `boxOwner`: name of the box owner
- `boxSize`: size of the box

# Components
- `App`: The root component that orchestrates the entire application.
- `NavBar`: Provides navigation links.
- `MailboxForm`: Allows users to enter details for and submit new mailboxes.
- `MailboxList`: Displays an index list of all mailboxes.
- `MailboxDetails`: Shows details about a specific mailbox.

# User Stories
- As a user, I should see a nav bar with links at the top of each page in the application.
- As a user, clicking on the ‘Home’ link should navigate me to a landing page that displays the text ‘Post Office’.
- As a user, clicking on the ‘New Mailbox’ link should navigate me to a page with a form for submitting new mailboxes.
- As a user, when viewing the form on the ‘New Mailbox’ page, I should see a `<form>` with an `<input>` for the name of the `boxOwner` and a `<select>` menu for the `boxSize`. The `<select>` menu should include three options: ‘Small’, ‘Medium’, and ‘Large’.
- As a user, I should not be required to select a box number when creating a new mailbox. When a new mailbox is created, it should be assigned a box number, or _id, automatically. This number should increment based on the number of mailboxes that already exist.
- As a user, when I submit the ‘New Mailbox’ form, I should be redirected to the ‘Mailboxes’ page (/mailboxes) where I will see the newly created mailbox added to the list.
- As a user, clicking on the ‘Mailboxes’ link should navigate me to a ‘Mailboxes’ page.
- As a user, when viewing the ‘Mailboxes’ page, I should be able to see a list of all the existing mailboxes. Each mailbox in the list should be a square container with a box number _id.
- As a user, when viewing the ‘Mailboxes’ list page, I want to be able to click on a mailbox, and be directed to a mailbox details page.
- As a user, when viewing the details page, I should see details about a specific mailbox. The details should include the box number (_id), the name of the box owner, and the box size.
- As a user, I should see the message ‘Mailbox Not Found!’ if I navigate to the details page for a mailbox that does not exist.