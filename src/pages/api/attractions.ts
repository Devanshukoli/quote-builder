import type { APIRoute } from 'astro';
import { db, Bangkok, Pattaya, Phuket, Krabi, Kohsamui, Chiangmai } from 'astro:db';

export const GET: APIRoute = async ({ url }) => {
  try {
    const destination = url.searchParams.get('destination')?.toUpperCase();
    
    if (!destination) {
      throw new Error('Destination parameter is required');
    }

    let attractions;
    switch (destination) {
      case 'BANGKOK':
        attractions = await db.select().from(Bangkok);
        break;
      case 'PATTAYA':
        attractions = await db.select().from(Pattaya);
        break;
      case 'PHUKET':
        attractions = await db.select().from(Phuket);
        break;
      case 'KRABI':
        attractions = await db.select().from(Krabi);
        break;
      case 'KOHSAMUI':
        attractions = await db.select().from(Kohsamui);
        break;
      case 'CHIANGMAI':
        attractions = await db.select().from(Chiangmai);
        break;
      default:
        throw new Error('Invalid destination');
    }

    return new Response(JSON.stringify({ success: true, data: attractions }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching attractions:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch attractions' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};