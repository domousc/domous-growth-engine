-- Eventos anônimos do /comecar pro mapa do formulário (sem nome nem telefone).
-- tipo: ver (abriu a tela), responder (escolheu opção), contato (deixou os dados),
--       fora (saiu no corte de faturamento), fim (terminou tudo).
CREATE TABLE IF NOT EXISTS comecar_eventos (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  criado_em  TEXT NOT NULL,
  sessao     TEXT NOT NULL,
  tipo       TEXT NOT NULL,
  tela       TEXT NOT NULL,
  resposta   TEXT,
  segmento   TEXT,
  origem     TEXT
);
CREATE INDEX IF NOT EXISTS comecar_eventos_sessao ON comecar_eventos (sessao, id);
CREATE INDEX IF NOT EXISTS comecar_eventos_data ON comecar_eventos (criado_em);
