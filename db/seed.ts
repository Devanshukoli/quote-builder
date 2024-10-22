import { db, Bangkok, Pattaya, Krabi, Chiangmai, Kohsamui, Phuket } from 'astro:db';

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

	// Kohsamui Data
	await db.insert(Kohsamui).values([
		{
			id: 1,
			name: 'Koh Samui City Tour 04 HRS',
			sic_cost_pp: 350,
			child_cost: 350,
		},
		{
			id: 2,
			name: 'Angthong Marine Park Snorkeling & Sight Seeing By Big Boat With Lunch (Ex. National Park Fee) -400 THB PP',
			sic_cost_pp: 850,
			child_cost: 450,
		},
		{
			id: 3,
			name: 'Angthong Marine Park Snorkeling & Sight Seeing + Kaya King By Big Boat With Lunch (Ex. National Park Fee) -400 THB PP',
			sic_cost_pp: 1150,
			child_cost: 650,
		},
		{
			id: 4,
			name: 'Angthong Marine Park  + Kaya King By Speed Boat With Lunch (Ex. National Park Fee) -400 THB PP',
			sic_cost_pp: 1500,
			child_cost: 1200,
		},
		{
			id: 5,
			name: 'Angthong Marine Park By The Red Baron With Lunch (In. National Park Fee)',
			sic_cost_pp: 2850,
			child_cost: 1500,
		},
		{
			id: 6,
			name: 'Koh Tao + Koh Nang Yuan + Kayaking Speed Boat (Ex. National Park Fee) (07:30 - 16:30) -400 THB PP',
			sic_cost_pp: 1500,
			child_cost: 1200,
		},
		{
			id: 7,
			name: 'Halfday Koh Tan & Koh Madsum By Speed Boat (Ex. National Park Fee) -400 THB PP',
			sic_cost_pp: 1400,
			child_cost: 900,
		},
		{
			id: 8,
			name: 'Koh Samui Allday By Cruise (THE RED BARON) - Oprerates Only Friday & Sunday',
			sic_cost_pp: 2200,
			child_cost: 1200,
		},
		{
			id: 9,
			name: 'Koh Samui Allday By Cruise (THE RED BARON) - Oprerates Only Friday & Sunday',
			sic_cost_pp: 2200,
			child_cost: 1200,
		},
		{
			id: 10,
			name: 'Koh Samui Sunset Dinner By Cruise (THE RED BARON)',
			sic_cost_pp: 1850,
			child_cost: 1700,
		},
		{
			id: 11,
			name: 'Full Moon Party Boat Ticket Speed Boat R/T',
			sic_cost_pp: 1400,
			child_cost: 0,
		},
		{
			id: 12,
			name: 'ATV Safari 1Hrs. -Rider',
			sic_cost_pp: 1300,
			child_cost: 0,
		},
		{
			id: 13,
			name: 'ATV Safari 1Hrs. -Passenger',
			sic_cost_pp: 650,
			child_cost: 0,
		},
		{
			id: 14,
			name: 'ATV Safari 2Hrs. -Rider',
			sic_cost_pp: 2300,
			child_cost: 350,
		},
		{
			id: 15,
			name: 'ATV Safari 2Hrs. -Passenger',
			sic_cost_pp: 1150,
			child_cost: 0,
		},
		{
			id: 16,
			name: 'BUGGY Safari 4Hrs | Rider Passenger Both Same Rates',
			sic_cost_pp: 7500,
			child_cost: 0,
		},
		{
			id: 17,
			name: 'Program A (45Mins-1HRS) : 18 Platforms / 8 Zipline/ 4Canopy/ 3Spiral Staircase/ 1Abseiling 15m./ Logestone Zipline 300m.',
			sic_cost_pp: 1600,
			child_cost: 0,
		},
		{
			id: 18,
			name: 'Program B (45mins-1hrs) : 16 Platforms / 5 Zipline/ 4Canopy/ 3Spiral Staircase/ 1Abseiling 15m./ Logestone Zipline 250m.',
			sic_cost_pp: 1300,
			child_cost: 0,
		},
		{
			id: 19,
			name: 'Program B : jungle Discovery Tour',
			sic_cost_pp: 1100,
			child_cost: 800,
		},
		{
			id: 20,
			name: 'Program C: Samui Fullday Elephant Cooking Adventure',
			sic_cost_pp: 1700,
			child_cost: 1100,
		},
		{
			id: 21,
			name: 'Program Haft day : Elephant Mud Spa',
			sic_cost_pp: 2700,
			child_cost: 1700,
		},
		{
			id: 22,
			name: 'Program Hal fday : Feed & Shower Lovly Elephant',
			sic_cost_pp: 1700,
			child_cost: 1100,
		},
	])

	// Phuket Data
	await db.insert(Phuket).values([
		{
			id: 1,
			name: 'Phuket City Tour -04 HRS',
			sic_cost_pp: 450,
			child_cost: 0,
			tkt_net_cost: 0,
			transfer_rates_car: 1600,
			transfer_rates_van: 1600
		},
		{
			id: 2,
			name: 'Phuket City Tour + Big Buddha',
			sic_cost_pp: 600,
			child_cost: 0,
			tkt_net_cost: 0,
			transfer_rates_car: 2000,
			transfer_rates_van: 2000
		},
		{
			id: 3,
			name: 'Rock Beach Swing For (03 HRS) | Extend Sightseeing 300 THB Per Hour Charge',
			sic_cost_pp: 0,
			child_cost: 0,
			tkt_net_cost: 0,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 4,
			name: 'Phi Phi Island Tour By Big Boat With Lunch (Excluding National Park Fee) | Economy Seat -400 THB PP',
			sic_cost_pp: 1000,
			child_cost: 900,
			tkt_net_cost: 900,
			transfer_rates_car: 1400,
			transfer_rates_van: 1500
		},
		{
			id: 5,
			name: 'Phi Phi Island Tour By Big Boat With Lunch (Excluding National Park Fee) | Silver Seat -400 THB PP',
			sic_cost_pp: 1450,
			child_cost: 1350,
			tkt_net_cost: 1350,
			transfer_rates_car: 1400,
			transfer_rates_van: 1500
		},
		{
			id: 6,
			name: 'Phi Phi Island Tour By Big Boat With Lunch (Excluding National Park Fee) | Gold Seat -400 THB PP',
			sic_cost_pp: 1750,
			child_cost: 1600,
			tkt_net_cost: 1650,
			transfer_rates_car: 1400,
			transfer_rates_van: 1500
		},
		{
			id: 7,
			name: 'Phi Phi Island Tour By Royal Jet Cruise With Lunch (Excluding National Park Fee) | Standard Class -400 THB PP',
			sic_cost_pp: 1150,
			child_cost: 1050,
			tkt_net_cost: 1050,
			transfer_rates_car: 1400,
			transfer_rates_van: 1500
		},
		{
			id: 8,
			name: 'Phi Phi Island Tour By Royal Jet Cruise With Lunch (Excluding National Park Fee) | First Class -400 THB PP',
			sic_cost_pp: 1550,
			child_cost: 1200,
			tkt_net_cost: 1450,
			transfer_rates_car: 1400,
			transfer_rates_van: 1500
		},
		{
			id: 9,
			name: 'Phi Phi Island Tour By Royal Jet Cruise With Lunch (Excluding National Park Fee) | Premium Class -400 THB PP',
			sic_cost_pp: 2450,
			child_cost: 1850,
			tkt_net_cost: 2350,
			transfer_rates_car: 1400,
			transfer_rates_van: 1500
		},
		{
			id: 10,
			name: 'Phi Phi Island Tour By Speed Boat + Khai Island With Lunch (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1000,
			child_cost: 900,
			tkt_net_cost: 900,
			transfer_rates_car: 1400,
			transfer_rates_van: 1500
		},
		{
			id: 11,
			name: 'Phi Phi Island Tour By Speed Boat + Bamboo Island With Lunch (Excluding National Park Fee) -400 THB PP',
			sic_cost_pp: 1550,
			child_cost: 1350,
			tkt_net_cost: 1450,
			transfer_rates_car: 1400,
			transfer_rates_van: 1500
		},
		{
			id: 12,
			name: 'James Bond Island Tour By Longtail Boat With Lunch (Excluding National Park Fee) | No Canoe -400 THB PP',
			sic_cost_pp: 800,
			child_cost: 700,
			tkt_net_cost: 700,
			transfer_rates_car: 2600,
			transfer_rates_van: 2600
		},
		{
			id: 13,
			name: 'James Bond Island Tour By Longtail Boat With Lunch (Excluding National Park Fee) | Sea Canoe -400 THB PP',
			sic_cost_pp: 950,
			child_cost: 850,
			tkt_net_cost: 850,
			transfer_rates_car: 2600,
			transfer_rates_van: 2600
		},
		{
			id: 14,
			name: 'James Bond Island Tour By Big Boat With Lunch (Excluding National Park Fee) | Sea Canoe -400 THB PP',
			sic_cost_pp: 1200,
			child_cost: 1000,
			tkt_net_cost: 1100,
			transfer_rates_car: 1500,
			transfer_rates_van: 1700
		},
		{
			id: 15,
			name: 'James Bond Island Tour By Speed Boat With Lunch (Excluding National Park Fee) | Sea Canoe -400 THB PP',
			sic_cost_pp: 1400,
			child_cost: 1300,
			tkt_net_cost: 1300,
			transfer_rates_car: 1500,
			transfer_rates_van: 1700
		},
		{
			id: 16,
			name: 'Krabi 4 Island Tour By (Big Boat Or Speed Boat) With Lunch (Excluding National Park Fee) -400 THB PP| PHUKET',
			sic_cost_pp: 1500,
			child_cost: 1400,
			tkt_net_cost: 1400,
			transfer_rates_car: 2500,
			transfer_rates_van: 2600
		},
		{
			id: 17,
			name: 'World A+( Zipline 32 Platform + Roller+Skywalk) + Meal',
			sic_cost_pp: 2850,
			child_cost: 2850,
			tkt_net_cost: 0,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 18,
			name: 'World B+(Zipline 18 Platform + Roller+Skywalk) + Meal',
			sic_cost_pp: 2500,
			child_cost: 2500,
			tkt_net_cost: 0,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 19,
			name: 'World C+(Zipeline 10 Platform + Roller+Skywalk) + Meal',
			sic_cost_pp: 2100,
			child_cost: 2100,
			tkt_net_cost: 0,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 20,
			name: 'Zipline 10 platforms',
			sic_cost_pp: 1350,
			child_cost: 1350,
			tkt_net_cost: 0,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 21,
			name: 'Zipline 18 platforms',
			sic_cost_pp: 1900,
			child_cost: 1900,
			tkt_net_cost: 0,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 22,
			name: 'Zipline 32 platforms',
			sic_cost_pp: 2400,
			child_cost: 2400,
			tkt_net_cost: 0,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 23,
			name: 'Phuket ATV 30 Minutes | Rider',
			sic_cost_pp: 0,
			child_cost: 700,
			tkt_net_cost: 700,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 24,
			name: 'Phuket ATV 30 Minutes | Passenger',
			sic_cost_pp: 0,
			child_cost: 500,
			tkt_net_cost: 500,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 25,
			name: 'Phuket ATV 1 Hours | Rider',
			sic_cost_pp: 0,
			child_cost: 1000,
			tkt_net_cost: 1000,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 26,
			name: 'Phuket ATV 1 Hours | Passenger',
			sic_cost_pp: 0,
			child_cost: 700,
			tkt_net_cost: 700,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 27,
			name: 'Phuket ATV 1.30 Hours | Rider',
			sic_cost_pp: 0,
			child_cost: 1200,
			tkt_net_cost: 1200,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 28,
			name: 'Phuket ATV 1.30 Hours | Passenger',
			sic_cost_pp: 0,
			child_cost: 900,
			tkt_net_cost: 900,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 29,
			name: 'Phuket ATV 2 Hours | Rider',
			sic_cost_pp: 0,
			child_cost: 1500,
			tkt_net_cost: 1500,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 30,
			name: 'Phuket ATV 2 Hours | Passenger',
			sic_cost_pp: 0,
			child_cost: 1300,
			tkt_net_cost: 1300,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 31,
			name: 'ZB. Zipline 32 Platfrom.',
			sic_cost_pp: 0,
			child_cost: 1700,
			tkt_net_cost: 1700,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 32,
			name: 'ZC. Zipline 18 Platfroms',
			sic_cost_pp: 0,
			child_cost: 1200,
			tkt_net_cost: 1200,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 33,
			name: 'ZD. Zipline 10 Platfroms.',
			sic_cost_pp: 0,
			child_cost: 800,
			tkt_net_cost: 800,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 34,
			name: 'AZ1 (Zipline 18 Patfroms + ATV 1Hr. ) | Rider',
			sic_cost_pp: 0,
			child_cost: 2000,
			tkt_net_cost: 2000,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 35,
			name: 'AZ1 (Zipline 18 Patfroms + ATV 1Hr. ) | Passenger',
			sic_cost_pp: 0,
			child_cost: 1800,
			tkt_net_cost: 1800,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 36,
			name: 'AZ2 ( Zipline 10 Patfroms + ATV 30 Mins. ) | Rider',
			sic_cost_pp: 0,
			child_cost: 1300,
			tkt_net_cost: 1300,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 37,
			name: 'AZ2 ( Zipline 10 Patfroms + ATV 30 Mins. ) | Passenger',
			sic_cost_pp: 0,
			child_cost: 1100,
			tkt_net_cost: 1100,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 38,
			name: 'Dolphin Show Regular Seats',
			sic_cost_pp: 0,
			child_cost: 575,
			tkt_net_cost: 425,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 39,
			name: 'Dolphin Show Deluxe Seats',
			sic_cost_pp: 0,
			child_cost: 750,
			tkt_net_cost: 500,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 40,
			name: 'Dolphin Show Vip Seats',
			sic_cost_pp: 0,
			child_cost: 800,
			tkt_net_cost: 550,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 41,
			name: 'Dolphin Show VVip Seats',
			sic_cost_pp: 0,
			child_cost: 950,
			tkt_net_cost: 650,
			transfer_rates_car: 1300,
			transfer_rates_van: 1500
		},
		{
			id: 42,
			name: 'Tiger Kingdom With Smallest Tiger',
			sic_cost_pp: 0,
			child_cost: 850,
			tkt_net_cost: 850,
			transfer_rates_car: 900,
			transfer_rates_van: 1100
		},
		{
			id: 43,
			name: 'Tiger Kingdom With Small Tiger',
			sic_cost_pp: 0,
			child_cost: 750,
			tkt_net_cost: 750,
			transfer_rates_car: 900,
			transfer_rates_van: 1100
		},
		{
			id: 44,
			name: 'Tiger Kingdom With Medium Tiger',
			sic_cost_pp: 0,
			child_cost: 750,
			tkt_net_cost: 750,
			transfer_rates_car: 900,
			transfer_rates_van: 1100
		},
		{
			id: 45,
			name: 'Tiger Kingdom With Big Tiger',
			sic_cost_pp: 0,
			child_cost: 850,
			tkt_net_cost: 850,
			transfer_rates_car: 900,
			transfer_rates_van: 1100
		},
		{
			id: 46,
			name: 'Tiger Kingdom With Giant Tiger',
			sic_cost_pp: 0,
			child_cost: 1050,
			tkt_net_cost: 1050,
			transfer_rates_car: 900,
			transfer_rates_van: 1100
		},
		{
			id: 47,
			name: 'Tiger Kingdom With Newborn Tiger',
			sic_cost_pp: 0,
			child_cost: 1050,
			tkt_net_cost: 1050,
			transfer_rates_car: 900,
			transfer_rates_van: 1100
		},
		{
			id: 48,
			name: 'Tiger Kingdom With Twin Cheetah',
			sic_cost_pp: 0,
			child_cost: 1250,
			tkt_net_cost: 1250,
			transfer_rates_car: 900,
			transfer_rates_van: 1100
		},
		{
			id: 49,
			name: 'Tiger Kingdom With Cheetah',
			sic_cost_pp: 0,
			child_cost: 1050,
			tkt_net_cost: 1050,
			transfer_rates_car: 900,
			transfer_rates_van: 1100
		},
		{
			id: 50,
			name: 'Tiger Park With New Born Tiger',
			sic_cost_pp: 0,
			child_cost: 1050,
			tkt_net_cost: 1050,
			transfer_rates_car: 1800,
			transfer_rates_van: 2100
		},
		{
			id: 51,
			name: 'Tiger Park With Smallest Tiger',
			sic_cost_pp: 0,
			child_cost: 850,
			tkt_net_cost: 850,
			transfer_rates_car: 1800,
			transfer_rates_van: 2100
		},
		{
			id: 52,
			name: 'Tiger Park With Small Tiger',
			sic_cost_pp: 0,
			child_cost: 750,
			tkt_net_cost: 750,
			transfer_rates_car: 1800,
			transfer_rates_van: 2100
		},
		{
			id: 53,
			name: 'Tiger Park With Medium Tiger',
			sic_cost_pp: 0,
			child_cost: 750,
			tkt_net_cost: 750,
			transfer_rates_car: 1800,
			transfer_rates_van: 2100
		},
		{
			id: 54,
			name: 'Tiger Park With Big Tiger',
			sic_cost_pp: 0,
			child_cost: 850,
			tkt_net_cost: 850,
			transfer_rates_car: 1800,
			transfer_rates_van: 2100
		},
		{
			id: 55,
			name: 'Tiger Park Plan 2 (Big Tiger Or Small Tiger) + (Medium Tiger Or Smallest Tiger)',
			sic_cost_pp: 0,
			child_cost: 1400,
			tkt_net_cost: 2000,
			transfer_rates_car: 1800,
			transfer_rates_van: 2100
		},
		{
			id: 56,
			name: 'Tiger Park Plan 3 Big Tiger + Small Tiger + (Medium Tiger Or Smallest Tiger)',
			sic_cost_pp: 0,
			child_cost: 2000,
			tkt_net_cost: 2000,
			transfer_rates_car: 1800,
			transfer_rates_van: 2100
		},
		{
			id: 57,
			name: 'Tiger Park Plan 4 Big Tiger + Small Tiger + Medium Tiger +  Smallest Tiger',
			sic_cost_pp: 0,
			child_cost: 2500,
			tkt_net_cost: 2500,
			transfer_rates_car: 1800,
			transfer_rates_van: 2100
		},
		{
			id: 58,
			name: 'Program A : River Rafting 5 Km with Briefing and Rafting Trainning + Flying Fox 150 M.(Monkey Cave + Lunch + Jungle Walk to Waterfall)',
			sic_cost_pp: 900,
			child_cost: 800,
			tkt_net_cost: 800,
			transfer_rates_car: 2900,
			transfer_rates_van: 3100
		},
		{
			id: 59,
			name: 'Program B : River Rafting 5 Km with Briefing and Rafting Trainning + Flying Fox 150 M. + Monkey Cave + Lunch + Jungle Walk to Waterfall + Rainforest Elephant Treakking 30 Mins',
			sic_cost_pp: 900,
			child_cost: 700,
			tkt_net_cost: 800,
			transfer_rates_car: 2900,
			transfer_rates_van: 3100
		},
		{
			id: 60,
			name: 'Program C : River Rafting 5 Km with Briefing and Rafting Trainning + Flying Fox 150 M. + Monkey Cave + Lunch + Jungle Walk to Waterfall + ATV 30 Mins',
			sic_cost_pp: 11000,
			child_cost: 1000,
			tkt_net_cost: 1000,
			transfer_rates_car: 2900,
			transfer_rates_van: 3100
		},
		{
			id: 61,
			name: 'Program D : River Rafting 5 Km with Briefing and Rafting Trainning + Flying Fox 150 M. + Lunch + Jungle Walk to Waterfall + ATV 30 Mins + Monkey Cave + RainForest Elephant treakking',
			sic_cost_pp: 1200,
			child_cost: 1100,
			tkt_net_cost: 1100,
			transfer_rates_car: 2900,
			transfer_rates_van: 3100
		},
		{
			id: 62,
			name: 'Program A : Bamboo Rafting + Visit Sea Turtle convervation + Elephant Bathing 15 Mins + Monkey Cave + Lunch + Jungle Walk to Waterfall',
			sic_cost_pp: 1400,
			child_cost: 1300,
			tkt_net_cost: 1300,
			transfer_rates_car: 2900,
			transfer_rates_van: 3100
		},
		{
			id: 63,
			name: 'Program B : Bamboo Rafting + Visit Sea Turtle convervation + Elephant Bathing 15 Mins + Monkey Cave + Elephant Treakking 30 Mins + ATV 15 Mins',
			sic_cost_pp: 1600,
			child_cost: 1500,
			tkt_net_cost: 1500,
			transfer_rates_car: 2900,
			transfer_rates_van: 3100
		},
		{
			id: 64,
			name: 'Program C :Bamboo Rafting + Visit Sea Turtle convervation + Elephant Trakking 30 Mins + Visit Sametnangshe + Monkey Cave + Lunch + ATV 15 Mins ',
			sic_cost_pp: 1800,
			child_cost: 1700,
			tkt_net_cost: 1700,
			transfer_rates_car: 2900,
			transfer_rates_van: 3100
		},
		{
			id: 65,
			name: 'Siam Niramit Phuket -Show Only (Silver Seat)',
			sic_cost_pp: 1350,
			child_cost: 900,
			tkt_net_cost: 1000,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 66,
			name: 'Siam Niramit Phuket -Show Only (Gold Seat)',
			sic_cost_pp: 1450,
			child_cost: 1000,
			tkt_net_cost: 1100,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 67,
			name: 'Siam Niramit Phuket -Show Only (Platinum Seat)',
			sic_cost_pp: 1550,
			child_cost: 1100,
			tkt_net_cost: 1200,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 68,
			name: 'Siam Niramit Phuket -Show With Dinner (Silver Seat)',
			sic_cost_pp: 1550,
			child_cost: 1050,
			tkt_net_cost: 1200,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 69,
			name: 'Siam Niramit Phuket -Show With Dinner (Gold Seat)',
			sic_cost_pp: 1650,
			child_cost: 1150,
			tkt_net_cost: 1300,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 70,
			name: 'Siam Niramit Phuket -Show With Dinner (Platinum Seat)',
			sic_cost_pp: 1750,
			child_cost: 1250,
			tkt_net_cost: 1400,
			transfer_rates_car: 1200,
			transfer_rates_van: 1400
		},
		{
			id: 71,
			name: 'Simon Cabaret Show (Regular Seats)',
			sic_cost_pp: 700,
			child_cost: 600,
			tkt_net_cost: 600,
			transfer_rates_car: 800,
			transfer_rates_van: 1000
		},
		{
			id: 72,
			name: 'Simon Cabaret Show (Vip Seats)',
			sic_cost_pp: 850,
			child_cost: 750,
			tkt_net_cost: 750,
			transfer_rates_car: 800,
			transfer_rates_van: 1000
		},
		{
			id: 73,
			name: 'Phuket Fantasea -Show Only',
			sic_cost_pp: 1400,
			child_cost: 1400,
			tkt_net_cost: 1300,
			transfer_rates_car: 1200,
			transfer_rates_van: 1300
		},
		{
			id: 74,
			name: 'Phuket Fantasea -Show + Transfers',
			sic_cost_pp: 1750,
			child_cost: 1750,
			tkt_net_cost: 1650,
			transfer_rates_car: 1200,
			transfer_rates_van: 1300
		},
		{
			id: 75,
			name: 'Phuket Fantasea -Show + Dinner',
			sic_cost_pp: 1600,
			child_cost: 1450,
			tkt_net_cost: 1500,
			transfer_rates_car: 1200,
			transfer_rates_van: 1300
		},
		{
			id: 76,
			name: 'Phuket Fantasea -Show + Gold Seat',
			sic_cost_pp: 1650,
			child_cost: 1650,
			tkt_net_cost: 1550,
			transfer_rates_car: 1200,
			transfer_rates_van: 1300
		},
		{
			id: 77,
			name: 'Phuket Fantasea -Show + Dinner + Transfers',
			sic_cost_pp: 1950,
			child_cost: 1800,
			tkt_net_cost: 1850,
			transfer_rates_car: 1200,
			transfer_rates_van: 1300
		},
		{
			id: 78,
			name: 'Phuket Fantasea -Show + Dinner + Gold Seat',
			sic_cost_pp: 1850,
			child_cost: 1700,
			tkt_net_cost: 1750,
			transfer_rates_car: 1200,
			transfer_rates_van: 1300
		},
		{
			id: 79,
			name: 'Phuket Fantasea -Show + Dinner + Gold Seat + Transfers',
			sic_cost_pp: 2200,
			child_cost: 2050,
			tkt_net_cost: 2100,
			transfer_rates_car: 1200,
			transfer_rates_van: 1300
		},
		{
			id: 80,
			name: 'Phuket Fantasea -Show + Gold Seat + Transfers',
			sic_cost_pp: 2050,
			child_cost: 2050,
			tkt_net_cost: 1950,
			transfer_rates_car: 1200,
			transfer_rates_van: 1300
		},
		{
			id: 81,
			name: 'Elephant sanctuary tour feed me program with transfer',
			sic_cost_pp: 700,
			child_cost: 400,
			tkt_net_cost: 0,
			transfer_rates_car: 0,
			transfer_rates_van: 0
		},
		{
			id: 82,
			name: 'Elephant sanctuary tour feed & shower',
			sic_cost_pp: 1650,
			child_cost: 1400,
			tkt_net_cost: 0,
			transfer_rates_car: 0,
			transfer_rates_van: 0
		},
		{
			id: 83,
			name: 'half day Elephant sanctuary tour',
			sic_cost_pp: 2100,
			child_cost: 1650,
			tkt_net_cost: 0,
			transfer_rates_car: 0,
			transfer_rates_van: 0
		},
		{
			id: 84,
			name: 'Walk With Elephant',
			sic_cost_pp: 3900,
			child_cost: 2800,
			tkt_net_cost: 0,
			transfer_rates_car: 0,
			transfer_rates_van: 0
		},
	])
}
