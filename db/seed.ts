import { db, Bangkok } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Bangkok).values([
		{
			id: 1,
			name: 'Bangkok 02 Temples + Gems Gallery (Golden Buddha +  Marble)',
			sic_cost_pp: 350,
			tkt_net_cost: 200,
			transfer_rates_car: 1100,
			transfer_rates_suv: 1300,
			transfer_rates_van: 1600
		},
		{
			id: 2,
			name: 'Bangkok 03 Temples + Gems Gallery (Golden  Buddha+Mini  Reclining  Bhddha -Mahaprutaram)',
			sic_cost_pp: 350,
			tkt_net_cost: 350,
			transfer_rates_car: 1100,
			transfer_rates_suv: 1300,
			transfer_rates_van: 1600
		},
		{
			id: 3,
			name: 'Wat Pho (Reclining Buddha)',
			sic_cost_pp: 0,
			tkt_net_cost: 250,
			transfer_rates_car: 1100,
			transfer_rates_suv: 1300,
			transfer_rates_van: 1600
		},
		{
			id: 4,
			name: 'Grand  Palace',
			sic_cost_pp: 0,
			tkt_net_cost: 550,
			transfer_rates_car: 1100,
			transfer_rates_suv: 1300,
			transfer_rates_van: 1600
		},
		{
			id: 5,
			name: 'Safari World With Marine Park Including Lunch',
			sic_cost_pp: 1200,
			tkt_net_cost: 1000,
			transfer_rates_car: 1700,
			transfer_rates_suv: 1900,
			transfer_rates_van: 2100
		},
		{
			id: 6,
			name: 'Chao Pharaya Dinner Cruise',
			sic_cost_pp: 1050,
			tkt_net_cost: 800,
			transfer_rates_car: 1100,
			transfer_rates_suv: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 7,
			name: 'Mahankhon Sky Walk',
			sic_cost_pp: 0,
			tkt_net_cost: 800,
			transfer_rates_car: 1100,
			transfer_rates_suv: 1100,
			transfer_rates_van: 1200
		},
		{
			id: 8,
			name: 'Dream World With Snow Town & Lunch',
			sic_cost_pp: 0,
			tkt_net_cost: 750,
			transfer_rates_car: 2100,
			transfer_rates_suv: 2300,
			transfer_rates_van: 2600
		},
		{
			id: 9,
			name: 'Siam Amazing Park + Lunch',
			sic_cost_pp: 0,
			tkt_net_cost: 450,
			transfer_rates_car: 2600,
			transfer_rates_suv: 2800,
			transfer_rates_van: 2800
		},
		{
			id: 10,
			name: 'The Ancient City',
			sic_cost_pp: 0,
			tkt_net_cost: 350,
			transfer_rates_car: 0,
			transfer_rates_suv: 0,
			transfer_rates_van: 0
		},
		{
			id: 11,
			name: 'Erwan Museum',
			sic_cost_pp: 0,
			tkt_net_cost: 300,
			transfer_rates_car: 0,
			transfer_rates_suv: 0,
			transfer_rates_van: 0
		},
		{
			id: 12,
			name: 'Sealife + Madame Tussads',
			sic_cost_pp: 0,
			tkt_net_cost: 900,
			transfer_rates_car: 2300,
			transfer_rates_suv: 2500,
			transfer_rates_van: 2900
		},
		{
			id: 13,
			name: 'Damnok sadun floating market & train market (roaing boat 500thb pp) min. 6pax ',
			sic_cost_pp: 0,
			tkt_net_cost: 0,
			transfer_rates_car: 4000,
			transfer_rates_suv: 0,
			transfer_rates_van: 4500
		},
	])
}
