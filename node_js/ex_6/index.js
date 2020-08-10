const greet = (first_name, last_name, salutation = "Hi") => {
    return salutation + " " + first_name + " " + last_name
}
console.log(greet("Victoria","Baisas"))