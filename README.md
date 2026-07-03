# Yieldwalker — Landing Page V.1

Landing page brutalista/cinematográfica da Yieldwalker em React + GSAP, trilíngue (PT-BR / EN / ES).

## Stack
- **React 18 + Vite 5** — build estático otimizado
- **GSAP 3.13 (ScrollTrigger)** — transições suaves, zoom cinematográfico, linha amarela de progresso, pipeline desenhado no scroll, reveal palavra-a-palavra
- **Fontes**: Oswald (display), IBM Plex Sans (texto), IBM Plex Mono (dados técnicos) — via Google Fonts
- **Paleta FASE 2**: Midnight Slate `#161616` · Dark Charcoal `#35373A` · Timberwolf `#D8D8D5` · Battleship Gray `#777767` · Amarelo-segurança `#F5B400`

## Rodar localmente
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm run preview  # serve o build
```

## Deploy (GitHub + Vercel)
1. Crie um repositório no GitHub e envie esta pasta.
2. Na Vercel: **Add New Project → Import** do repositório. O preset **Vite** é detectado automaticamente (build `npm run build`, output `dist`). Nenhuma configuração extra é necessária.

## ⚠️ Antes de publicar (placeholders)
- [ ] **WhatsApp**: trocar `5511999999999` em `src/i18n.jsx` (`WA_NUMBER`) e no `src/components/Footer.jsx`
- [ ] **Telefone exibido**: `(11) 99999-9999` em `src/i18n.jsx` (chave `cta.btn`) e `Footer.jsx`
- [ ] **E-mail**: `contato@yieldwalker.com.br` em `Footer.jsx`
- [ ] CNPJ / endereço, se for incluído

## Regras de conteúdo (briefing)
- Nunca exibir preço público — todos os CTAs direcionam ao WhatsApp.
- Locação é a configuração padrão de fábrica do A2-Pro (sem braço/sensores extras).
- Escopo restrito: locação, assistência técnica do A2-Pro e pilotos pagos de corte de grama.

## Estrutura
```
src/
  i18n.jsx            # traduções PT/EN/ES + links de WhatsApp por idioma
  styles.css          # design system (tokens de cor, tipografia, seções)
  useReveal.js        # reveal on-scroll reutilizável
  components/         # Nav, Rail (linha amarela), Hero, Cinematic (zoom),
                      # Pillars, Locacao, Assistencia, Pilotos (linha desenhada),
                      # Why (reveal por palavra), Story, Gallery (marquee),
                      # CtaBand, Footer, Icons
public/img/           # imagens WebP otimizadas
```
