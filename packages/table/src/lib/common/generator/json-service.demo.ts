import { JsonService } from './json-service';

const partialJSON = `
[
    {
        "id": 1,
        "name": "Alice",
        "description": "Lorem ipsum [ dolor",
        "isActive": true,
        "tags": [
            "typescript",
            "javascript"
        ],
        "scripts": [],
        "profile": {
            "age": 30,
            "location": "Berlin"
        },
        "preferences": [
            {
                "key": "theme",
                "value": "dark"
            }
        ]
    
`;


const fixedJSON = new JsonService().fixJSON(partialJSON);
const parsedObject = JSON.parse(fixedJSON);
console.log(parsedObject);
