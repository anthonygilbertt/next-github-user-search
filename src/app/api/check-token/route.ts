import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasNextPublicToken: !!process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    hasClassicPat: !!process.env.CLASSIC_PAT,
    // Don't expose the actual tokens, just whether they exist
    envKeys: Object.keys(process.env).filter(key => key.includes('GITHUB') || key.includes('PAT'))
  });
}
