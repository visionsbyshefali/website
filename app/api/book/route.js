import { NextResponse } from 'next/server';

// NOTE: The user will replace this with their actual Google Apps Script Webhook URL later
const GOOGLE_SCRIPT_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK || "";

export async function POST(request) {
  try {
    const body = await request.json();

    // 1. Validate data
    if (!body.name || !body.email || !body.service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. If Google Webhook is set, forward the data
    if (GOOGLE_SCRIPT_WEBHOOK) {
      const googleResponse = await fetch(GOOGLE_SCRIPT_WEBHOOK, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!googleResponse.ok) {
        console.error("Failed to sync with Google Sheets");
        // We still return 200 to the user so they see success, even if sheets failed
      }
    } else {
      console.log("No Google Webhook configured. Booking details:", body);
    }

    // 3. Optional: Send confirmation email using existing EmailJS setup if needed here
    // But for now we just return success

    return NextResponse.json({ success: true, message: "Booking confirmed" }, { status: 200 });

  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
