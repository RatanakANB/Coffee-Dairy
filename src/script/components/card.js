class MyCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const card = document.createElement('div');
        card.classList.add('card');

        const header = document.createElement('div');
        header.classList.add('card-header', 'flex-center');

        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = this.getAttribute('title') || 'untitled';

        header.appendChild(title);
    
        const icons = document.createElement('div');

        // Create and append the edit icon
        const editIcon = document.createElement('svg');
        editIcon.setAttribute('width', '24');
        editIcon.setAttribute('height', '24');
        editIcon.setAttribute('viewBox', '0 0 24 24');
        editIcon.innerHTML = `
        <svg id='Edit_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
        <g transform="matrix(0.78 0 0 0.78 12 12)" >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-12.93, -13.07)" d="M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z" stroke-linecap="round" />
        </g>
        </svg>
        `;
        editIcon.addEventListener('click', () => this.editNote());
        icons.appendChild(editIcon);

        // Create and append the delete icon
        const deleteIcon = document.createElement('svg');
        deleteIcon.setAttribute('width', '24');
        deleteIcon.setAttribute('height', '24');
        deleteIcon.setAttribute('viewBox', '0 0 24 24');
        deleteIcon.innerHTML = `
        <svg id='Delete_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
        <g transform="matrix(1.11 0 0 1.11 12 12)" >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-13, -13)" d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z" stroke-linecap="round" />
        </g>
        </svg>
        `;
        deleteIcon.addEventListener('click', () => this.deleteNote());
        icons.appendChild(deleteIcon);

        header.appendChild(icons);

        const contents = document.createElement('div');
        contents.classList.add('card-contents');

        const contentParagraph = document.createElement('p');
        contentParagraph.classList.add('content');
        contentParagraph.textContent = this.getAttribute('content') || 'untext';

        contents.appendChild(contentParagraph);

        card.appendChild(header);
        card.appendChild(contents);

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', '../src/styles/components/card.css');

        shadow.appendChild(linkElem);
        shadow.appendChild(card);
    }

    connectedCallback() {
        // Set title and content attributes
        this.shadowRoot.querySelector('.card-title').textContent = this.getAttribute('title') || 'untitled';
        this.shadowRoot.querySelector('.content').textContent = this.getAttribute('content') || 'untext';
    }

    editNote() {
        const id = this.getAttribute('id');
        const title = this.getAttribute('title');
        const content = this.getAttribute('content');

        // Check if id, title, and content are present and valid
        if (id && title && content) {
            window.location.href = `../public/Create.html?id=${encodeURIComponent(id)}`;
        } else {
            console.error('Invalid note structure:', { id, title, content });
        }
    }

    deleteNote() {
        const id = this.getAttribute('id');

        if (confirm('Are you sure you want to delete this note?')) {
            // Remove the note from localStorage
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            const updatedNotes = notes.filter(note => note.id !== Number(id));
            localStorage.setItem('notes', JSON.stringify(updatedNotes));

            // Remove the card from the DOM
            this.remove();
        }
    }
}

customElements.define('my-card', MyCard);
