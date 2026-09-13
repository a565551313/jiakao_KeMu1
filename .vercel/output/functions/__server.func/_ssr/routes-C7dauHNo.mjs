import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Check, r as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C7dauHNo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatTime(ms) {
	const total = Math.max(0, Math.floor(ms / 1e3));
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function shuffle(items) {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = next[i];
		const b = next[j];
		if (a === void 0 || b === void 0) continue;
		next[i] = b;
		next[j] = a;
	}
	return next;
}
function maskName(name) {
	if (name.length <= 3) return name;
	return `${name.slice(0, 3)}...`;
}
function FieldsetBox({ legend, className, bodyClassName, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("fieldset-box", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "fieldset-legend",
			children: legend
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full", bodyClassName),
			children
		})]
	});
}
function DialogShell({ title, children, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/45 px-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "dlg-title",
			className: cn("w-full overflow-hidden rounded-sm bg-modal shadow-2xl", wide ? "max-w-xl" : "max-w-lg"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "dlg-title",
				className: "px-4 py-3 text-center font-sans text-xl font-bold tracking-wide text-paper-2",
				children: title
			}), children]
		})
	});
}
function DialogActions({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap items-center justify-center gap-8 px-6 py-5",
		children
	});
}
var RED = "#E10600";
var BLUE = "#0055A4";
var YELLOW = "#F5D000";
var BLACK = "#111";
var WHITE = "#fff";
var GREEN = "#008A3A";
function Plate({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 120 120",
		className: "h-full w-full",
		"aria-hidden": "true",
		children
	});
}
function StopSign() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,6 100,22 114,60 100,98 60,114 20,98 6,60 20,22",
			fill: RED,
			stroke: WHITE,
			strokeWidth: "5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,10 97,25 110,60 97,95 60,110 23,95 10,60 23,25",
			fill: RED,
			stroke: WHITE,
			strokeWidth: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "60",
			y: "72",
			textAnchor: "middle",
			fill: WHITE,
			fontSize: "36",
			fontWeight: "700",
			fontFamily: "Noto Sans SC, sans-serif",
			children: "停"
		})
	] });
}
function YieldSign() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
		points: "60,10 112,110 8,110",
		fill: RED
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
		points: "60,22 100,102 20,102",
		fill: WHITE
	})] });
}
function NoEntry() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "60",
		cy: "60",
		r: "48",
		fill: RED
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "22",
		y: "50",
		width: "76",
		height: "20",
		rx: "2",
		fill: WHITE
	})] });
}
function NoPass() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "60",
		cy: "60",
		r: "48",
		fill: WHITE,
		stroke: RED,
		strokeWidth: "14"
	}) });
}
function NoParking() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "48",
			fill: BLUE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "34",
			fill: "none",
			stroke: RED,
			strokeWidth: "10"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "32",
			y1: "88",
			x2: "88",
			y2: "32",
			stroke: RED,
			strokeWidth: "10"
		})
	] });
}
function NoStopping() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "48",
			fill: BLUE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "34",
			fill: "none",
			stroke: RED,
			strokeWidth: "10"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "28",
			y1: "60",
			x2: "92",
			y2: "60",
			stroke: RED,
			strokeWidth: "10"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "32",
			y1: "88",
			x2: "88",
			y2: "32",
			stroke: RED,
			strokeWidth: "10"
		})
	] });
}
function NoHorn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "48",
			fill: WHITE,
			stroke: RED,
			strokeWidth: "12"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M38 52 h16 l14-12 v40 l-14-12 h-16 z",
			fill: BLACK
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M74 50 q10 10 0 20",
			fill: "none",
			stroke: BLACK,
			strokeWidth: "4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "30",
			y1: "90",
			x2: "90",
			y2: "30",
			stroke: RED,
			strokeWidth: "10"
		})
	] });
}
function Speed40() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "60",
		cy: "60",
		r: "48",
		fill: WHITE,
		stroke: RED,
		strokeWidth: "12"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: "60",
		y: "74",
		textAnchor: "middle",
		fill: BLACK,
		fontSize: "40",
		fontWeight: "700",
		fontFamily: "Noto Sans SC, sans-serif",
		children: "40"
	})] });
}
function SpeedEnd() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "48",
			fill: WHITE,
			stroke: "#6b6b6b",
			strokeWidth: "8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "60",
			y: "74",
			textAnchor: "middle",
			fill: "#9a9a9a",
			fontSize: "36",
			fontWeight: "700",
			fontFamily: "Noto Sans SC, sans-serif",
			children: "40"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "28",
			y1: "92",
			x2: "92",
			y2: "28",
			stroke: BLACK,
			strokeWidth: "8"
		})
	] });
}
function Diamond({ fill, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "18",
		y: "18",
		width: "84",
		height: "84",
		rx: "4",
		transform: "rotate(45 60 60)",
		fill,
		stroke: BLACK,
		strokeWidth: "3"
	}), children] });
}
function Crosswalk() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "104",
			height: "104",
			rx: "6",
			fill: BLUE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "28",
			y: "46",
			width: "12",
			height: "28",
			fill: WHITE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "48",
			y: "46",
			width: "12",
			height: "28",
			fill: WHITE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "68",
			y: "46",
			width: "12",
			height: "28",
			fill: WHITE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "22",
			y: "38",
			width: "76",
			height: "6",
			fill: WHITE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "22",
			y: "76",
			width: "76",
			height: "6",
			fill: WHITE
		})
	] });
}
function Pedestrian() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Diamond, {
		fill: YELLOW,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "40",
				r: "7",
				fill: BLACK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 48 l-8 18 h5 l3 20 h6 l3-20 h5 z",
				fill: BLACK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 54 l-10 10",
				stroke: BLACK,
				strokeWidth: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M68 54 l12 8",
				stroke: BLACK,
				strokeWidth: "4"
			})
		]
	});
}
function Children() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Diamond, {
		fill: YELLOW,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "48",
				cy: "42",
				r: "6",
				fill: BLACK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "72",
				cy: "46",
				r: "5",
				fill: BLACK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 49 l-6 16 h4 l2 16 h6 l2-16 h4 z",
				fill: BLACK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M72 52 l-5 12 h4 l2 12 h5 l2-12 h4 z",
				fill: BLACK
			})
		]
	});
}
function Danger() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Diamond, {
		fill: YELLOW,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,38 72,78 48,78",
			fill: BLACK
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "56",
			y: "82",
			width: "8",
			height: "8",
			fill: BLACK
		})]
	});
}
function Construction() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Diamond, {
		fill: YELLOW,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "38",
				y: "50",
				width: "44",
				height: "28",
				fill: "none",
				stroke: BLACK,
				strokeWidth: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "38",
				y1: "50",
				x2: "82",
				y2: "78",
				stroke: BLACK,
				strokeWidth: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "82",
				y1: "50",
				x2: "38",
				y2: "78",
				stroke: BLACK,
				strokeWidth: "5"
			})
		]
	});
}
function Tunnel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Diamond, {
		fill: YELLOW,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M36 82 v-22 a24 24 0 0 1 48 0 v22",
				fill: "none",
				stroke: BLACK,
				strokeWidth: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "70",
				x2: "48",
				y2: "82",
				stroke: BLACK,
				strokeWidth: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "72",
				y1: "70",
				x2: "72",
				y2: "82",
				stroke: BLACK,
				strokeWidth: "5"
			})
		]
	});
}
function Honk() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "104",
			height: "104",
			rx: "6",
			fill: BLUE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M36 52 h16 l16-14 v44 l-16-14 h-16 z",
			fill: WHITE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M76 46 q14 14 0 28",
			fill: "none",
			stroke: WHITE,
			strokeWidth: "5"
		})
	] });
}
function NoLeft() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "48",
			fill: WHITE,
			stroke: RED,
			strokeWidth: "12"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M60 88 v-36 h-20",
			fill: "none",
			stroke: BLACK,
			strokeWidth: "10",
			strokeLinecap: "square"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "32,52 48,40 48,64",
			fill: BLACK
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "30",
			y1: "90",
			x2: "90",
			y2: "30",
			stroke: RED,
			strokeWidth: "10"
		})
	] });
}
function Straight() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "104",
			height: "104",
			rx: "6",
			fill: BLUE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M60 92 v-48",
			stroke: WHITE,
			strokeWidth: "12"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,28 76,50 44,50",
			fill: WHITE
		})
	] });
}
function Roundabout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "104",
			height: "104",
			rx: "6",
			fill: BLUE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "22",
			fill: "none",
			stroke: WHITE,
			strokeWidth: "8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,28 70,44 50,44",
			fill: WHITE
		})
	] });
}
function NoOvertake() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "48",
			fill: WHITE,
			stroke: RED,
			strokeWidth: "12"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "28",
			y: "46",
			width: "22",
			height: "28",
			rx: "4",
			fill: "#c0392b"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "58",
			y: "40",
			width: "28",
			height: "34",
			rx: "4",
			fill: BLACK
		})
	] });
}
function Parking() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "8",
		y: "8",
		width: "104",
		height: "104",
		rx: "6",
		fill: BLUE
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: "60",
		y: "78",
		textAnchor: "middle",
		fill: WHITE,
		fontSize: "56",
		fontWeight: "700",
		fontFamily: "Noto Sans SC, sans-serif",
		children: "P"
	})] });
}
function MinSpeed() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "8",
		y: "8",
		width: "104",
		height: "104",
		rx: "6",
		fill: BLUE
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: "60",
		y: "76",
		textAnchor: "middle",
		fill: WHITE,
		fontSize: "40",
		fontWeight: "700",
		fontFamily: "Noto Sans SC, sans-serif",
		children: "60"
	})] });
}
function Highway() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "14",
			y: "8",
			width: "92",
			height: "104",
			rx: "8",
			fill: GREEN
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "60",
			y: "44",
			textAnchor: "middle",
			fill: WHITE,
			fontSize: "18",
			fontWeight: "700",
			fontFamily: "Noto Sans SC, sans-serif",
			children: "高速"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M40 58 h40 l-8 8 h-24 z",
			fill: WHITE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M36 78 h48",
			stroke: WHITE,
			strokeWidth: "4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M44 90 h32",
			stroke: WHITE,
			strokeWidth: "4"
		})
	] });
}
function Slippery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Diamond, {
		fill: YELLOW,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M40 78 q10-24 20-8 q10 16 24-12",
			fill: "none",
			stroke: BLACK,
			strokeWidth: "6",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "44",
			cy: "50",
			r: "5",
			fill: BLACK
		})]
	});
}
function Rocks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Diamond, {
		fill: YELLOW,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "44,40 56,48 50,58",
				fill: BLACK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "62,36 78,46 68,58",
				fill: BLACK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M34 78 h52",
				stroke: BLACK,
				strokeWidth: "6"
			})
		]
	});
}
function UTurn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "104",
			height: "104",
			rx: "6",
			fill: BLUE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M44 88 v-28 a16 16 0 0 1 32 0 v10",
			fill: "none",
			stroke: WHITE,
			strokeWidth: "10"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "76,80 90,64 62,64",
			fill: WHITE
		})
	] });
}
function GiveWay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,10 114,110 6,110",
			fill: YELLOW,
			stroke: BLACK,
			strokeWidth: "4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,28 98,100 22,100",
			fill: WHITE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,48 82,92 38,92",
			fill: RED
		})
	] });
}
function NoUTurn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "48",
			fill: WHITE,
			stroke: RED,
			strokeWidth: "12"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M44 86 v-24 a16 16 0 0 1 32 0 v8",
			fill: "none",
			stroke: BLACK,
			strokeWidth: "8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "76,78 88,64 64,64",
			fill: BLACK
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "30",
			y1: "90",
			x2: "90",
			y2: "30",
			stroke: RED,
			strokeWidth: "10"
		})
	] });
}
function Height() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "48",
			fill: WHITE,
			stroke: RED,
			strokeWidth: "12"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "60",
			y: "56",
			textAnchor: "middle",
			fill: BLACK,
			fontSize: "16",
			fontWeight: "700",
			fontFamily: "Noto Sans SC, sans-serif",
			children: "3.5m"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M34 70 h52",
			stroke: BLACK,
			strokeWidth: "5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M40 70 v12",
			stroke: BLACK,
			strokeWidth: "5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M80 70 v12",
			stroke: BLACK,
			strokeWidth: "5"
		})
	] });
}
function LaneBus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "104",
			height: "104",
			rx: "6",
			fill: BLUE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "60",
			y: "58",
			textAnchor: "middle",
			fill: WHITE,
			fontSize: "22",
			fontWeight: "700",
			fontFamily: "Noto Sans SC, sans-serif",
			children: "公交"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "60",
			y: "86",
			textAnchor: "middle",
			fill: WHITE,
			fontSize: "18",
			fontWeight: "700",
			fontFamily: "Noto Sans SC, sans-serif",
			children: "车道"
		})
	] });
}
var SIGNS = {
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
	"lane-bus": LaneBus
};
function TrafficSign({ id, className }) {
	const Comp = SIGNS[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {})
	});
}
var EXAM_DURATION_MS = 27e5;
var DEFAULT_CANDIDATE = {
	name: "秋名山车神",
	gender: "男",
	vehicleType: "小车",
	idNumber: "123456789123456789",
	station: "01"
};
function labelForAnswer(q, key) {
	if (!key) return "";
	if (q.type === "judge") return key === "T" ? "正确" : "错误";
	const idx = key.charCodeAt(0) - 65;
	return `${key}. ${q.options?.[idx] ?? ""}`;
}
function isCorrect(q, selected) {
	return selected !== null && selected === q.answer;
}
function J(id, text, answer, explain, sign) {
	return {
		id,
		type: "judge",
		text,
		answer,
		explain,
		sign
	};
}
function S(id, text, options, answer, explain, sign) {
	return {
		id,
		type: "single",
		text,
		options,
		answer,
		explain,
		sign
	};
}
var QUESTION_BANK = [
	J("j1", "需要民警现场开具事故认定书的，民警除开具事故认定书外，还将 对违法行为依法处罚。", "T", "现场处理交通事故时，交通警察应当对当事人的道路交通安全违法行为依法予以处罚，并出具事故认定书。"),
	J("j2", "驾驶机动车在道路上违反道路交通安全法的行为，属于违法行为。", "T", "违反道路交通安全法律、法规的行为均属违法行为。"),
	J("j3", "饮酒后只要自我感觉良好，就可以驾驶机动车。", "F", "饮酒后不得驾驶机动车，与自我感觉无关。"),
	J("j4", "驾驶人在驾驶证丢失后仍然可以驾驶机动车上路。", "F", "驾驶证丢失期间不得驾驶机动车，应先办理补证。"),
	J("j5", "驾驶机动车在道路上发生故障，需要停车排除时，驾驶人应首先开启危险报警闪光灯。", "T", "发生故障应立即开启危险报警闪光灯，再按规定放置警告标志。"),
	J("j6", "机动车在高速公路上发生故障时，警告标志应当设置在故障车来车方向一百五十米以外。", "T", "高速公路故障车警告标志应设在来车方向150米以外。"),
	J("j7", "机动车登记证书、号牌、行驶证丢失或者损毁的，机动车所有人应当向登记地车辆管理所申请补领、换领。", "T", "丢失或损毁应向登记地车管所申请补换领。"),
	J("j8", "驾驶机动车行经人行横道，不按规定减速、停车、避让行人的，一次记6分。", "F", "不按规定避让行人一次记3分（以现行记分办法为准，该行为属于违法，必须减速让行）。实际考试中：不避让人行横道行人记3分。题干所述6分不准确，故错误。"),
	J("j9", "机动车驾驶人在一个记分周期内累积记分达到12分的，公安机关交通管理部门将扣留其机动车驾驶证。", "T", "一个记分周期内满12分的，扣留驾驶证并参加满分学习、考试。"),
	J("j10", "打开左转向灯开关，（如图所示）左转向指示灯闪烁。", "T", "左转向开关打开后，仪表板上的左转向指示灯应闪烁。"),
	J("j11", "驾驶机动车在没有交通信号的路口遇到前方车辆停车列队时，可从两侧超越进入路口。", "F", "不得从两侧超越排队车辆进入路口，应依次等候。"),
	J("j12", "机动车仪表板上（如图所示）一直亮，表示发动机控制系统故障。", "T", "发动机故障灯常亮表示发动机电控系统存在故障，应尽快检修。"),
	J("j13", "驾驶机动车遇到前方车辆停车排队等候或者缓慢行驶时，可借对向车道超车。", "F", "排队或缓慢行驶时不得借对向车道超车。"),
	J("j14", "驾驶机动车下陡坡时不得熄火或者空挡滑行。", "T", "下陡坡熄火或空挡滑行会失去发动机制动，非常危险，法规明确禁止。"),
	J("j15", "造成致人轻伤以上交通事故后逃逸的，一次记12分。", "T", "造成交通事故后逃逸，尚不构成犯罪的，一次记12分。"),
	J("j16", "驾驶人有使用其他车辆号牌、行驶证嫌疑的，交通警察可依法扣留车辆。", "T", "使用伪造、变造或其他车辆号牌、行驶证的，可扣留车辆。"),
	J("j17", "机动车驾驶人补领机动车驾驶证后，即可销毁原驾驶证。", "F", "原驾驶证作废，但不能自行销毁应上交或按要求处理；补领后原证作废不得继续使用。"),
	J("j18", "驾驶机动车变更车道时，应提前开启转向灯，注意观察，保持安全距离，驶入新车道。", "T", "变更车道必须提前打灯、观察、确认安全后再驶入。"),
	J("j19", "如图所示，驾驶机动车遇前方交叉路口交通阻塞时，可进入路口等候。", "F", "前方路口阻塞时，即便是绿灯也不得进入路口，以免造成更严重拥堵。"),
	J("j20", "夜间驾驶机动车在窄路、窄桥会车时应当使用远光灯。", "F", "窄路窄桥会车应使用近光灯，远光灯会使对方眩目。"),
	J("j21", "驾驶机动车通过急弯路时，最高速度不能超过每小时30公里。", "T", "通过急弯路、窄路、窄桥、掉头、转弯、下陡坡时，最高时速不得超过30公里。"),
	J("j22", "机动车在抵押登记、质押备案期间不可以进行转让。", "T", "抵押登记、质押备案期间不得办理转让登记。"),
	J("j23", "驾驶机动车超车时，前方车辆不减速让路，可连续鸣喇叭催促。", "F", "对方不让时不得强行超车，更不得连续鸣喇叭催促。"),
	J("j24", "驾驶人一边驾车，一边打手持电话是违法行为。", "T", "驾驶机动车不得以手持方式使用电话，属于违法行为。"),
	J("j25", "如图所示，A车在此处停车是可以的。", "F", "人行横道、施工地段、交叉路口等地点禁止停车。"),
	J("j26", "驾驶机动车在道路上发生交通事故，当事人不能自行移动车辆的，应当保护现场并立即报警。", "T", "车辆无法安全移动时应保护现场、抢救伤员并立即报警。"),
	J("j27", "机动车驾驶证有效期分为6年、10年、长期。", "T", "初次申领有效期6年，换证后可为10年或长期。"),
	J("j28", "驾驶人将机动车交给驾驶证被吊销的人驾驶的，交通警察可依法扣留车辆。", "T", "将车交给无证或驾驶证被吊销、暂扣的人驾驶，可扣留车辆。"),
	J("j29", "小型汽车驾驶人发生交通事故造成人员死亡，承担同等以上责任未被吊销驾驶证的，应当在记分周期结束后30日内接受审验。", "T", "发生死亡事故且负同等以上责任的，应按规定接受审验。"),
	J("j30", "在交叉路口遇到这种情况享有优先通行权。", "F", "转弯车应让直行车先行，右转让左转，相对方向行驶的右转让左转。"),
	J("j31", "驾驶机动车遇紧急情况避险时，要沉着冷静，坚持先避人后避物的原则。", "T", "紧急避险应先保障人身安全，先避人后避物。"),
	J("j32", "驾驶机动车行经漫水路或者漫水桥时，应当停车察明水情，确认安全后低速通过。", "T", "不明水情不得冒险通行，必须下车察看。"),
	J("j33", "打开前雾灯开关，（如图所示）亮起前雾灯指示灯。", "T", "前雾灯开关打开后，相应指示灯应点亮。"),
	J("j34", "驾驶机动车在这种情况下不能左转弯。", "T", "禁止左转标志或红灯左转方向时不得左转。"),
	J("j35", "驾驶机动车在雾天行车应开启雾灯和危险报警闪光灯。", "T", "雾天应开启雾灯、示廓灯、前后位灯，能见度很低时还应开危险报警闪光灯。"),
	J("j36", "这个标志的含义是告示前方是拥堵路段，注意减速慢行。", "F", "需根据具体标志判断；很多类似标志表示事故易发路段或施工，并非都是拥堵路段。"),
	J("j37", "机动车在道路上发生轻微交通事故且事实清楚，当事人可以先撤离现场再自行协商处理损害赔偿事宜。", "T", "财产损失且事实清楚、无争议的，可先撤离再协商，即“快处快赔”。"),
	J("j38", "如图所示，在这种情况下只要后方无来车，可以倒车。", "F", "铁路道口、交叉路口、单行路、桥梁、陡坡、隧道和交通繁华路段不得倒车。"),
	J("j39", "驾驶人有使用其他车辆保险标志嫌疑的，交通警察可依法扣留车辆。", "T", "使用伪造、变造或其他车辆保险标志的，可扣留车辆。"),
	J("j40", "驾驶机动车在高速公路上倒车、逆行、穿越中央分隔带掉头的，一次记12分。", "F", "在高速公路倒车、逆行、穿越中央分隔带掉头，一次记9分。"),
	J("j41", "驾驶拼装的机动车上道路行驶的，公安机关交通管理部门应当予以收缴，强制报废。", "T", "拼装车、报废车上路应收缴并强制报废，对驾驶人依法处罚。"),
	J("j42", "驾驶人因服兵役、出国（境）等原因无法办理驾驶证期满换证、审验、提交身体条件证明的，可以申请延期。", "T", "因服兵役、出国等可申请延期办理，延期期限最长不超过三年。"),
	J("j43", "如图所示，驾驶机动车遇左侧车道有车辆正在掉头时，可迅速借道超越。", "F", "遇前方车辆掉头应减速避让，不得加速抢行。"),
	J("j44", "机动车在高速公路上行驶，遇能见度小于200米时，车速不得超过每小时60公里。", "T", "能见度<200米，车速≤60km/h，与前车保持100米以上距离。"),
	J("j45", "车辆发生故障或事故后，应由车上的人员迅速转移到右侧路肩或应急车道内，并迅速报警。", "F", "应转移到右侧路肩、应急车道或护栏以外安全位置，不是停在应急车道里等待。"),
	J("j46", "如图所示，A车具有优先通行权。", "T", "直行车辆优先于转弯车辆。"),
	J("j47", "驾驶机动车违反禁令标志、禁止标线指示的，一次记6分。", "F", "违反禁令标志、禁止标线指示的，一次记3分。"),
	J("j48", "夜间会车时，对面来车未关闭远光灯，应当减速并交替使用远近光灯提醒对方。", "T", "可交替使用远近光灯示意，必要时减速或停车。"),
	J("j49", "在道路上发生交通事故造成人身伤亡时，要立即抢救受伤人员并迅速报警。", "T", "救人第一，同时保护现场、迅速报警。"),
	J("j50", "驾驶机动车行经铁路道口，须依次通过，不得掉头、倒车、超车。", "T", "铁路道口禁止掉头、倒车、超车。"),
	J("j51", "机动车驾驶人造成重大交通事故后逃逸，构成犯罪的，吊销驾驶证且终生不得重新取得。", "T", "交通肇事逃逸构成犯罪的，终生禁驾。"),
	J("j52", "如图所示，驾驶机动车在这样的路段要注意观察，随时准备停车。", "T", "学校、村庄、人行横道等路段应减速，观察行人动态。"),
	J("j53", "驾驶人驾驶有达到报废标准嫌疑的机动车上道路行驶的，交通警察可依法予以扣留。", "T", "涉嫌达到报废标准的车辆可被扣留检验。"),
	J("j54", "年龄在70周岁以上的机动车驾驶人，应当每年进行一次身体检查。", "T", "70周岁以上驾驶人每年体检一次，提交身体条件证明。"),
	J("j55", "如图所示，驾驶机动车在路口遇到这种信号灯亮时，要在停止线前停车瞭望。", "T", "红灯应在停止线以外停车等候。"),
	J("j56", "驾驶机动车在道路上掉头时，应当提前开启左转向灯。", "T", "掉头属于向左改变行驶方向，应提前开左转向灯。"),
	J("j57", "机动车发生财产损失事故，当事人对事实及成因无争议的，可自行协商处理损害赔偿事宜。", "T", "仅造成财产损失且无争议的，可以自行协商。"),
	J("j58", "如图所示，在这种情况下可以进入路口等待通行。", "F", "即使想左转，若会堵住路口也不得进入，应在停止线外等候。"),
	J("j59", "驾驶机动车不按规定避让校车的，一次记6分。", "T", "不按规定避让校车一次记6分。"),
	J("j60", "机动车驾驶人联系方式变更的，无需向车辆管理所备案。", "F", "联系电话等信息变更的，应在30日内向车管所备案。"),
	J("j61", "在高速公路上行驶，遇有能见度小于100米的气象条件时，应选择最近的出口尽快驶离。", "T", "能见度<50米时应从最近出口驶离；能见度<100米车速≤40km/h。遇极端低能见度应尽快驶离高速。"),
	J("j62", "机动车在高速公路上行驶，不得倒车、逆行、穿越中央分隔带掉头或者在车行道内停车。", "T", "高速公路严禁倒车、逆行、穿越中央分隔带掉头及在行车道停车。"),
	J("j63", "驾驶机动车在沙尘天气条件下行车不用开启前照灯，只需要开启示廓灯。", "F", "沙尘、冰雹、雨、雪、雾等低能见度天气应开启前照灯、示廓灯和后位灯。"),
	J("j64", "如图所示，红圈中标记的是禁停标线，此处可以临时停车。", "F", "禁止停车标线处不得停车，包括临时停车。"),
	J("j65", "驾驶人有使用伪造、变造机动车驾驶证嫌疑的，交通警察可依法扣留其机动车驾驶证。", "T", "涉嫌伪造、变造驾驶证的，可扣留证件并调查。"),
	J("j66", "如图所示，A车可以通过路口。", "F", "对向或本向信号为红灯时不得通行。"),
	J("j67", "驾驶机动车在路口遇到这种信号灯亮时，要减速进入路口。", "F", "红灯应停车，不是减速进入。"),
	J("j68", "打开位置灯开关，（如图所示）亮起示廓灯。", "T", "位置灯即示廓灯，打开后相应指示灯点亮。"),
	J("j69", "驾驶机动车在道路上靠路边停车过程中，前方出现这种情况，可以说声对不起，让对方先让一下。", "F", "应确保安全后再停车，不得妨碍其他车辆和行人通行。"),
	J("j70", "如图所示，驾驶机动车遇右侧车道有车辆正在汇入时，应迅速向左变道。", "F", "应减速或稍作调整让汇入车辆，不得突然变道。"),
	J("j71", "机动车仪表板上（如图所示）亮时，提醒发动机需要补充机油。", "T", "机油压力/油量报警灯亮起表示机油不足或压力过低，应立即检查。"),
	J("j72", "驾驶人违反交通运输管理法规发生重大事故后，因逃逸致人死亡的，处7年以上有期徒刑。", "T", "因逃逸致人死亡的，处七年以上有期徒刑。"),
	J("j73", "如图所示，在这种情况下只要后方无来车，可以掉头。", "F", "有禁止掉头标志或实线处不得掉头。"),
	J("j74", "驾驶机动车在高速公路上行驶，能见度小于200米时，与同车道前车应保持100米以上的距离。", "T", "能见度<200米，车速≤60km/h，距前车100米以上。"),
	J("j75", "车辆发生爆胎后，驾驶人在尚未控制住车速前，不要冒险使用行车制动器停车，以避免车辆横甩发生更大的险情。", "T", "爆胎后先控制方向、利用发动机制动减速，不要猛踩刹车。"),
	J("j76", "如图所示，驾驶机动车在路口前遇到这种情况时要停车让行。", "T", "停车让行标志或行人正在通过人行横道时必须停车让行。"),
	J("j77", "这个标志的含义是告示前方道路有障碍物，车辆左侧绕行。", "T", "左侧绕行标志指示车辆从左侧绕过障碍。"),
	J("j78", "机动车驾驶人在实习期内不得驾驶公共汽车、营运客车或者执行任务的警车、消防车、救护车、工程救险车以及载有爆炸物品、易燃易爆化学物品、剧毒或者放射性等危险物品的机动车。", "T", "实习期驾驶范围有严格限制。"),
	J("j79", "如图所示，驾驶机动车遇到这种情况，可以借对向车道进行超车。", "F", "实线或对向有来车、视线不良时不得借对向车道超车。"),
	J("j80", "已注册登记的机动车达到国家规定的强制报废标准的，应当依法办理注销登记。", "T", "达到强制报废标准必须办理注销登记。"),
	S("s1", "驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？", [
		"违章行为",
		"违法行为",
		"过失行为",
		"违规行为"
	], "B", "违反道路交通安全法的行为属于违法行为。"),
	S("s2", "机动车驾驶人违法驾驶造成重大交通事故构成犯罪的，依法追究什么责任？", [
		"刑事责任",
		"民事责任",
		"经济责任",
		"直接责任"
	], "A", "构成犯罪的依法追究刑事责任。"),
	S("s3", "机动车驾驶人初次申领驾驶证后的实习期是多长时间？", [
		"6个月",
		"12个月",
		"16个月",
		"18个月"
	], "B", "实习期为核发驾驶证之日起12个月。"),
	S("s4", "驾驶人在下列哪种情况下不能驾驶机动车？", [
		"饮酒后",
		"喝茶后",
		"喝咖啡后",
		"喝牛奶后"
	], "A", "饮酒、服用国家管制的精神药品或麻醉药品后不得驾驶。"),
	S("s5", "醉酒驾驶机动车的，由公安机关交通管理部门约束至酒醒，吊销机动车驾驶证，依法追究刑事责任；多长时间内不得重新取得机动车驾驶证？", [
		"5年",
		"10年",
		"20年",
		"终生"
	], "A", "醉驾吊销驾驶证，五年内不得重新取得。"),
	S("s6", "驾驶报废机动车上道路行驶的驾驶人，除按规定罚款外，还应当受到哪种处理？", [
		"撤销驾驶许可",
		"收缴驾驶证",
		"强制恢复车况",
		"吊销驾驶证"
	], "D", "驾驶已达报废标准的机动车上路，吊销驾驶证。"),
	S("s7", "对驾驶已达到报废标准的机动车上路行驶的驾驶人，会给予下列哪种处罚？", [
		"处15日以下拘留",
		"吊销机动车驾驶证",
		"处20以上200以下罚款",
		"追究刑事责任"
	], "B", "驾驶报废车上路，吊销驾驶证，该车强制报废。"),
	S("s8", "驾驶拼装机动车上路行驶的驾驶人，将会受到下列哪种处罚？", [
		"处15日以下拘留",
		"依法追究刑事责任",
		"处200以上2000以下罚款",
		"吊销机动车驾驶证"
	], "D", "驾驶拼装车上路，由公安交管部门收缴，强制报废，吊销驾驶证。"),
	S("s9", "驾驶人有哪种情形，交通警察可依法扣留机动车驾驶证？", [
		"饮酒后驾驶机动车",
		"超过规定时速10%",
		"疲劳后驾驶机动车",
		"行车中未系安全带"
	], "A", "饮酒后驾驶可扣留驾驶证；超速10%一般罚款不扣证。"),
	S("s10", "道路交通安全违法行为累积记分的周期是多长时间？", [
		"3个月",
		"6个月",
		"12个月",
		"24个月"
	], "C", "记分周期为12个月，从驾驶证初次领取之日起计算。"),
	S("s11", "机动车驾驶证被依法扣押、扣留、暂扣期间，不得申请什么？", [
		"机动车登记",
		"补发机动车驾驶证",
		"变更机动车登记",
		"补办机动车保险"
	], "B", "被扣期间不得申请补发驾驶证。"),
	S("s12", "以欺骗、贿赂等不正当手段取得驾驶证被依法收缴、注销后，多长时间内不得重新申请？", [
		"3年内",
		"10年内",
		"20年内",
		"终生"
	], "A", "以欺骗、贿赂手段取得驾驶许可的，3年内不得再次申领。"),
	S("s13", "驾驶人因服兵役、出国（境）等原因无法到公安机关换证时，可以书面委托他人办理，延期最长不超过多少年？", [
		"1年",
		"2年",
		"3年",
		"5年"
	], "C", "延期期限最长不超过三年。"),
	S("s14", "机动车在道路上发生故障，需要停车排除时，驾驶人应该怎么办？", [
		"停在原地等救援",
		"开启危险报警闪光灯",
		"将车停到人行道上",
		"开启前照灯"
	], "B", "应立即开启危险报警闪光灯，将车移至不妨碍交通的地方。"),
	S("s15", "机动车在道路上发生故障，难以移动时应当在车后设置警告标志，警告标志应设置在故障车后多少米以外？", [
		"10米",
		"20米",
		"50米",
		"150米"
	], "C", "普通道路警告标志设在来车方向50米至150米处；高速公路150米以外。本题指一般道路，为50米以外。"),
	S("s16", "同车道行驶的车辆前方遇到下列哪种车辆不得超车？", [
		"大型客货车",
		"出租汽车",
		"执行任务的救护车",
		"公共汽车"
	], "C", "不得超越执行任务的警车、消防车、救护车、工程救险车。"),
	S("s17", "驾驶机动车在高速公路遇到能见度低于100米的气象条件时，车速不得超过多少？", [
		"40公里/小时",
		"60公里/小时",
		"80公里/小时",
		"90公里/小时"
	], "A", "能见度<100米，车速≤40km/h，距前车50米以上。"),
	S("s18", "进入减速车道后，应怎样控制车速？", [
		"保持高速",
		"逐渐将车速降低到40公里/小时以下",
		"加速驶离",
		"停车观察"
	], "B", "进入减速车道后应降低车速，再平稳驶入匝道。"),
	S("s19", "机动车在高速公路上发生故障时，警告标志设置在故障车来车方向多少米以外？", [
		"50",
		"100",
		"150",
		"200"
	], "C", "高速公路故障车警告标志应设在来车方向150米以外。"),
	S("s20", "夜间驾驶机动车在窄路、窄桥会车时应使用？", [
		"远光灯",
		"雾灯",
		"近光灯",
		"危险报警闪光灯"
	], "C", "窄路窄桥会车使用近光灯。"),
	S("s21", "这个标志是何含义？", [
		"停车让行",
		"减速让行",
		"禁止通行",
		"会车让行"
	], "A", "八角形内“停”字为停车让行标志。", "stop"),
	S("s22", "这个标志是何含义？", [
		"停车让行",
		"减速让行",
		"禁止停车",
		"注意危险"
	], "B", "倒三角形空心标志为减速让行。", "yield"),
	S("s23", "这个标志是何含义？", [
		"禁止通行",
		"禁止驶入",
		"禁止停车",
		"减速让行"
	], "B", "红底白色横杠圆牌为禁止驶入。", "no-entry"),
	S("s24", "这个标志是何含义？", [
		"禁止驶入",
		"禁止通行",
		"禁止停车",
		"停车让行"
	], "B", "红圈白底无图案为禁止通行。", "no-pass"),
	S("s25", "这个标志是何含义？", [
		"禁止临时停车",
		"禁止停车",
		"禁止长时停车",
		"停车"
	], "B", "蓝底红圈红杠为禁止停车。", "no-parking"),
	S("s26", "这个标志是何含义？", [
		"禁止停车",
		"禁止临时停车和长时停车",
		"禁止鸣喇叭",
		"解除禁止停车"
	], "B", "蓝底红圈加交叉杠为禁止长时和临时停车。", "no-stopping"),
	S("s27", "这个标志是何含义？", [
		"禁止鸣喇叭",
		"解除禁止鸣喇叭",
		"注意鸣喇叭",
		"鸣喇叭"
	], "A", "红圈划掉喇叭为禁止鸣喇叭。", "no-horn"),
	S("s28", "这个标志是何含义？", [
		"限制高度40米",
		"限制质量40吨",
		"限制速度40公里/小时",
		"解除限速40公里/小时"
	], "C", "红圈内数字为限制速度标志。", "speed-40"),
	S("s29", "这个标志是何含义？", [
		"限制速度40公里/小时",
		"道路最低速度40公里/小时",
		"解除限制速度",
		"预告速度40公里/小时"
	], "C", "斜杠划掉限速数字为解除限制速度。", "speed-end"),
	S("s30", "这个标志是何含义？", [
		"人行横道",
		"注意行人",
		"注意儿童",
		"学校区域"
	], "A", "蓝底白色斑马线为人行横道指示标志。", "crosswalk"),
	S("s31", "这个标志是何含义？", [
		"人行横道",
		"注意行人",
		"注意儿童",
		"步行街"
	], "B", "黄底三角形行人图案为注意行人警告标志。", "pedestrian"),
	S("s32", "这个标志是何含义？", [
		"注意行人",
		"注意儿童",
		"学校",
		"人行横道"
	], "B", "黄底两个儿童图案为注意儿童。", "children"),
	S("s33", "这个标志是何含义？", [
		"注意危险",
		"注意障碍",
		"注意事故",
		"注意施工"
	], "A", "黄底感叹号为注意危险。", "danger"),
	S("s34", "这个标志是何含义？", [
		"注意危险",
		"注意施工",
		"注意障碍物",
		"注意慢行"
	], "B", "黄底工人图案或栏栅图案为施工标志。", "construction"),
	S("s35", "这个标志是何含义？", [
		"隧道",
		"涵洞",
		"桥梁",
		"地下通道"
	], "A", "黄底拱形图案为隧道警告标志。", "tunnel"),
	S("s36", "这个标志是何含义？", [
		"禁止鸣喇叭",
		"鸣喇叭",
		"解除禁止鸣喇叭",
		"注意喇叭"
	], "B", "蓝底喇叭图案为鸣喇叭指示标志。", "honk"),
	S("s37", "这个标志是何含义？", [
		"禁止向左转弯",
		"禁止向右转弯",
		"可以向左转弯",
		"直行"
	], "A", "红圈划掉左转箭头为禁止向左转弯。", "no-left"),
	S("s38", "这个标志是何含义？", [
		"单行路",
		"直行",
		"向右转弯",
		"禁止直行"
	], "B", "蓝底向上箭头为直行指示标志。", "straight"),
	S("s39", "这个标志是何含义？", [
		"环岛行驶",
		"向右转弯",
		"向左转弯",
		"立交直行"
	], "A", "蓝底环形箭头为环岛行驶。", "roundabout"),
	S("s40", "这个标志是何含义？", [
		"禁止超车",
		"禁止借道",
		"禁止变道",
		"解除禁止超车"
	], "A", "红圈内两车并排、一红一黑为禁止超车。", "no-overtake"),
	S("s41", "这个标志是何含义？", [
		"停车场",
		"停车让行",
		"休息区",
		"禁止停车"
	], "A", "蓝底P字为停车场。", "parking"),
	S("s42", "这个标志是何含义？", [
		"限制速度60公里/小时",
		"道路最低速度60公里/小时",
		"建议速度60公里/小时",
		"解除限速60"
	], "B", "蓝底白色数字为最低限速。", "min-speed"),
	S("s43", "这个标志是何含义？", [
		"高速公路起点",
		"高速公路终点",
		"高速公路入口预告",
		"高速公路收费站"
	], "A", "绿底“高速”及公路图案为高速公路起点。", "highway"),
	S("s44", "这个标志是何含义？", [
		"路面不平",
		"路面低洼",
		"路面湿滑",
		"注意横风"
	], "C", "黄底轮胎侧滑轨迹为路面湿滑。", "slippery"),
	S("s45", "这个标志是何含义？", [
		"注意落石",
		"傍山险路",
		"注意滑坡",
		"注意危桥"
	], "A", "黄底山体落石图案为注意落石。", "rocks"),
	S("s46", "这个标志是何含义？", [
		"禁止掉头",
		"准许掉头",
		"靠左行驶",
		"靠右行驶"
	], "B", "蓝底掉头箭头为准许掉头。", "u-turn"),
	S("s47", "这个标志是何含义？", [
		"停车让行",
		"减速让行",
		"会车让行",
		"禁止会车"
	], "C", "红倒三角内嵌为会车让行。", "give-way"),
	S("s48", "这个标志是何含义？", [
		"准许掉头",
		"禁止掉头",
		"禁止左转",
		"环岛行驶"
	], "B", "红圈划掉掉头箭头为禁止掉头。", "no-u-turn"),
	S("s49", "这个标志是何含义？", [
		"限制宽度3.5米",
		"限制高度3.5米",
		"限制质量3.5吨",
		"解除限制高度"
	], "B", "红圈内限高数字及横线为限制高度。", "height"),
	S("s50", "这个标志是何含义？", [
		"公交车站",
		"公交车专用车道",
		"大型车车道",
		"多乘员车道"
	], "B", "蓝底“公交车道”为公交专用车道。", "lane-bus"),
	S("s51", "驾驶机动车应当随身携带哪些证件？", [
		"驾驶证",
		"驾驶证和行驶证",
		"工作证",
		"身份证"
	], "B", "上路行驶应随车携带驾驶证和行驶证。"),
	S("s52", "驾驶机动车通过没有交通信号的交叉路口时，应当怎样通行？", [
		"减速慢行",
		"加速通过",
		"鸣喇叭通过",
		"抢行通过"
	], "A", "没有交通信号的交叉路口应减速慢行，让行人和优先方向车辆先行。"),
	S("s53", "行车中遇到对向来车占道行驶，应怎样做？", [
		"紧靠道路中心行驶",
		"主动给对方让行",
		"用大灯警示对方",
		"逼对方回本车道"
	], "B", "文明驾驶，主动让行，避免对峙。"),
	S("s54", "驾驶机动车遇到这种信号灯不断闪烁时，要做什么？", [
		"迅速通过",
		"停车等待",
		"加速通过",
		"停车瞭望，确认安全后通过"
	], "D", "路口黄灯闪烁时，应停车瞭望，确认安全后通过。"),
	S("s55", "驾驶人有下列哪种违法行为一次记6分？", [
		"使用其他车辆行驶证",
		"车速超过规定时速50%以上",
		"违法占用应急车道",
		"饮酒后驾驶机动车"
	], "C", "驾驶机动车在高速公路或城市快速路以外的道路上不按规定车道行驶等多项记分；违法占用应急车道一次记6分。饮酒后驾驶记12分。"),
	S("s56", "上道路行驶的机动车未悬挂机动车号牌的，一次记多少分？", [
		"2分",
		"3分",
		"6分",
		"12分"
	], "D", "上道路行驶的机动车未悬挂机动车号牌，或故意遮挡、污损、不按规定安装号牌的，一次记12分。"),
	S("s57", "驾驶人连续驾驶4小时以上，停车休息时间不得少于多少分钟？", [
		"5分钟",
		"10分钟",
		"15分钟",
		"20分钟"
	], "D", "连续驾驶机动车超过4小时应停车休息，休息时间不少于20分钟。"),
	S("s58", "机动车在高速公路行驶，下列做法正确的是？", [
		"可在应急车道停车上下人员",
		"可在减速车道停车",
		"非紧急情况时不得在应急车道行驶或停车",
		"可在路肩上停车休息"
	], "C", "非紧急情况不得占用应急车道。"),
	S("s59", "在这种情形下被超机动车驾驶人怎样做是正确的？", [
		"靠道路中心行驶",
		"加速行驶",
		"减速、让路",
		"不变速"
	], "C", "在没有超车条件的情况下被超，应减速靠右让路。"),
	S("s60", "驾驶机动车遇有前方交叉路口交通阻塞时，应怎么做？", [
		"依次停在路口内等候",
		"可借对向车道通过",
		"在路口停止线外依次停车等候",
		"从右空当中穿插通过"
	], "C", "前方路口阻塞时不得进入路口，应在停止线以外等候。"),
	S("s61", "路口最前端的双白实线是什么含义？", [
		"等候放行线",
		"停车让行线",
		"减速让行线",
		"左弯待转线"
	], "A", "停止线（白色实线）是等候放行的停车位置。"),
	S("s62", "红色圆圈内标线含义是什么？", [
		"大型车掉头",
		"小型车掉头",
		"禁止掉头",
		"禁止左转"
	], "C", "黄色网状线或禁止掉头标线处不得掉头。"),
	S("s63", "驾驶机动车跨越双实线行驶属于什么行为？", [
		"违章行为",
		"违法行为",
		"过失行为",
		"违规行为"
	], "B", "违反禁止标线指示属于违法行为。"),
	S("s64", "遇有这种排队等候的情形要注意什么？", [
		"依次排队",
		"从左侧借道超车",
		"从右侧借道超车",
		"从两侧穿插"
	], "A", "遇前方停车排队应依次等候，不得穿插或占用对向车道。"),
	S("s65", "驾驶人未携带哪种证件驾驶机动车上路，交通警察可依法扣留车辆？", [
		"机动车登记证",
		"机动车行驶证",
		"机动车保险单",
		"出厂合格证明"
	], "B", "未随车携带行驶证的，可扣留机动车。"),
	S("s66", "年龄在60周岁以上的机动车驾驶人，应当每多长时间提交一次身体条件证明？", [
		"6个月",
		"1年",
		"2年",
		"3年"
	], "B", "60周岁以上不满70周岁的驾驶人，应当每年进行一次身体检查。"),
	S("s67", "驾驶机动车在道路上靠路边停车过程中，以下做法正确的是？", [
		"提前开启右转向灯",
		"可直接停车",
		"可停车后再开转向灯",
		"下车后再开转向灯"
	], "A", "路边停车应提前开启右转向灯，观察确认安全后停车。"),
	S("s68", "车辆涉水后，应保持低速行驶，怎样操作制动踏板才能恢复制动效果？", [
		"间断轻踩",
		"持续重踩",
		"间断重踩",
		"持续轻踩"
	], "A", "涉水后制动效能下降，应间断轻踩制动使制动盘干燥。"),
	S("s69", "遇前方道路有车辆停车排队时，应怎么做？", [
		"鸣喇叭催促",
		"从左侧超越",
		"从右侧超越",
		"依次排队等候"
	], "D", "应依次排队，不得加塞或从两侧超越。"),
	S("s70", "驾驶机动车通过铁路道口时，最高速度不能超过多少？", [
		"60公里/小时",
		"50公里/小时",
		"40公里/小时",
		"30公里/小时"
	], "D", "通过铁路道口、急弯路、窄路、窄桥时最高时速不得超过30公里。"),
	S("s71", "同车道行驶的车辆前方遇到执行任务的警车时应当怎样做？", [
		"鸣喇叭提醒",
		"加速超过",
		"预留出横向安全距离，减速让行",
		"紧随其后"
	], "C", "应减速让行，不得穿插或超越执行任务的特种车辆。"),
	S("s72", "在这种雨天跟车行驶时，应注意的事项是什么？", [
		"降低车速，保持更大的安全距离",
		"开启远光灯",
		"紧跟前车",
		"从左侧超越"
	], "A", "雨天路面湿滑、视线差，应降低车速并加大跟车距离。"),
	S("s73", "这一组交通警察手势是什么信号？", [
		"左转弯信号",
		"停止信号",
		"右转弯信号",
		"靠边停车信号"
	], "B", "交警手臂上举为停止信号。"),
	S("s74", "夜间在道路上会车应当在距相对方向来车多少米以外改用近光灯？", [
		"50米",
		"100米",
		"150米",
		"200米"
	], "C", "夜间会车应当在距相对方向来车150米以外改用近光灯。"),
	S("s75", "驾驶人有下列哪种违法行为一次记12分？", [
		"违反交通信号灯",
		"使用伪造、变造的机动车号牌",
		"驾驶机动车不按规定避让校车",
		"超速未达20%"
	], "B", "使用伪造、变造的机动车号牌一次记12分。闯红灯记6分。"),
	S("s76", "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度在100米以上200米以下，车速不得超过？", [
		"60公里/小时",
		"80公里/小时",
		"90公里/小时",
		"100公里/小时"
	], "A", "能见度<200米，车速不得超过60公里/小时。"),
	S("s77", "以下哪种行为处十日以下拘留，并处一千元以上二千元以下罚款，吊销机动车驾驶证？", [
		"因饮酒后驾驶机动车被处罚，再次饮酒后驾驶机动车",
		"饮酒后驾驶机动车",
		"醉酒驾驶机动车",
		"驾驶机动车不按规定避让校车"
	], "A", "因饮酒后驾驶被处罚，再次饮酒后驾驶的，处十日以下拘留，并处一千元以上二千元以下罚款，吊销驾驶证。"),
	S("s78", "驾驶人在驾驶证有效期满前多长时间申请换证？", [
		"30日内",
		"60日内",
		"90日内",
		"12日内"
	], "C", "应在驾驶证有效期满前九十日内申请换证。"),
	S("s79", "以下哪种证件是驾驶机动车上路行驶应当随车携带的？", [
		"机动车登记证",
		"出厂合格证",
		"机动车行驶证",
		"职业资格证"
	], "C", "应当随车携带机动车行驶证。"),
	S("s80", "驾驶机动车通过急弯路时，最高速度不能超过多少？", [
		"30公里/小时",
		"40公里/小时",
		"50公里/小时",
		"60公里/小时"
	], "A", "通过急弯路时最高时速不得超过30公里。"),
	S("s81", "遇到这种情形时，应怎么办？", [
		"迅速从车左侧超越",
		"保持距离紧跟其后",
		"迅速从车右侧超越",
		"减速停车或依次行驶"
	], "D", "遇前方车辆排队或缓慢行驶，应减速或依次等候。"),
	S("s82", "下列哪种标志是驾驶机动车上路行驶应当随车携带的？", [
		"机动车登记证",
		"机动车保险单",
		"机动车检验合格标志",
		"出厂合格证明"
	], "C", "应当按规定悬挂号牌，放置检验合格标志、保险标志，并随车携带行驶证、驾驶证。"),
	S("s83", "驾驶机动车遇到前方车辆停车排队等候或缓慢行驶时，以下做法正确的是？", [
		"可借道超车",
		"占用对面车道",
		"穿插等候的车辆",
		"依次排队"
	], "D", "应依次排队，不得穿插或占用对面车道。"),
	S("s84", "在这种路段如何行驶？", [
		"加速冲过坡顶",
		"减速观察坡顶对向来车",
		"骑轧中心线",
		"在坡顶超车"
	], "B", "通过坡顶应减速，防止与对向来车交会发生意外。"),
	S("s85", "驾驶机动车在冰雪道路行驶时，最高速度不能超过多少？", [
		"20公里/小时",
		"30公里/小时",
		"40公里/小时",
		"50公里/小时"
	], "B", "在冰雪道路行驶时最高时速不得超过30公里。"),
	S("s86", "同车道行驶的车辆遇前方车辆停车排队或缓慢行驶时，应怎么做？", [
		"从空间较大的一侧超越",
		"从左右两侧交替超越",
		"依次排队等候",
		"鸣喇叭催促"
	], "C", "应依次排队等候。"),
	S("s87", "以下交通标志中，哪项是禁止标志？", [
		"减速让行",
		"停车让行",
		"禁止驶入",
		"会车先行"
	], "C", "禁止驶入属于禁令标志。"),
	S("s88", "机动车在高速公路上行驶，遇有雾、雨、雪且能见度小于50米时，以下做法正确的是？", [
		"从最近的出口迅速驶离高速公路",
		"在应急车道上停车等待",
		"在路肩上停车等待",
		"加速驶离雾区"
	], "A", "能见度小于50米时，车速不得超过20km/h，并从最近出口迅速驶离高速公路。"),
	S("s89", "驾驶机动车在夜间超车时怎样使用灯光？", [
		"变换远、近光灯",
		"开启雾灯",
		"开启危险报警闪光灯",
		"提前关闭前照灯"
	], "A", "夜间超车应变换远近光灯提醒前车。"),
	S("s90", "这个路口允许车辆怎样行驶？", [
		"直行或向右转弯",
		"向左转弯",
		"掉头",
		"向右转弯"
	], "A", "蓝色指示箭头指向直行和右转时，只允许这两种通行方式。", "straight"),
	S("s91", "下列哪种情况可以向消防、急救、公安等部门求助？", [
		"车辆发生故障",
		"发生交通事故造成人员伤亡",
		"车辆燃油耗尽",
		"车辆迷了路"
	], "B", "发生人员伤亡应立即拨打122、120等求助。"),
	S("s92", "驾驶机动车在道路上靠路边停车时，以下做法正确的是？", [
		"可直接停车",
		"停车后再开转向灯",
		"提前开启右转向灯",
		"下车后再开转向灯"
	], "C", "路边停车应提前开启右转向灯。"),
	S("s93", "机动车在道路上发生故障难以移动时要在车后设置警告标志，并同时采取什么措施？", [
		"开启近光灯",
		"开启危险报警闪光灯",
		"开启远光灯",
		"开启示廓灯"
	], "B", "应同时开启危险报警闪光灯。"),
	S("s94", "驾驶机动车遇到这种信号灯不断闪烁时怎样通行？", [
		"迅速通过",
		"加速通过",
		"停车等待",
		"停车瞭望，确认安全后通过"
	], "D", "黄灯闪烁应停车瞭望确认安全后通过。"),
	S("s95", "以下哪项行为会被一次记12分？", [
		"驾驶机动车不按规定避让校车",
		"驾驶机动车违反禁令标志指示",
		"造成致人轻伤以上或者死亡的交通事故后逃逸，尚不构成犯罪",
		"驾驶机动车行经人行横道不按规定减速"
	], "C", "造成交通事故后逃逸，尚不构成犯罪的，一次记12分。"),
	S("s96", "驾驶人在下列哪种情况下不能驾驶机动车？", [
		"饮酒后",
		"喝牛奶后",
		"喝咖啡后",
		"喝茶后"
	], "A", "饮酒后不得驾驶机动车。"),
	S("s97", "以下哪种行为处二百元以上二千元以下罚款？", [
		"违反道路交通信号灯",
		"驾驶已达到报废标准的机动车上道路行驶",
		"超过规定时速50%",
		"未悬挂机动车号牌"
	], "B", "驾驶报废车上路，由公安交管部门予以收缴，强制报废，对驾驶人处二百元以上二千元以下罚款，吊销驾驶证。"),
	S("s98", "路口转弯过程中，应怎样使用灯光？", [
		"开启危险报警闪光灯",
		"开启左转向灯",
		"开启右转向灯",
		"开启前照灯"
	], "B", "向左转弯应提前开启左转向灯。"),
	S("s99", "在这种天气条件下行车，应注意的事项是什么？", [
		"减速，集中注意力，小心驾驶",
		"加速通过积水路段",
		"紧跟前车",
		"开启远光灯"
	], "A", "雨、雪、雾等不良天气应减速并集中注意力。"),
	S("s100", "机动车仪表板上（如图所示）亮表示什么？", [
		"空气内循环",
		"侧面出风",
		"空气外循环",
		"风窗玻璃除霜"
	], "A", "空调内循环指示灯点亮表示车内空气循环。"),
	S("s101", "夜间在照明良好的道路上行驶时应使用？", [
		"远光灯",
		"雾灯",
		"近光灯",
		"危险报警闪光灯"
	], "C", "夜间在照明良好路段应使用近光灯。"),
	S("s102", "以下哪个标志禁止一切车辆驶入？", [
		"停车让行",
		"禁止驶入",
		"减速让行",
		"禁止通行"
	], "D", "红圈白底无图案为禁止通行，一切车辆不得进入。", "no-pass"),
	S("s103", "驾驶机动车通过没有交通信号、交通标志标线的交叉路口时，应怎样通行？", [
		"减速慢行，让右方道路来车先行",
		"加速抢行",
		"鸣喇叭直接通过",
		"从左侧快速通过"
	], "A", "没有让行条件的交叉路口，应让右方道路的来车先行。"),
	S("s104", "这个导向箭头是何含义？", [
		"指示向左转弯或掉头",
		"指示直行",
		"指示向右转弯",
		"指示直行或向左转弯"
	], "A", "带左转及掉头组合的导向箭头表示可以向左转弯或掉头。"),
	S("s105", "遇到这种跨线桥怎样会车？", [
		"减速靠右，观察对面来车",
		"加速抢先通过",
		"保持原速",
		"靠左行驶"
	], "A", "视线受阻的桥下或窄路应减速靠右。"),
	S("s106", "驾驶人在实习期内驾驶机动车上高速公路行驶，应当由持相应或包含其准驾车型驾驶证三年以上的驾驶人陪同。以下说法是否正确对应选项：", [
		"必须由持有相应准驾车型驾驶证三年以上的驾驶人陪同",
		"可独自上路",
		"可由任何驾驶人陪同",
		"实习期不得上高速"
	], "A", "实习期上高速须由持相应或包含其准驾车型驾驶证三年以上的驾驶人陪同。"),
	S("s107", "以下哪种行为会被一次记9分？", [
		"驾驶机动车在高速公路上倒车、逆行、穿越中央分隔带掉头",
		"违反交通信号灯",
		"不按规定避让校车",
		"驾驶机动车超过规定时速未达20%"
	], "A", "在高速公路倒车、逆行、穿越中央分隔带掉头一次记9分。"),
	S("s108", "驾驶机动车跨越双白实线是什么行为？", [
		"违章行为",
		"违法行为",
		"过失行为",
		"违规行为"
	], "B", "违反禁止标线指示属于违法行为。"),
	S("s109", "机动车在道路上发生故障，需要停车排除时，驾驶人应该怎么办？", [
		"开启危险报警闪光灯",
		"在车后设置警告标志后再下车",
		"将车停到人行道上",
		"开启前照灯"
	], "A", "应立即开启危险报警闪光灯。"),
	S("s110", "这个路口允许车辆怎样行驶？", [
		"直行",
		"向右转弯",
		"直行或向右转弯",
		"向左转弯"
	], "C", "蓝色指示标志同时指向直行和右转时，允许直行或右转。", "straight")
];
function pickExam(size = 100) {
	const judge = shuffle(QUESTION_BANK.filter((q) => q.type === "judge"));
	const single = shuffle(QUESTION_BANK.filter((q) => q.type === "single"));
	const picked = [...judge.slice(0, 40), ...single.slice(0, 60)];
	const need = size - picked.length;
	if (need > 0) {
		const rest = shuffle(QUESTION_BANK.filter((q) => !picked.some((p) => p.id === q.id)));
		picked.push(...rest.slice(0, need));
	}
	return shuffle(picked).slice(0, size);
}
function examStats(questions, answers) {
	let correct = 0;
	let wrong = 0;
	let blank = 0;
	questions.forEach((q, i) => {
		const a = answers[i];
		if (!a || a.selected === null) {
			blank += 1;
			return;
		}
		if (a.selected === q.answer) correct += 1;
		else wrong += 1;
	});
	return {
		correct,
		wrong,
		blank,
		score: correct
	};
}
var STORAGE_KEY = "geek-jiakao-26";
function blankAnswers(n) {
	return Array.from({ length: n }, () => ({
		selected: null,
		judged: false
	}));
}
function persist(state) {
	if (typeof window === "undefined") return;
	const data = {
		candidate: state.candidate,
		passCount: state.passCount,
		screen: state.screen,
		exam: state.exam,
		result: state.result
	};
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	} catch {}
}
function load() {
	if (typeof window === "undefined") return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return {};
		return JSON.parse(raw);
	} catch {
		return {};
	}
}
function finishExam(exam, passCount) {
	const { correct, wrong, blank, score } = examStats(exam.questions, exam.answers);
	const passed = score >= 90;
	return {
		result: {
			score,
			passed,
			correct,
			wrong,
			blank,
			usedMs: Math.min(EXAM_DURATION_MS, Date.now() - exam.startedAt),
			questions: exam.questions,
			answers: exam.answers
		},
		passCount: passed ? passCount + 1 : passCount,
		screen: "result",
		exam: null,
		showSubmit: false,
		abortAsk: false,
		wrongAlert: null,
		pendingIndex: null
	};
}
function leaveCurrent(exam, nextIndex) {
	const i = exam.current;
	const q = exam.questions[i];
	const a = exam.answers[i];
	if (!q || !a || a.judged || a.selected === null) return {
		exam: nextIndex === "submit" ? exam : {
			...exam,
			current: nextIndex
		},
		wrong: null,
		pending: nextIndex === "submit" ? "submit" : null
	};
	const answers = exam.answers.map((item, idx) => idx === i ? {
		...item,
		judged: true
	} : item);
	const judgedExam = {
		...exam,
		answers
	};
	if (isCorrect(q, a.selected)) return {
		exam: nextIndex === "submit" ? judgedExam : {
			...judgedExam,
			current: nextIndex
		},
		wrong: null,
		pending: nextIndex === "submit" ? "submit" : null
	};
	return {
		exam: judgedExam,
		wrong: {
			correctLabel: q.type === "judge" ? q.answer === "T" ? "正确" : "错误" : `${q.answer}. ${q.options?.[q.answer.charCodeAt(0) - 65] ?? ""}`,
			explain: q.explain
		},
		pending: nextIndex
	};
}
var useExamStore = create((set, get) => ({
	hydrated: false,
	candidate: DEFAULT_CANDIDATE,
	passCount: 0,
	screen: "start",
	exam: null,
	result: null,
	showSubmit: false,
	abortAsk: false,
	wrongAlert: null,
	pendingIndex: null,
	hydrate: () => {
		if (get().hydrated) return;
		const saved = load();
		set({
			hydrated: true,
			candidate: {
				...DEFAULT_CANDIDATE,
				...saved.candidate
			},
			passCount: saved.passCount ?? 0,
			screen: saved.screen === "exam" && saved.exam ? "exam" : saved.screen === "result" && saved.result ? "result" : "start",
			exam: saved.exam ?? null,
			result: saved.result ?? null
		});
	},
	setCandidate: (patch) => {
		set({ candidate: {
			...get().candidate,
			...patch
		} });
		persist(get());
	},
	startExam: () => {
		const questions = pickExam();
		set({
			screen: "exam",
			exam: {
				questions,
				answers: blankAnswers(questions.length),
				current: 0,
				startedAt: Date.now(),
				durationMs: EXAM_DURATION_MS
			},
			result: null,
			showSubmit: false,
			abortAsk: false,
			wrongAlert: null,
			pendingIndex: null
		});
		persist(get());
	},
	resumeExam: () => {
		if (get().exam) set({ screen: "exam" });
	},
	selectAnswer: (key) => {
		const { exam } = get();
		if (!exam) return;
		const a = exam.answers[exam.current];
		if (!a || a.judged) return;
		const answers = exam.answers.map((item, idx) => idx === exam.current ? {
			...item,
			selected: key
		} : item);
		set({ exam: {
			...exam,
			answers
		} });
		persist(get());
	},
	goTo: (index) => {
		const { exam } = get();
		if (!exam) return;
		const clamped = Math.max(0, Math.min(exam.questions.length - 1, index));
		if (clamped === exam.current) return;
		const { exam: next, wrong, pending } = leaveCurrent(exam, clamped);
		set({
			exam: next,
			wrongAlert: wrong,
			pendingIndex: pending,
			showSubmit: pending === "submit"
		});
		persist(get());
	},
	next: () => {
		const { exam } = get();
		if (!exam) return;
		const target = Math.min(exam.questions.length - 1, exam.current + 1);
		if (target === exam.current) {
			get().requestSubmit();
			return;
		}
		get().goTo(target);
	},
	prev: () => {
		const { exam } = get();
		if (!exam) return;
		get().goTo(Math.max(0, exam.current - 1));
	},
	requestSubmit: () => {
		const { exam } = get();
		if (!exam) return;
		const { exam: next, wrong, pending } = leaveCurrent(exam, "submit");
		set({
			exam: next,
			wrongAlert: wrong,
			pendingIndex: pending,
			showSubmit: wrong ? false : true
		});
		persist(get());
	},
	cancelSubmit: () => set({
		showSubmit: false,
		pendingIndex: null
	}),
	confirmSubmit: () => {
		const { exam, passCount } = get();
		if (!exam) return;
		set(finishExam(exam, passCount));
		persist(get());
	},
	dismissWrong: () => {
		const { pendingIndex, exam } = get();
		if (pendingIndex === "submit") {
			set({
				wrongAlert: null,
				pendingIndex: null,
				showSubmit: true
			});
			return;
		}
		if (typeof pendingIndex === "number" && exam) {
			set({
				exam: {
					...exam,
					current: pendingIndex
				},
				wrongAlert: null,
				pendingIndex: null
			});
			persist(get());
			return;
		}
		set({
			wrongAlert: null,
			pendingIndex: null
		});
	},
	requestAbort: () => set({ abortAsk: true }),
	cancelAbort: () => set({ abortAsk: false }),
	confirmAbort: () => {
		set({
			abortAsk: false,
			screen: "start",
			exam: null,
			showSubmit: false,
			wrongAlert: null,
			pendingIndex: null
		});
		persist(get());
	},
	retry: () => get().startExam(),
	backHome: () => {
		set({
			screen: "start",
			exam: null,
			result: null,
			showSubmit: false
		});
		persist(get());
	}
}));
function liveStats(exam) {
	return examStats(exam.questions, exam.answers);
}
var KEYS_SINGLE = [
	"A",
	"B",
	"C",
	"D"
];
function Avatar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		className: "size-20 text-ink",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "38",
				fill: "#f4f4ea",
				stroke: "currentColor",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "30",
				r: "12",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 68c4-16 14-24 24-24s20 8 24 24",
				fill: "currentColor"
			})
		]
	});
}
function useRemain(startedAt, durationMs) {
	const [remain, setRemain] = (0, import_react.useState)(() => Math.max(0, durationMs - (Date.now() - startedAt)));
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setRemain(Math.max(0, durationMs - (Date.now() - startedAt)));
		}, 250);
		return () => window.clearInterval(id);
	}, [startedAt, durationMs]);
	return remain;
}
function ExamScreen() {
	const candidate = useExamStore((s) => s.candidate);
	const exam = useExamStore((s) => s.exam);
	const showSubmit = useExamStore((s) => s.showSubmit);
	const abortAsk = useExamStore((s) => s.abortAsk);
	const wrongAlert = useExamStore((s) => s.wrongAlert);
	const selectAnswer = useExamStore((s) => s.selectAnswer);
	const goTo = useExamStore((s) => s.goTo);
	const next = useExamStore((s) => s.next);
	const prev = useExamStore((s) => s.prev);
	const requestSubmit = useExamStore((s) => s.requestSubmit);
	const cancelSubmit = useExamStore((s) => s.cancelSubmit);
	const confirmSubmit = useExamStore((s) => s.confirmSubmit);
	const dismissWrong = useExamStore((s) => s.dismissWrong);
	const requestAbort = useExamStore((s) => s.requestAbort);
	const cancelAbort = useExamStore((s) => s.cancelAbort);
	const confirmAbort = useExamStore((s) => s.confirmAbort);
	if (!exam) return null;
	const q = exam.questions[exam.current];
	const a = exam.answers[exam.current];
	if (!q || !a) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamBody, {
		exam,
		q,
		a,
		candidate,
		showSubmit,
		abortAsk,
		wrongAlert,
		selectAnswer,
		goTo,
		next,
		prev,
		requestSubmit,
		cancelSubmit,
		confirmSubmit,
		dismissWrong,
		requestAbort,
		cancelAbort,
		confirmAbort
	});
}
function ExamBody({ exam, q, a, candidate, showSubmit, abortAsk, wrongAlert, selectAnswer, goTo, next, prev, requestSubmit, cancelSubmit, confirmSubmit, dismissWrong, requestAbort, cancelAbort, confirmAbort }) {
	const stats = liveStats(exam);
	const remain = useRemain(exam.startedAt, exam.durationMs);
	const judged = a.judged;
	const chosen = a.selected;
	const hintType = q.type === "judge" ? "判断题" : "单选题";
	const hintBody = q.type === "judge" ? "本题为判断题，请判断对错！" : "本题为单选题，请选择正确答案！";
	(0, import_react.useEffect)(() => {
		if (remain <= 0) confirmSubmit();
	}, [remain, confirmSubmit]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
			if (wrongAlert) {
				if (e.key === "Enter" || e.key === "Escape") dismissWrong();
				return;
			}
			if (showSubmit || abortAsk) return;
			const k = e.key.toLowerCase();
			if (q.type === "judge") {
				if (k === "a" || k === "1" || k === "y") selectAnswer("T");
				if (k === "b" || k === "2" || k === "n") selectAnswer("F");
			} else {
				if (k === "a" || k === "1") selectAnswer("A");
				if (k === "b" || k === "2") selectAnswer("B");
				if (k === "c" || k === "3") selectAnswer("C");
				if (k === "d" || k === "4") selectAnswer("D");
			}
			if (k === "arrowright" || k === "enter") next();
			if (k === "arrowleft") prev();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		q.type,
		selectAnswer,
		next,
		prev,
		wrongAlert,
		showSubmit,
		abortAsk,
		dismissWrong
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "exam-board mx-auto w-full max-w-7xl flex-1 p-2 sm:p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "area-side flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldsetBox, {
								legend: "极客驾考26版",
								bodyClassName: "px-3 py-4 text-center font-sans",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-base font-medium",
									children: [
										"第",
										candidate.station,
										"考台"
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldsetBox, {
								legend: "考生信息",
								className: "flex-1",
								bodyClassName: "flex flex-col items-center px-3 py-4 font-sans text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-3 w-full space-y-1 text-ink",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["姓名：", maskName(candidate.name)] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["性别：", candidate.gender] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["类型：", candidate.vehicleType] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "科目：科目一" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldsetBox, {
								legend: "剩余时间",
								bodyClassName: "px-3 py-3 text-center font-sans text-2xl font-semibold tabular-nums",
								children: formatTime(remain)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldsetBox, {
						legend: "考试题目",
						className: "area-question min-h-52",
						bodyClassName: "flex h-full min-h-0 flex-col gap-3 p-4 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-sans text-base leading-relaxed sm:text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mr-1 font-medium",
								children: [exam.current + 1, "、"]
							}), q.text]
						}), q.type === "judge" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 font-sans text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "A." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "B." })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5 font-sans text-base",
							children: q.options?.map((opt, i) => {
								const key = KEYS_SINGLE[i];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: cn("w-full rounded-sm px-1 py-1 text-left", chosen === key && !judged && "bg-grid-head/15", judged && chosen === key && !isCorrect(q, key) && "bg-bad/15", judged && q.answer === key && "bg-ok/15"),
									disabled: judged,
									onClick: () => selectAnswer(key),
									children: [
										key,
										". ",
										opt
									]
								}) }, key);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "area-grid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionGrid, {
							current: exam.current,
							answers: exam.answers,
							questions: exam.questions,
							onJump: goTo
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "area-answer flex flex-wrap items-center justify-between gap-3 border border-win-border bg-sheet px-3 py-2 font-sans text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["您选择的答案：", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 font-medium",
							children: q.type === "judge" ? chosen === "T" ? "正确" : chosen === "F" ? "错误" : "" : chosen ?? ""
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "选项：" }), q.type === "judge" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionFace, {
								label: "正确",
								active: chosen === "T",
								judged,
								right: q.answer === "T",
								onClick: () => selectAnswer("T"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-5",
									strokeWidth: 3
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionFace, {
								label: "错误",
								active: chosen === "F",
								judged,
								right: q.answer === "F",
								onClick: () => selectAnswer("F"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-5",
									strokeWidth: 3
								})
							})] }) : KEYS_SINGLE.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionFace, {
								label: key,
								active: chosen === key,
								judged,
								right: q.answer === key,
								onClick: () => selectAnswer(key),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-sm font-semibold",
									children: key
								})
							}, key))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "area-hint border border-grid-head bg-sheet px-3 py-2 font-sans text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-medium text-hint",
							children: ["操作提示：", hintType]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-ink",
							children: hintBody
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "area-nav flex items-center justify-end gap-2 border border-grid-head bg-sheet px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "win-btn min-h-11 px-4 py-1.5 text-sm",
								onClick: prev,
								disabled: exam.current === 0,
								children: "上一题"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "win-btn min-h-11 px-4 py-1.5 text-sm",
								onClick: next,
								children: "下一题"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "win-btn min-h-11 px-4 py-1.5 text-sm",
								onClick: requestSubmit,
								children: "交卷"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "area-media relative min-h-28 border border-win-border bg-sheet",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "absolute top-1/2 left-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper-2",
							"aria-label": "退出考试",
							onClick: requestAbort,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								className: "size-6",
								strokeWidth: 2.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-full items-center justify-center py-3",
							children: q.sign ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrafficSign, {
								id: q.sign,
								className: "size-28 sm:size-32"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-sm text-muted",
								children: "多媒体展示区"
							})
						})]
					})
				]
			}),
			wrongAlert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogShell, {
				title: "答题提示",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-5 bg-paper-2 px-6 py-5 font-sans text-base leading-relaxed text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-semibold text-bad",
							children: "回答错误！"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["正确答案：", wrongAlert.correctLabel] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: wrongAlert.explain
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogActions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "win-btn min-h-12 min-w-36 px-8 py-2 text-base",
					onClick: dismissWrong,
					children: "确定"
				}) })]
			}),
			showSubmit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogShell, {
				title: "考试确认窗口",
				wide: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-5 bg-paper-2 px-6 py-6 font-sans text-base leading-relaxed text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-medium",
							children: "操作提示："
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"你当前考试答对",
							stats.correct,
							"题，答错",
							stats.wrong,
							"题，未答",
							stats.blank,
							"题"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: "1.点击【确认交卷】，将提交考试成绩，考试结束！"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "2.点击【继续考试】，将关闭本窗口，继续考试！" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogActions, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "win-btn min-h-12 min-w-36 px-8 py-2 text-base",
					onClick: confirmSubmit,
					children: "确认交卷"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "win-btn min-h-12 min-w-36 px-8 py-2 text-base",
					onClick: cancelSubmit,
					children: "继续考试"
				})] })]
			}),
			abortAsk && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogShell, {
				title: "退出确认",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-5 bg-paper-2 px-6 py-5 font-sans text-base text-ink",
					children: "退出将结束本次考试且不记成绩，确定离开？"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogActions, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "win-btn min-h-12 min-w-32 px-6 py-2",
					onClick: confirmAbort,
					children: "确定退出"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "win-btn min-h-12 min-w-32 px-6 py-2",
					onClick: cancelAbort,
					children: "继续考试"
				})] })]
			})
		]
	});
}
function OptionFace({ children, label, active, judged, right, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		"aria-pressed": active,
		disabled: judged,
		"data-on": active && !judged ? "true" : void 0,
		"data-wrong": judged && active && !right ? "true" : void 0,
		"data-right": judged && right ? "true" : void 0,
		className: "opt-btn flex size-11 items-center justify-center",
		onClick,
		children
	});
}
function QuestionGrid({ current, answers, questions, onJump }) {
	const cells = (0, import_react.useMemo)(() => Array.from({ length: 100 }, (_, i) => i), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full overflow-auto border border-win-border bg-sheet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full table-fixed border-collapse font-sans text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "bg-grid-head text-paper-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "border border-grid-head/40 px-0.5 py-1 font-medium",
					children: "题目"
				}), Array.from({ length: 10 }, (_, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
					className: "border border-grid-head/40 px-0.5 py-1 font-medium",
					children: [c + 1, "列"]
				}, c))]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: Array.from({ length: 10 }, (_, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
				className: "border border-line bg-grid-head/15 px-0.5 py-1 font-medium text-legend",
				children: [r + 1, "行"]
			}), cells.slice(r * 10, r * 10 + 10).map((i) => {
				const ans = answers[i];
				const qn = questions[i];
				const isNow = i === current;
				let tone = "bg-paper-2";
				if (ans?.judged && qn) tone = ans.selected === qn.answer ? "bg-ok text-paper-2" : "bg-bad text-paper-2";
				if (isNow && !ans?.judged) tone = "bg-grid-now text-paper-2";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "border border-line p-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("flex min-h-8 w-full items-center justify-center", tone, isNow && "ring-2 ring-inset ring-ink/70"),
						onClick: () => onJump(i),
						"aria-label": `第${i + 1}题`,
						children: ans?.judged ? ans.selected === qn?.answer ? "√" : "×" : ""
					})
				}, i);
			})] }, r)) })]
		})
	});
}
function ResultScreen() {
	const result = useExamStore((s) => s.result);
	const candidate = useExamStore((s) => s.candidate);
	const passCount = useExamStore((s) => s.passCount);
	const retry = useExamStore((s) => s.retry);
	const backHome = useExamStore((s) => s.backHome);
	const [review, setReview] = (0, import_react.useState)(false);
	if (!result) return null;
	const wrongItems = result.questions.map((q, i) => ({
		q,
		a: result.answers[i],
		i
	})).filter(({ q, a }) => a.selected !== null && !isCorrect(q, a.selected));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "relative h-24 shrink-0 overflow-hidden border-b border-line sm:h-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/exam-sky.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/exam-hall.jpg",
					alt: "",
					className: "absolute top-0 right-0 h-full w-2/5 object-cover hall-fade"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper-2",
					"aria-label": "返回",
					onClick: backHome,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-6",
						strokeWidth: 2.5
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "title-3d absolute inset-x-14 top-1/2 -translate-y-1/2 text-center text-2xl sm:text-4xl",
					children: "考试成绩"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 px-3 py-5 sm:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative border border-ink bg-paper-2 px-5 py-6 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("pointer-events-none absolute top-4 right-6 rotate-12 rounded-full border-4 px-4 py-6 font-sans text-3xl font-black tracking-widest sm:right-10 sm:text-4xl", result.passed ? "border-ok text-ok" : "border-bad text-bad"),
						children: result.passed ? "合格" : "不合格"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-4 font-sans text-lg text-legend",
						children: [
							"第",
							candidate.station,
							"考台 · ",
							candidate.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-x-6 gap-y-2 font-sans text-base sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["成绩：", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: result.passed ? "text-ok" : "text-bad",
								children: [result.score, " 分"]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"合格线：",
								90,
								" 分"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["用时：", formatTime(result.usedMs)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"答对：",
								result.correct,
								" 题"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"答错：",
								result.wrong,
								" 题"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"未答：",
								result.blank,
								" 题"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2 sm:col-span-3",
								children: ["累计合格次数：", passCount]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-sm text-muted",
						children: result.passed ? "恭喜，本次科目一模拟考试达到合格标准。" : "未达到90分合格标准，建议先把错题看一遍再考。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "win-btn min-h-11 px-6 py-2",
								onClick: retry,
								children: "再考一次"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "win-btn min-h-11 px-6 py-2",
								onClick: () => setReview((v) => !v),
								children: review ? "收起错题" : `查看错题（${wrongItems.length}）`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "win-btn min-h-11 px-6 py-2",
								onClick: backHome,
								children: "返回首页"
							})
						]
					})
				]
			}), review && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-win-border bg-sheet p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 font-sans text-base text-legend",
					children: "错题回顾"
				}), wrongItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-sm text-muted",
					children: "没有答错的题目。"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-4",
					children: wrongItems.map(({ q, a, i }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border border-line bg-paper-2 p-3 font-sans text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-2 leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mr-1 text-muted",
									children: [i + 1, "."]
								}), q.text]
							}),
							q.sign && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrafficSign, {
								id: q.sign,
								className: "mb-2 size-20"
							}),
							q.type === "single" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mb-2 space-y-0.5 text-muted",
								children: q.options?.map((opt, oi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									String.fromCharCode(65 + oi),
									". ",
									opt
								] }, opt))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-bad",
								children: ["你的答案：", labelForAnswer(q, a.selected) || "未答"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-ok",
								children: ["正确答案：", labelForAnswer(q, q.answer)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted",
								children: q.explain
							})
						]
					}, q.id))
				})]
			})]
		})]
	});
}
var RULES = [
	"遵守考场纪律，服从监考人员指挥",
	"进入考场、手机关闭。禁止抽烟，禁止吃零食。",
	"未经工作人员允许，考生禁止随意出入考场。",
	"考场内禁止大声喧哗，禁止随意走动。",
	"考试中认真答题，不准交头接耳。",
	"考试中不准冒名顶替，不准弄虚作假。",
	"注意考场卫生，禁止随地吐痰，禁止乱扔纸屑。",
	"爱护公物及考试设备。"
];
function StartScreen() {
	const candidate = useExamStore((s) => s.candidate);
	const passCount = useExamStore((s) => s.passCount);
	const exam = useExamStore((s) => s.exam);
	const setCandidate = useExamStore((s) => s.setCandidate);
	const startExam = useExamStore((s) => s.startExam);
	const resumeExam = useExamStore((s) => s.resumeExam);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "relative h-28 shrink-0 overflow-hidden border-b border-line sm:h-36",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/exam-sky.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-sky/25 via-transparent to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/exam-hall.jpg",
					alt: "考场机位",
					className: "absolute top-0 right-0 h-full w-2/5 object-cover object-center hall-fade"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper-2 shadow-md sm:left-4",
					"aria-label": "返回",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-6",
						strokeWidth: 2.5
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "title-3d absolute inset-x-14 top-1/2 -translate-y-1/2 text-center text-2xl sm:inset-x-24 sm:text-4xl md:text-5xl",
					children: "驾驶人科目一考试系统"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-1 flex-col px-3 py-4 sm:px-5 sm:py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col border border-ink bg-paper-2 shadow-sm md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldsetBox, {
					legend: "考试须知：",
					className: "flex-1 border-0 border-b md:border-r md:border-b-0",
					bodyClassName: "px-5 py-6 sm:px-8 sm:py-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-2.5 font-sans text-sm leading-relaxed text-ink sm:text-base",
						children: RULES.map((rule, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "w-5 shrink-0 font-medium",
								children: [i + 1, "."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rule })]
						}, rule))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full flex-col px-5 py-6 sm:px-8 sm:py-7 md:w-96 md:shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-baseline justify-between gap-3 font-sans text-base text-ink sm:text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"理论考试",
								candidate.station,
								"考台"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["合格次数：", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: passCount })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mb-2 block font-sans text-base text-bad sm:text-lg",
							children: ["身份证号：", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: candidate.idNumber,
								onChange: (e) => setCandidate({ idNumber: e.target.value.replace(/\s/g, "") }),
								className: "ml-1 w-[11.5rem] border-0 border-b border-bad/40 bg-transparent font-sans text-base text-bad outline-none sm:w-56",
								inputMode: "numeric",
								maxLength: 18,
								"aria-label": "身份证号"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mb-4 block font-sans text-base text-bad sm:text-lg",
							children: ["考生姓名：", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: candidate.name,
								onChange: (e) => setCandidate({ name: e.target.value }),
								className: "ml-1 w-40 border-0 border-b border-bad/40 bg-transparent font-sans text-base text-bad outline-none",
								maxLength: 12,
								"aria-label": "考生姓名"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 flex flex-wrap gap-4 font-sans text-sm text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-1",
								children: ["性别", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "border border-line bg-paper-2 px-1 py-0.5",
									value: candidate.gender,
									onChange: (e) => setCandidate({ gender: e.target.value }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "男" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "女" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-1",
								children: ["类型", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "border border-line bg-paper-2 px-1 py-0.5",
									value: candidate.vehicleType,
									onChange: (e) => setCandidate({ vehicleType: e.target.value }),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "小车" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "货车" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "客车" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "摩托车" })
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-3",
							children: [exam ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full flex-col items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "win-btn px-10 py-2.5 text-lg",
									onClick: resumeExam,
									children: "继续考试"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "win-btn px-10 py-2 text-base",
									onClick: startExam,
									children: "重新开考"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "win-btn px-12 py-2.5 text-lg",
								onClick: startExam,
								children: "确认"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-center font-sans text-lg font-medium text-bad",
								children: "点击“确认”按钮开始考试！"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto pt-6 font-sans text-xs leading-relaxed text-muted sm:text-sm",
							children: "操作提示：每题考试答案确定后，点击【下一题】，电脑立即判定所选答案，如选择错误，系统将提示正确答案，提示后不允许修改答案。"
						})
					]
				})]
			})
		})]
	});
}
function Home() {
	const hydrate = useExamStore((s) => s.hydrate);
	const hydrated = useExamStore((s) => s.hydrated);
	const screen = useExamStore((s) => s.screen);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-dvh bg-paper" });
	if (screen === "exam") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamScreen, {});
	if (screen === "result") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultScreen, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartScreen, {});
}
//#endregion
export { Home as component };
