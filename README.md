<div align="center">

# 🛡️ SecAuditAD — Application

**Aplicación web (GitHub Pages) de presentación comercial de la suite SecAuditAD:**
planes de auditoría en USD, propuesta comercial generable por plan, matriz de los
54 controles segmentada por fases, demo interactiva del motor, informes de ejemplo
interactivos, mapeo normativo y nexos con fuentes oficiales.

*Tema negro/rojo elegante · 100% estática (HTML + CSS + JS, sin backend) · lista para GitHub Pages.*

**Autor: Alex Alcivar M** — Guayaquil, Ecuador · v1.0.0

</div>

---

## Páginas

| Página | Contenido |
|---|---|
| `index.html` | Portada: qué es SecAuditAD, fases en cards, planes y proceso |
| `planes.html` | Planes Jr / Senior / Premium con precios en USD, comparación, complementos y FAQ |
| `propuesta.html` | Generador de propuesta comercial por plan (nombre del cliente + complementos → documento imprimible a PDF) |
| `controles.html` | Matriz de los 54 controles segmentada por fases, con búsqueda, filtros y detalle (MITRE + mapeo normativo) |
| `demo.html` | Demo interactiva: corre la simulación del motor por plan (terminal, score, hallazgos) con datos sintéticos |
| `informes.html` | Galería de los entregables |
| `informes/informe-tecnico.html` | Informe técnico demo interactivo (filtros, hallazgos expandibles, export JSON) |
| `informes/informe-ejecutivo.html` | Informe ejecutivo demo (impacto de negocio, multas en USD con fuentes, plan de remediación) |
| `normativa.html` | Cobertura del catálogo frente a ISO 27001 / NIST / CIS / CSF 2.0 / protección de datos LATAM |
| `nexos.html` | Sanciones reales en USD con fuentes oficiales y recursos (SPDP, SIC, ANPD, EDPB, MITRE…) |

## Estructura

```
SecAuditAD-application/
├── index.html · planes.html · propuesta.html · controles.html
├── demo.html · informes.html · normativa.html · nexos.html
├── informes/                    # informes demo (páginas independientes)
│   ├── informe-tecnico.html
│   └── informe-ejecutivo.html
└── assets/
    ├── css/style.css            # sistema de diseño negro/rojo
    └── js/
        ├── data.js              # datos del framework (controles, planes, sanciones)
        ├── main.js              # navegación, modales, acordeones, contacto
        └── demo.js              # motor de la demo interactiva
```

## Configuración

- **Contacto**: editar `assets/js/data.js` → `SITE.contact` (WhatsApp, correo, LinkedIn).
  Si los campos están vacíos, los enlaces de contacto se ocultan automáticamente.
- **Datos**: `data.js` se genera desde las configuraciones del framework SecAuditAD
  (`ControlMatrix`, `NormativeMap`, `Plans`). Para actualizar la web tras cambiar el
  motor, regenerar `data.js`.

## Publicación (GitHub Pages)

1. Crear el repositorio público `SecAuditAD-application` en GitHub.
2. Subir el contenido de esta carpeta a la rama `main`.
3. En *Settings → Pages*, elegir *Deploy from a branch* → `main` / `(root)`.
4. El sitio queda en `https://<usuario>.github.io/SecAuditAD-application/`.

Sin build, sin dependencias y sin backend: todo el contenido es estático y las
interacciones corren 100% en el navegador del visitante.

## Propiedad intelectual

© 2026 **Alex Alcivar M** — Guayaquil, Ecuador · Todos los derechos reservados.
Obra propietaria: prohibida su copia, modificación o reutilización. Ver licencia en
el repositorio del framework **SecAuditAD**.
