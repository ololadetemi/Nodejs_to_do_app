function toggleEditForm(taskId) {
    const form = document.getElementById(`edit-form-${taskId}`);
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';
}

function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(new FormData(form))
    }).then(response => {
        if (response.ok) {
            window.location.reload();
        } else {
            alert('Failed to update the task.');
        }
    });
}
