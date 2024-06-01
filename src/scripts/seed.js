// I disabled this, add this to pkg.json, but as you can see it relies on
// vercel/postgres, and I'm using prism now
// "seed": "node -r dotenv/config ./scripts/seed.js"
const { db } = require('@vercel/postgres');
const {
  users,
  games,
  campaigns,
  userCampaignInfo,
  // invoices,
  // customers,
  // revenue,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');
const { create } = require('domain');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedGames(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // create games table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS games (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(128) NOT NULL
      );
    `;
    console.log('created game_types table');

    // insert placeholder data
    const insertedGames = await Promise.all(
      games.map(
        (game) => client.sql`
          INSERT INTO games (id, name)
          VALUES (${game.id}, ${game.name})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`seeded ${insertedGames.length} games`);

    return {
      createTable,
      games: insertedGames,
    };
  } catch (error) {
    console.error('Error seeding games', error);
    throw error;
  }
}

async function seedCampaigns(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // create games table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS campaigns (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        game_id UUID NOT NULL,
        owner_id UUID NOT NULL,
        is_public BOOLEAN DEFAULT false,
        looking_for_players BOOLEAN DEFAULT false,
        name VARCHAR(255) NOT NULL,
        logo_url TEXT,
        date_scheduled DATE
      );
    `;

    console.log('created campaigns table');

    const insertedCampaigns = await Promise.all(
      campaigns.map(
        (campaign) => client.sql`
        INSERT INTO campaigns (id, game_id, owner_id, is_public, looking_for_players, name, logo_url, date_scheduled)
        VALUES(${campaign.id}, ${campaign.game_id}, ${campaign.owner_id}, ${campaign.is_public}, ${campaign.looking_for_players}, ${campaign.name}, ${campaign.logo_url}, ${campaign.date_scheduled})
        `
      )
    );
    console.log(`seeded ${insertedCampaigns.length} campaigns`);

    return {
      createTable,
      campaigns: insertedCampaigns,
    };
  } catch (error) {
    console.error('Error seeding campaigns', error);
    throw error;
  }
}

async function seedUserCampaignInfo(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // create user_game_info table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS user_campaign_info (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        campaign_id UUID NOT NULL,
        user_id UUID NOT NULL,
        is_gm BOOLEAN DEFAULT false,
        is_player BOOLEAN DEFAULT true,
        date_last_played DATE
      );
    `;

    console.log('user_campaign_info table created');

    const insertedUserCampaignInfo = await Promise.all(
      userCampaignInfo.map(
        (campaignInfo) => client.sql`
          INSERT INTO user_campaign_info (campaign_id, user_id, is_gm, is_player, date_last_played)
          VALUES (${campaignInfo.campaign_id}, ${campaignInfo.user_id}, ${campaignInfo.is_gm}, ${campaignInfo.is_player}, ${campaignInfo.date_last_played})
        `
      )
    );

    console.log(
      `inserted ${insertedUserCampaignInfs.length} userCampaignInfo records`
    );
    return {
      createTable,
      userCampaignInfo: insertedUserCampaignInfo,
    };
  } catch (error) {
    console.error('Error seeding user campaign info', error);
    throw error;
  }
}

// async function seedCampaignAssetFolders(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS game_asset_folders (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         game_id UUID NOT NULL,
//         name VARCHAR(64) NOT NULL,
//         base_url TEXT NOT NULL
//       );
//     `;
//   } catch(error) {
//     console.error('Error seeding game asset folders', error);
//     throw error;
//   }
// }

// async function seedCampaignAssets(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS game assets (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         asset_folder_id UUID NOT NULL,
//         path TEXT NOT NULL
//       );
//     `;
//   } catch (error) {
//     console.error('Error seeding game assets', error)
//     throw error;
//   }
// }

// async function seedInvoices(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "invoices" table if it doesn't exist
//     const createTable = await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     customer_id UUID NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(255) NOT NULL,
//     date DATE NOT NULL
//   );
// `;

//     console.log(`Created "invoices" table`);

//     // Insert data into the "invoices" table
//     const insertedInvoices = await Promise.all(
//       invoices.map(
//         (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedInvoices.length} invoices`);

//     return {
//       createTable,
//       invoices: insertedInvoices,
//     };
//   } catch (error) {
//     console.error('Error seeding invoices:', error);
//     throw error;
//   }
// }

// async function seedCustomers(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "customers" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;

//     console.log(`Created "customers" table`);

//     // Insert data into the "customers" table
//     const insertedCustomers = await Promise.all(
//       customers.map(
//         (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedCustomers.length} customers`);

//     return {
//       createTable,
//       customers: insertedCustomers,
//     };
//   } catch (error) {
//     console.error('Error seeding customers:', error);
//     throw error;
//   }
// }

// async function seedRevenue(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;

//     console.log(`Created "revenue" table`);

//     // Insert data into the "revenue" table
//     const insertedRevenue = await Promise.all(
//       revenue.map(
//         (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedRevenue.length} revenue`);

//     return {
//       createTable,
//       revenue: insertedRevenue,
//     };
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedGames(client);
  // await seedCampaigns(client);
  // await seedUserCampaignInfo(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
