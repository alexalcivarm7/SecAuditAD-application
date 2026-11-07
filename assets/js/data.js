/* SecAuditAD Application — data.js (generado desde las configs del framework) */
/* Autor: Alex Alcivar M — Guayaquil, Ecuador */
const DATA = {
 "SITE": {
  "name": "SecAuditAD",
  "version": "1.0.0",
  "author": "Alex Alcivar M",
  "city": "Guayaquil, Ecuador",
  "currency": "USD",
  "contact": {
   "whatsapp": "",
   "email": "",
   "linkedin": ""
  }
 },
 "PHASES": {
  "1": {
   "id": 1,
   "name": "Identidad y Permisos Núcleo",
   "icon": "🔑"
  },
  "2": {
   "id": 2,
   "name": "Infraestructura y GPOs",
   "icon": "🏢"
  },
  "3": {
   "id": 3,
   "name": "Infraestructura PKI (AD CS)",
   "icon": "🔐"
  },
  "4": {
   "id": 4,
   "name": "Protocolos de Red y Mapeo Lateral",
   "icon": "🌐"
  },
  "5": {
   "id": 5,
   "name": "Entornos Híbridos y Entra ID",
   "icon": "☁️"
  },
  "6": {
   "id": 6,
   "name": "Higiene y Línea Base (nueva fase consolidada)",
   "icon": "🧹"
  }
 },
 "CONTROLS": [
  {
   "id": "SecAuditAD-001",
   "name": "Higiene de Grupos de Máximo Privilegio (Tier 0)",
   "phase": 1,
   "weight": 8,
   "attackVector": "Enumeración y reutilización de credenciales de Domain/Enterprise/Schema Admins",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1078.002",
    "T1098"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.3 Segregación de funciones",
     "A.8.2 Derechos de acceso privilegiado",
     "A.5.18 Derechos de acceso"
    ],
    "NIST_80053_R5": [
     "AC-6(5) Cuentas privilegiadas",
     "AC-6(7) Revisión de privilegios",
     "AC-2(3) Gestión de cuentas"
    ],
    "CIS_v8": [
     "5.4 Restringir privilegios admin a cuentas dedicadas",
     "6.8 RBAC"
    ],
    "CIS_AD_Benchmark": [
     "Grupos y cuentas administrativas",
     "Tiering de administración"
    ],
    "NIST_CSF_20": [
     "PR.AA-01",
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-002",
   "name": "Derechos de Replicación DCSync en la Raíz del Dominio",
   "phase": 1,
   "weight": 10,
   "attackVector": "DCSync / exfiltración de NTDS.dit (T1003.006)",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1003.006"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración",
     "A.8.2 Derechos de acceso privilegiado"
    ],
    "NIST_80053_R5": [
     "AC-3 Aplicación del control de acceso",
     "AC-6(9) Registro de uso de funciones privilegiadas"
    ],
    "CIS_v8": [
     "3.3 Listas de control de acceso",
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "Derechos extendidos sobre la raíz del dominio"
    ],
    "NIST_CSF_20": [
     "PR.AA-05",
     "DE.CM-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-003",
   "name": "Integridad SDProp / ACL de AdminSDHolder",
   "phase": 1,
   "weight": 9,
   "attackVector": "Persistencia estructural vía AdminSDHolder (T1098)",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1098",
    "T1484"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración",
     "A.5.3 Segregación de funciones"
    ],
    "NIST_80053_R5": [
     "AC-6(10) Acceso no privilegiado a funciones de seguridad",
     "AC-3"
    ],
    "CIS_v8": [
     "5.4",
     "3.3"
    ],
    "CIS_AD_Benchmark": [
     "AdminSDHolder y SDProp"
    ],
    "NIST_CSF_20": [
     "PR.AA-05",
     "PR.PS-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-004",
   "name": "AD CS — Plantillas con Inyección de SAN (ESC1)",
   "phase": 1,
   "weight": 9,
   "attackVector": "ESC1: suplantación de identidad vía SAN en plantilla publicada",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1649"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.24 Uso de criptografía",
     "A.8.2 Derechos de acceso privilegiado"
    ],
    "NIST_80053_R5": [
     "IA-5(2) Gestión de autenticadores / PKI",
     "AC-3"
    ],
    "CIS_v8": [
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "AD CS — plantillas de certificado"
    ],
    "NIST_CSF_20": [
     "PR.AA-04"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-005",
   "name": "Delegación Incondicional (Unconstrained Delegation)",
   "phase": 1,
   "weight": 8,
   "attackVector": "Captura de TGTs en objetos con TRUSTED_FOR_DELEGATION (T1558)",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1558"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.2 Derechos de acceso privilegiado",
     "A.8.9 Gestión de configuración"
    ],
    "NIST_80053_R5": [
     "AC-6(1) Acceso a funciones de seguridad",
     "AC-3"
    ],
    "CIS_v8": [
     "5.4",
     "3.3"
    ],
    "CIS_AD_Benchmark": [
     "Delegación Kerberos"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL"
    ]
   }
  },
  {
   "id": "SecAuditAD-006",
   "name": "Delegación Restringida con Transición de Protocolo (S4U2Self)",
   "phase": 1,
   "weight": 7,
   "attackVector": "Abuso de TRUSTED_TO_AUTH_FOR_DELEGATION (T1134)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1134"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.2 Derechos de acceso privilegiado"
    ],
    "NIST_80053_R5": [
     "AC-3",
     "AC-6"
    ],
    "CIS_v8": [
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "Delegación Kerberos"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-007",
   "name": "Exposición a Kerberoasting (SPN y Cifrados RC4)",
   "phase": 1,
   "weight": 7,
   "attackVector": "Kerberoasting / cracking offline de TGS (T1558.003)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1558.003"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.17 Información de autenticación",
     "A.8.5 Autenticación segura"
    ],
    "NIST_80053_R5": [
     "IA-5 Gestión de autenticadores",
     "IA-5(1) Política de contraseñas"
    ],
    "CIS_v8": [
     "5.2 Contraseñas únicas",
     "5.5 Inventario de cuentas de servicio"
    ],
    "CIS_AD_Benchmark": [
     "Cuentas de servicio y SPNs"
    ],
    "NIST_CSF_20": [
     "PR.AA-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-008",
   "name": "Resource-Based Constrained Delegation (RBCD)",
   "phase": 1,
   "weight": 8,
   "attackVector": "msDS-AllowedToActOnBehalfOfOtherIdentity manipulable (T1134)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1558.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.2 Derechos de acceso privilegiado",
     "A.8.9 Gestión de configuración"
    ],
    "NIST_80053_R5": [
     "AC-3",
     "AC-6"
    ],
    "CIS_v8": [
     "3.3",
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "Delegación restringida por recurso"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-009",
   "name": "Shadow Credentials (msDS-KeyCredentialLink)",
   "phase": 1,
   "weight": 8,
   "attackVector": "Inyección de Key Trust para persistencia/impersonación",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1098"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.2 Derechos de acceso privilegiado",
     "A.8.24 Uso de criptografía"
    ],
    "NIST_80053_R5": [
     "AC-3",
     "IA-5"
    ],
    "CIS_v8": [
     "3.3",
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "msDS-KeyCredentialLink / WHfB"
    ],
    "NIST_CSF_20": [
     "PR.AA-04"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-010",
   "name": "ACLs Críticas en Raíz del Dominio y OUs",
   "phase": 1,
   "weight": 8,
   "attackVector": "GenericAll/WriteDacl/WriteOwner delegados (escalada a Tier 0)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1484"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.15 Control de acceso",
     "A.8.3 Restricción de acceso a la información"
    ],
    "NIST_80053_R5": [
     "AC-3",
     "AC-6(7) Revisión de privilegios"
    ],
    "CIS_v8": [
     "3.3",
     "6.8"
    ],
    "CIS_AD_Benchmark": [
     "Delegación de permisos en OUs"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-011",
   "name": "Políticas de Contraseña y PasswordNeverExpires",
   "phase": 1,
   "weight": 6,
   "attackVector": "Password spraying / credenciales permanentes",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1110"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.17 Información de autenticación",
     "A.8.5 Autenticación segura"
    ],
    "NIST_80053_R5": [
     "IA-5(1) Política de contraseñas",
     "IA-4 Gestión de identificadores"
    ],
    "CIS_v8": [
     "5.2 Contraseñas únicas"
    ],
    "CIS_AD_Benchmark": [
     "Políticas de contraseñas"
    ],
    "NIST_CSF_20": [
     "PR.AA-01",
     "PR.AA-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-012",
   "name": "Exposición de Secretos en Atributos de Texto",
   "phase": 1,
   "weight": 6,
   "attackVector": "Credenciales en description/info (T1552.001)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1552"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.17 Información de autenticación",
     "A.8.12 Prevención de fuga de información"
    ],
    "NIST_80053_R5": [
     "IA-5(7) No reutilización de contraseñas en texto claro",
     "SC-28 Protección de información en reposo"
    ],
    "CIS_v8": [
     "3.6",
     "5.2"
    ],
    "CIS_AD_Benchmark": [
     "Atributos expuestos del directorio"
    ],
    "NIST_CSF_20": [
     "PR.DS-01",
     "PR.AA-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR",
     "GDPR_EU"
    ]
   }
  },
  {
   "id": "SecAuditAD-013",
   "name": "AS-REP Roasting (DONT_REQ_PREAUTH)",
   "phase": 2,
   "weight": 7,
   "attackVector": "AS-REP Roasting / cracking offline (T1558.004)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1558.004"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.17 Información de autenticación",
     "A.8.5 Autenticación segura"
    ],
    "NIST_80053_R5": [
     "IA-5 Gestión de autenticadores"
    ],
    "CIS_v8": [
     "5.2"
    ],
    "CIS_AD_Benchmark": [
     "Preautenticación Kerberos"
    ],
    "NIST_CSF_20": [
     "PR.AA-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-014",
   "name": "Higiene de Cuentas de Computadora (Rotación de Contraseña)",
   "phase": 2,
   "weight": 5,
   "attackVector": "Equipos zombie como plataforma de persistencia",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1078.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración"
    ],
    "NIST_80053_R5": [
     "CM-6 Ajustes de configuración",
     "AC-2(3) Deshabilitación de cuentas inactivas"
    ],
    "CIS_v8": [
     "4.1 Configuración segura",
     "5.3 Deshabilitar cuentas inactivas"
    ],
    "CIS_AD_Benchmark": [
     "Cuentas de equipo"
    ],
    "NIST_CSF_20": [
     "PR.PS-01",
     "PR.AA-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-015",
   "name": "Vectores de Distribución Masiva (GPO Takeover)",
   "phase": 2,
   "weight": 7,
   "attackVector": "Modificación de GPO para ejecución masiva (T1574)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1484.001"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración",
     "A.5.15 Control de acceso"
    ],
    "NIST_80053_R5": [
     "CM-6",
     "AC-3"
    ],
    "CIS_v8": [
     "3.3",
     "4.1"
    ],
    "CIS_AD_Benchmark": [
     "GPO — Delegación"
    ],
    "NIST_CSF_20": [
     "PR.PS-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-016",
   "name": "Seguridad de Filtros WMI en GPOs",
   "phase": 2,
   "weight": 6,
   "attackVector": "Takeover de filtros WMI (T1505)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1484.001"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración",
     "A.5.15 Control de acceso"
    ],
    "NIST_80053_R5": [
     "CM-6",
     "AC-3"
    ],
    "CIS_v8": [
     "3.3"
    ],
    "CIS_AD_Benchmark": [
     "Filtros WMI"
    ],
    "NIST_CSF_20": [
     "PR.PS-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-017",
   "name": "Seguridad en Relaciones de Confianza (Trusts)",
   "phase": 2,
   "weight": 6,
   "attackVector": "Abuso de trusts / SIDs de otros dominios (T1482)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1484.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.14 Transferencia de información",
     "A.8.9 Gestión de configuración"
    ],
    "NIST_80053_R5": [
     "AC-4 Flujo de información",
     "AC-3"
    ],
    "CIS_v8": [
     "3.3",
     "12.2 Arquitectura de red segura"
    ],
    "CIS_AD_Benchmark": [
     "Relaciones de confianza"
    ],
    "NIST_CSF_20": [
     "PR.IR-01"
    ],
    "DATA_PROTECTION": [
     "LEY1581_COL",
     "LGPD_BR",
     "GDPR_EU"
    ]
   }
  },
  {
   "id": "SecAuditAD-018",
   "name": "Integridad de SYSVOL y Credenciales GPP (cpassword)",
   "phase": 2,
   "weight": 7,
   "attackVector": "MS14-025 / lectura de cpassword en SYSVOL (T1552.006)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1552.006"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.12 Prevención de fuga de información",
     "A.8.9 Gestión de configuración"
    ],
    "NIST_80053_R5": [
     "IA-5(7)",
     "SC-28 Protección en reposo"
    ],
    "CIS_v8": [
     "3.6",
     "5.2"
    ],
    "CIS_AD_Benchmark": [
     "SYSVOL / GPP"
    ],
    "NIST_CSF_20": [
     "PR.DS-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-019",
   "name": "Permisos de Lectura de LAPS (Legacy y Windows LAPS)",
   "phase": 2,
   "weight": 6,
   "attackVector": "Lectura de administrador local vía LAPS",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1552"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.2 Derechos de acceso privilegiado",
     "A.5.15 Control de acceso"
    ],
    "NIST_80053_R5": [
     "IA-5(1) Gestión de autenticadores",
     "AC-6"
    ],
    "CIS_v8": [
     "5.4",
     "3.3"
    ],
    "CIS_AD_Benchmark": [
     "LAPS"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-020",
   "name": "SPNs Duplicados e Higiene de Cuentas de Servicio",
   "phase": 2,
   "weight": 4,
   "attackVector": "Colisiones SPN → autenticación interceptable",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1558.003"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración"
    ],
    "NIST_80053_R5": [
     "CM-6",
     "CM-7 Funcionalidad mínima"
    ],
    "CIS_v8": [
     "5.5 Inventario de cuentas de servicio"
    ],
    "CIS_AD_Benchmark": [
     "SPNs"
    ],
    "NIST_CSF_20": [
     "PR.AA-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-057",
   "name": "Cobertura de Despliegue LAPS (Esquema y Parque)",
   "phase": 2,
   "weight": 7,
   "attackVector": "Movimiento lateral masivo por reutilización de contraseñas locales",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1550.002",
    "T1078.003"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.17 Información de autenticación",
     "A.8.5 Autenticación segura"
    ],
    "NIST_80053_R5": [
     "IA-5(1) Autenticadores basados en contraseñas",
     "IA-5(11) Almacenamiento en caché"
    ],
    "CIS_v8": [
     "4.6 Credenciales únicas de administrador",
     "4.8 Rotación de credenciales"
    ],
    "CIS_AD_Benchmark": [
     "Despliegue de LAPS",
     "Contraseñas locales de administrador"
    ],
    "NIST_CSF_20": [
     "PR.AA-03",
     "PR.AA-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-058",
   "name": "Higiene del Inventario de GPOs (Sin Vincular / Deshabilitadas)",
   "phase": 2,
   "weight": 3,
   "attackVector": "Errores operativos y ofuscación de la línea base de GPOs",
   "severityBase": "LOW",
   "scope": "DOMAIN",
   "mitre": [
    "T1484.001"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de la configuración",
     "A.5.37 Procedimientos operativos documentados"
    ],
    "NIST_80053_R5": [
     "CM-8 Inventario de componentes",
     "CM-6 Valores de configuración"
    ],
    "CIS_v8": [
     "4.1 Configuración segura de la infraestructura",
     "4.2 Mantener configuraciones documentadas"
    ],
    "CIS_AD_Benchmark": [
     "Higiene de GPOs",
     "Inventario de políticas"
    ],
    "NIST_CSF_20": [
     "PR.PS-01",
     "ID.AM-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-021",
   "name": "AD CS — Vectores ESC2 / ESC3 (Any-Purpose y Enrollment Agent)",
   "phase": 3,
   "weight": 8,
   "attackVector": "ESC2/ESC3: certificados multiuso / enrollment agent",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1649"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.24 Uso de criptografía",
     "A.5.15 Control de acceso"
    ],
    "NIST_80053_R5": [
     "IA-5(2) PKI",
     "AC-3"
    ],
    "CIS_v8": [
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "AD CS — plantillas"
    ],
    "NIST_CSF_20": [
     "PR.AA-04"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-022",
   "name": "AD CS — ESC6 (EDITF_ATTRIBUTESUBJECTALTNAME2) y ESC7 (ManageCA/ManageCertificates)",
   "phase": 3,
   "weight": 8,
   "attackVector": "Inyección global de SAN / control administrativo de la CA",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1649"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.24 Uso de criptografía",
     "A.8.2 Derechos de acceso privilegiado"
    ],
    "NIST_80053_R5": [
     "IA-5(2) PKI",
     "AC-6"
    ],
    "CIS_v8": [
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "AD CS — configuración de CA"
    ],
    "NIST_CSF_20": [
     "PR.AA-04"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-023",
   "name": "AD CS — ESC8 (NTLM Relay en Endpoints de Inscripción Web)",
   "phase": 3,
   "weight": 7,
   "attackVector": "NTLM Relay contra /certsrv (T1187)",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1557"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.24 Uso de criptografía",
     "A.8.20 Seguridad de servicios de red"
    ],
    "NIST_80053_R5": [
     "SC-8 Confidencialidad e integridad de transmisión",
     "SC-8(1) Protección criptográfica"
    ],
    "CIS_v8": [
     "10.3? — (tema: protección NTLM)"
    ],
    "CIS_AD_Benchmark": [
     "AD CS — Web Enrollment"
    ],
    "NIST_CSF_20": [
     "PR.DS-02",
     "PR.IR-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-024",
   "name": "AD CS — ESC9 / ESC10 (Ataduras KDC y Mapeo de Certificados)",
   "phase": 3,
   "weight": 7,
   "attackVector": "ESC9/ESC10: weak certificate binding / UPN mapping",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1649"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.24 Uso de criptografía",
     "A.8.5 Autenticación segura"
    ],
    "NIST_80053_R5": [
     "IA-5(2) PKI",
     "IA-2 Identificación y autenticación"
    ],
    "CIS_v8": [
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "AD CS — KDC binding"
    ],
    "NIST_CSF_20": [
     "PR.AA-04"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-025",
   "name": "Erradicación de SMBv1 (EternalBlue)",
   "phase": 4,
   "weight": 6,
   "attackVector": "CVE-2017-0144 EternalBlue (T1210)",
   "severityBase": "HIGH",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1210"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración",
     "A.8.7 Protección contra malware"
    ],
    "NIST_80053_R5": [
     "CM-7 Funcionalidad mínima",
     "CM-6"
    ],
    "CIS_v8": [
     "4.8 Desinstalar/deshabilitar servicios innecesarios"
    ],
    "CIS_AD_Benchmark": [
     "Protocolo SMB"
    ],
    "NIST_CSF_20": [
     "PR.PS-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-026",
   "name": "Firma SMB Obligatoria (Anti SMB Relay)",
   "phase": 4,
   "weight": 6,
   "attackVector": "SMB Relay / NTLM Relay (T1187)",
   "severityBase": "HIGH",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1557"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.20 Seguridad de servicios de red",
     "A.8.24 Uso de criptografía"
    ],
    "NIST_80053_R5": [
     "SC-8 Confidencialidad e integridad de transmisión"
    ],
    "CIS_v8": [
     "12.2",
     "3.6"
    ],
    "CIS_AD_Benchmark": [
     "SMB Signing"
    ],
    "NIST_CSF_20": [
     "PR.IR-01",
     "PR.DS-02"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-027",
   "name": "Firma LDAP Obligatoria en DC (Anti LDAP Relay)",
   "phase": 4,
   "weight": 7,
   "attackVector": "LDAP Relay sobre controladores de dominio (T1187)",
   "severityBase": "HIGH",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1557"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.20 Seguridad de servicios de red",
     "A.8.24 Uso de criptografía"
    ],
    "NIST_80053_R5": [
     "SC-8",
     "SC-8(1)"
    ],
    "CIS_v8": [
     "12.2",
     "3.6"
    ],
    "CIS_AD_Benchmark": [
     "LDAP Signing / Channel Binding"
    ],
    "NIST_CSF_20": [
     "PR.IR-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-028",
   "name": "Nivel de Autenticación LAN Manager (NTLMv1/LM)",
   "phase": 4,
   "weight": 6,
   "attackVector": "Descifrado de desafíos LM/NTLMv1 (T1207)",
   "severityBase": "HIGH",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1110.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.5 Autenticación segura",
     "A.8.24 Uso de criptografía"
    ],
    "NIST_80053_R5": [
     "IA-5 Gestión de autenticadores",
     "IA-5(13) Almacenamiento en caché"
    ],
    "CIS_v8": [
     "5.2",
     "3.6"
    ],
    "CIS_AD_Benchmark": [
     "NTLM"
    ],
    "NIST_CSF_20": [
     "PR.AA-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-029",
   "name": "Cifrados Kerberos Permitidos (RC4/DES)",
   "phase": 4,
   "weight": 5,
   "attackVector": "Downgrade a RC4/DES (T1558)",
   "severityBase": "MEDIUM",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1558"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.24 Uso de criptografía"
    ],
    "NIST_80053_R5": [
     "SC-8(1) Protección criptográfica",
     "IA-5"
    ],
    "CIS_v8": [
     "3.6"
    ],
    "CIS_AD_Benchmark": [
     "Kerberos — cifrados permitidos"
    ],
    "NIST_CSF_20": [
     "PR.DS-02"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-030",
   "name": "Resolución Multicast LLMNR",
   "phase": 4,
   "weight": 5,
   "attackVector": "Envenenamiento LLMNR (Responder) (T1557.001)",
   "severityBase": "MEDIUM",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1557.001"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.20 Seguridad de servicios de red"
    ],
    "NIST_80053_R5": [
     "SC-22 Arquitectura de resolución de nombres",
     "AC-4"
    ],
    "CIS_v8": [
     "9.2 Uso solo de sistemas DNS aprobados"
    ],
    "CIS_AD_Benchmark": [
     "LLMNR/NetBIOS"
    ],
    "NIST_CSF_20": [
     "PR.IR-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-031",
   "name": "Autenticación a Nivel de Red en RDP (NLA)",
   "phase": 4,
   "weight": 4,
   "attackVector": "BlueKeep / pre-auth RDP (T1210)",
   "severityBase": "MEDIUM",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1021.001"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.1 Dispositivos de punto final",
     "A.8.5 Autenticación segura"
    ],
    "NIST_80053_R5": [
     "IA-2 Identificación y autenticación",
     "AC-17 Acceso remoto"
    ],
    "CIS_v8": [
     "6.4 MFA para acceso remoto"
    ],
    "CIS_AD_Benchmark": [
     "RDP"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-032",
   "name": "Servicio Print Spooler en Controladores de Dominio (PrintNightmare)",
   "phase": 4,
   "weight": 6,
   "attackVector": "CVE-2021-34527 PrintNightmare (T1068)",
   "severityBase": "CRITICAL",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1210"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.8 Gestión de vulnerabilidades técnicas",
     "A.8.9 Gestión de configuración"
    ],
    "NIST_80053_R5": [
     "SI-2 Corrección de fallas",
     "CM-7 Funcionalidad mínima"
    ],
    "CIS_v8": [
     "4.8",
     "7.7 Remediación reportada"
    ],
    "CIS_AD_Benchmark": [
     "Servicios en DC"
    ],
    "NIST_CSF_20": [
     "ID.RA-01",
     "PR.PS-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-033",
   "name": "Grupo Protected Users para Cuentas Privilegiadas",
   "phase": 4,
   "weight": 4,
   "attackVector": "Kerberoasting/NTLM sobre cuentas Tier 0 sin protección (T1558)",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1078.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.17 Información de autenticación",
     "A.8.5 Autenticación segura"
    ],
    "NIST_80053_R5": [
     "IA-2",
     "IA-5(13)"
    ],
    "CIS_v8": [
     "6.5 MFA para acceso administrativo"
    ],
    "CIS_AD_Benchmark": [
     "Protected Users"
    ],
    "NIST_CSF_20": [
     "PR.AA-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-034",
   "name": "sIDHistory Poblado (Movilidad de SIDs)",
   "phase": 4,
   "weight": 6,
   "attackVector": "Persistencia vía SIDHistory (T1134.005)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1134.005"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración",
     "A.5.15 Control de acceso"
    ],
    "NIST_80053_R5": [
     "AC-2(7) Roles privilegiados",
     "AC-3"
    ],
    "CIS_v8": [
     "3.3",
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "SIDHistory"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-035",
   "name": "Arquitectura de Cuentas de Servicio (gMSA vs Estáticas)",
   "phase": 4,
   "weight": 6,
   "attackVector": "Cracking de contraseñas de servicio estáticas (T1558.003)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1552"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.16 Gestión de identidades",
     "A.5.17 Información de autenticación"
    ],
    "NIST_80053_R5": [
     "IA-5 Gestión de autenticadores",
     "AC-6(5)"
    ],
    "CIS_v8": [
     "5.5 Inventario de cuentas de servicio",
     "5.4"
    ],
    "CIS_AD_Benchmark": [
     "gMSA"
    ],
    "NIST_CSF_20": [
     "PR.AA-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-059",
   "name": "Protección LSA (RunAsPPL) y Parcheo de DCs vía WinRM",
   "phase": 4,
   "weight": 7,
   "attackVector": "Volcado de LSASS y explotación de vulnerabilidades conocidas en DCs",
   "severityBase": "HIGH",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1003.001",
    "T1210"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.8 Gestión de vulnerabilidades técnicas",
     "A.8.19 Instalación de software"
    ],
    "NIST_80053_R5": [
     "SI-2 Remediación de fallas",
     "SA-10 Configuración por el desarrollador"
    ],
    "CIS_v8": [
     "7.3 Gestión automatizada de parches",
     "10.1 Gestión antimalware"
    ],
    "CIS_AD_Benchmark": [
     "Protección LSA en DCs",
     "Parcheo de controladores de dominio"
    ],
    "NIST_CSF_20": [
     "PR.PS-02",
     "DE.CM-09"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-060",
   "name": "Salud de Replicación de Active Directory",
   "phase": 4,
   "weight": 4,
   "attackVector": "Divergencia de réplicas que oculta persistencia y rompe la línea base",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1003.006"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.14 Redundancia de instalaciones de procesamiento",
     "A.5.29 Seguridad durante la disrupción"
    ],
    "NIST_80053_R5": [
     "CP-9 Respaldo del sistema",
     "SC-6 Disponibilidad de recursos"
    ],
    "CIS_v8": [
     "11.2 Respaldos y recuperación de datos",
     "12.1 Gestión de la infraestructura de red"
    ],
    "CIS_AD_Benchmark": [
     "Salud de replicación AD",
     "Topología de sitios y réplicas"
    ],
    "NIST_CSF_20": [
     "RC.RP-01",
     "PR.IR-04"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-036",
   "name": "Rotación de la Contraseña KRBTGT",
   "phase": 6,
   "weight": 9,
   "attackVector": "Golden Ticket post-compromiso (T1558.001)",
   "severityBase": "CRITICAL",
   "scope": "DOMAIN",
   "mitre": [
    "T1558.001"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.17 Información de autenticación",
     "A.5.29 Seguridad de la información durante la disrupción"
    ],
    "NIST_80053_R5": [
     "IA-5 Gestión de autenticadores",
     "IR-3 Pruebas de respuesta"
    ],
    "CIS_v8": [
     "5.2"
    ],
    "CIS_AD_Benchmark": [
     "KRBTGT"
    ],
    "NIST_CSF_20": [
     "PR.AA-03",
     "RC.RP-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-037",
   "name": "Comportamiento de Inicio de Sesión DSRM",
   "phase": 6,
   "weight": 5,
   "attackVector": "Pass-the-Hash contra cuenta DSRM (T1550.002)",
   "severityBase": "HIGH",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1078.003"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.2 Derechos de acceso privilegiado",
     "A.8.9 Gestión de configuración"
    ],
    "NIST_80053_R5": [
     "AC-6(1)",
     "CM-6"
    ],
    "CIS_v8": [
     "4.1"
    ],
    "CIS_AD_Benchmark": [
     "DSRM"
    ],
    "NIST_CSF_20": [
     "PR.PS-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-038",
   "name": "Higiene de Cuentas Inactivas (>90 días)",
   "phase": 6,
   "weight": 5,
   "attackVector": "Cuentas huérfanas reutilizables (T1078.003)",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1078.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.16 Gestión de identidades",
     "A.5.18 Derechos de acceso"
    ],
    "NIST_80053_R5": [
     "AC-2(3) Deshabilitación de cuentas inactivas",
     "AC-2(12) Monitoreo de cuentas"
    ],
    "CIS_v8": [
     "5.3 Deshabilitar cuentas inactivas",
     "5.1 Inventario de cuentas"
    ],
    "CIS_AD_Benchmark": [
     "Cuentas inactivas"
    ],
    "NIST_CSF_20": [
     "PR.AA-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-039",
   "name": "Política de Bloqueo de Cuentas (Fuerza Bruta)",
   "phase": 6,
   "weight": 6,
   "attackVector": "Password spraying (T1110.003)",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1110.003"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.5 Autenticación segura"
    ],
    "NIST_80053_R5": [
     "AC-7 Intentos de inicio de sesión fallidos"
    ],
    "CIS_v8": [
     "6.2? — (tema: bloqueo por intentos fallidos)"
    ],
    "CIS_AD_Benchmark": [
     "Lockout Policy"
    ],
    "NIST_CSF_20": [
     "PR.AA-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-040",
   "name": "Cuota de Creación de Cuentas de Máquina (MAQ)",
   "phase": 6,
   "weight": 4,
   "attackVector": "Unión de máquinas rogue / RBCD preparatorio",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1136.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración",
     "A.5.15 Control de acceso"
    ],
    "NIST_80053_R5": [
     "AC-3",
     "CM-6"
    ],
    "CIS_v8": [
     "3.3"
    ],
    "CIS_AD_Benchmark": [
     "MachineAccountQuota"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-041",
   "name": "Grupo Pre-Windows 2000 Compatible Access",
   "phase": 6,
   "weight": 3,
   "attackVector": "Enumeración anónima de objetos del dominio (T1087)",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1087.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.15 Control de acceso",
     "A.5.3 Segregación de funciones"
    ],
    "NIST_80053_R5": [
     "AC-3",
     "AC-6"
    ],
    "CIS_v8": [
     "3.3"
    ],
    "CIS_AD_Benchmark": [
     "Pre-Windows 2000 Compatible Access"
    ],
    "NIST_CSF_20": [
     "PR.AA-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-042",
   "name": "Cifrado Reversible de Contraseñas",
   "phase": 6,
   "weight": 5,
   "attackVector": "Recuperación en claro de credenciales (T1003)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1552"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.24 Uso de criptografía",
     "A.5.17 Información de autenticación"
    ],
    "NIST_80053_R5": [
     "SC-28 Protección en reposo",
     "IA-5(1)"
    ],
    "CIS_v8": [
     "3.6",
     "5.2"
    ],
    "CIS_AD_Benchmark": [
     "Reversible Encryption"
    ],
    "NIST_CSF_20": [
     "PR.DS-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR",
     "GDPR_EU"
    ]
   }
  },
  {
   "id": "SecAuditAD-043",
   "name": "Foreign Security Principals (SIDs Extranjeros)",
   "phase": 6,
   "weight": 3,
   "attackVector": "SIDs de dominios externos residuales (T1134)",
   "severityBase": "LOW",
   "scope": "DOMAIN",
   "mitre": [
    "T1087"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.15 Control de acceso",
     "A.5.16 Gestión de identidades"
    ],
    "NIST_80053_R5": [
     "AC-2 Gestión de cuentas",
     "AC-3"
    ],
    "CIS_v8": [
     "5.1",
     "6.7 Control de acceso centralizado"
    ],
    "CIS_AD_Benchmark": [
     "Foreign Security Principals"
    ],
    "NIST_CSF_20": [
     "PR.AA-01"
    ],
    "DATA_PROTECTION": [
     "LEY1581_COL"
    ]
   }
  },
  {
   "id": "SecAuditAD-044",
   "name": "Registros DNS Sensibles (WPAD/ISATAP)",
   "phase": 6,
   "weight": 4,
   "attackVector": "Captura de tráfico vía WPAD/ISATAP (T1557)",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1557.001"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de configuración",
     "A.8.20 Seguridad de servicios de red"
    ],
    "NIST_80053_R5": [
     "SC-22 Resolución de nombres",
     "CM-6"
    ],
    "CIS_v8": [
     "9.2"
    ],
    "CIS_AD_Benchmark": [
     "DNS — Global Query Block List"
    ],
    "NIST_CSF_20": [
     "PR.IR-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-045",
   "name": "Política de Auditoría Avanzada (Subcategorías Críticas)",
   "phase": 6,
   "weight": 6,
   "attackVector": "Ausencia de trazabilidad de eventos críticos (T1562.002)",
   "severityBase": "MEDIUM",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1562.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.15 Registro de eventos",
     "A.8.16 Actividades de monitoreo"
    ],
    "NIST_80053_R5": [
     "AU-2 Gestión de eventos de auditoría",
     "AU-12 Generación de registros",
     "AU-9 Protección de la información de auditoría"
    ],
    "CIS_v8": [
     "8.2 Recopilar logs de auditoría",
     "8.5 Logs detallados"
    ],
    "CIS_AD_Benchmark": [
     "Advanced Audit Policy"
    ],
    "NIST_CSF_20": [
     "DE.CM-01",
     "DE.CM-09"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LGPD_BR",
     "GDPR_EU"
    ]
   }
  },
  {
   "id": "SecAuditAD-046",
   "name": "AppLocker / Application Control",
   "phase": 6,
   "weight": 4,
   "attackVector": "Ejecución de binarios no autorizados (T1204)",
   "severityBase": "LOW",
   "scope": "DC_LOCAL",
   "mitre": [
    "T1562.001"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.7 Protección contra malware",
     "A.8.19 Instalación de software"
    ],
    "NIST_80053_R5": [
     "CM-7(5) Software autorizado",
     "SI-3 Protección contra código malicioso"
    ],
    "CIS_v8": [
     "2.5-2.7 Control de aplicaciones",
     "10.1"
    ],
    "CIS_AD_Benchmark": [
     "Application Control"
    ],
    "NIST_CSF_20": [
     "PR.PS-05"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU"
    ]
   }
  },
  {
   "id": "SecAuditAD-053",
   "name": "Configuración Estructural del Dominio y Bosque",
   "phase": 6,
   "weight": 4,
   "attackVector": "Enumeración LDAP anónima y pérdida de capacidad de recuperación ante incidentes",
   "severityBase": "MEDIUM",
   "scope": "DOMAIN",
   "mitre": [
    "T1087.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.9 Gestión de la configuración",
     "A.8.13 Copia de seguridad de la información"
    ],
    "NIST_80053_R5": [
     "CM-6 Valores de configuración",
     "CP-9 Respaldo del sistema"
    ],
    "CIS_v8": [
     "4.1 Configuración segura de la infraestructura",
     "11.1 Respaldos"
    ],
    "CIS_AD_Benchmark": [
     "Niveles funcionales del dominio",
     "Recuperación ante desastres AD"
    ],
    "NIST_CSF_20": [
     "PR.PS-01",
     "RC.RP-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-054",
   "name": "Banderas de Riesgo en Cuentas (Guest/PASSWD_NOTREQD/RID-500/adminCount)",
   "phase": 6,
   "weight": 6,
   "attackVector": "Acceso semi-anónimo y autenticación sin credencial real",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1078"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.5.17 Información de autenticación",
     "A.8.2 Derechos de acceso privilegiado"
    ],
    "NIST_80053_R5": [
     "IA-5 Gestión de autenticadores",
     "AC-6(5) Cuentas privilegiadas"
    ],
    "CIS_v8": [
     "5.3 Deshabilitar cuentas no utilizadas",
     "5.4 Restringir privilegios admin"
    ],
    "CIS_AD_Benchmark": [
     "Cuenta Guest",
     "Banderas de cuentas de usuario"
    ],
    "NIST_CSF_20": [
     "PR.AA-01",
     "PR.AA-03"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-055",
   "name": "Grupos Operadores Heredados y Grupos Vacíos",
   "phase": 6,
   "weight": 6,
   "attackVector": "Escalada de privilegios vía Account/Server/Print/Backup Operators y DnsAdmins",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1078.002"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.2 Derechos de acceso privilegiado",
     "A.5.3 Segregación de funciones"
    ],
    "NIST_80053_R5": [
     "AC-6(5) Cuentas privilegiadas",
     "AC-6(7) Revisión de privilegios"
    ],
    "CIS_v8": [
     "5.4 Restringir privilegios admin a cuentas dedicadas",
     "6.8 RBAC"
    ],
    "CIS_AD_Benchmark": [
     "Grupos operadores heredados",
     "Higiene de grupos"
    ],
    "NIST_CSF_20": [
     "PR.AA-05",
     "PR.AA-01"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  },
  {
   "id": "SecAuditAD-056",
   "name": "Inventario de Sistemas Operativos Obsoletos (DCs y Miembros)",
   "phase": 6,
   "weight": 7,
   "attackVector": "Explotación de sistemas sin parches de seguridad (DCs y estaciones)",
   "severityBase": "HIGH",
   "scope": "DOMAIN",
   "mitre": [
    "T1210"
   ],
   "normative": {
    "ISO27001_2022": [
     "A.8.8 Gestión de vulnerabilidades técnicas",
     "A.8.6 Gestión de capacidad"
    ],
    "NIST_80053_R5": [
     "SI-2 Remediación de fallas",
     "CM-2 Configuración de línea base"
    ],
    "CIS_v8": [
     "7.3 Gestión automatizada de parches",
     "7.4 Corregir vulnerabilidades identificadas"
    ],
    "CIS_AD_Benchmark": [
     "Ciclo de vida de sistemas",
     "SO soportados en DCs"
    ],
    "NIST_CSF_20": [
     "ID.RA-01",
     "PR.PS-02"
    ],
    "DATA_PROTECTION": [
     "LOPDP_ECU",
     "LEY1581_COL",
     "LGPD_BR"
    ]
   }
  }
 ],
 "FRAMEWORKS": {
  "ISO27001_2022": {
   "label": "ISO/IEC 27001:2022",
   "desc": "Sistema de gestión de seguridad de la información (Anexo A)."
  },
  "NIST_80053_R5": {
   "label": "NIST SP 800-53 R5",
   "desc": "Catálogo de controles de seguridad federal (EE. UU.), referencia contractual."
  },
  "CIS_v8": {
   "label": "CIS Controls v8",
   "desc": "Controles prioritarios de ciberdefensa (IG1-IG3)."
  },
  "CIS_AD_Benchmark": {
   "label": "CIS AD Benchmark",
   "desc": "Hardening específico para Active Directory."
  },
  "NIST_CSF_20": {
   "label": "NIST CSF 2.0",
   "desc": "Marco de ciberriesgo: GOVERN, IDENTIFY, PROTECT, DETECT, RESPOND, RECOVER."
  },
  "ISO22301_2019": {
   "label": "ISO 22301:2019",
   "desc": "Sistema de gestión de continuidad de negocio."
  },
  "DATA_PROTECTION": {
   "label": "Protección de datos LATAM",
   "desc": "LOPDP (Ecuador) · Ley 1581 (Colombia) · LGPD (Brasil) · GDPR (referencia UE)."
  }
 },
 "PLANS": {
  "JR": {
   "label": "Auditoría Jr",
   "phases": [
    1,
    6
   ],
   "controls": 27,
   "priceUSD": 1900,
   "durationDays": 1,
   "scope": "1 dominio, 1 controlador de dominio, hasta 100 usuarios",
   "deliverables": [
    "Informe técnico HTML (27 controles con evidencia)",
    "Resumen ejecutivo de 2 páginas",
    "Exportación JSON SecAuditAD.ControlResult/1.0 + CSV"
   ],
   "description": "Primer acercamiento: identidad de máximo privilegio (Tier 0) e higiene de línea base del dominio."
  },
  "SENIOR": {
   "label": "Auditoría Senior",
   "phases": [
    1,
    2,
    4,
    6
   ],
   "controls": 50,
   "priceUSD": 4500,
   "durationDays": 2,
   "scope": "1 dominio, hasta 3 controladores de dominio, hasta 500 usuarios",
   "deliverables": [
    "Informe técnico HTML completo (50 controles con evidencia)",
    "Informe ejecutivo HTML con lenguaje de negocio",
    "Presentación de hallazgos (60 min, remota)",
    "Exportación JSON + CSV priorizado para remediación"
   ],
   "description": "Cobertura amplia sin PKI: identidad, infraestructura y GPOs, protocolos de red e higiene."
  },
  "PREMIUM": {
   "label": "Auditoría Premium",
   "phases": [
    1,
    2,
    3,
    4,
    6
   ],
   "controls": 54,
   "priceUSD": 9800,
   "durationDays": 3,
   "scope": "Bosque completo, hasta 10 controladores de dominio, usuarios ilimitados",
   "deliverables": [
    "Auditoría integral de las 5 fases activas, incluye PKI/AD CS (ESC1-ESC10)",
    "Informe técnico + informe ejecutivo HTML",
    "Plan de remediación priorizado (quick wins vs proyectos, 30/60/90 días)",
    "Taller de remediación con el equipo TI (2 h)",
    "Re-auditoría de verificación dentro de los 30 días posteriores"
   ],
   "description": "Auditoría integral con PKI, plan de remediación, taller y re-verificación."
  }
 },
 "ADDONS": [
  {
   "id": "REAUDIT",
   "label": "Re-auditoría de verificación (fuera de plan)",
   "priceUSD": 650
  },
  {
   "id": "RETAINER",
   "label": "Acompañamiento mensual de remediación",
   "priceUSD": 1800
  },
  {
   "id": "TALLER",
   "label": "Taller de endurecimiento AD para el equipo TI (4 h)",
   "priceUSD": 600
  },
  {
   "id": "DC_EXTRA",
   "label": "Controlador de dominio adicional (fuera de cupo)",
   "priceUSD": 350
  }
 ],
 "SANCTIONS": [
  {
   "law": "LOPDP — Ecuador",
   "authority": "Superintendencia de Protección de Datos Personales (SPDP)",
   "range": "Privadas: 0,1%–0,7% (leves) y 0,7%–1% (graves) del volumen de negocio anual. Sector público: 1–20 SBU (SBU 2026 = USD 482).",
   "usd": "Proporcional a la facturación",
   "case": "Primeras sanciones (dic-2025): LIGAPRO USD 259.644 y FEF USD 194.856 por tratamiento biométrico sin base legal (apps Fan ID y Fan FEF).",
   "sources": [
    {
     "label": "SPDP — Prensa oficial",
     "url": "https://www.spdp.gob.ec/prensa/"
    },
    {
     "label": "Resolución SPDP-SPD-2025-0022-R (metodología de multas)",
     "url": "https://www.spdp.gob.ec/"
    },
    {
     "label": "SBU 2026 = USD 482 (Acuerdo MDT-2025-195)",
     "url": "https://www.trabajo.gob.ec/"
    }
   ]
  },
  {
   "law": "Ley 1581 de 2012 — Colombia",
   "authority": "Superintendencia de Industria y Comercio (SIC)",
   "range": "Multas hasta 2.000 SMLMV (art. 25, Decreto 1377/2013). SMLMV 2026 = COP 1.750.905 → tope ≈ COP 3.502 millones.",
   "usd": "Hasta ≈ USD 1,08 millones",
   "case": "En 2025 la SIC impuso multas por más de COP 5.157 millones (≈ USD 1,59 M acumulado); caso e-commerce: COP 214,4 M ≈ USD 66.300.",
   "sources": [
    {
     "label": "SIC — Notificaciones y noticias",
     "url": "https://sedeelectronica.sic.gov.co/noticias"
    },
    {
     "label": "Decreto 1377 de 2013",
     "url": "https://www.sic.gov.co/"
    }
   ]
  },
  {
   "law": "LGPD — Brasil",
   "authority": "Autoridad Nacional de Protección de Datos (ANPD)",
   "range": "Multa de hasta 2% de la facturación en Brasil, con tope de R$ 50 millones por infracción (art. 52, Lei 13.709/2018).",
   "usd": "Hasta ≈ USD 9,1 millones por infracción",
   "case": "TikTok/ByteDance multada en R$ 153,7 millones ≈ USD 28 millones por tratamiento de datos de menores (ANPD, ago-2026).",
   "sources": [
    {
     "label": "ANPD — Gobierno de Brasil",
     "url": "https://www.gov.br/anpd"
    }
   ]
  },
  {
   "law": "GDPR — Unión Europea (referencia)",
   "authority": "Autoridades de protección de datos de la UE (EDPB)",
   "range": "Hasta € 20 millones o 4% de la facturación global anual (art. 83).",
   "usd": "Hasta ≈ USD 22,2 millones",
   "case": "Meta: € 1.200 M ≈ USD 1.330 M (DPC Irlanda, 2023) · Uber: € 290 M ≈ USD 322 M (AP Países Bajos, 2024).",
   "sources": [
    {
     "label": "EDPB — European Data Protection Board",
     "url": "https://www.edpb.europa.eu"
    }
   ]
  }
 ],
 "FX": {
  "date": "noviembre 2026",
  "COP": 3235,
  "BRL": 5.49,
  "EUR": 1.11,
  "note": "Tasas de cambio de referencia (nov-2026): 3.235 COP/USD · 5,49 BRL/USD · 1,11 EUR/USD. SBU Ecuador 2026: USD 482 (Acuerdo MDT-2025-195)."
 },
 "RESOURCES": [
  {
   "label": "MITRE ATT&CK",
   "url": "https://attack.mitre.org/",
   "desc": "Base de conocimiento de tácticas y técnicas de atacantes reales."
  },
  {
   "label": "SPDP Ecuador",
   "url": "https://www.spdp.gob.ec/",
   "desc": "Superintendencia de Protección de Datos Personales — autoridad LOPDP."
  },
  {
   "label": "SIC Colombia",
   "url": "https://www.sic.gov.co/",
   "desc": "Superintendencia de Industria y Comercio — autoridad Ley 1581."
  },
  {
   "label": "ANPD Brasil",
   "url": "https://www.gov.br/anpd",
   "desc": "Autoridad Nacional de Protección de Datos — autoridad LGPD."
  },
  {
   "label": "EDPB (UE)",
   "url": "https://www.edpb.europa.eu",
   "desc": "Comité Europeo de Protección de Datos — lineamientos GDPR."
  },
  {
   "label": "CIS Center for Internet Security",
   "url": "https://www.cisecurity.org/",
   "desc": "Controles CIS v8 y Benchmarks de Active Directory."
  },
  {
   "label": "NIST Computer Security Resource Center",
   "url": "https://csrc.nist.gov/",
   "desc": "SP 800-53 R5 y CSF 2.0."
  },
  {
   "label": "ISO",
   "url": "https://www.iso.org/",
   "desc": "ISO/IEC 27001:2022 e ISO 22301:2019."
  }
 ],
 "DEMO": {
  "items": [
   {
    "id": "SecAuditAD-001",
    "name": "Higiene de Grupos de Máximo Privilegio (Tier 0)",
    "phase": 1,
    "verdict": "NO_CONFORME",
    "weight": 8,
    "attackVector": "Enumeración y reutilización de credenciales de Domain/Enterprise/Schema Admins",
    "severityBase": "CRITICAL",
    "realFindings": 2
   },
   {
    "id": "SecAuditAD-002",
    "name": "Derechos de Replicación DCSync en la Raíz del Dominio",
    "phase": 1,
    "verdict": "NO_CONFORME",
    "weight": 10,
    "attackVector": "DCSync / exfiltración de NTDS.dit (T1003.006)",
    "severityBase": "CRITICAL",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-003",
    "name": "Integridad SDProp / ACL de AdminSDHolder",
    "phase": 1,
    "verdict": "NO_CONFORME",
    "weight": 9,
    "attackVector": "Persistencia estructural vía AdminSDHolder (T1098)",
    "severityBase": "CRITICAL",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-004",
    "name": "AD CS — Plantillas con Inyección de SAN (ESC1)",
    "phase": 1,
    "verdict": "NO_CONFORME",
    "weight": 9,
    "attackVector": "ESC1: suplantación de identidad vía SAN en plantilla publicada",
    "severityBase": "CRITICAL",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-005",
    "name": "Delegación Incondicional (Unconstrained Delegation)",
    "phase": 1,
    "verdict": "NO_CONFORME",
    "weight": 8,
    "attackVector": "Captura de TGTs en objetos con TRUSTED_FOR_DELEGATION (T1558)",
    "severityBase": "CRITICAL",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-006",
    "name": "Delegación Restringida con Transición de Protocolo (S4U2Self)",
    "phase": 1,
    "verdict": "CONFORME",
    "weight": 7,
    "attackVector": "Abuso de TRUSTED_TO_AUTH_FOR_DELEGATION (T1134)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-007",
    "name": "Exposición a Kerberoasting (SPN y Cifrados RC4)",
    "phase": 1,
    "verdict": "NO_CONFORME",
    "weight": 7,
    "attackVector": "Kerberoasting / cracking offline de TGS (T1558.003)",
    "severityBase": "HIGH",
    "realFindings": 2
   },
   {
    "id": "SecAuditAD-008",
    "name": "Resource-Based Constrained Delegation (RBCD)",
    "phase": 1,
    "verdict": "CONFORME",
    "weight": 8,
    "attackVector": "msDS-AllowedToActOnBehalfOfOtherIdentity manipulable (T1134)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-009",
    "name": "Shadow Credentials (msDS-KeyCredentialLink)",
    "phase": 1,
    "verdict": "CONFORME",
    "weight": 8,
    "attackVector": "Inyección de Key Trust para persistencia/impersonación",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-010",
    "name": "ACLs Críticas en Raíz del Dominio y OUs",
    "phase": 1,
    "verdict": "CONFORME",
    "weight": 8,
    "attackVector": "GenericAll/WriteDacl/WriteOwner delegados (escalada a Tier 0)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-011",
    "name": "Políticas de Contraseña y PasswordNeverExpires",
    "phase": 1,
    "verdict": "CONFORME",
    "weight": 6,
    "attackVector": "Password spraying / credenciales permanentes",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-012",
    "name": "Exposición de Secretos en Atributos de Texto",
    "phase": 1,
    "verdict": "NO_CONFORME",
    "weight": 6,
    "attackVector": "Credenciales en description/info (T1552.001)",
    "severityBase": "HIGH",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-013",
    "name": "AS-REP Roasting (DONT_REQ_PREAUTH)",
    "phase": 2,
    "verdict": "CONFORME",
    "weight": 7,
    "attackVector": "AS-REP Roasting / cracking offline (T1558.004)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-014",
    "name": "Higiene de Cuentas de Computadora (Rotación de Contraseña)",
    "phase": 2,
    "verdict": "CONFORME",
    "weight": 5,
    "attackVector": "Equipos zombie como plataforma de persistencia",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-015",
    "name": "Vectores de Distribución Masiva (GPO Takeover)",
    "phase": 2,
    "verdict": "CONFORME",
    "weight": 7,
    "attackVector": "Modificación de GPO para ejecución masiva (T1574)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-016",
    "name": "Seguridad de Filtros WMI en GPOs",
    "phase": 2,
    "verdict": "CONFORME",
    "weight": 6,
    "attackVector": "Takeover de filtros WMI (T1505)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-017",
    "name": "Seguridad en Relaciones de Confianza (Trusts)",
    "phase": 2,
    "verdict": "CONFORME",
    "weight": 6,
    "attackVector": "Abuso de trusts / SIDs de otros dominios (T1482)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-018",
    "name": "Integridad de SYSVOL y Credenciales GPP (cpassword)",
    "phase": 2,
    "verdict": "NO_CONFORME",
    "weight": 7,
    "attackVector": "MS14-025 / lectura de cpassword en SYSVOL (T1552.006)",
    "severityBase": "HIGH",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-019",
    "name": "Permisos de Lectura de LAPS (Legacy y Windows LAPS)",
    "phase": 2,
    "verdict": "NO_CONFORME",
    "weight": 6,
    "attackVector": "Lectura de administrador local vía LAPS",
    "severityBase": "HIGH",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-020",
    "name": "SPNs Duplicados e Higiene de Cuentas de Servicio",
    "phase": 2,
    "verdict": "CONFORME",
    "weight": 4,
    "attackVector": "Colisiones SPN → autenticación interceptable",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-057",
    "name": "Cobertura de Despliegue LAPS (Esquema y Parque)",
    "phase": 2,
    "verdict": "NO_CONFORME",
    "weight": 7,
    "attackVector": "Movimiento lateral masivo por reutilización de contraseñas locales",
    "severityBase": "HIGH",
    "realFindings": 2
   },
   {
    "id": "SecAuditAD-058",
    "name": "Higiene del Inventario de GPOs (Sin Vincular / Deshabilitadas)",
    "phase": 2,
    "verdict": "CONFORME",
    "weight": 3,
    "attackVector": "Errores operativos y ofuscación de la línea base de GPOs",
    "severityBase": "LOW",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-021",
    "name": "AD CS — Vectores ESC2 / ESC3 (Any-Purpose y Enrollment Agent)",
    "phase": 3,
    "verdict": "CONFORME",
    "weight": 8,
    "attackVector": "ESC2/ESC3: certificados multiuso / enrollment agent",
    "severityBase": "CRITICAL",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-022",
    "name": "AD CS — ESC6 (EDITF_ATTRIBUTESUBJECTALTNAME2) y ESC7 (ManageCA/ManageCertificates)",
    "phase": 3,
    "verdict": "NO_CONFORME",
    "weight": 8,
    "attackVector": "Inyección global de SAN / control administrativo de la CA",
    "severityBase": "CRITICAL",
    "realFindings": 2
   },
   {
    "id": "SecAuditAD-023",
    "name": "AD CS — ESC8 (NTLM Relay en Endpoints de Inscripción Web)",
    "phase": 3,
    "verdict": "NO_CONFORME_TECNICO",
    "weight": 7,
    "attackVector": "NTLM Relay contra /certsrv (T1187)",
    "severityBase": "CRITICAL",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-024",
    "name": "AD CS — ESC9 / ESC10 (Ataduras KDC y Mapeo de Certificados)",
    "phase": 3,
    "verdict": "CONFORME",
    "weight": 7,
    "attackVector": "ESC9/ESC10: weak certificate binding / UPN mapping",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-025",
    "name": "Erradicación de SMBv1 (EternalBlue)",
    "phase": 4,
    "verdict": "CONFORME",
    "weight": 6,
    "attackVector": "CVE-2017-0144 EternalBlue (T1210)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-026",
    "name": "Firma SMB Obligatoria (Anti SMB Relay)",
    "phase": 4,
    "verdict": "CONFORME",
    "weight": 6,
    "attackVector": "SMB Relay / NTLM Relay (T1187)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-027",
    "name": "Firma LDAP Obligatoria en DC (Anti LDAP Relay)",
    "phase": 4,
    "verdict": "NO_CONFORME",
    "weight": 7,
    "attackVector": "LDAP Relay sobre controladores de dominio (T1187)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-028",
    "name": "Nivel de Autenticación LAN Manager (NTLMv1/LM)",
    "phase": 4,
    "verdict": "CONFORME",
    "weight": 6,
    "attackVector": "Descifrado de desafíos LM/NTLMv1 (T1207)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-029",
    "name": "Cifrados Kerberos Permitidos (RC4/DES)",
    "phase": 4,
    "verdict": "CONFORME",
    "weight": 5,
    "attackVector": "Downgrade a RC4/DES (T1558)",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-030",
    "name": "Resolución Multicast LLMNR",
    "phase": 4,
    "verdict": "NO_CONFORME",
    "weight": 5,
    "attackVector": "Envenenamiento LLMNR (Responder) (T1557.001)",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-031",
    "name": "Autenticación a Nivel de Red en RDP (NLA)",
    "phase": 4,
    "verdict": "CONFORME",
    "weight": 4,
    "attackVector": "BlueKeep / pre-auth RDP (T1210)",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-032",
    "name": "Servicio Print Spooler en Controladores de Dominio (PrintNightmare)",
    "phase": 4,
    "verdict": "NO_CONFORME",
    "weight": 6,
    "attackVector": "CVE-2021-34527 PrintNightmare (T1068)",
    "severityBase": "CRITICAL",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-033",
    "name": "Grupo Protected Users para Cuentas Privilegiadas",
    "phase": 4,
    "verdict": "CONFORME",
    "weight": 4,
    "attackVector": "Kerberoasting/NTLM sobre cuentas Tier 0 sin protección (T1558)",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-034",
    "name": "sIDHistory Poblado (Movilidad de SIDs)",
    "phase": 4,
    "verdict": "CONFORME",
    "weight": 6,
    "attackVector": "Persistencia vía SIDHistory (T1134.005)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-035",
    "name": "Arquitectura de Cuentas de Servicio (gMSA vs Estáticas)",
    "phase": 4,
    "verdict": "NO_CONFORME",
    "weight": 6,
    "attackVector": "Cracking de contraseñas de servicio estáticas (T1558.003)",
    "severityBase": "HIGH",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-059",
    "name": "Protección LSA (RunAsPPL) y Parcheo de DCs vía WinRM",
    "phase": 4,
    "verdict": "NO_CONFORME",
    "weight": 7,
    "attackVector": "Volcado de LSASS y explotación de vulnerabilidades conocidas en DCs",
    "severityBase": "HIGH",
    "realFindings": 2
   },
   {
    "id": "SecAuditAD-060",
    "name": "Salud de Replicación de Active Directory",
    "phase": 4,
    "verdict": "CONFORME",
    "weight": 4,
    "attackVector": "Divergencia de réplicas que oculta persistencia y rompe la línea base",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-036",
    "name": "Rotación de la Contraseña KRBTGT",
    "phase": 6,
    "verdict": "NO_CONFORME",
    "weight": 9,
    "attackVector": "Golden Ticket post-compromiso (T1558.001)",
    "severityBase": "CRITICAL",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-037",
    "name": "Comportamiento de Inicio de Sesión DSRM",
    "phase": 6,
    "verdict": "CONFORME",
    "weight": 5,
    "attackVector": "Pass-the-Hash contra cuenta DSRM (T1550.002)",
    "severityBase": "HIGH",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-038",
    "name": "Higiene de Cuentas Inactivas (>90 días)",
    "phase": 6,
    "verdict": "NO_CONFORME",
    "weight": 5,
    "attackVector": "Cuentas huérfanas reutilizables (T1078.003)",
    "severityBase": "MEDIUM",
    "realFindings": 2
   },
   {
    "id": "SecAuditAD-039",
    "name": "Política de Bloqueo de Cuentas (Fuerza Bruta)",
    "phase": 6,
    "verdict": "CONFORME",
    "weight": 6,
    "attackVector": "Password spraying (T1110.003)",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-040",
    "name": "Cuota de Creación de Cuentas de Máquina (MAQ)",
    "phase": 6,
    "verdict": "NO_CONFORME",
    "weight": 4,
    "attackVector": "Unión de máquinas rogue / RBCD preparatorio",
    "severityBase": "MEDIUM",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-041",
    "name": "Grupo Pre-Windows 2000 Compatible Access",
    "phase": 6,
    "verdict": "CONFORME",
    "weight": 3,
    "attackVector": "Enumeración anónima de objetos del dominio (T1087)",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-042",
    "name": "Cifrado Reversible de Contraseñas",
    "phase": 6,
    "verdict": "NO_CONFORME",
    "weight": 5,
    "attackVector": "Recuperación en claro de credenciales (T1003)",
    "severityBase": "HIGH",
    "realFindings": 1
   },
   {
    "id": "SecAuditAD-043",
    "name": "Foreign Security Principals (SIDs Extranjeros)",
    "phase": 6,
    "verdict": "CONFORME",
    "weight": 3,
    "attackVector": "SIDs de dominios externos residuales (T1134)",
    "severityBase": "LOW",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-044",
    "name": "Registros DNS Sensibles (WPAD/ISATAP)",
    "phase": 6,
    "verdict": "CONFORME",
    "weight": 4,
    "attackVector": "Captura de tráfico vía WPAD/ISATAP (T1557)",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-045",
    "name": "Política de Auditoría Avanzada (Subcategorías Críticas)",
    "phase": 6,
    "verdict": "NO_CONFORME_TECNICO",
    "weight": 6,
    "attackVector": "Ausencia de trazabilidad de eventos críticos (T1562.002)",
    "severityBase": "MEDIUM",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-046",
    "name": "AppLocker / Application Control",
    "phase": 6,
    "verdict": "CONFORME",
    "weight": 4,
    "attackVector": "Ejecución de binarios no autorizados (T1204)",
    "severityBase": "LOW",
    "realFindings": 0
   },
   {
    "id": "SecAuditAD-053",
    "name": "Configuración Estructural del Dominio y Bosque",
    "phase": 6,
    "verdict": "NO_CONFORME",
    "weight": 4,
    "attackVector": "Enumeración LDAP anónima y pérdida de capacidad de recuperación ante incidentes",
    "severityBase": "MEDIUM",
    "realFindings": 2
   },
   {
    "id": "SecAuditAD-054",
    "name": "Banderas de Riesgo en Cuentas (Guest/PASSWD_NOTREQD/RID-500/adminCount)",
    "phase": 6,
    "verdict": "NO_CONFORME",
    "weight": 6,
    "attackVector": "Acceso semi-anónimo y autenticación sin credencial real",
    "severityBase": "HIGH",
    "realFindings": 3
   },
   {
    "id": "SecAuditAD-055",
    "name": "Grupos Operadores Heredados y Grupos Vacíos",
    "phase": 6,
    "verdict": "NO_CONFORME",
    "weight": 6,
    "attackVector": "Escalada de privilegios vía Account/Server/Print/Backup Operators y DnsAdmins",
    "severityBase": "HIGH",
    "realFindings": 3
   },
   {
    "id": "SecAuditAD-056",
    "name": "Inventario de Sistemas Operativos Obsoletos (DCs y Miembros)",
    "phase": 6,
    "verdict": "NO_CONFORME",
    "weight": 7,
    "attackVector": "Explotación de sistemas sin parches de seguridad (DCs y estaciones)",
    "severityBase": "HIGH",
    "realFindings": 3
   }
  ],
  "domain": "corpdemo.local"
 }
};
