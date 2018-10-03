function isWeekend(){
    const todayDate = new Date();
    //days contains index
    const day = todayDate.getDay();
//
    const days=['weekend','weekday','weekday','weekday','weekday','weekday','weekend'];
    return days[day];
    
}
console.log(isWeekend());
