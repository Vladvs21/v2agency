import { NextRequest, NextResponse } from 'next/server';

interface RouteParams {
  params: Promise<{ platform: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { platform } = await params;
  const searchParams = request.nextUrl.searchParams;

  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  if (error) {
    return NextResponse.json(
      { error, description: errorDescription, platform },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: 'Authorization code is missing', platform },
      { status: 400 }
    );
  }

  // Здесь вызывается метод обмена code -> tokens под нужную платформу
  // Пример: const tokens = await exchangeCodeForTokens(platform, code);
  console.log(`[OAuth Success] Platform: ${platform}, Code: ${code}`);

  return NextResponse.json({
    status: 'success',
    platform,
    code,
    message: `Account connected for ${platform}. You can close this window.`,
  });
}