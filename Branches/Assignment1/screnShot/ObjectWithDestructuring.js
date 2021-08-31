const personData={
    firstName:"sunil",
    lastName:"kumar",
    age:24,
    addres:"karachi"
}
function joinName({firstName,lastName}){
    return firstName+" "+lastName;
}

console.log(joinName(personData));