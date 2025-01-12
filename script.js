document.addEventListener('DOMContentLoaded', () => {

    const mealForm = document.getElementById('meal-form');

    const mealList = document.getElementById('meal-list');

    mealForm.addEventListener('submit', (e) => {

        e.preventDefault();

        // Input-Werte abrufen

        const mealName = document.getElementById('meal-name').value;

        const mealDay = document.getElementById('day-select').value;

        // Neues Listenelement erstellen

        const listItem = document.createElement('li');

        listItem.textContent = `${mealDay}: ${mealName}`;

        

        // Löschen-Button hinzufügen

        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Löschen';

        deleteBtn.className = 'delete-btn';

        deleteBtn.onclick = () => mealList.removeChild(listItem);

        listItem.appendChild(deleteBtn);

        // Listenelement zur Liste hinzufügen

        mealList.appendChild(listItem);

        // Formular zurücksetzen

        mealForm.reset();

    });

});