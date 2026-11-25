export const SERVICES_CONTENT = {
  eyebrow: 'Work with me',
  title: 'Your chatbot forgets things. I measure why, then fix it.',
  description:
    'Fixed-scope, remote work for teams building chat assistants, RAG search or AI features. Every job ends with before/after numbers on your own data, not a demo.',
  availability: 'Booking from 10 December 2026',
  offer: 'First two clients: 30% off in exchange for a public case study.',
  email: 'deepanjalshukla720@gmail.com',
  items: [
    {
      id: 'audit',
      name: 'Retrieval audit',
      price: '$250',
      time: '5 days',
      summary:
        'I run your retriever against your conversations (or the LongMemEval benchmark) and measure how often the facts the model needs actually reach its context.',
      deliverables: [
        'Recall report: overall, per question type, per budget',
        'The failing questions, each with the reason it failed',
        'Top three fixes ranked by expected gain',
      ],
      proof: 'Found a ranking bug in a Next.js + Postgres app: answer kept in context 56% → 85% over 479 questions.',
      proofHref: 'https://github.com/Deepanjal-s/memory-recall-bench/tree/main/results',
    },
    {
      id: 'fix',
      name: 'Fix and ship',
      price: 'from $600',
      time: '1–2 weeks',
      summary:
        'I implement the fixes in your codebase: BM25 re-ranking, hybrid search, embeddings, re-rankers, chunk sizes, plus a retrieval regression test in your CI so it stays fixed.',
      deliverables: [
        'Pull requests with tests',
        'Before/after numbers on the same questions',
        'A CI check that fails if retrieval regresses',
      ],
      proof: 'ai-chat-memory: BM25 re-rank fix took all-evidence recall at 4k from 28% to 61%, guarded by a LongMemEval retrieval test in GitHub Actions.',
      proofHref: 'https://github.com/Deepanjal-s/ai-chat-memory',
    },
    {
      id: 'build',
      name: 'AI feature build',
      price: 'from $400',
      time: '1–2 weeks',
      summary:
        'A small, production-ready AI feature in your React/Next.js, Node or Python app: search over your data, summaries, extraction, automations.',
      deliverables: [
        'Working feature behind your auth',
        'Cost and latency estimate per request',
        'Tests and a short handover doc',
      ],
      proof: 'Open-source evaluation harness with 50 tests, real-library adapters (mem0, LlamaIndex) and CI.',
      proofHref: 'https://github.com/Deepanjal-s/memory-recall-bench',
    },
  ],
}
