export type SpotifyTrack = {
	id: string;
	name: string;
	artist: string;
	albumImg: string;
	spotify_link: string;
};

export type Playlist = {
	id: string;
	name: string;
	tracks: SpotifyTrack[];
};

export interface SpotifyPlaylistResponse {
	id: string;
	name: string;
	tracks: {
		items: {
			track: {
				name: string;
				id: string;
				artists: { name: string }[];
				external_urls: { spotify: string };
				album: { images: { url: string }[] };
			};
		}[];
	};
}
