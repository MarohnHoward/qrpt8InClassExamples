function getSpecial(weekday: string): string {
    switch (weekday){
        case "Monday":
        return "Family night, kids eat free(Under 12 or Passing for 12)";
        break;
        case "Tuesday":
            return "Taco Tuesday 50% off all Tacos"
            break;
        case "Wednesday":
            return " Waffle Wednesday";
            break;
        case "Thursday":
            return "Traditional Thursday";
            break;
        case "Friday":
            return "Fajita Friday"
            break;
            default: 
            return " Enjoy your weekend with 30% off Ice Cream";
        
    }
}

console.log (getSpecial("Monday"));
console.log (getSpecial("Tuesday"));
console.log(getSpecial("Wednesday"));
console.log(getSpecial("Thursday"));
console.log(getSpecial("Friday"));
console.log(getSpecial("Sunday"));