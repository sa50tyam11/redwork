import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SERVICES_DATA = [
  {
    id: 's1',
    title: 'Discord Bot',
    desc: 'Professional Discord solutions for communities of all sizes.',
    price: '₹1,499 - ₹2,999+',
    tags: ['discord', 'bot', 'server', 'moderation', 'automation', 'community', 'price'],
    tiers: [
      { name: 'Basic Bot', price: '₹1,499', features: ['Greetings & Welcomes', 'Basic Moderation', 'Standard Commands'] },
      { name: 'Custom Bot', price: '₹2,999+', features: ['Advanced Logic', 'API Integrations', 'Custom Systems'] }
    ]
  },
  {
    id: 's2',
    title: 'Student / Academic Project',
    desc: 'End-to-end projects for your college requirements. We ensure you understand the code.',
    price: '₹800 - ₹3,000+',
    tags: ['student', 'project', 'college', 'academic', 'viva', 'mini', 'major', 'final', 'year', 'price'],
    tiers: [
      { name: 'Standard', price: '₹800 - ₹2,000', features: ['Clean Working Code', 'Basic Documentation', 'Standard Setup'] },
      { name: 'Heavy/Major', price: '₹2,000 - ₹3,000+', features: ['Advanced Features', 'Database Integration', 'Viva Prep & PPT'] }
    ]
  },
  {
    id: 's3',
    title: 'Business Website',
    desc: 'Establish your online presence with a fast, modern, and conversion-focused website.',
    price: '₹4,999 - Custom',
    tags: ['business', 'gym', 'shop', 'local', 'small', 'website', 'whatsapp', 'price', 'landing', 'page'],
    tiers: [
      { name: 'Basic', price: '₹4,999', features: ['Landing / Front Page', 'Mobile Responsive', 'Contact Forms'] },
      { name: 'Value', price: '₹8,999', features: ['Multi-page Site', 'WhatsApp Integration', 'Business Features'] },
      { name: 'Heavy', price: 'Custom Quote', features: ['Heavy Custom Features', 'Complex Backend', 'Consultation Required'] }
    ]
  }
];

export default function AiSearch({ compact = false }) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [thinkingText, setThinkingText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSearching) return;
    const text = `Analyzing request for "${query}"...`;
    let i = 0;
    setThinkingText('');
    const interval = setInterval(() => {
      setThinkingText(prev => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [isSearching, query]);

  useEffect(() => {
    // If not compact, we should read from query params on mount to support the redirect
    if (!compact) {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      if (q) {
        setQuery(q);
        // We do a small timeout to let state settle before searching
        setTimeout(() => {
          document.getElementById('ai-search-submit')?.click();
        }, 100);
      }
    }
  }, [compact]);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (!query.trim()) return;

    if (compact) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      return;
    }

    setIsSearching(true);
    setHasSearched(false);
    setResults([]);
    
    setTimeout(() => {
      const q = query.toLowerCase().trim();
      const searchWords = q.split(/\s+/).filter(word => word.length > 1);
      
      const matches = SERVICES_DATA.map(item => {
        const haystack = (item.title + ' ' + item.desc + ' ' + item.tags.join(' ') + ' ' + item.price).toLowerCase();
        const score = searchWords.reduce((acc, word) => acc + (haystack.includes(word) ? 1 : 0), 0);
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

      setResults(matches);
      setIsSearching(false);
      setHasSearched(true);
    }, 1500);
  };

  const handleChipClick = (text) => {
    setQuery(text);
    setTimeout(() => {
      document.getElementById('ai-search-submit').click();
    }, 50);
  };

  return (
    <section className="section section-dark" id="search" style={{ borderTop: '1px solid var(--glass-border)', padding: compact ? '40px 0' : '100px 0' }}>
      <div className="container container-narrow">
        
        {!compact && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ 
              background: 'rgba(226,154,46,0.12)', 
              border: '1px solid rgba(226,154,46,0.25)', 
              borderLeft: '4px solid #f5a623', 
              borderRadius: '12px', 
              padding: '16px 24px', 
              marginBottom: '64px', 
              display: 'flex', 
              gap: '16px', 
              alignItems: 'center' 
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>⚠️</span>
            <p style={{ margin: 0, color: 'var(--text-mute)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text)' }}>Note:</strong> All prices shown are <strong style={{ color: 'var(--amber)' }}>starting points</strong>. Final pricing depends on project complexity, features, revisions, and timeline. A custom quote will be shared before any work begins.
            </p>
          </motion.div>
        )}

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="label" style={{ color: 'var(--red)' }}>
          AI Powered
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">
          Find What You Need
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="search-wrap" style={{ marginTop: '32px' }}>
          
          <div className="search-bar-unit" style={{ marginBottom: '16px' }}>
            <form onSubmit={handleSearch} style={{ background: 'var(--bg-1)', border: '1px solid var(--glass-border)', borderRadius: '100px', padding: '8px 8px 8px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--text-mute)', fontSize: '1.2rem' }}>⌕</span>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try: discord bot price" 
                style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--text)', outline: 'none', fontSize: '1rem', width: '100%' }}
              />
              <button id="ai-search-submit" type="submit" className="btn-red" style={{ padding: '10px 24px', borderRadius: '100px', fontSize: '0.8rem' }} disabled={isSearching && !compact}>
                {isSearching && !compact ? '...' : 'Search'}
              </button>
            </form>
          </div>

          <div className="chips-unit" style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: compact ? '0' : '32px', paddingLeft: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-mute)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Try:
            </span>
            {['discord bot price', 'final year project', 'gym website'].map(chip => (
              <button 
                key={chip} 
                onClick={() => handleChipClick(chip)}
                style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--text-dim)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', transition: 'all 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => { e.target.style.color = 'var(--text)'; e.target.style.borderColor = 'var(--red)'; }}
                onMouseLeave={e => { e.target.style.color = 'var(--text-dim)'; e.target.style.borderColor = 'var(--glass-border)'; }}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* DYNAMIC RESULTS AREA */}
          <div className="dynamic-results-area" style={{ position: 'relative', minHeight: '60px' }}>
            
            <AnimatePresence mode="wait">
              {isSearching && (
                <motion.div 
                  key="thinking"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', fontSize: '0.9rem', padding: '0 12px' }}
                >
                  {thinkingText}<span style={{ display: 'inline-block', width: '8px', height: '16px', background: 'var(--red)', marginLeft: '4px', animation: 'cursorBlink 1s infinite' }}></span>
                </motion.div>
              )}

              {!isSearching && hasSearched && results.length === 0 && (
                <motion.div 
                  key="no-results"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  style={{ textAlign: 'center', color: 'var(--text-mute)', padding: '40px', background: 'var(--glass)', borderRadius: '16px', border: '1px dashed var(--glass-border)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
                >
                  No exact matches found for your query. Try broadening your terms, using the suggestion chips above, or contact us directly on WhatsApp for a custom quote.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Service Result Cards */}
            <div className="results-grid" style={{ marginTop: '16px' }}>
              <AnimatePresence>
                {!isSearching && hasSearched && results.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ background: 'var(--bg-1)', border: '1px solid var(--glass-border)', padding: '32px', borderRadius: '24px', marginBottom: '24px' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', gap: '16px', flexWrap: 'wrap' }}>
                      <h4 style={{ fontFamily: 'var(--font-disp)', fontSize: '2rem', color: 'var(--text)', margin: 0 }}>
                        {item.title}
                      </h4>
                      <div style={{ background: 'rgba(217,58,43,0.1)', border: '1px solid rgba(217,58,43,0.3)', color: 'var(--red)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '8px 16px', borderRadius: '100px', fontWeight: 'bold' }}>
                        {item.price}
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '700px' }}>
                      {item.desc}
                    </p>
                    
                    {item.tiers && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                        {item.tiers.map((tier, tIndex) => (
                          <motion.div 
                            key={tIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (i * 0.1) + 0.2 + (tIndex * 0.1), duration: 0.4 }}
                            style={{ background: 'var(--bg-2)', border: '1px solid var(--glass-border)', padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}
                          >
                            <h5 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.1rem', color: 'var(--text)', margin: '0 0 8px 0', fontWeight: 'bold' }}>{tier.name}</h5>
                            <div style={{ fontFamily: 'var(--font-disp)', fontSize: '1.4rem', color: 'var(--red)', fontWeight: '900', marginBottom: '16px' }}>{tier.price}</div>
                            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                              {tier.features.map((feat, fIndex) => (
                                <li key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                                  <span style={{ color: 'var(--red)', fontSize: '1.2rem' }}>•</span> {feat}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    
                    <button className="btn-red" style={{ padding: '12px 28px', fontSize: '0.95rem' }} onClick={() => window.open('https://wa.me/917667261838', '_blank')}>
                      Discuss Your Project ↗
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </motion.div>
      </div>
      
      {/* Blinking cursor animation */}
      <style>{`
        @keyframes cursorBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}