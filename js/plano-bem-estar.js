$(document).ready(function () {
    const form = $('#goal-form');
    const input = $('#goalInput');
    const tableBody = $('#goalTable tbody');
    const message = $('#confirmation-message');

    console.log("Script carregado");

    function loadGoals() {
        const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
        tableBody.empty();
        savedGoals.forEach((goal, index) => {
            addGoalToTable(goal.text, goal.finished, index);
        });
    }

    function saveGoals() {
        const goals = [];
        $('#goalTable tbody tr').each(function () {
            const text = $(this).find('td:eq(0)').text();
            const finished = $(this).find('input[type=checkbox]').is(':checked');
            goals.push({text, finished });
        });
        localStorage.setItem('goals', JSON.stringify(goals));
        message.removeClass('d-none');
        setTimeout(() => message.addClass('d-none'), 2000);
    }

    function addGoalToTable(text, finished = false, index = null) {
        const line = $('<tr>');
        line.append(`<td>${text}</td>`);
        line.append(`
            <td>
                <input type="checkbox" ${finished ? 'checked' : ''} class="form-check-input">
            </td>
        `);
        line.append(`
            <td>
                <button class="btn btn-danger btn-sm remover">Remover</button>
            </td>
        `);
        tableBody.append(line);
    }

    form.on('submit', function (e) {
        e.preventDefault();
        const goal = input.val().trim();
        if (goal) {
            console.log("Meta adicionada:", goal);
            addGoalToTable(goal);
            saveGoals();
            input.val('');
        }
    });

    tableBody.on('change', 'input[type=checkbox]', saveGoals);
    tableBody.on('click', '.remover', function () {
        $(this).closest('tr').remove();
        saveGoals();
    });

    loadGoals();
});
