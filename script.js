:root{
  --bg:#0f1724;
  --card:#0b1220;
  --accent:#7c3aed;
  --muted:#9ca3af;
  --white:#f8fafc;
  --danger:#ef4444;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
  background:linear-gradient(180deg,#071022 0%, #041022 100%);
  color:var(--white);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
}

.container{
  width:100%;
  max-width:760px;
}

header h1{margin:0;font-size:1.4rem}
.lead{margin:6px 0 18px;color:var(--muted)}

.card{
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border:1px solid rgba(255,255,255,0.04);
  padding:18px;
  border-radius:12px;
  margin-bottom:12px;
}

.quote{margin:0 0 12px 0}
.quote p{font-size:1.25rem;margin:0 0 8px 0;line-height:1.4}
.quote footer{font-size:0.95rem;color:var(--muted)}

.controls{display:flex;gap:8px;flex-wrap:wrap}
.btn{
  background:var(--accent);
  border:none;
  color:white;
  padding:8px 12px;
  border-radius:8px;
  cursor:pointer;
  font-weight:600;
}
.btn:active{transform:translateY(1px)}
.btn-outline{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--white)}
.btn-ghost{background:transparent;border:1px dashed rgba(255,255,255,0.04);color:var(--muted)}
.btn-twitter{background:#1da1f2}
.btn-danger{background:var(--danger)}

.loader{color:var(--muted);padding:12px 0}

.favorites{list-style:none;padding:0;margin:8px 0;max-height:260px;overflow:auto}
.favorites li{
  padding:10px;border-radius:8px;margin-bottom:8px;background:rgba(255,255,255,0.02);display:flex;justify-content:space-between;gap:12px;
}
.fav-meta{flex:1}
.fav-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:8px}

.hidden{display:none}

/* Responsive */
@media (max-width:480px){
  .quote p{font-size:1rem}
  .controls{gap:6px}
}
