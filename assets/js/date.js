// date
const currentDay = $('.date');
const today = dayjs().format('D,MMM,ddd');  
currentDay.text(today);