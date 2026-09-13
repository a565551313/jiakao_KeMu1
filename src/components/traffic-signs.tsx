import type { JSX, ReactNode } from "react";
import type { SignId } from "@/lib/exam-types";

const RED = "#E10600";
const BLUE = "#0055A4";
const YELLOW = "#F5D000";
const BLACK = "#111";
const WHITE = "#fff";
const GREEN = "#008A3A";

function Plate({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      {children}
    </svg>
  );
}

function StopSign() {
  return (
    <Plate>
      <polygon
        points="60,6 100,22 114,60 100,98 60,114 20,98 6,60 20,22"
        fill={RED}
        stroke={WHITE}
        strokeWidth="5"
      />
      <polygon
        points="60,10 97,25 110,60 97,95 60,110 23,95 10,60 23,25"
        fill={RED}
        stroke={WHITE}
        strokeWidth="2"
      />
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fill={WHITE}
        fontSize="36"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        停
      </text>
    </Plate>
  );
}

function YieldSign() {
  return (
    <Plate>
      <polygon points="60,10 112,110 8,110" fill={RED} />
      <polygon points="60,22 100,102 20,102" fill={WHITE} />
    </Plate>
  );
}

function NoEntry() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={RED} />
      <rect x="22" y="50" width="76" height="20" rx="2" fill={WHITE} />
    </Plate>
  );
}

function NoPass() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={WHITE} stroke={RED} strokeWidth="14" />
    </Plate>
  );
}

function NoParking() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={BLUE} />
      <circle cx="60" cy="60" r="34" fill="none" stroke={RED} strokeWidth="10" />
      <line x1="32" y1="88" x2="88" y2="32" stroke={RED} strokeWidth="10" />
    </Plate>
  );
}

function NoStopping() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={BLUE} />
      <circle cx="60" cy="60" r="34" fill="none" stroke={RED} strokeWidth="10" />
      <line x1="28" y1="60" x2="92" y2="60" stroke={RED} strokeWidth="10" />
      <line x1="32" y1="88" x2="88" y2="32" stroke={RED} strokeWidth="10" />
    </Plate>
  );
}

function NoHorn() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={WHITE} stroke={RED} strokeWidth="12" />
      <path
        d="M38 52 h16 l14-12 v40 l-14-12 h-16 z"
        fill={BLACK}
      />
      <path d="M74 50 q10 10 0 20" fill="none" stroke={BLACK} strokeWidth="4" />
      <line x1="30" y1="90" x2="90" y2="30" stroke={RED} strokeWidth="10" />
    </Plate>
  );
}

function Speed40() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={WHITE} stroke={RED} strokeWidth="12" />
      <text
        x="60"
        y="74"
        textAnchor="middle"
        fill={BLACK}
        fontSize="40"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        40
      </text>
    </Plate>
  );
}

function SpeedEnd() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={WHITE} stroke="#6b6b6b" strokeWidth="8" />
      <text
        x="60"
        y="74"
        textAnchor="middle"
        fill="#9a9a9a"
        fontSize="36"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        40
      </text>
      <line x1="28" y1="92" x2="92" y2="28" stroke={BLACK} strokeWidth="8" />
    </Plate>
  );
}

function Diamond({ fill, children }: { fill: string; children?: ReactNode }) {
  return (
    <Plate>
      <rect x="18" y="18" width="84" height="84" rx="4" transform="rotate(45 60 60)" fill={fill} stroke={BLACK} strokeWidth="3" />
      {children}
    </Plate>
  );
}

function Crosswalk() {
  return (
    <Plate>
      <rect x="8" y="8" width="104" height="104" rx="6" fill={BLUE} />
      <rect x="28" y="46" width="12" height="28" fill={WHITE} />
      <rect x="48" y="46" width="12" height="28" fill={WHITE} />
      <rect x="68" y="46" width="12" height="28" fill={WHITE} />
      <rect x="22" y="38" width="76" height="6" fill={WHITE} />
      <rect x="22" y="76" width="76" height="6" fill={WHITE} />
    </Plate>
  );
}

function Pedestrian() {
  return (
    <Diamond fill={YELLOW}>
      <circle cx="60" cy="40" r="7" fill={BLACK} />
      <path d="M60 48 l-8 18 h5 l3 20 h6 l3-20 h5 z" fill={BLACK} />
      <path d="M52 54 l-10 10" stroke={BLACK} strokeWidth="4" />
      <path d="M68 54 l12 8" stroke={BLACK} strokeWidth="4" />
    </Diamond>
  );
}

function Children() {
  return (
    <Diamond fill={YELLOW}>
      <circle cx="48" cy="42" r="6" fill={BLACK} />
      <circle cx="72" cy="46" r="5" fill={BLACK} />
      <path d="M48 49 l-6 16 h4 l2 16 h6 l2-16 h4 z" fill={BLACK} />
      <path d="M72 52 l-5 12 h4 l2 12 h5 l2-12 h4 z" fill={BLACK} />
    </Diamond>
  );
}

function Danger() {
  return (
    <Diamond fill={YELLOW}>
      <polygon points="60,38 72,78 48,78" fill={BLACK} />
      <rect x="56" y="82" width="8" height="8" fill={BLACK} />
    </Diamond>
  );
}

function Construction() {
  return (
    <Diamond fill={YELLOW}>
      <rect x="38" y="50" width="44" height="28" fill="none" stroke={BLACK} strokeWidth="5" />
      <line x1="38" y1="50" x2="82" y2="78" stroke={BLACK} strokeWidth="5" />
      <line x1="82" y1="50" x2="38" y2="78" stroke={BLACK} strokeWidth="5" />
    </Diamond>
  );
}

function Tunnel() {
  return (
    <Diamond fill={YELLOW}>
      <path d="M36 82 v-22 a24 24 0 0 1 48 0 v22" fill="none" stroke={BLACK} strokeWidth="6" />
      <line x1="48" y1="70" x2="48" y2="82" stroke={BLACK} strokeWidth="5" />
      <line x1="72" y1="70" x2="72" y2="82" stroke={BLACK} strokeWidth="5" />
    </Diamond>
  );
}

function Honk() {
  return (
    <Plate>
      <rect x="8" y="8" width="104" height="104" rx="6" fill={BLUE} />
      <path d="M36 52 h16 l16-14 v44 l-16-14 h-16 z" fill={WHITE} />
      <path d="M76 46 q14 14 0 28" fill="none" stroke={WHITE} strokeWidth="5" />
    </Plate>
  );
}

function NoLeft() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={WHITE} stroke={RED} strokeWidth="12" />
      <path
        d="M60 88 v-36 h-20"
        fill="none"
        stroke={BLACK}
        strokeWidth="10"
        strokeLinecap="square"
      />
      <polygon points="32,52 48,40 48,64" fill={BLACK} />
      <line x1="30" y1="90" x2="90" y2="30" stroke={RED} strokeWidth="10" />
    </Plate>
  );
}

function Straight() {
  return (
    <Plate>
      <rect x="8" y="8" width="104" height="104" rx="6" fill={BLUE} />
      <path d="M60 92 v-48" stroke={WHITE} strokeWidth="12" />
      <polygon points="60,28 76,50 44,50" fill={WHITE} />
    </Plate>
  );
}

function Roundabout() {
  return (
    <Plate>
      <rect x="8" y="8" width="104" height="104" rx="6" fill={BLUE} />
      <circle cx="60" cy="60" r="22" fill="none" stroke={WHITE} strokeWidth="8" />
      <polygon points="60,28 70,44 50,44" fill={WHITE} />
    </Plate>
  );
}

function NoOvertake() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={WHITE} stroke={RED} strokeWidth="12" />
      <rect x="28" y="46" width="22" height="28" rx="4" fill="#c0392b" />
      <rect x="58" y="40" width="28" height="34" rx="4" fill={BLACK} />
    </Plate>
  );
}

function Parking() {
  return (
    <Plate>
      <rect x="8" y="8" width="104" height="104" rx="6" fill={BLUE} />
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fill={WHITE}
        fontSize="56"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        P
      </text>
    </Plate>
  );
}

function MinSpeed() {
  return (
    <Plate>
      <rect x="8" y="8" width="104" height="104" rx="6" fill={BLUE} />
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fill={WHITE}
        fontSize="40"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        60
      </text>
    </Plate>
  );
}

function Highway() {
  return (
    <Plate>
      <rect x="14" y="8" width="92" height="104" rx="8" fill={GREEN} />
      <text
        x="60"
        y="44"
        textAnchor="middle"
        fill={WHITE}
        fontSize="18"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        高速
      </text>
      <path d="M40 58 h40 l-8 8 h-24 z" fill={WHITE} />
      <path d="M36 78 h48" stroke={WHITE} strokeWidth="4" />
      <path d="M44 90 h32" stroke={WHITE} strokeWidth="4" />
    </Plate>
  );
}

function Slippery() {
  return (
    <Diamond fill={YELLOW}>
      <path
        d="M40 78 q10-24 20-8 q10 16 24-12"
        fill="none"
        stroke={BLACK}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="44" cy="50" r="5" fill={BLACK} />
    </Diamond>
  );
}

function Rocks() {
  return (
    <Diamond fill={YELLOW}>
      <polygon points="44,40 56,48 50,58" fill={BLACK} />
      <polygon points="62,36 78,46 68,58" fill={BLACK} />
      <path d="M34 78 h52" stroke={BLACK} strokeWidth="6" />
    </Diamond>
  );
}

function UTurn() {
  return (
    <Plate>
      <rect x="8" y="8" width="104" height="104" rx="6" fill={BLUE} />
      <path
        d="M44 88 v-28 a16 16 0 0 1 32 0 v10"
        fill="none"
        stroke={WHITE}
        strokeWidth="10"
      />
      <polygon points="76,80 90,64 62,64" fill={WHITE} />
    </Plate>
  );
}

function GiveWay() {
  return (
    <Plate>
      <polygon points="60,10 114,110 6,110" fill={YELLOW} stroke={BLACK} strokeWidth="4" />
      <polygon points="60,28 98,100 22,100" fill={WHITE} />
      <polygon points="60,48 82,92 38,92" fill={RED} />
    </Plate>
  );
}

function NoUTurn() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={WHITE} stroke={RED} strokeWidth="12" />
      <path
        d="M44 86 v-24 a16 16 0 0 1 32 0 v8"
        fill="none"
        stroke={BLACK}
        strokeWidth="8"
      />
      <polygon points="76,78 88,64 64,64" fill={BLACK} />
      <line x1="30" y1="90" x2="90" y2="30" stroke={RED} strokeWidth="10" />
    </Plate>
  );
}

function Height() {
  return (
    <Plate>
      <circle cx="60" cy="60" r="48" fill={WHITE} stroke={RED} strokeWidth="12" />
      <text
        x="60"
        y="56"
        textAnchor="middle"
        fill={BLACK}
        fontSize="16"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        3.5m
      </text>
      <path d="M34 70 h52" stroke={BLACK} strokeWidth="5" />
      <path d="M40 70 v12" stroke={BLACK} strokeWidth="5" />
      <path d="M80 70 v12" stroke={BLACK} strokeWidth="5" />
    </Plate>
  );
}

function LaneBus() {
  return (
    <Plate>
      <rect x="8" y="8" width="104" height="104" rx="6" fill={BLUE} />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fill={WHITE}
        fontSize="22"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        公交
      </text>
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fill={WHITE}
        fontSize="18"
        fontWeight="700"
        fontFamily="Noto Sans SC, sans-serif"
      >
        车道
      </text>
    </Plate>
  );
}

const SIGNS: Record<SignId, () => JSX.Element> = {
  stop: StopSign,
  yield: YieldSign,
  "no-entry": NoEntry,
  "no-pass": NoPass,
  "no-parking": NoParking,
  "no-stopping": NoStopping,
  "no-horn": NoHorn,
  "speed-40": Speed40,
  "speed-end": SpeedEnd,
  crosswalk: Crosswalk,
  pedestrian: Pedestrian,
  children: Children,
  danger: Danger,
  construction: Construction,
  tunnel: Tunnel,
  honk: Honk,
  "no-left": NoLeft,
  straight: Straight,
  roundabout: Roundabout,
  "no-overtake": NoOvertake,
  parking: Parking,
  "min-speed": MinSpeed,
  highway: Highway,
  slippery: Slippery,
  rocks: Rocks,
  "u-turn": UTurn,
  "give-way": GiveWay,
  "no-u-turn": NoUTurn,
  height: Height,
  "lane-bus": LaneBus,
};

export function TrafficSign({ id, className }: { id: SignId; className?: string }) {
  const Comp = SIGNS[id];
  return (
    <div className={className}>
      <Comp />
    </div>
  );
}
