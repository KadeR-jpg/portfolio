export interface SpotifyImage {
    url: string;
}

export interface SpotifyTrack {
    id: string;
    name: string;
    artist: string;
    album: {
        name: string;
        images: SpotifyImage[];
    };
    albumImg: string;
    spotify_link: string;
}

export interface Playlist {
    id: string;
    name: string;
    tracks: SpotifyTrack[];
}