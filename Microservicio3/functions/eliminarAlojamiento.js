const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // Obtener el token de los headers
    const token = event.headers && event.headers.Authorization;
    if (!token) {
        return {
            statusCode: 403,
            body: 'Forbidden - No token provided'
        };
    }

    // Invocar la función ValidarTokenAcceso
    const payload = JSON.stringify({ token });
    const params = {
        FunctionName: 'ValidarTokenAcceso',
        InvocationType: 'RequestResponse',
        Payload: payload
    };

    try {
        const invokeResponse = await lambda.invoke(params).promise();
        const result = JSON.parse(invokeResponse.Payload);

        // Verificar el resultado de la validación
        if (result.statusCode !== 200) {
            return {
                statusCode: 403,
                body: 'Forbidden - Invalid token'
            };
        }

        // Lógica para eliminar un alojamiento (si el token es válido)
        const { tenant_id, alojamiento_id } = JSON.parse(event.body);
        const deleteParams = {
            TableName: 't_alojamiento',
            Key: { tenant_id, alojamiento_id }
        };

        await dynamodb.delete(deleteParams).promise();

        return {
            statusCode: 200,
            body: 'Alojamiento eliminado exitosamente'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'Internal Server Error'
        };
    }
};
