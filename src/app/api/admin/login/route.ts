import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let body: { password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { password } = body;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  // httpOnly cookie, valid for 7 days
  res.headers.set(
    'Set-Cookie',
    'admin_auth=1; Path=/; HttpOnly; Max-Age=604800; SameSite=Lax'
  );
  return res;
}
