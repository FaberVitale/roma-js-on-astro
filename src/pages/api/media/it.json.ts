import type { MediaContentDto } from '../../../@types/media';

export const itMediaContent: Readonly<MediaContentDto> = {
  title: 'RomaJS Media',
  description: 'Foto e video raccolti durante gli incontri del mercoledì',
};

export async function get() {
  return {
    body: JSON.stringify(itMediaContent),
  };
}
