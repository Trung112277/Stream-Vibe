import { Button } from '@/components/ui/button';

export function PlayButton() {
  return (
    <Button
      className="hover:scale-110 transition duration-300 ease-in-out hover:bg-transparent"
      variant="ghost"
    >
      <img src="/play-button.svg" alt="play-button" />
    </Button>
  );
}
