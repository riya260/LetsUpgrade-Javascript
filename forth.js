let arr=[
    {
         name:"Donald", age:20, country: "America", hobbies: "Fighting"},
    {
        name:"Modijii", age:40, country: "India", hobbies: "Playing" },
    {
        name:"Imran", age:45, country: "Pakistan", hobbies: "Dancing"},
    {
        name:"Shivraj", age:15, country: "India", hobbies: "Singing"},

    ];




function printage()
{
    arr.forEach(function(person)
    {
    if(person.age<30)
    {
        console.log(person);
    }
});
}
printage();

function printcountry()
{
    arr.forEach(function(person)
    {
    if(person.country=="India")
    {
        console.log(person);
    }
});
}
printcountry();


