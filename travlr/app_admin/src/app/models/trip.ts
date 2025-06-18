export interface Trip {
    _id: string, //Internal primary key in MongoDB
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string,
}

// Instances of this interface will be used to transfer HTML form data to the component for
// rendering as well as between components and the REST endpoint. Angular will
// automatically marshal the data back and forth between JSON and JavaScript objects.