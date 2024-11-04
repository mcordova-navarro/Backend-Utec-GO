const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function validarToken(token) {
    const params = {
        FunctionName: "ValidarTokenAcceso",
        InvocationType: "RequestResponse",
        Payload: JSON.stringify({ token })
    };
    
    const response = await lambda.invoke(params).promise();
    const result = JSON.parse(response.Payload);

    if (result.statusCode === 403) {
        throw new Error('Forbidden - Acceso No Autorizado');
    }
}
