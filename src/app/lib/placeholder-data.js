// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

// this data no longer matches the schema, and I'm also puzzled how I create
// fake users when I'm using Google OAuth
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'ckot',
    email: 'scott.t.silliman@gmail.com',
    password: '@bc123',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'aarondungeonmaster',
    email: 'user2@nextmail.com',
    password: '@bc123',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'clawDia',
    email: 'user3@nextmail.com',
    password: '@bc123',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'User4',
    email: 'user4@nextmail.com',
    password: '@bc123',
  }
];

const games = [
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: "Dungeons and Dragons (5th Edition)"
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: "Call of Cthulu (7th Edition)"
  },
];

const campaigns = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    game_id:  games[0].id,
    owner_id: users[0].id,
    is_public: true,
    looking_for_players: true,
    name: "Curse of Strahd",
    logo_url: null,
    date_scheduled: null
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    game_id: games[1].id,
    owner_id: users[1].id,
    is_public: false,
    looking_for_players: false,
    name: "The Dead Light",
    logo_url: null,
    date_scheduled: null
  }
];

const userCampaignInfo = [
  {
    campaign_id: campaigns[0].id,
    user_id: users[0].id,
    is_gm: true,
    is_player: true,
    date_last_played: null
  },
  {
    campaign_id: campaigns[0].id,
    user_id: users[1].id,
    is_gm: true,
    is_player: true,
    date_last_played: null
  },
  {
    campaign_id: campaigns[0].id,
    user_id: users[2].id,
    is_gm: false,
    is_player: true,
    date_last_played: null
  },
  {
    campaign_id: campaigns[0].id,
    user_id: users[3].id,
    is_gm: false,
    is_player: true,
    date_last_played: null
  },
  {
    campaign_id: campaigns[1].id,
    user_id: users[0].id,
    is_gm: false,
    is_player: true,
    date_last_played: null
  },
  {
    campaign_id: campaigns[1].id,
    user_id: users[1].id,
    is_gm: true,
    is_player: true,
    date_last_played: null
  },
  {
    campaign_id: campaigns[1].id,
    user_id: users[2].id,
    is_gm: true,
    is_player: true,
    date_last_played: null
  },
  {
    campaign_id: campaigns[1].id,
    user_id: users[3].id,
    is_gm: false,
    is_player: true,
    date_last_played: null
  },
];


// const customers = [
//   {
//     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//     name: 'Evil Rabbit',
//     email: 'evil@rabbit.com',
//     image_url: '/customers/evil-rabbit.png',
//   },
//   {
//     id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
//     name: 'Emil Kowalski',
//     email: 'emil@kowalski.com',
//     image_url: '/customers/emil-kowalski.png',
//   },
//   {
//     id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
//     name: 'Amy Burns',
//     email: 'amy@burns.com',
//     image_url: '/customers/amy-burns.png',
//   },
//   {
//     id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
//     name: 'Balazs Orban',
//     email: 'balazs@orban.com',
//     image_url: '/customers/balazs-orban.png',
//   },
// ];

// const invoices = [
//   {
//     customer_id: customers[0].id,
//     amount: 15795,
//     status: 'pending',
//     date: '2022-12-06',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 20348,
//     status: 'pending',
//     date: '2022-11-14',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 3040,
//     status: 'paid',
//     date: '2022-10-29',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 44800,
//     status: 'paid',
//     date: '2023-09-10',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 34577,
//     status: 'pending',
//     date: '2023-08-05',
//   },
//   {
//     customer_id: customers[7].id,
//     amount: 54246,
//     status: 'pending',
//     date: '2023-07-16',
//   },
//   {
//     customer_id: customers[6].id,
//     amount: 666,
//     status: 'pending',
//     date: '2023-06-27',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 32545,
//     status: 'paid',
//     date: '2023-06-09',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 1250,
//     status: 'paid',
//     date: '2023-06-17',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8546,
//     status: 'paid',
//     date: '2023-06-07',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 500,
//     status: 'paid',
//     date: '2023-08-19',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-03',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-18',
//   },
//   {
//     customer_id: customers[0].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-10-04',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 1000,
//     status: 'paid',
//     date: '2022-06-05',
//   },
// ];

// const revenue = [
//   { month: 'Jan', revenue: 2000 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2300 },
//   { month: 'Jun', revenue: 3200 },
//   { month: 'Jul', revenue: 3500 },
//   { month: 'Aug', revenue: 3700 },
//   { month: 'Sep', revenue: 2500 },
//   { month: 'Oct', revenue: 2800 },
//   { month: 'Nov', revenue: 3000 },
//   { month: 'Dec', revenue: 4800 },
// ];

module.exports = {
  users,
  games,
  campaigns,
  userCampaignInfo,
};
