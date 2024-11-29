import { db } from 'astro:db';

export async function GET() {
  try {
    await db.destinations.create({
      data: {
        name: 'BANGKOK',
        attractions: [
          {
            name: 'temples',
            description: 'Bangkok 02 Temples + Gems Gallery (Golden Buddha + Marble)',
            sic: true,
            pvt: true
          },
          {
            name: 'grand_palace',
            description: 'Grand Palace',
            sic: true,
            pvt: true
          },
          {
            name: 'safari_world',
            description: 'Safari World With Marine Park Including Lunch',
            sic: true,
            pvt: true
          },
          // Add more attractions as needed
        ]
      }
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to seed database' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}