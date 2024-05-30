import { sendWhatsAppMessage } from "./sendWA.js";

export function setReminder(todos) {
    const currentDate = new Date();

    const todayDeadlines = todos.filter(data => {
        const deadline = new Date(`${data.deadline} ${data.time}`);
        return deadline <= currentDate;
    });

    const todayDate = todos.filter(data => {
        const deadline = new Date(`${data.deadline}`);
        return deadline <= currentDate;
    });

    if (todayDate.length > 0 || todayDeadlines.length > 0) {
        const reminderMessages = todayDate.map(data => {
            return `- *Task*: ${data.title} (${data.deadline} ${data.time}) #${data.tags.category}`;
        });
        const reminderMessage = reminderMessages.join("\n\n");

        const reminderTitles = todayDeadlines.map(data => {
            return data.title;
        });
        const reminderTitle = reminderTitles.join(", ");

        const showReminderMessage = () => {
            Swal.fire({
                icon: "info",
                title: `Ada ${todayDeadlines.length} tugas: ${reminderTitle}`,
                text: "Tugas kamu telah melewati batas waktu, Segera selesaikan tugas kamu!",
                showConfirmButton: false,
            });

            const users = new Set(todayDeadlines.map(data => data.user.username));
            users.forEach(username => {
                const userTasks = todayDeadlines.filter(data => data.user.username === username);
                const message = `Hi *${username}*\n\nAda ${todayDeadlines.length} tugas: *${reminderTitle}* \nyang telah melewati batas waktu. Segera selesaikan tugas kamu! \n\nTugas kamu pada hari ini ada ${todayDate.length}:\n${reminderMessage}`;
                // sendWhatsAppMessage(userTasks[0].user.phonenumber, message);
            });
        };

        setTimeout(showReminderMessage, 0);
    }
}
