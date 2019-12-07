
const createApisDoc = ( identity, keys, attributes, host="http://Your_Domain" ) => {

    return `
#### Login

Used to collect a Token for a registered User.
        
**URL** : \`/api/v1/login/\`
        
**Method** : \`POST\`
        
**Auth required** : NO
        
**Data constraints**
        
\`\`\`json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
\`\`\`

#### Success Response

**Code** : \`200 OK\`

**Content example**

\`\`\`json
{
    "user": {
        "your":"user attributes"
    },
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
\`\`\`

#### Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : \`401 Unauthorized\`

**Content** :

\`\`\`json
{
    "erros": "message"
}
\`\`\`
    `.trim()

}

export default {
    createApisDoc
}