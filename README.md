# Proyecto para practicar

Este proyecto de Vanilla TypeScript con Vite se usó para practicar los principios SOLID y observar cómo una refactorización dirigida mejora el diseño, la mantenibilidad y la capacidad de prueba.

## Ejecución

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

## Bitácora profunda

### 1. SRP: separar responsabilidades de producto y notificación

**Reto:** `ProductBloc` hacía carga de productos y envío de correos al mismo tiempo.

**Refactor aplicado:** se dejó `ProductBloc` solo con la lógica de inventario y se creó `NotificationService` para el envío de notificaciones.

**Qué mejora:** cada clase tiene una sola razón de cambio. Si cambia la forma de notificar, no se toca la lógica de productos.

**Reflexión:** antes, un cambio pequeño en notificaciones podía afectar el flujo completo del inventario. Después, cada responsabilidad quedó aislada.

### 2. OCP: adaptador HTTP para desacoplar axios

**Reto:** `NewsService` dependía directamente de `axios`.

**Refactor aplicado:** se definió la interfaz `HttpClient` y se implementó `FetchHttpClient` como adaptador concreto.

**Qué mejora:** el servicio de noticias ya no depende de una librería específica. Si mañana se cambia `fetch` por otro cliente, solo se reemplaza el adaptador.

**Reflexión:** el diseño ahora está abierto a extensión y cerrado a modificación, porque el contrato se mantiene y la implementación puede variar.

### 3. LSP: contrato común para vehículos

**Reto:** `VehicleManager` usaba `instanceof` para distinguir vehículos.

**Refactor aplicado:** se creó la abstracción `Vehicle` con el método `printDetails()` y cada vehículo implementa su propia versión.

**Qué mejora:** el manager ya no necesita saber qué tipo concreto recibió. Puede procesar vehículos nuevos, como un `Drone`, sin agregar nuevos `if/else`.

**Reflexión:** la sustitución es real porque cualquier subclase respeta el contrato común y el consumidor no rompe su lógica interna.

### 4. ISP: segregación de aves en capacidades específicas

**Reto:** la interfaz `Bird` obligaba a implementar `fly()` y `swim()` aunque no todas las aves podían hacerlo.

**Refactor aplicado:** se separó la interfaz en `Eatable`, `Flyable` y `Swimmable`.

**Qué mejora:** cada especie implementa solo lo que realmente hace. `Penguin`, por ejemplo, no necesita declarar un `fly()` que termine arrojando errores.

**Reflexión:** el diseño evita contratos forzados y reduce código falso o inseguro.

### 5. DIP: inyección de base de datos mediante interfaz

**Reto:** `PostService` instanciaba su dependencia concreta de base de datos.

**Refactor aplicado:** se introdujo la interfaz `DatabaseProvider` y `PostService` ahora recibe la dependencia por constructor.

**Qué mejora:** se puede intercambiar la base de datos real por `MockDatabaseService` en pruebas unitarias sin cambiar la clase de negocio.

**Reflexión:** el nivel alto deja de depender de una clase concreta y pasa a depender de una abstracción, lo que facilita pruebas y mantenimiento.

## Conclusión general

Las cinco refactorizaciones muestran que SOLID no es solo teoría: permite rediseñar el código para que sea más flexible, más estable ante cambios y más fácil de probar. El resultado es una base más limpia para evolucionar el proyecto sin romper su comportamiento.