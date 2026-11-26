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

export const CASE_STUDIES = [
  {
    id: 'ai-chat-memory',
    title: 'A chat app that kept losing the answer',
    context: 'Next.js + PostgreSQL chat assistant with long-term memory (ai-chat-memory).',
    problem:
      'Memory search used PostgreSQL ts_rank_cd. It has no inverse document frequency, so long, rambling messages outranked the short one that held the fact.',
    method: [
      'Ran the app’s retrieval against all 479 LongMemEval questions with memory-recall-bench',
      'Read the failing questions to find the pattern (long messages winning)',
      'Replaced the ranking with BM25 re-ranking, then added on-device embeddings',
      'Added a retrieval regression test to GitHub Actions so the fix stays fixed',
    ],
    results: [
      { value: '56% → 85%', label: 'answer kept in a 4k context' },
      { value: '163 / 8', label: 'questions fixed / broken' },
      { value: '28% → 61%', label: 'all evidence kept at 4k' },
    ],
    href: 'https://github.com/Deepanjal-s/memory-recall-bench/tree/main/results#case-study-finding-and-fixing-a-ranking-bug-in-a-real-app',
  },
  {
    id: 'recall-vs-accuracy',
    title: 'More memory, same answers: what actually helped',
    context: 'Open research on LongMemEval with a Qwen3-4B reader and judge on free Kaggle GPUs.',
    problem:
      'Giving the model 4× more context (4k → 16k tokens) raised recall from 63% to 90%, but answer accuracy stayed flat: the extra messages distract the reader.',
    method: [
      'Measured judged answer accuracy, not just recall, on all 479 questions',
      'Paired per-question comparisons with sign tests, so gains are not noise',
      'Added a cross-encoder re-ranker (bge-reranker-v2-m3) over the top 100 candidates',
      'Kept the context mid-sized (8k) instead of widening it',
    ],
    results: [
      { value: '59.1% → 64.9%', label: 'answer accuracy, best configuration' },
      { value: '63 / 35', label: 'fixed / broken vs the old setup (p≈0.006)' },
      { value: '+8.4 pts', label: 'all-evidence recall at 4k' },
    ],
    href: 'https://github.com/Deepanjal-s/memory-recall-bench/tree/main/results#re-ranking-precision-at-small-budgets-all-479-kaggle-gpu',
  },
]
