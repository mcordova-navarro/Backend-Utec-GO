exports.CrearPago = async (event) => {
    try {
        const token = event.headers['Authorization'];
        await validarToken(token);

        const { tenant_id, pago_id, pago_datos } = JSON.parse(event.body);
        const params = {
            TableName: 't_pagos',
            Item: {
                tenant_id,
                pago_id,
                ...pago_datos
            }
        };

        await dynamodb.put(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: "Pago creado exitosamente" }) };
    } catch (error) {
        return { statusCode: 403, body: JSON.stringify({ error: error.message }) };
    }
};
