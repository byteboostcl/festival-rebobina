# Festival Rebobina

Sitio oficial de **REBOBINA · Festival de la Nostalgia**
3 y 4 de abril de 2027 · Campo Marte, Ciudad de México.

Fase actual: la home muestra únicamente el póster oficial de la edición 2027,
con arte vertical en móvil y horizontal en escritorio.

## Stack

- Angular 22 (standalone + signals, `OnPush`)
- SCSS
- Router con carga diferida (`loadComponent`)

## Requisitos

- Node.js 20+ (probado con Node 22)
- npm 11+ *(npm 10 falla al resolver los peers de vitest; usar `npx npm@12 install` si hiciera falta)*

## Puesta en marcha

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build de producción en dist/festival-rebobina
```

## Estructura

```
public/img/           Pósters (poster-mobile.jpg, poster-desktop.jpg)
src/app/app.ts        Componente raíz (router-outlet)
src/app/app.routes.ts Rutas — '' carga la home en lazy
src/app/pages/home/   Landing del póster
src/styles.scss       Estilos globales y tokens de color
```

## Cambiar el póster

Reemplazar los archivos en `public/img/` conservando los nombres, o ajustar las rutas
en `src/app/pages/home/home.ts` (propiedad `poster`). El breakpoint móvil/escritorio
es `min-width: 768px`, definido en `home.html`.

## Próximos pasos

- Cartel de artistas y line-up por día
- Venta de entradas / integración con ticketera
- Captura de correos para preventa
- Analítica y píxeles de campaña
