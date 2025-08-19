const addNoteBtn = document.querySelector('.add-note-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-modal-btn');
const notesContainer = document.getElementById('notes-container');
const fillform = document.getElementById('add-note-form');
const titleInput = document.getElementById('note-title-input');
const contentInput = document.getElementById('note-content-input');

function getNotesFromStorage() {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
}

function saveNotesToStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

let notes = getNotesFromStorage();

function openModal() {
    modalOverlay.style.display = 'flex';
}

function closeModal() {
    titleInput.value = '';
    contentInput.value = '';
    modalOverlay.style.display = 'none';
}

function renderNotes() {
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const noteCardHTML = `
            <div class="note-card" data-id="${note.id}">
                <div class="cardhead">
                    <h3 class="note-title">${note.title}</h3>
                    <button class="card-trash">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                <p class="note-content">${note.content}</p>
                <footer>
                    <span class="note-tag">${note.tag || 'Personal'}</span>
                    <span class="note-timestamp">${note.timestamp}</span>
                </footer>
            </div>
        `;
        notesContainer.innerHTML += noteCardHTML;
    });
}

addNoteBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

fillform.addEventListener('submit', function (e) {
    e.preventDefault();
    const noteTitle = titleInput.value.trim();
    const noteContent = contentInput.value.trim();

    if (!noteTitle && !noteContent) {
        return;
    }

    const newNote = {
        id: Date.now(),
        title: noteTitle,
        content: noteContent,
        timestamp: new Date().toLocaleString('en-IN')
    };

    notes.push(newNote);
    saveNotesToStorage(notes);
    renderNotes();
    closeModal();
});

notesContainer.addEventListener('click', function (e) {
    const deleteBtn = e.target.closest('.card-trash');
    if (deleteBtn) {
        const noteCard = deleteBtn.closest('.note-card');
        const noteId = Number(noteCard.dataset.id);
        notes = notes.filter(note => note.id !== noteId);
        saveNotesToStorage(notes);
        renderNotes();
    }
});

renderNotes();