'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/subscribe`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    // Show email confirmation message
    setEmailSent(true)
    setLoading(false)
  }

  if (emailSent) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-burnt-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-burnt-orange">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2" />
              <path d="M2 6l10 7 10-7" />
              <path d="M2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Check your email</h1>
          <p className="text-stone-400 mb-6">
            We sent a confirmation link to <span className="text-white font-medium">{email}</span>.
            Click the link to activate your account.
          </p>
          <p className="text-stone-500 text-sm">
            Didn&apos;t receive the email? Check your spam folder or{' '}
            <button
              onClick={() => setEmailSent(false)}
              className="text-burnt-orange hover:text-burnt-orange-hover transition-colors"
            >
              try again
            </button>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
        <p className="text-stone-400">Get started with Slider today</p>
      </div>

      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-300 mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="At least 6 characters"
              className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-stone-300 mb-1.5">
              Confirm password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Repeat your password"
              className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-shadow"
            />
          </div>

          {error && (
            <div className="text-error text-sm bg-error/10 border border-error/20 rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-burnt-orange hover:bg-burnt-orange-hover text-white font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
      </div>

      <p className="text-center text-stone-500 text-sm mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-burnt-orange hover:text-burnt-orange-hover transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  )
}
