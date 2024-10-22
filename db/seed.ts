import { db, Bangkok, Pattaya, Krabi, Chiangmai } from 'astro:db';

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
			transfer_rates_van: 400
		},
		{
			id: 2,
			name: 'Alcazar Show -Normal Seats & 69 Adult Show',
			sic_cost_pp: 450,
			tkt_net_cost: 350,
			transfer_rates_van: 450
		},
		{
			id: 3,
			name: 'Art In Paradise',
			sic_cost_pp: 350,
			tkt_net_cost: 200,
			transfer_rates_van: 450
		},
		{
			id: 4,
			name: 'Dolphinarium Pattaya',
			sic_cost_pp: 650,
			tkt_net_cost: 430,
			transfer_rates_van: 750
		},
		{
			id: 5,
			name: 'Floating Market (Pattaya) One Way Boat Ride',
			sic_cost_pp: 350,
			tkt_net_cost: 170,
			transfer_rates_van: 750
		},
		{
			id: 6,
			name: 'Frost Magical Ice of Siam',
			sic_cost_pp: 0,
			tkt_net_cost: 440,
			transfer_rates_van: 850
		},
		{
			id: 7,
			name: 'Million Years Stone Park (Crocodile Farm)',
			sic_cost_pp: 650,
			tkt_net_cost: 300,
			transfer_rates_van: 750
		},
		{
			id: 8,
			name: 'Mini Siam',
			sic_cost_pp: 550,
			tkt_net_cost: 250,
			transfer_rates_van: 750
		},
		{
			id: 9,
			name: 'Nong Nooch Garden (Thai Cultural Show + Elephant Show Only)',
			sic_cost_pp: 750,
			tkt_net_cost: 470,
			transfer_rates_van: 1250
		},
		{
			id: 10,
			name: 'Nong Nooch Garden (Thai Cultural Show + Elephant Show + Lunch)',
			sic_cost_pp: 900,
			tkt_net_cost: 600,
			transfer_rates_van: 1450
		},
		{
			id: 11,
			name: 'Pattaya City Tour (View Point-Bigbuddha-Gem)',
			sic_cost_pp: 350,
			tkt_net_cost: 200,
			transfer_rates_van: 650
		},
		{
			id: 12,
			name: 'Pattaya Tower',
			sic_cost_pp: 0,
			tkt_net_cost: 350,
			transfer_rates_van: 650
		},
		{
			id: 13,
			name: 'Ripley 3 Attractions',
			sic_cost_pp: 0,
			tkt_net_cost: 400,
			transfer_rates_van: 450
		},
		{
			id: 14,
			name: 'Ripley 5 Attractions',
			sic_cost_pp: 0,
			tkt_net_cost: 500,
			transfer_rates_van: 450
		},
		{
			id: 15,
			name: 'Ripley 7 Attractions',
			sic_cost_pp: 0,
			tkt_net_cost: 600,
			transfer_rates_van: 450
		},
		{
			id: 16,
			name: 'Sanctuary of Truth',
			sic_cost_pp: 550,
			tkt_net_cost: 400,
			transfer_rates_van: 750
		},
		{
			id: 17,
			name: 'Tiffany show Normal Seat',
			sic_cost_pp: 0,
			tkt_net_cost: 850,
			transfer_rates_van: 450
		},
		{
			id: 18,
			name: 'Under Water World (Pattaya)',
			sic_cost_pp: 550,
			tkt_net_cost: 285,
			transfer_rates_van: 750
		},
		{
			id: 19,
			name: 'Pattaya Park',
			sic_cost_pp: 0,
			tkt_net_cost: 350,
			transfer_rates_van: 650
		},
		{
			id: 20,
			name: 'Colombia Pictures',
			sic_cost_pp: 0,
			tkt_net_cost: 1240,
			transfer_rates_van: 1850
		},
		{
			id: 21,
			name: 'Tiger Park (Walk Through Only - Without Tiger Play)',
			sic_cost_pp: 300,
			tkt_net_cost: 100,
			transfer_rates_van: 800
		},
		{
			id: 22,
			name: 'Tiger Park With Entry Ticket + Photo Shoot With Medium Tiger (13 - 18 Months)',
			sic_cost_pp: 800,
			tkt_net_cost: 400,
			transfer_rates_van: 800
		},
		{
			id: 23,
			name: 'Tiger Park With Entry Ticket + Photo Shoot With Small Tiger(6 - 12 Months)',
			sic_cost_pp: 900,
			tkt_net_cost: 450,
			transfer_rates_van: 800
		},
		{
			id: 24,
			name: 'Tiger Park With Entry Ticket + Photo Shoot With BIG Tiger(19 - 48 Months)',
			sic_cost_pp: 1000,
			tkt_net_cost: 450,
			transfer_rates_van: 800
		},
		{
			id: 25,
			name: 'Sri Racha Tiger Zoo Park OR Tiger Topia (With breakfast -150THB)',
			sic_cost_pp: 0,
			tkt_net_cost: 300,
			transfer_rates_van: 1000
		},
	])

	// Krabi Data
	await db.insert(Krabi).values([
		{
			id: 1,
			name: 'Krabi City Tour -04 HRS (No Lunch, No Guide)',
			sic_cost_pp: 0,
			child_cost: 0,
			tkt_net_cost: 0,
			transfer_rates_car: 1900,
			transfer_rates_van: 2300
		},
		{
			id: 2,
			name: 'Krabi 4 Island Tour By Longtail Boat With Lunch box (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 650,
			child_cost: 550,
			tkt_net_cost: 550,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 3,
			name: 'Krabi 4 Island Tour By Speed Boat With Lunch box (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 850,
			child_cost: 750,
			tkt_net_cost: 750,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 4,
			name: 'Hong Island Tour By Longtail Boat With Lunch box (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1000,
			child_cost: 900,
			tkt_net_cost: 900,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 5,
			name: 'Hong Island Tour By Speed Boat With Lunch box (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1200,
			child_cost: 900,
			tkt_net_cost: 900,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 6,
			name: 'Sunset 7 Island Tour By Lontail Boat With BBQ Dinner (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 900,
			child_cost: 800,
			tkt_net_cost: 800,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 7,
			name: 'Sunset 7 Island Tour By Speed Boat With BBQ Dinner (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1200,
			child_cost: 1100,
			tkt_net_cost: 1100,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 8,
			name: 'Phi Phi Island Tour By Speed Boat With Buffet Lunch (Excluding National Park Fee) -400 THB PP | From Krabi',
			sic_cost_pp: 1200,
			child_cost: 1100,
			tkt_net_cost: 1100,
			transfer_rates_car: 1000,
			transfer_rates_van: 1000
		},
		{
			id: 9,
			name: 'Ao Nang Elephant Sanctuary (Get to Know, Cook & Feed, Get Mud Spa, Bathing with Them,Farewell) + Transfer',
			sic_cost_pp: 2200,
			child_cost: 1800,
			tkt_net_cost: 2100,
			transfer_rates_car: 1000,
			transfer_rates_van: 1200
		},
		{
			id: 10,
			name: 'Krabi Jungle Tour : Hot Spring With Emerald Pool No Lunch (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 900,
			child_cost: 800,
			tkt_net_cost: 800,
			transfer_rates_car: 1100,
			transfer_rates_van: 1200
		},
		{
			id: 11,
			name: 'Krabi Jungle Tour : Emerald Pool + Tiger Cave Temple With Lunch (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1000,
			child_cost: 900,
			tkt_net_cost: 900,
			transfer_rates_car: 1100,
			transfer_rates_van: 1200
		},
		{
			id: 12,
			name: 'Krabi Jungle Tour : Hotspring With Emerald Pool + Tiger Cave Temple + ATV 40 Mins +Lunch  (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1500,
			child_cost: 1300,
			tkt_net_cost: 1400,
			transfer_rates_car: 1100,
			transfer_rates_van: 1200
		},
		{
			id: 13,
			name: 'Krabi Jungle Tour : Hotspring With Emerald Pool + Kayaking + Lunch (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1500,
			child_cost: 1300,
			tkt_net_cost: 1400,
			transfer_rates_car: 1100,
			transfer_rates_van: 1200
		},
		{
			id: 14,
			name: 'Krabi Jungle Tour : Hotspring With Emerald Pool +  Elephant Bathing + Lunch (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1800,
			child_cost: 1600,
			tkt_net_cost: 1700,
			transfer_rates_car: 1100,
			transfer_rates_van: 1200
		},
		{
			id: 15,
			name: 'Krabi Jungle Tour : Hotspring With Emerald Pool +  Elephant Riding + Lunch (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1500,
			child_cost: 1300,
			tkt_net_cost: 1400,
			transfer_rates_car: 1100,
			transfer_rates_van: 1200
		},
	])

	// Chiang Mai Data
	await db.insert(Chiangmai).values([
		{
			id: 1,
			name: 'Explore temples and Monk Chat Program',
			sic_cost_pp: 2000,
			child_cost: 560,
		},
		{
			id: 2,
			name: 'Chiang Mai Diversity Community Tour',
			sic_cost_pp: 1180,
			child_cost: 500,
		},
		{
			id: 3,
			name: 'Lanna Temples and the Soul of Buddhisam - Afternoon',
			sic_cost_pp: 0,
			child_cost: 560,
		},
		{
			id: 4,
			name: 'Chiang Mai Local Life Style and Wiang Kum Kam',
			sic_cost_pp: 0,
			child_cost: 950,
		},
		{
			id: 5,
			name: 'Chiang Mai Local Life Style with Arts & Cultural Center',
			sic_cost_pp: 0,
			child_cost: 1080,
		},
		{
			id: 6,
			name: 'Wiang Kum Kam, the underground ancient city',
			sic_cost_pp: 1500,
			child_cost: 540,
		},
		{
			id: 7,
			name: 'City and Temples - Warorod Market',
			sic_cost_pp: 1120,
			child_cost: 540,
		},
		{
			id: 8,
			name: 'City temples and Doi Suthep Temple',
			sic_cost_pp: 1360,
			child_cost: 550,
		},
		{
			id: 9,
			name: 'Doi Suthep Temple',
			sic_cost_pp: 1160,
			child_cost: 500,
		},
		{
			id: 10,
			name: 'Doi Suthep Temple and Hmong Doi Pui Village',
			sic_cost_pp: 0,
			child_cost: 570,
		},
		{
			id: 11,
			name: 'Doi Suthep Temple and White Hmong Village',
			sic_cost_pp: 0,
			child_cost: 650,
		},
		{
			id: 12,
			name: 'Chiang Mai Local Life Tour',
			sic_cost_pp: 0,
			child_cost: 820,
		},
		{
			id: 13,
			name: 'Handicraft Factories at Sankampaeng',
			sic_cost_pp: 0,
			child_cost: 370,
		},
		{
			id: 14,
			name: 'Lampoon and Haripoonchai Temple',
			sic_cost_pp: 0,
			child_cost: 480,
		},
		{
			id: 15,
			name: 'Buatong Waterfall',
			sic_cost_pp: 0,
			child_cost: 530,
		},
		{
			id: 16,
			name: 'Elephant Poopoo Paper Park & Botanic Garden',
			sic_cost_pp: 0,
			child_cost: 570,
		},
		{
			id: 17,
			name: 'Chiang Mai Street Food Tour',
			sic_cost_pp: 0,
			child_cost: 650,
		},
		{
			id: 18,
			name: 'Khantoke Dinner',
			sic_cost_pp: 0,
			child_cost: 800,
		},
		{
			id: 19,
			name: 'Chiang Mai Night Safari',
			sic_cost_pp: 0,
			child_cost: 1000,
		},
		{
			id: 20,
			name: 'Experience a Local Life in Phrao',
			sic_cost_pp: 0,
			child_cost: 1420,
		},
		{
			id: 21,
			name: 'Mae Kampong and Sankampaeng Hot Spring',
			sic_cost_pp: 0,
			child_cost: 1360,
		},
		{
			id: 22,
			name: 'Ancient Lanna History : Home Host Cooking',
			sic_cost_pp: 0,
			child_cost: 1640,
		},
		{
			id: 23,
			name: 'Doi Inthanon - Thailand Highest Mountain',
			sic_cost_pp: 0,
			child_cost: 950,
		},
		{
			id: 24,
			name: 'Doi Inthanon and Pha Dok Siew Nature Trail',
			sic_cost_pp: 0,
			child_cost: 1000,
		},
		{
			id: 25,
			name: 'Rustic Roads of Lampang',
			sic_cost_pp: 0,
			child_cost: 1900,
		},
		{
			id: 26,
			name: 'Golden Heritage of Lampang',
			sic_cost_pp: 0,
			child_cost: 1100,
		},
		{
			id: 27,
			name: 'Chiang Rai - City and Temples Tour',
			sic_cost_pp: 0,
			child_cost: 950,
		},
		{
			id: 28,
			name: 'Chiang Rai and Golden Triangle',
			sic_cost_pp: 0,
			child_cost: 1000,
		},
		{
			id: 29,
			name: 'Hilltribe Trekking Tour',
			sic_cost_pp: 0,
			child_cost: 1100,
		},
	])
}
