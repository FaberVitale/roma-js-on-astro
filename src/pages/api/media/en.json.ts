import type { MediaContentDto } from '../../../@types/media';

export const enMediaContent: Readonly<MediaContentDto> = {
  title: 'RomaJS Media',
  description: 'Photos and videos of our meetups',
};

export async function get() {
  return {
    body: JSON.stringify(enMediaContent),
  };
}
