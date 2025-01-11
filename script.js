function addHabit() {
    const habitInput = document.getElementById('habitInput');
    const habit = habitInput.value.trim();
    
    if (habit === '') return;

    const habitTableBody = document.getElementById('habitTableBody');
    const newRow = document.createElement('tr');
    
    // Add habit name cell
    const habitCell = document.createElement('td');
    habitCell.textContent = habit;
    newRow.appendChild(habitCell);
    
    // Add checkbox cells for each day
    for (let i = 0; i < 7; i++) {
        const cell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        cell.appendChild(checkbox);
        newRow.appendChild(cell);
    }
    
    habitTableBody.appendChild(newRow);
    habitInput.value = '';
}

// Add event listener for Enter key
document.getElementById('habitInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addHabit();
    }
}); 