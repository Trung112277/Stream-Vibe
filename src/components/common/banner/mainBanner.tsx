import { MainBannerImg } from './mainBannerImg';
import { PlayButton } from './playButton';

export function MainBanner() {
  return (
    <div className="absolute -z-10 top-0 left-0">
      <div className="relative">
        <MainBannerImg />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
          <PlayButton />
        </div>
      </div>
    </div>
  );
}
