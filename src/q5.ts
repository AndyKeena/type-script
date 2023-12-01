enum DaysOfWeek{
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

function getDayName(day: DaysOfWeek): string{
    switch (day){
        case DaysOfWeek.Monday:
            return "Monday"
        case DaysOfWeek.Tuesday:
            return "Tuesday"
        case DaysOfWeek.Wednesday:
            return "Wednesday"
        case DaysOfWeek.Thursday:
            return "Thursday"
        case DaysOfWeek.Friday:
            return "Friday"
        case DaysOfWeek.Saturday:
            return "Saturday"
        case DaysOfWeek.Sunday:
            return "Sunday"
        default:
            return "Invalid Day";
    }
}

const dayName: string = getDayName(DaysOfWeek.Saturday);
console.log(dayName);