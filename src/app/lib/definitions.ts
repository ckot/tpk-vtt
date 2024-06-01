// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

// Yes, I need to define these in prisma/schema.prisma
export type User = {
  id: string;
  name: string;
  email: string;
};

export type Game = {
  id: string;
  name: string;
};

export type Campaign = {
  id: string;
  game_id: string;
  is_public: boolean;
  looking_for_players: boolean;
  name: string;
  logo_url: string;
  date_scheduled: string;
};

export type UserCampaignInfo = {
  id: string;
  campaign_id: string;
  user_id: string;
  is_owner: boolean;
  is_gm: boolean;
  is_player: boolean;
  date_last_played: string;
};

// export type CampaignAssetFolders = {
//   id: string;
//   campaign_id: string;
//   name: string;
//   base_url: string;
// };

// export type CampaignAsset = {
//   id: string;
//   asset_folder_id: string;
//   path: string;
// };


