import React from 'react';
import { mount } from '@cypress/react';
import DataItem from '../../src/components/data-item';

it('renders Info Bar', () => {
    const item = {
        result: {
            annotation_count: 12,
            api_path: "/songs/103042",
            full_title: "Terrapin Station by The Grateful Dead",
            header_image_thumbnail_url: "https://images.genius.com/a08743ecf3ec954224f903749b5e2d04.300x300x1.jpg",
            header_image_url: "https://images.genius.com/a08743ecf3ec954224f903749b5e2d04.500x500x1.jpg",
            id: 103042,
            lyrics_owner_id: 167182,
            lyrics_state: "complete",
            path: "/The-grateful-dead-terrapin-station-lyrics",
            pyongs_count: null,
            song_art_image_thumbnail_url: "https://images.genius.com/a08743ecf3ec954224f903749b5e2d04.300x300x1.jpg",
            song_art_image_url: "https://images.genius.com/a08743ecf3ec954224f903749b5e2d04.500x500x1.jpg",
            stats: {
                unreviewed_annotations: 3,
                hot: false,
                pageviews: 122914
            },
            title: "Terrapin Station",
            title_with_featured: "Terrapin Station",
            url: "https://genius.com/The-grateful-dead-terrapin-station-lyrics",
            song_art_primary_color: "#c02010",
            song_art_secondary_color: "#b50c05",
            song_art_text_color: "#fff",
            primary_artist: {
                api_path: "/artists/21900",
                header_image_url: "https://images.genius.com/2426c533e04a03d504f7799a83648c76.1000x525x1.png",
                id: 21900,
                image_url: "https://images.genius.com/18f21c424e2f02f0c9a59c15bac56406.736x736x1.jpg",
                is_meme_verified: false,
                is_verified: false,
                name: "The Grateful Dead",
                url: "https://genius.com/artists/The-grateful-dead"
            }
        }
    }
  mount( <DataItem result={item} id='1' />);
   cy.get('div').find('img').should('have.attr', 'src', 'https://images.genius.com/18f21c424e2f02f0c9a59c15bac56406.736x736x1.jpg')

});
