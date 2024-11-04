const AWS = require('aws-sdk');

// Configura el SDK de AWS para leer las credenciales desde el archivo de configuración predeterminado
AWS.config.loadFromPath('C:\\Users\\Milton\\.aws\\credentials'); // Asegúrate de que la ruta sea correcta

const sts = new AWS.STS();

async function checkAWSCredentials() {
    try {
        const identity = await sts.getCallerIdentity().promise();
        console.log("AWS credentials are valid.");
        console.log(`Account: ${identity.Account}, ARN: ${identity.Arn}`);
    } catch (error) {
        if (error.code === 'CredentialsError') {
            console.log("No AWS credentials found or credentials are invalid.");
        } else if (error.code === 'AccessDenied') {
            console.log("Access denied. Check your permissions.");
        } else {
            console.log(`An unexpected error occurred: ${error.message}`);
        }
    }
}

// Ejecuta la verificación
checkAWSCredentials();
