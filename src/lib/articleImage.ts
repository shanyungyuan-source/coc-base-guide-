// Maps article slug + tags to a relevant game image path

export function getArticleImage(slug: string, tags: string[]): string {
  const s = slug.toLowerCase();
  const t = tags.join(' ').toLowerCase();

  // Hero-specific guides
  if (/archer-queen|queen-walk/.test(s)) return '/images/heroes/archer-queen.webp';
  if (/barbarian-king/.test(s)) return '/images/heroes/barbarian-king.webp';
  if (/grand-warden|warden/.test(s)) return '/images/heroes/grand-warden.webp';
  if (/royal-champion/.test(s)) return '/images/heroes/royal-champion.webp';
  if (/druid|minion-prince/.test(s)) return '/images/heroes/minion-prince.webp';
  if (/hero|equipment/.test(s)) return '/images/heroes/archer-queen.webp';

  // Troop-specific guides
  if (/root-rider/.test(s)) return '/images/troops/root-rider.webp';
  if (/hydra|electro-dragon/.test(s)) return '/images/troops/electro-dragon.webp';
  if (/hog-rider/.test(s)) return '/images/troops/hog-rider.webp';
  if (/super-witch/.test(s)) return '/images/troops/super-witch.webp';
  if (/lava-hound|laloon/.test(s)) return '/images/troops/lava-hound.webp';
  if (/yeti/.test(s)) return '/images/troops/yeti.webp';

  // TH-specific: attack guides → relevant troop for that TH
  if (/th7-attack/.test(s)) return '/images/troops/dragon.webp';
  if (/th8-attack/.test(s)) return '/images/troops/dragon.webp';
  if (/th9-attack/.test(s)) return '/images/troops/hog-rider.webp';
  if (/th10-attack/.test(s)) return '/images/troops/lava-hound.webp';
  if (/th11-attack/.test(s)) return '/images/troops/electro-dragon.webp';
  if (/th12-attack/.test(s)) return '/images/troops/yeti.webp';
  if (/th13-attack/.test(s)) return '/images/troops/super-witch.webp';
  if (/th14-attack|th15-attack|th16-attack/.test(s)) return '/images/troops/root-rider.webp';

  // TH base / upgrade guides → TH building image
  if (/th7/.test(s)) return '/images/buildings/th7.webp';
  if (/th8/.test(s)) return '/images/buildings/th8.webp';
  if (/th9/.test(s)) return '/images/buildings/th9.webp';
  if (/th10/.test(s)) return '/images/buildings/th10.webp';
  if (/th11/.test(s)) return '/images/buildings/th11.webp';
  if (/th12/.test(s)) return '/images/buildings/th12.webp';
  if (/th13/.test(s)) return '/images/buildings/th13.webp';
  if (/th14/.test(s)) return '/images/buildings/th14.webp';
  if (/th15/.test(s)) return '/images/buildings/th15.webp';
  if (/th16/.test(s)) return '/images/buildings/th16.webp';

  // Topic guides
  if (/dark-elixir|farming/.test(s)) return '/images/heroes/archer-queen.webp';
  if (/cwl|clan-war|war-base|clan-castle/.test(s)) return '/images/buildings/eagle-artillery.webp';
  if (/clan-games|magic-item|book/.test(s)) return '/images/heroes/grand-warden.webp';
  if (/beginner|complete-guide/.test(s)) return '/images/buildings/th9.webp';
  if (/wall|trophy|legend/.test(s)) return '/images/buildings/th12.webp';
  if (/siege/.test(s)) return '/images/troops/golem.webp';
  if (/spell/.test(s)) return '/images/troops/balloon.webp';
  if (/super-troop/.test(s)) return '/images/troops/super-witch.webp';
  if (/best-attack|attack-strategies/.test(s)) return '/images/troops/hog-rider.webp';
  if (/builder-base/.test(s)) return '/images/buildings/th10.webp';
  if (/war-troop/.test(s)) return '/images/troops/yeti.webp';

  // Default
  return '/images/buildings/th12.webp';
}
