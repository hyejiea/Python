// script.js

$(document).ready(function() {
    // Function to add a new row to the table
    function addRow(id, name) {
        $('table tbody').append(
            `<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </td>
            </tr>`
        );
    }

    // Handle form submission to add new data
    $('#dataForm').submit(function(event) {
        event.preventDefault();
        const name = $('#nameInput').val();
        // Call the backend route to save data
        addRow(1, name); // Dummy data, replace with actual implementation
        $('#nameInput').val(''); // Clear the input field after adding
    });

    // Handle click on Edit button
    $('table').on('click', '.edit', function() {
        // Show edit modal
        var row = $(this).closest('tr');
        var id = row.find('td:eq(0)').text();
        var name = row.find('td:eq(1)').text();
        $('#editModal').modal('show');
        $('#editNameInput').val(name);
        $('#saveChangesBtn').data('id', id);
    });

    // Handle click on Save Changes button
    $('#saveChangesBtn').click(function() {
        var id = $(this).data('id');
        var newName = $('#editNameInput').val();
        $(`table tbody tr:nth-child(${id}) td:eq(1)`).text(newName);
        $('#editModal').modal('hide'); // Hide the modal after saving changes
    });

    // Handle click on Delete button
    $('table').on('click', '.delete', function() {
        // Perform delete action
        console.log('Delete action triggered');
        $(this).closest('tr').remove(); // Remove the row from the table
    });

    // Dummy data for initial table load
    addRow(1, 'John Doe');
});