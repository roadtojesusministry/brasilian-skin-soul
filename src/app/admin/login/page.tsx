'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Login failed');
      router.push('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF8F2] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo / brand */}
        <div className="text-center mb-10">
          <p className="font-serif text-3xl text-[#1B4D2E] font-light">Brasilian Skin Soul</p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] mt-2">Admin Portal</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#e0ede5] shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F2] border-2 border-[#e0ede5] rounded-xl px-4 py-3 text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1B4D2E] text-white font-semibold py-3.5 rounded-xl hover:bg-[#27533c] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Signing in…</> : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#96c0a6] mt-6">
          Brasilian Skin Soul · Admin Access Only
        </p>
      </div>
    </div>
  );
}
