# Indicaciones para su ejecución

## Requisitos

Antes de ejecutar el proyecto asegurarse de tener instalado:

* Node.js 20 o superior
* npm
* Docker Desktop (opcional, para ejecución mediante contenedores)

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Liss-sir/prueba_tecnica.git
```

Ingresar al directorio del proyecto:

```bash
cd pruebatecnica
```

Instalar dependencias:

```bash
npm install
```

## Ejecución en desarrollo

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

## Construcción para producción

Generar la versión de producción:

```bash
npm run build
```

Ejecutar la aplicación en modo producción:

```bash
npm start
```

## Ejecución con Docker

Construir la imagen:

```bash
docker build -t portal-programas .
```

Ejecutar el contenedor:

```bash
docker run -p 3000:3000 portal-programas
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

## Ejecución con Docker Compose

Construir y ejecutar el proyecto:

```bash
docker compose up --build
```

Para detener los contenedores:

```bash
docker compose down
```
