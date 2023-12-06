export const formatDate = () => {
    const deadlineInput = document.getElementById('deadline');
    const deadlineDate = new Date(deadlineInput.value);
    const formattedDeadline = deadlineDate.toLocaleDateString('id-ID');
    deadlineInput.value = formattedDeadline;

    deadlineInput.addEventListener('change', () => {
        const deadlineDate = new Date(deadlineInput.value);
        const formattedDeadline = deadlineDate.toLocaleDateString('id-ID');
        deadlineInput.value = formattedDeadline;
    });
}