import { getWithToken } from "../temp/component.js";
import { hideLoading } from "../complement/loading.js";

// const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo";
const target_url = "https://vercel-go-sandy.vercel.app/todo";

const responseData = (result) => {
    if (result.status === 200) {
        const calendarEvents = result.data.map((item) => {
            let color = "#6600CC";

            const category = item.tags.category;
            switch (category) {
                case "Priority":
                    color = "#FF3333";
                    break;
                case "Personal":
                    color = "#FFFF00";
                    break;
                default:
                    color;
            }

            return {
                id: item._id,
                name: item.title,
                description: item.description,
                badge: item.time,
                date: item.deadline,
                type: category,
                color: color,
            };
        });

        $(document).ready(function() {
            $('#calendar').evoCalendar({
                theme: 'Midnight Blue',
                format: 'mm/dd/yyyy',
                calendarEvents: calendarEvents,
            });
            $('#calendar').on('selectDate', function(_, newDate, oldDate) {
                console.log('Tanggal baru yang dipilih:', newDate);
                console.log('Tanggal sebelumnya yang dipilih:', oldDate);
        
                // Lakukan tindakan tambahan yang diperlukan
                // Misalnya, tampilkan button
                $('#myButton').show();
                $('#myButton').click(function() {
                    redirectToTambahData(newDate);
                });
            });
            $('#calendar').on('selectEvent', function(_, activeEvent) {
                console.log('Acara yang dipilih:', activeEvent);
                redirectToEdit(activeEvent.id);
            });
        });
    } else {
        $(document).ready(function() {
            $('#calendar').evoCalendar({
                theme: 'Midnight Blue',
                format: 'mm/dd/yyyy',
            });
        });
    }
    hideLoading();
}

getWithToken(target_url, responseData);

function redirectToTambahData(selectedDate) {
    window.location.href = 'tambah_kegiatan.html';
    localStorage.setItem('selectedDate', selectedDate);
}

function redirectToEdit(selectedEventId) {
    window.location.href = 'edit.html?_id=' + selectedEventId;
}