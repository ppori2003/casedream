import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#9BB5CE',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './apple.png',
  fullDecal: './full.png',
});

export default state;