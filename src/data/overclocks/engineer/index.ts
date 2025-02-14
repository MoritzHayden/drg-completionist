import type { Miner } from 'data/miner';
import type { MinerWeapon } from 'data/weapons';
import type { Overclock } from 'types/overclock';
import BreachCutterOverclocks from './weapons/breachcutter';
import GrenadeLauncherOverclocks from './weapons/grenadelauncher';
import LockOnRifleOverclocks from './weapons/lockonrifle';
import ShardDiffractorOverclocks from './weapons/sharddiffractor';
import ShotgunOverclocks from './weapons/shotgun';
import StubbySMGOverclocks from './weapons/stubbysmg';

const EngineerOverclocks: Record<MinerWeapon<Miner.Engineer>, Overclock[]> = {
  '"Warthog" Auto 210': ShotgunOverclocks,
  '"Stubby" Voltaic SMG': StubbySMGOverclocks,
  'Lok-1 Smart Rifle': LockOnRifleOverclocks,
  'Deepcore 40mm PGL': GrenadeLauncherOverclocks,
  'Breach Cutter': BreachCutterOverclocks,
  'Shard Diffractor': ShardDiffractorOverclocks,
};

export default EngineerOverclocks;
