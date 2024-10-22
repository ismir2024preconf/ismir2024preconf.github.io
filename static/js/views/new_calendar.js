async function make_cal(element){ 

    const config = await API.getConfig(); 
    const events = await API.getPreConf(); 
    console.log(events);
    const calendarEl = document.getElementById(element);
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
    });
    calendar.render();
    

}