# 📚 Backend Utec GO

## 🚀 Descripción
Backend para el sistema **Utec GO**, basado en arquitectura de microservicios y desplegado en **AWS Lambda** utilizando **Serverless Framework**.

## 🏗️ Estructura del Proyecto

```
Backend-Utec-GO-main/
│── Microservicio3/
│   ├── checkAwsCredentials.js
│   ├── functions/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── serverless.yml
│
│── principal-microservice-main/
│   ├── README.md
│   ├── create_estudiante.py
│   ├── create_inscripcion.py
│   ├── create_program.py
│   ├── delete_estudiante.py
│   ├── delete_program.py
│   ├── search_estudiante.py
│   ├── search_inscripcion.py
│   ├── search_program.py
│   ├── serverless.yml
│   ├── update_estudiante.py
│   ├── update_inscripcion.py
│   ├── update_program.py
```

## 🛠️ Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git clone <URL_DEL_REPOSITORIO>
cd Backend-Utec-GO-main
```

### 2️⃣ Configurar Microservicio3 (Node.js + Serverless)
```sh
cd Microservicio3
npm install
```

### 3️⃣ Configurar principal-microservice-main (Python + Serverless)
```sh
cd principal-microservice-main
pip install -r requirements.txt
```

### 4️⃣ Desplegar en AWS Lambda
Ambos microservicios usan Serverless Framework para el despliegue. Ejecuta los siguientes comandos:

#### Desplegar Microservicio3:
```sh
cd Microservicio3
serverless deploy
```

#### Desplegar principal-microservice-main:
```sh
cd principal-microservice-main
serverless deploy
```

## 📌 Uso

### 📌 API Endpoints del Backend
Cada microservicio tiene sus propias rutas. Ejemplo:

#### ➤ Endpoints de `principal-microservice-main`
```http
GET /search_estudiante?codigo=12345
POST /create_estudiante
DELETE /delete_estudiante?codigo=12345
```

#### ➤ Endpoints de `Microservicio3`
```http
GET /functions/status
```

## 📡 Pruebas con Postman
Puedes importar la colección de Postman para probar los endpoints.

## 📜 Licencia
MIT License.
