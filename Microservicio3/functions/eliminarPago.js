exports.EliminarPago = async (event) => {
    try {
        const token = event.headers['Authorization'];
        await validarToken(token);

        const { tenant_id, pago_id } = JSON.parse(event.body);
        const params = {
            TableName: 't_pagos',
            Key: { tenant_id, pago_id }
        };

        await dynamodb.delete(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: "Pago eliminado exitosamente" }) };
    } catch (error) {
        return { statusCode: 403, body: JSON.stringify({ error: error.message }) };
    }
};
