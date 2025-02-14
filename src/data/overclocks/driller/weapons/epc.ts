import type { Overclock } from 'types/overclock';

const EPCOverclocks: Overclock[] = [
  {
    name: 'Energy Rerouting',
    id: '97822071D586CE45ACD6489782B700FA',
    icon: 'ChargeUp',
    type: 'Clean',
    price: {
      credits: 7300,
      bismor: 130,
      jadiz: 100,
      umanite: 65,
    },
    effects: {
      buffs: ['+16 Battery Capacity', '+50% Charge Speed'],
      nerfs: [],
    },
    description:
      'A masterwork of engineering that improves charge speed and energy efficiency without affecting overall performance!',
  },
  {
    name: 'Magnetic Cooling Unit',
    id: 'F1E6CC307C11DE4586B88B419E530ABF',
    icon: 'Cooldown',
    type: 'Clean',
    price: {
      credits: 8900,
      croppa: 95,
      jadiz: 80,
      umanite: 125,
    },
    effects: {
      buffs: ['+0.1 Cooling Rate', '-30% Heat Buildup When Charged'],
      nerfs: [],
    },
    description:
      'A high-tech solution to cleanly improve the cooling rate. The result is an increased number of shots that can be fired before overheating, a faster recovery from an overheat, and an extended duration that a full charge can be maintained.',
  },
  {
    name: 'Heat Pipe',
    id: 'A0E018C45FE679418FD3730E6E9B631D',
    icon: 'Fuel',
    type: 'Balanced',
    price: {
      credits: 7450,
      bismor: 60,
      jadiz: 95,
      umanite: 125,
    },
    effects: {
      buffs: ['-2 Charged Shot Ammo Use', '+30% Charge Speed'],
      nerfs: [
        '+100% Charged Shot Heat Generation',
        '+100% Heat Buildup When Charged',
      ],
    },
    description:
      'By channeling exhaust heat back into the charge chamber, a shot can be charged faster while using less energy. Unfortunately, this process generates a lot more heat.',
  },
  {
    name: 'Heavy Hitter',
    id: '39E43E13CC0DAE4691DD51A11383E9E1',
    icon: 'Damage',
    type: 'Balanced',
    price: {
      credits: 8100,
      bismor: 140,
      magnite: 60,
      umanite: 105,
    },
    effects: {
      buffs: ['+60% Damage'],
      nerfs: ['-32 Battery Capacity', '+50% Normal Shot Heat Generation'],
    },
    description:
      'Some extensive tweaking to how the shots are prepared can increase the pure damage of the weapon, but at the cost of more heat per shot and a reduced battery size.',
  },
  {
    name: 'Overcharger',
    id: '55BB52A0ECFA7C43B37BBBE640114196',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7050,
      bismor: 120,
      croppa: 95,
      enorPearl: 60,
    },
    effects: {
      buffs: [
        '+50% Charged Damage',
        '+50% Charged Area Damage',
        '+20% Charged Effect Radius',
      ],
      nerfs: ['+2 Charged Shot Ammo Use', '-0.1 Cooling Rate'],
    },
    description:
      'Pushing the EPC to the limit will give you a significant increase in charge shot damage and a boost in the size of the explosion, but at the cost of thermal efficiency and energy consumption.',
  },
  {
    name: 'Persistent Plasma',
    id: '165CD93E660B8147BCA2F86CDE5CF8F7',
    icon: 'DurationHourglass',
    type: 'Unstable',
    price: {
      credits: 8150,
      croppa: 75,
      jadiz: 130,
      magnite: 95,
    },
    effects: {
      buffs: ['+Persistent Plasma'],
      nerfs: ['-15 Charged Shot Damage', '-15 Area Damage'],
    },
    description:
      'By changing how the plasma is layered within the charged projectile, a slow and persistent discharge can be achieved upon impact. However, this does reduce the instant damage done.',
  },
];

export default EPCOverclocks;
