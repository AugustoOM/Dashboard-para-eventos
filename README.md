# Dashboard de Eventos

Dashboard interactivo para gestión de venta de entradas y eventos, construido con React, TypeScript y Vite.

## Características

- 🎨 **Tema oscuro** con color naranja (#ea590c) como color principal
- 📊 **Métricas en tiempo real**: Total de entradas vendidas y dinero recaudado
- 🎯 **Eventos más populares**: Visualización de los top 5 eventos por entradas vendidas
- 💰 **Distribución de ingresos**: Gráfico de barras mostrando la distribución de ingresos por evento
- ⚡ **Interfaz reactiva** con animaciones y actualizaciones dinámicas
- 📱 **Responsive**: Diseño adaptable a diferentes tamaños de pantalla

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## Tecnologías

- React 18
- TypeScript
- Vite
- CSS personalizado con variables CSS

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── StatsCard.tsx   # Tarjeta de estadísticas
│   ├── PopularEvents.tsx # Lista de eventos populares
│   └── RevenueChart.tsx # Gráfico de ingresos
├── types.ts            # Definiciones TypeScript
├── App.tsx             # Componente principal
├── App.css             # Estilos del componente App
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## Personalización

El color principal (#ea590c) está definido en `src/index.css` como variable CSS `--orange-primary`. Puedes modificarlo fácilmente ajustando las variables CSS en ese archivo.

## Notas

Los datos mostrados son de ejemplo (mock). En una implementación real, estos datos vendrían de una API o base de datos.
