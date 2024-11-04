exports.CrearAlojamiento = async (event) => {
    try {
        const token = event.headers['Authorization'];
        await validarToken(token);

        const { tenant_id, alojamiento_id, alojamiento_datos } = JSON.parse(event.body);
        const params = {
            TableName: 't_alojamiento',
            Item: {
                tenant_id,
                alojamiento_id,
                ...alojamiento_datos
            }
        };

        await dynamodb.put(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: "Alojamiento creado exitosamente" }) };
    } catch (error) {
        return { statusCode: 403, body: JSON.stringify({ error: error.message }) };
    }
};
