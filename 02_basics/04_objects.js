//Singleton Object
//------------------------------------------------------------
/*
A singleton object is an object where only ONE instance exists in the entire program.

👉 You don’t create multiple copies of it.
👉 Everyone uses the same object.

Simple example in JavaScript
Using an object literal (most common)
const student = {
    name: "Srikant",
    age: 19
};
This is a singleton object because:
It’s created once
There’s no constructor
No new copies are made*/

//----------------------------------------------------
/*
NOT a singleton object
function Student(name) {
    this.name = name;
}

const s1 = new Student("A");
const s2 = new Student("B");*/
//------------------------------------------------------------------------------------------------------

//const tender = new Object();
const tender = {}
tender.id = "124"
tender.name = "srikant"

console.log(tender)//{ id: '124', name: 'srikant' }
console.log(tender.id)//124

const user = {
    email : "sri@gmaail.com",
    name : {
        fullname : {
            userfullname : {
                firstname : "srikant",
                lastname : "misra"
            }
        }
    }
}

console.log(user)
/*
{
  email: 'sri@gmaail.com',
  name: { fullname: { userfullname: [Object] } }
}*/
console.log(user.name)
/*
{
  fullname: { userfullname: { firstname: 'srikant', lastname: 'misra' } }
}*/
console.log(user.name.fullname)//{ userfullname: { firstname: 'srikant', lastname: 'misra' } }
console.log(user.name.fullname.userfullname)//{ firstname: 'srikant', lastname: 'misra' }

const obj1 = {"a": 2, "b": 3};
const obj2 = {"c": 4, "d": 5};
const obj3 = Object.assign(obj1, obj2)//assign help like concatinate , it will help to joint two object
console.log(obj3)//{ a: 2, b: 3, c: 4, d: 5 }

//or we can also use spread operator 
const obj4 ={...obj1, ...obj2}
console.log(obj4)//{ a: 2, b: 3, c: 4, d: 5 }

const user1 = [
    {
        id : 12,
        name:"sri"
    },
    {
        id : 34,
        name : "babu"
    },
    {
        id : 18,
        name : "virat"
    }  
]

console.log(user1[1].name)//babu
console.log(user1)

// [
//   { id: 12, name: 'sri' },
//   { id: 34, name: 'babu' },
//   { id: 18, name: 'virat' }
// ]
console.log(tender)//{ id: '124', name: 'srikant' }
console.log(Object.keys(tender))//[ 'id', 'name' ]
console.log(Object.values(tender))//[ '124', 'srikant' ]
