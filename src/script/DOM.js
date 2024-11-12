document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('note-form');

    if (noteForm) {
        // Check if we're editing an existing note
        const urlParams = new URLSearchParams(window.location.search);
        const noteId = urlParams.get('id');

        if (noteId) {
            // Fetch the existing note details
            const existingNote = getNoteById(Number(noteId));
            if (existingNote) {
                // Populate the form fields with existing note details
                document.getElementById('title').value = existingNote.title;
                document.getElementById('note').value = existingNote.note;
            } else {
                console.error('Note not found:', noteId);
            }
        }

        noteForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const title = document.getElementById('title').value;
            const noteContent = document.getElementById('note').value;

            // Validate form input
            if (!title || !noteContent) {
                alert('Please enter both title and note content.');
                return;
            }

            // Check if we're editing or creating a note
            if (noteId) {
                // Editing existing note
                const editedNote = {
                    id: Number(noteId),
                    title: title,
                    note: noteContent,
                    timestamp: new Date().toISOString()
                };

                // Update the note in localStorage
                updateNoteInLocalStorage(editedNote);
            } else {
                // Creating new note
                const newNote = {
                    id: Date.now(),  // Generate a unique ID
                    title: title,
                    note: noteContent,
                    timestamp: new Date().toISOString()
                };

                // Save the note to localStorage
                saveNoteToLocalStorage(newNote);
            }

            // Reset the form
            noteForm.reset();

            // Redirect to Dashboard
            window.location.href = '../public/Dashboard.html';
        });
    }

    function isValidNote(note) {
        return note && typeof note.id === 'number' && typeof note.title === 'string' && typeof note.note === 'string';
    }

    function saveNoteToLocalStorage(note) {
        if (isValidNote(note)) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
        } else {
            console.error('Invalid note structure:', note);
            // Optionally, you can throw an error or handle it as needed
        }
    }

    function updateNoteInLocalStorage(updatedNote) {
        if (isValidNote(updatedNote)) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            const existingIndex = notes.findIndex(note => note.id === updatedNote.id);
            if (existingIndex !== -1) {
                notes[existingIndex] = updatedNote;
                localStorage.setItem('notes', JSON.stringify(notes));
            } else {
                console.error('Note not found for update:', updatedNote.id);
            }
        } else {
            console.error('Invalid note structure:', updatedNote);
            // Optionally, you can throw an error or handle it as needed
        }
    }

    function getNotesFromLocalStorage() {
        return JSON.parse(localStorage.getItem('notes')) || [];
    }

    function getNoteById(id) {
        const notes = getNotesFromLocalStorage();
        return notes.find(note => note.id === id);
    }

    function displayNotes() {
        const notesContainer = document.querySelector('.flex');
        const notes = getNotesFromLocalStorage();

        if (notesContainer) {
            notesContainer.innerHTML = '';
            notes.forEach(note => {
                const noteCard = document.createElement('my-card');
                noteCard.setAttribute('id', note.id);
                noteCard.setAttribute('title', note.title);
                noteCard.setAttribute('content', note.note);
                notesContainer.appendChild(noteCard);
            });
        }
    }

    if (window.location.pathname.includes('/public/Dashboard.html')) {
        displayNotes();
    }
});
