import { db, Bangkok, Pattaya } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// Bangkok data
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

	// Pattaya data
	await db.insert(Pattaya).values([
		{
			id: 1,
			name: 'Coral Island Tour By Speed Boat With Lunch',
			sic_cost_pp: 200,
			tkt_net_cost: 200,
			transfer_rates_van: 400,
			pickup_time_sic: '9:00 AM'
		},
		{
			id: 2,
			name: 'Alcazar Show -Normal Seats & 69 Adult Show',
			sic_cost_pp: 450,
			tkt_net_cost: 350,
			transfer_rates_van: 450,
			pickup_time_sic: '16:30 PM, 18:00 PM, 19:30 PM'
		},
		{
			id: 3,
			name: 'Art In Paradise',
			sic_cost_pp: 350,
			tkt_net_cost: 200,
			transfer_rates_van: 450,
			pickup_time_sic: '09:00 - 19:00'
		},
		{
			id: 4,
			name: 'Dolphinarium Pattaya',
			sic_cost_pp: 650,
			tkt_net_cost: 430,
			transfer_rates_van: 750,
			pickup_time_sic: '10:00 AM, 13:00 PM, 19:30 PM'
		},
		{
			id: 5,
			name: 'Floating Market (Pattaya) One Way Boat Ride',
			sic_cost_pp: 350,
			tkt_net_cost: 170,
			transfer_rates_van: 750,
			pickup_time_sic: '09:00 - 16:00'
		},
		{
			id: 6,
			name: 'Frost Magical Ice of Siam',
			sic_cost_pp: 0,
			tkt_net_cost: 440,
			transfer_rates_van: 850,
			pickup_time_sic: '10:00 - 14:00'
		},
		{
			id: 7,
			name: 'Million Years Stone Park (Crocodile Farm)',
			sic_cost_pp: 650,
			tkt_net_cost: 300,
			transfer_rates_van: 750,
			pickup_time_sic: '10:00 - 15:00'
		},
		{
			id: 8,
			name: 'Mini Siam',
			sic_cost_pp: 550,
			tkt_net_cost: 250,
			transfer_rates_van: 750,
			pickup_time_sic: '10:00 - 18:00'
		},
		{
			id: 9,
			name: 'Nong Nooch Garden (Thai Cultural Show + Elephant Show Only)',
			sic_cost_pp: 750,
			tkt_net_cost: 470,
			transfer_rates_van: 1250,
			pickup_time_sic: '9:30 AM, 12:30 PM'
		},
		{
			id: 10,
			name: 'Nong Nooch Garden (Thai Cultural Show + Elephant Show + Lunch)',
			sic_cost_pp: 900,
			tkt_net_cost: 600,
			transfer_rates_van: 1450,
			pickup_time_sic: '9:30 AM, 12:30 PM'
		},
		{
			id: 11,
			name: 'Pattaya City Tour (View Point-Bigbuddha-Gem)',
			sic_cost_pp: 350,
			tkt_net_cost: 200,
			transfer_rates_van: 650,
			pickup_time_sic: '9:30 AM, 14:30 PM'
		},
		{
			id: 12,
			name: 'Pattaya Tower',
			sic_cost_pp: 0,
			tkt_net_cost: 350,
			transfer_rates_van: 650,
			pickup_time_sic: '11:00 - 16:00'
		},
		{
			id: 13,
			name: 'Ripley 3 Attractions',
			sic_cost_pp: 0,
			tkt_net_cost: 400,
			transfer_rates_van: 450,
			pickup_time_sic: '11:00 - 18:00'
		},
		{
			id: 14,
			name: 'Ripley 5 Attractions',
			sic_cost_pp: 0,
			tkt_net_cost: 500,
			transfer_rates_van: 450,
			pickup_time_sic: '11:00 - 18:00'
		},
		{
			id: 15,
			name: 'Ripley 7 Attractions',
			sic_cost_pp: 0,
			tkt_net_cost: 600,
			transfer_rates_van: 450,
			pickup_time_sic: '11:00 - 18:00'
		},
		{
			id: 16,
			name: 'Sanctuary of Truth',
			sic_cost_pp: 550,
			tkt_net_cost: 400,
			transfer_rates_van: 750,
			pickup_time_sic: '09:30 - 15:00'
		},
		{
			id: 17,
			name: 'Tiffany show Normal Seat',
			sic_cost_pp: 0,
			tkt_net_cost: 850,
			transfer_rates_van: 450,
			pickup_time_sic: '16:30 PM, 18:00 PM, 19:30 PM'
		},
		{
			id: 18,
			name: 'Under Water World (Pattaya)',
			sic_cost_pp: 550,
			tkt_net_cost: 285,
			transfer_rates_van: 750,
			pickup_time_sic: '09:00 - 16:00'
		},
		{
			id: 19,
			name: 'Pattaya Park',
			sic_cost_pp: 0,
			tkt_net_cost: 350,
			transfer_rates_van: 650,
			pickup_time_sic: '09:00 - 16:00'
		},
		{
			id: 20,
			name: 'Colombia Pictures',
			sic_cost_pp: 0,
			tkt_net_cost: 1240,
			transfer_rates_van: 1850,
			pickup_time_sic: '10:00/11:00'
		},
		{
			id: 21,
			name: 'Tiger Park (Walk Through Only - Without Tiger Play)',
			sic_cost_pp: 300,
			tkt_net_cost: 100,
			transfer_rates_van: 800,
			pickup_time_sic: '09:00 - 16:00'
		},
		{
			id: 22,
			name: 'Tiger Park With Entry Ticket + Photo Shoot With Medium Tiger (13 - 18 Months)',
			sic_cost_pp: 800,
			tkt_net_cost: 400,
			transfer_rates_van: 800,
			pickup_time_sic: '09:00 - 16:00'
		},
		{
			id: 23,
			name: 'Tiger Park With Entry Ticket + Photo Shoot With Small Tiger(6 - 12 Months)',
			sic_cost_pp: 900,
			tkt_net_cost: 450,
			transfer_rates_van: 800,
			pickup_time_sic: '09:00 - 16:00'
		},
		{
			id: 24,
			name: 'Tiger Park With Entry Ticket + Photo Shoot With BIG Tiger(19 - 48 Months)',
			sic_cost_pp: 1000,
			tkt_net_cost: 450,
			transfer_rates_van: 800,
			pickup_time_sic: '09:00 - 16:00'
		},
		{
			id: 25,
			name: 'Sri Racha Tiger Zoo Park OR Tiger Topia (With breakfast -150THB)',
			sic_cost_pp: 0,
			tkt_net_cost: 300,
			transfer_rates_van: 1000,
			pickup_time_sic: '08:00AM TO 06:00PM'
		},
	])
}
