const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket


// function profileLookup1(name, property) {
//     for (i = 0; i < facebookProfiles.length; i++) {
//         const profiles = facebookProfiles[i]
//         if (profiles.firstName === name) {
//             return profiles[property] ? profiles[property] : "no such property"
//         }
//     }
//     return "person does not exit"
// }
// console.log(profileLookup1("Pritesh", "likes"))

// ================================== 1 ====================================== //
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// function getNamesFromGurgaon(facebookProfiles) {

// const fullNames = facebookProfiles.filter((person) => person.address.location === "gurgaon").map((person) => person.firstName + " " + (person.lastName || ""));

// console.log(fullNames);

// }

// getNamesFromGurgaon("Akash")

// ==================================2 ====================================== //

// function findFullName(statename) {  
//     const fullname =facebookProfiles.filter(x => x.address.state==statename).map(x=> {return x.firstName})
//     console.log(fullname);
// }

// findFullName("haryana")

// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //

// function getDLStatus() {
//     const status = facebookProfiles.filter(x=> x.address.location == "gurgaon").map(x => {return (x.firstName.concat(" ",x.lastName)).concat(" ",x.hasDrivingLicense? "D/L" : "N D/L")})

//     console.log(status);
// }
// getDLStatus(facebookProfiles)

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //

// function getFullName() {
//     const fullname = facebookProfiles.filter(x=> x.firstName).map(x=> x.firstName.concat(" ",x.lastName))
//     console.log(fullname);
// }

// getFullName(facebookProfiles)

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //

// function getLikes() {
   
//     const like = facebookProfiles.filter(x=> x.likes).map(x=> x.likes)
//     console.log(like.flat(2));
// }
// getLikes(facebookProfiles)


// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

// function getNameFromDelhiWithDL() {

//     for (let i = 0; i < facebookProfiles.length; i++) {
//         const person = facebookProfiles[i];
//         if (person.address.location === "delhi" && person.hasDrivingLicense) {
//             return person.firstName
//         }
//     }
//     return "no such person"
// }
// result = getNameFromDelhiWithDL(facebookProfiles)
// console.log(result);

//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

// function getNameOfDriverWithoutDL() {
//     for (let i = 0; i < facebookProfiles.length; i++) {
//         const person = facebookProfiles[i];

//     //     if (person.likes){
//     //          const likeD = person.likes.find(x => x === "driving")
//     //          if (likeD){
//     //             const { hasDrivingLicense, firstName } = person
//     //             if (!hasDrivingLicense)
//     //             return firstName
//     //          }
//     //     }
//     // }return "not found "
// }
// const result = getNameOfDriverWithoutDL()

// console.log(result);
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh



