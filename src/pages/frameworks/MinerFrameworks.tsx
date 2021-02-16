import { Row } from "antd";
import React from "react";
import { Miner } from "utils/miner";
import { Frameworks } from "./FrameworkData";
import { MinerWeapons, MinerWeapon } from "utils/weapons";
import useStore from "data/useStore";
import FrameworkCard from "./FrameworkCard";
import WeaponDivider from "components/WeaponDivider";

/**
 * This whole file is a trainwreck for Typescript. Technically, everything in
 * here should be well typed, but the path traversal for objects with enum
 * keys doesn't work. And because of that, well, nothing else types correctly.
 *
 * I spent all afternoon trying to fix it. Instead, you're going to have to
 * deal with this ts-nochecked'd dogshit
 */
export default function MinerFrameworks<T extends Miner>(props: { miner: T }) {
  const { miner } = props;
  const [acquiredMinerFrameworks, dispatch] = useStore("frameworks", miner);

  return (
    <>
      {(MinerWeapons[miner] as readonly MinerWeapon<T>[]).map((weapon) => (
        <React.Fragment key={weapon}>
          <WeaponDivider weapon={weapon} />
          <Row gutter={[16, 16]}>
            {Frameworks.map((framework) => (
              <FrameworkCard
                key={framework}
                miner={miner}
                framework={framework}
                // @ts-ignore
                isAcquired={acquiredMinerFrameworks[weapon].includes(framework)}
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_FRAMEWORK",
                    // @ts-ignore
                    payload: {
                      miner,
                      weapon,
                      framework,
                    },
                  })
                }
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}