/**
 * Seed script — insert Claudia's client records into the `clients` table.
 * Run with: npx ts-node supabase/seed_clients.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

const clients = [
  {"name":"Adela Leyva","address":"4813 Bedee Ave","city":"","phone":"(347)-432-2378","email":"","birthday":"","skin_concern":"","allergies":"","notes":"Speaks Spanish, lives in Dominican Republic","tags":["Spanish Speaking"]},
  {"name":"Adriana Adero","address":"2315 Delaley Ave #3007","city":"Pasadena, CA, 91105","phone":"(310)-848-7726","email":"AAdorro@icloud.com","birthday":"12/17","skin_concern":"","allergies":"","notes":"Brazilian","tags":["Brazilian"]},
  {"name":"Adriana Boado","address":"29211 Trail Way Wn","city":"Agoura Hills, CA, 91301","phone":"(818)-294-0307","email":"adrianaboado@gmail.com","birthday":"02/28","skin_concern":"Whiteheads","allergies":"Pollen, honey","notes":"Likes thick eyebrows, loves serum from clay from Argentina","tags":["Allergy"]},
  {"name":"Adriana Cusato","address":"18504 Mayall St. Unit F","city":"Northridge, CA, 91324","phone":"(818)-885-1863","email":"mimicusato@gmail.com","birthday":"05/03/52","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Adriana Medeiros","address":"5818 Le Sage Avenue","city":"Woodland Hills, CA, 91367","phone":"(408)-466-9322","email":"adrimedeiros3@icloud.com","birthday":"08/09/72","skin_concern":"","allergies":"","notes":"From Brazilian Café Com Abraco Group","tags":["Brazilian"]},
  {"name":"Adriane Bradley","address":"2956 Wauneta St.","city":"Newbury Park, CA, 91320","phone":"(818)-324-2869","email":"abradleyzefarmlws@qent.com","birthday":"5/6/66","skin_concern":"","allergies":"","notes":"Brazilian","tags":["Brazilian"]},
  {"name":"Ace Perez","address":"16741 Parthenia St.","city":"Northridge, CA, 91343","phone":"(818)-626-4777","email":"461acesweet0567@gmail.com","birthday":"05/01","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Aera Eubanks","address":"1000 W 8th St. #705","city":"Los Angeles, CA, 90017","phone":"(901)-674-4624","email":"aeragrace98@gmail.com","birthday":"3/23/98","skin_concern":"Uneven skin tone","allergies":"","notes":"","tags":[]},
  {"name":"Aidan Altman","address":"4625 Alonzo Ave","city":"Encino, CA, 91316","phone":"(310)-650-3424","email":"ataltmano7@gmail.com","birthday":"9/12/07","skin_concern":"","allergies":"","notes":"16 yr old, goes to Louisville","tags":["Teen"]},
  {"name":"Ailyn Ruolrlfein","address":"23301 Lollins Street","city":"Woodland Hills, CA, 91367","phone":"(818)-445-7013","email":"ailinofcubinsttin@gmail.com","birthday":"07/14/2014","skin_concern":"Acne","allergies":"","notes":"","tags":["Teen","Acne"]},
  {"name":"Alessandra Martins","address":"2222 Huntington Drive Ap. 25","city":"Duarte, CA, 91010","phone":"(407)-427-3015","email":"alefracassi8@gmail.com","birthday":"03/08/82","skin_concern":"","allergies":"","notes":"Mulheres de sucesso, Brazilian, sells esfiha","tags":["Brazilian"]},
  {"name":"Alessandra Raschkovsky","address":"10627 Ashton Ave #101","city":"Los Angeles, CA, 90024","phone":"(310)-739-8705","email":"alessandra@gendental.com","birthday":"1/13/1971","skin_concern":"","allergies":"Gluten, celiac disease","notes":"Brazilian","tags":["Brazilian","Allergy"]},
  {"name":"Becky Tahe","address":"18730 Collins St.","city":"Tarzana, CA, 91356","phone":"(610)-960-4944","email":"btbordo@gmail.com","birthday":"6/21/86","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Beverly Bishop","address":"4717 Poe Ave","city":"Woodland Hills, CA, 91364","phone":"(818)-512-7365","email":"bishopwh@aol.com","birthday":"4/4","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Bill Roe","address":"20653 De La Guerra St.","city":"Woodland Hills, CA, 91364","phone":"(818)-378-2333","email":"cloudybrightl@mae.com","birthday":"1/12/55","skin_concern":"Rosacea","allergies":"","notes":"Had quadruple bypass surgery 2023","tags":["Medical Flag","Rosacea"]},
  {"name":"Blake Doyle","address":"22641 Califa St.","city":"Woodland Hills, CA, 91367","phone":"(818)-456-9975","email":"","birthday":"3/13/96","skin_concern":"Acne after Accutane","allergies":"","notes":"CSUN Film/Photography","tags":["Acne"]},
  {"name":"Bobbie Boyer","address":"5117 Bascule Ave","city":"Woodland Hills, CA, 91364","phone":"(818)-517-7347","email":"","birthday":"May 29","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Brandy Hernandez","address":"7417 Rutherford Hill Drive","city":"West Hills, CA, 91307","phone":"(818)-126-1806","email":"bbranny99@gmail.com","birthday":"8/21/92","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Brittany Paden","address":"22036 Collins St. #122","city":"Woodland Hills, CA, 91367","phone":"(317)-362-3995","email":"birttanypaden@gmail.com","birthday":"2/14/1989","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Damaris Jacinto","address":"22734 Burbank Blvd","city":"Woodland Hills, CA, 91367","phone":"(818)-746-6643","email":"DamarisIJ@gmail.com","birthday":"4-18-92","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Dan Delbango","address":"7269 East Haven Lane","city":"West Hills, CA, 91307","phone":"(818)-421-8226","email":"","birthday":"","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Daniel Kelly","address":"4170 Admiralty Way #337","city":"Marina Del Rey, CA, 90252","phone":"(310)-936-6860","email":"danibaroa@gmail.com","birthday":"11/05/06","skin_concern":"","allergies":"","notes":"Also goes by Dani Kelly","tags":[]},
  {"name":"Daphne Goldberg","address":"3732 Via Del Prado","city":"Calabasas, CA, 91302","phone":"(818)-618-7003","email":"duckgoldberg@gmail.com","birthday":"","skin_concern":"","allergies":"Retinol — bad reaction, broke out","notes":"Had bad experience with facials in the past","tags":["Allergy","Sensitive"]},
  {"name":"Darra Hall","address":"4201 Topanga Cyn","city":"Woodland Hills, CA, 91364","phone":"(818)-324-1384","email":"","birthday":"6-29-66","skin_concern":"","allergies":"Latex, Pumpkin","notes":"Hairdresser since 17, works from home","tags":["Allergy"]},
  {"name":"Debbie Enenstein","address":"4415 Cezanne Ave","city":"Woodland Hills, CA, 91364","phone":"(818)-219-6606","email":"denenstein@roadrunner.com","birthday":"4/28","skin_concern":"Sensitive, lots of wrinkles","allergies":"","notes":"Harry's wife, sensitive skin","tags":["Sensitive"]},
  {"name":"Deborah Russell","address":"637 Lynwood St.","city":"Thousand Oaks, CA, 91360","phone":"(424)-208-9394","email":"deborahrussellrep@yahoo.com","birthday":"09/18","skin_concern":"Maintenance","allergies":"","notes":"","tags":[]},
  {"name":"Denise Alvevato","address":"10269 Mcbroom St.","city":"Sunland, CA, 91040","phone":"(818)-517-8851","email":"deallevato@gmail.com","birthday":"10/10","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Devora Vonsteinberg","address":"141 Pasadena Ave","city":"Oxnard, CA, 93035","phone":"(805)-660-1013","email":"devorad557@aol.com","birthday":"8-1-57","skin_concern":"Wants firmer skin","allergies":"","notes":"Retired nurse","tags":["Medical Flag"]},
  {"name":"Falisha Grier","address":"11974 SW 72nd Ave #413","city":"","phone":"(503)-928-0046","email":"ausecchet@yahoo.com","birthday":"7/14/73","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Faye Calimag","address":"4460 Vanalden Ave","city":"Tarzana, CA, 91356","phone":"(310)-819-6008","email":"fcalimag116854@gmail.com","birthday":"3/11/76","skin_concern":"Sensitive — careful with peels (level 1 or 2 only)","allergies":"","notes":"Hyperthyroidism, thyroid problem","tags":["Medical Flag","Sensitive"]},
  {"name":"Felipe Mota","address":"9521 Gladbeck Ave","city":"Los Angeles, CA, 91324","phone":"(424)-382-6875","email":"","birthday":"04/10/2006","skin_concern":"","allergies":"","notes":"From Brazil, here 5 years, 18 yrs old","tags":["Brazilian","Teen"]},
  {"name":"Francie Kaplan","address":"22457 De Kalb","city":"Calabasas, CA, 91302","phone":"(310)-283-5398","email":"franciekaplan@gmail.com","birthday":"October 1st","skin_concern":"","allergies":"","notes":"Has pacemaker, eczema","tags":["Medical Flag"]},
  {"name":"Hannah Porturo","address":"21844 Ybarra Rd.","city":"Woodland Hills, CA, 91364","phone":"(818)-795-0472","email":"hponturo@gmail.com","birthday":"1/30","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Harry Enenstein","address":"4415 Cezanne Ave","city":"Woodland Hills, CA, 91364","phone":"(818)-219-6600","email":"henenstein@icloud.com","birthday":"4-1-43","skin_concern":"Oily, redness","allergies":"","notes":"Retired ophthalmologist, rides bikes, 2 sons","tags":[]},
  {"name":"Heather Miller","address":"22200 Tioga Place","city":"West Hills, CA, 91304","phone":"(818)-314-0046","email":"hbb36@earthlink.net","birthday":"7/19","skin_concern":"","allergies":"","notes":"Mother (Jill Bryant) also comes to spa","tags":[]},
  {"name":"Helen Fouras","address":"23237 Dolorosa St.","city":"Woodland Hills, CA, 91367","phone":"(818)-632-1271","email":"helenfouras@gmail.com","birthday":"","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Helen M. Pascual","address":"15024 Mayall St.","city":"Mission Hills, CA, 91345","phone":"(818)-389-8754","email":"","birthday":"02-15-57","skin_concern":"","allergies":"","notes":"Son (Gino), Husband (Samuel)","tags":[]},
  {"name":"Idalina (Lina) Ellner","address":"424 N. Alfred St.","city":"Los Angeles, CA, 90048","phone":"(310)-890-8545","email":"cruzlinacruz@gmail.com","birthday":"3-6-58","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Ilana Kaye","address":"200 E 89th St.","city":"New York, NY, 10128","phone":"(828)-292-6877","email":"","birthday":"9/28","skin_concern":"Dry, enlarged pores, redness, very sensitive","allergies":"No Vitamin C, reaction to cmvc k","notes":"","tags":["Allergy","Sensitive"]},
  {"name":"Ilhane Theodory","address":"6532 Manzanita Dr.","city":"Palmdale, CA, 93551","phone":"(661)-317-5089","email":"ilhampreferred@hotmail.com","birthday":"6/1/58","skin_concern":"Lines","allergies":"Using Retin-A (ask before treatment)","notes":"Susi is her daughter","tags":["Allergy"]},
  {"name":"Isabel Biboso","address":"3101 Green St.","city":"Harrisburg, PA, 17110","phone":"(626)-476-4382","email":"lillikoibleu@gmail.com","birthday":"10/08","skin_concern":"","allergies":"Retinol","notes":"Mia Biboso sister-in-law, takes care of mom","tags":["Allergy"]},
  {"name":"Iuania O. Rodriguez","address":"20020 Superior St.","city":"Chatsworth, CA, 91311","phone":"(818)-993-6521","email":"","birthday":"","skin_concern":"","allergies":"","notes":"","tags":[]},
  {"name":"Ivette Esparza","address":"8519 Corbin Ave","city":"Winnetka, CA, 91306","phone":"(818)-960-9794","email":"Ivettee_027@yahoo.com","birthday":"09-02-1991","skin_concern":"","allergies":"","notes":"","tags":[]},
];

async function main() {
  console.log(`Seeding ${clients.length} clients…`);
  const { data, error } = await supabaseAdmin
    .from('clients')
    .upsert(clients, { onConflict: 'name' })
    .select();

  if (error) {
    console.error('Error seeding clients:', error.message);
    process.exit(1);
  }
  console.log(`✅ Inserted/updated ${data?.length ?? 0} clients.`);
}

main();
