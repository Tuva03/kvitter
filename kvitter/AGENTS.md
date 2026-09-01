# AGENTS.md, Kvitter

## Stack (ufravikelig)

- Pakkehåndterer: pnpm. Aldri npm eller yarn.
- Tester: Vitest. Aldri Jest eller Mocha.

## Arbeidsflyt

- Kjør `pnpm test` og `pnpm tsc --noEmit` før du sier deg ferdig.
- Ikke endre eksisterende tester for å få dem grønne. Endre koden.

## Regler

- Ikke commit .env filer eller filer med hemmelig innhold.

## Arkitektur

- /lib -> Tester
- /app -> Page komponenter og linker

## Detaljer, les ved behov

- Arkitektur og lagdeling: `docs/arkitektur.md`
- Testkonvensjoner: `docs/testing.md`
- Auth og sesjoner: `docs/auth.md`
