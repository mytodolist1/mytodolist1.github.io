import { getWithToken } from "../temp/component.js";
import { hideLoading } from "../complement/loading.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo";

const responseData = (result) => {
    if (result.status === true) {
        if (!result.data) {
            $(document).ready(function() {
                $('#calendar').evoCalendar({
                    theme: 'Midnight Blue',
                    format: 'mm/dd/yyyy',
                });
            })
        } else {
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
            })
        }
    }
    hideLoading();
}

getWithToken(target_url, responseData);