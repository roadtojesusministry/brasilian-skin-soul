import { NextRequest, NextResponse } from 'next/server';

/** Returns a 401 response if the admin_auth cookie is not present, otherwise null. */
export function requireAdminAuth(req: NextRequest): NextResponse | null {
  const cookie = req.cookies.get('admin_auth');
  if (!cookie || cookie.value !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
