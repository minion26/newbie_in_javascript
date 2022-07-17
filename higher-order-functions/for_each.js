let forOf = ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"];
for(let element of forOf)
{
    console.log(element.slice(0,1))
}

console.log(forOf.filter(element => element.length > 4))

forOf.forEach(element => console.log(element))
