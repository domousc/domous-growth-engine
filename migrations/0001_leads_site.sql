-- Backup dos leads da página /comecar do site. Tabela nova no banco domous-sistema (D1);
-- não altera nenhuma tabela existente. O funil de verdade é o do Sistema Domous (Supabase).
CREATE TABLE IF NOT EXISTS leads_site (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  criado_em    TEXT NOT NULL,
  nome         TEXT NOT NULL,
  empresa      TEXT,
  whatsapp     TEXT NOT NULL,
  papel        TEXT,
  segmento     TEXT,
  faturamento  TEXT,
  classe       TEXT,
  temperatura  TEXT,
  resumo       TEXT,
  respostas    TEXT,
  utm          TEXT,
  ip_hash      TEXT,
  crm_status   TEXT NOT NULL DEFAULT 'pendente',
  crm_resposta TEXT
);
CREATE INDEX IF NOT EXISTS leads_site_ip ON leads_site (ip_hash, criado_em);
