/* ============================================================
   SecAuditAD Application — demo.js (demo interactiva por plan)
   Simula una corrida del motor con datos sintéticos reales del
   framework (veredictos y pesos del contrato AuditRun).
   Autor: Alex Alcivar M — Guayaquil, Ecuador
   ============================================================ */
(function () {
  "use strict";
  var esc = function (s) { return (s == null ? "" : String(s)).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  var select = document.getElementById("demoPlan");
  var btnRun = document.getElementById("btnRun");
  var btnReset = document.getElementById("btnReset");
  var btnExport = document.getElementById("btnExport");
  var term = document.getElementById("term");
  var progress = document.getElementById("progress");
  var progressPct = document.getElementById("progressPct");
  var dash = document.getElementById("dash");
  var running = false;

  var V_LABEL = { CONFORME: "CONFORME", NO_CONFORME: "NO CONFORME", NO_CONFORME_TECNICO: "ERROR TÉCNICO", NO_APLICABLE: "NO APLICABLE" };

  function planDef() { return DATA.PLANS[select.value]; }
  function planItems() {
    var phases = planDef().phases;
    return DATA.DEMO.items.filter(function (it) { return phases.indexOf(it.phase) !== -1; });
  }
  function computeScore(items) {
    var applicable = 0, passed = 0, perPhase = {};
    items.forEach(function (it) {
      if (it.verdict === "NO_APLICABLE") return;
      applicable += it.weight;
      if (it.verdict === "CONFORME") passed += it.weight;
      var ph = perPhase[it.phase];
      if (!ph) ph = perPhase[it.phase] = { phase: it.phase, name: (DATA.PHASES[it.phase] && DATA.PHASES[it.phase].name) || ("Fase " + it.phase), applicable: 0, passed: 0, evaluated: 0 };
      ph.applicable += it.weight;
      if (it.verdict === "CONFORME") ph.passed += it.weight;
      ph.evaluated++;
    });
    var bands = [[85, "SEGURIDAD SÓLIDA", "green"], [70, "ACEPTABLE CON MEJORAS", "yellow"], [50, "RIESGO SIGNIFICATIVO", "orange"], [-1, "RIESGO CRÍTICO", "red"]];
    var global = applicable ? Math.round(1000 * passed / applicable) / 10 : 0;
    var band = bands.find(function (b) { return global >= b[0]; });
    var phases = Object.keys(perPhase).map(function (k) {
      var p = perPhase[k];
      return { phase: p.phase, name: p.name, evaluated: p.evaluated, score: p.applicable ? Math.round(1000 * p.passed / p.applicable) / 10 : 0 };
    }).sort(function (a, b) { return a.phase - b.phase; });
    return { global: global, band: band[1], color: band[2], phases: phases };
  }

  function logLine(html) {
    term.insertAdjacentHTML("beforeend", html + "\n");
    term.scrollTop = term.scrollHeight;
  }

  function runDemo() {
    if (running) return;
    running = true;
    btnRun.disabled = true; select.disabled = true;
    btnReset.disabled = false;
    term.innerHTML = ""; dash.style.display = "none"; progress.style.display = "block";
    var items = planItems();
    var sc = computeScore(items);
    var d = planDef();

    logLine('<span class="t-hl">PS> .\\Invoke-SecAuditAD.ps1 -Plan ' + select.value + '</span>');
    logLine('<span class="t-gray">==========================================================</span>');
    logLine('<span class="t-hl">  SecAuditAD v1.0.0 — Suite de Auditoría de Active Directory</span>');
    logLine('<span class="t-gray">  Plan: ' + esc(d.label) + " · Fases " + d.phases.join(",") + " · " + items.length + " controles · Solo consultas</span>");
    logLine('<span class="t-gray">  (CORRIDA DEMO — datos sintéticos dominio corpdemo.local)</span>');
    logLine('<span class="t-gray">==========================================================</span>');
    logLine('<span class="t-ok">✅ Prerrequisitos OK (PowerShell 7.4 · RSAT ActiveDirectory)</span>');
    logLine('<span class="t-gray">   Dominio: corpdemo.local | Bosque: corpdemo.local | PDC: DEMO-DC01</span>');

    var i = 0, bar = 0;
    var timer = setInterval(function () {
      if (i >= items.length) {
        clearInterval(timer);
        finish(sc, items);
        return;
      }
      var it = items[i++];
      var vColor = it.verdict === "CONFORME" ? "t-ok" : (it.verdict === "NO_CONFORME" ? "t-bad" : "t-warn");
      var vTxt = it.verdict === "CONFORME" ? "✅ CONFORME" : (it.verdict === "NO_CONFORME" ? "❌ NO CONFORME" : "⚠️ ERROR TÉCNICO");
      logLine("[" + i + "/" + items.length + "] <span class='t-hl'>" + esc(it.id) + "</span> " + esc(it.name));
      logLine("   <span class='" + vColor + "'>" + vTxt + "</span><span class='t-gray'> · hallazgos: " + (it.realFindings || 0) + " · peso " + it.weight + " · " + (1 + (i % 7)) + "." + (i % 9) + "s</span>");
      bar = Math.round(i / items.length * 100);
      document.getElementById("progressFill").style.width = bar + "%";
      progressPct.textContent = bar + "%";
    }, 85);
  }

  function finish(sc, items) {
    logLine('<span class="t-gray">==========================================================</span>');
    logLine('<span class="t-hl">SCORE GLOBAL: ' + sc.global + '/100 — ' + esc(sc.band) + '</span>');
    sc.phases.forEach(function (p) { logLine('<span class="t-gray">   Fase ' + p.phase + ' ' + esc(p.name) + ': ' + p.score + '/100</span>'); });
    logLine('<span class="t-ok">✅ Informes generados: Informe_Tecnico_SecAuditAD.html · Informe_Ejecutivo_SecAuditAD.html</span>');

    var fails = items.filter(function (it) { return it.verdict !== "CONFORME" && it.verdict !== "NO_APLICABLE"; });
    var passes = items.length - fails.length;
    var crit = fails.reduce(function (a, it) { return a + (it.severityBase === "CRITICAL" ? 1 : 0); }, 0);

    var color = { green: "#22c55e", yellow: "#eab308", orange: "#f97316", red: "#ef4444" }[sc.color];
    var R = 80, C = 2 * Math.PI * R, dashArr = C * sc.global / 100;
    document.getElementById("donut").innerHTML =
      '<circle cx="100" cy="100" r="' + R + '" fill="none" stroke="#1d1d25" stroke-width="16"/>' +
      '<circle cx="100" cy="100" r="' + R + '" fill="none" stroke="' + color + '" stroke-width="16" stroke-linecap="round" stroke-dasharray="0 ' + C + '" id="donutArc" style="transition:stroke-dasharray 1s cubic-bezier(.2,.7,.3,1)"/>';
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      document.getElementById("donutArc").setAttribute("stroke-dasharray", dashArr + " " + C);
    }); });
    document.getElementById("donutNum").textContent = sc.global;
    var bandEl = document.getElementById("band");
    bandEl.textContent = sc.band; bandEl.className = "band " + sc.color;

    document.getElementById("phaseBars").innerHTML = sc.phases.map(function (p) {
      return '<div class="hbar"><div class="lbl"><b>Fase ' + p.phase + ' — ' + esc(p.name) + '</b><span class="num">' + p.score + '/100 · ' + p.evaluated + ' controles</span></div>' +
        '<div class="tr"><i data-w="' + p.score + '"></i></div></div>';
    }).join("");
    setTimeout(function () {
      document.querySelectorAll("#phaseBars i").forEach(function (el) { el.style.width = el.getAttribute("data-w") + "%"; });
    }, 120);

    document.getElementById("counters").innerHTML =
      '<div class="cc ok"><b>' + passes + '</b><span>conformes</span></div>' +
      '<div class="cc bad"><b>' + fails.length + '</b><span>con brechas</span></div>' +
      '<div class="cc warn"><b>' + crit + '</b><span>críticos</span></div>' +
      '<div class="cc gray"><b>' + items.length + '</b><span>controles</span></div>';

    var top = fails.sort(function (a, b) {
      var order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
      return (order[a.severityBase] ?? 9) - (order[b.severityBase] ?? 9);
    }).slice(0, 8);
    document.getElementById("topFails").innerHTML = top.length ? top.map(function (it) {
      return '<tr><td><span class="chip mono">' + esc(it.id) + '</span></td><td><b>' + esc(it.name) + '</b><br/><span class="small">' + esc(it.attackVector || "") + '</span></td>' +
        '<td><span class="badge sv-' + esc(it.severityBase) + '">' + esc(it.severityBase) + '</span></td><td class="num">' + (it.realFindings || 0) + '</td></tr>';
    }).join("") : '<tr><td colspan="4" class="small">Sin hallazgos en la demo.</td></tr>';

    dash.style.display = "block";
    btnExport.disabled = false;
    running = false; btnRun.disabled = false; select.disabled = false;
  }

  window.__demoExport = function () {
    var items = planItems();
    var sc = computeScore(items);
    var payload = {
      schema: "SecAuditAD.AuditRun/1.0", engineVersion: "1.0.0", plan: select.value, planLabel: planDef().label,
      demo: true, environment: { Domain: "corpdemo.local", Note: "Datos sintéticos de demostración" },
      score: sc, summary: { CONFORME: items.filter(function (i) { return i.verdict === "CONFORME"; }).length,
        NO_CONFORME: items.filter(function (i) { return i.verdict === "NO_CONFORME"; }).length,
        NO_CONFORME_TECNICO: items.filter(function (i) { return i.verdict === "NO_CONFORME_TECNICO"; }).length },
      results: items
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "SecAuditAD-DemoRun-" + select.value + ".json";
    a.click(); URL.revokeObjectURL(a.href);
  };

  btnRun.addEventListener("click", runDemo);
  select.addEventListener("change", reset);
  btnReset.addEventListener("click", reset);
  function reset() {
    term.innerHTML = '<span class="t-gray"># Selecciona un plan y pulsa «Ejecutar demo» para ver la corrida simulada.</span>';
    dash.style.display = "none"; progress.style.display = "none";
    btnExport.disabled = true; btnReset.disabled = true;
  }
  reset();
})();
