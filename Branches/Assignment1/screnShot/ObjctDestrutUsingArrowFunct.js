const personData={
    firstName:"sunil",
    lastName:"kumar",
    age:24,
    addres:"karachi"
}
const joinName=({firstName,lastName})=>firstName+"_"+lastName;

console.log(joinName(personData));