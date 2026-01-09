import supabase from "./supabase";

async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
}

async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

async function signOut() {
  const { error } = await supabase.auth.signOut();

  return { error };
}

async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();

  return { data, error };
}

export { getCurrentUser, signIn, signOut, signUp };

