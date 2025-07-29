import {createClient} from '@supabase/supabase-js';

const supabaseUrl = "https://dpmunpgiiochblrxdrxk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwbXVucGdpaW9jaGJscnhkcnhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3NTQzMDAsImV4cCI6MjA2OTMzMDMwMH0.oinYDrMNjckJvtNpCRy9PgKaYH6ZtZ31EpEPW-eN6CE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;