import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// read .env
const envSrc = fs.readFileSync(path.join(process.cwd(), '.env'), 'utf-8');
const env = {};
envSrc.split('\n').forEach(line => {
  if (line.includes('=')) {
    const [k, v] = line.split('=');
    env[k.trim()] = v.trim().replace(/^"|"$/g, '');
  }
});

const url = env['VITE_SUPABASE_URL'];
const key = env['VITE_SUPABASE_PUBLISHABLE_KEY'];

const supabase = createClient(url, key);

async function test() {
  const { data, error } = await supabase.from('products').select('*').limit(1);
  console.log('PRODUCTS:', data, error);
  const { data: roleData, error: roleError } = await supabase.rpc('has_role', { _user_id: '00000000-0000-0000-0000-000000000000', _role: 'admin' });
  console.log('RPC:', roleData, roleError);
}

test();
