import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || ''

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn('Supabase URL or Key is missing. Using empty strings for build.')
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey)
