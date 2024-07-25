import { createClient } from '@supabase/supabase-js'
import { Database } from '../../database/type'

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)
