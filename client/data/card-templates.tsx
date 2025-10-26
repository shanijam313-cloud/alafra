import { Fragment } from "react";

export type CardSide = "front" | "back";

export type TemplateCategory = "student" | "employee" | "membership" | "finance";

export type TextBlock = {
  kind: "text";
  id: string;
  label?: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  fontWeight?: number;
  color: string;
  backgroundColor?: string;
  textAlign?: "left" | "center" | "right";
  paddingX?: number;
  paddingY?: number;
  borderRadius?: number;
  zIndex: number;
};

export type ShapeKind = "rectangle" | "ellipse" | "pill" | "chip";

export type ShapeBlock = {
  kind: "shape";
  id: string;
  label?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  opacity?: number;
  shape: ShapeKind;
};

export type DesignerBlock = TextBlock | ShapeBlock;

type TextBlockConfig = Omit<TextBlock, "kind">;

const makeTextBlocks = (configs: TextBlockConfig[]): TextBlock[] =>
  configs.map((block) => ({ kind: "text", ...block }));

const overrideTextBlocks = (
  source: TextBlock[],
  overrides: Partial<Record<string, Partial<TextBlock>>>,
): TextBlock[] =>
  source.map((block) => ({
    ...block,
    ...(overrides[block.id] ?? {}),
  }));

export const hexToRgba = (hex: string, alpha: number) => {
  const sanitized = hex.replace("#", "");
  const chunk = sanitized.length === 3 ? sanitized.split("").map((ch) => ch + ch).join("") : sanitized;
  const bigint = Number.parseInt(chunk, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const skylineFrontBase = makeTextBlocks([
  {
    id: "photo-slot",
    label: "Photo Slot",
    text: "Upload Photo",
    x: 24,
    y: 24,
    width: 150,
    height: 190,
    fontSize: 12,
    fontWeight: 600,
    color: "#64748b",
    backgroundColor: "#f8fafc",
    paddingX: 12,
    paddingY: 70,
    textAlign: "center",
    borderRadius: 24,
    zIndex: 6,
  },
  {
    id: "logo-slot",
    label: "Logo Slot",
    text: "Logo",
    x: 420,
    y: 24,
    width: 90,
    height: 90,
    fontSize: 11,
    fontWeight: 600,
    color: "#94a3b8",
    backgroundColor: "#f1f5f9",
    paddingX: 8,
    paddingY: 32,
    textAlign: "center",
    borderRadius: 18,
    zIndex: 6,
  },
  {
    id: "qr-slot",
    label: "QR Slot",
    text: "QR",
    x: 36,
    y: 230,
    width: 120,
    height: 110,
    fontSize: 11,
    fontWeight: 600,
    color: "#94a3b8",
    backgroundColor: "#f8fafc",
    paddingX: 12,
    paddingY: 40,
    textAlign: "center",
    borderRadius: 20,
    zIndex: 6,
  },
  {
    id: "student-name",
    label: "Primary Heading",
    text: "Alex Johnson",
    x: 200,
    y: 42,
    width: 220,
    height: 48,
    fontSize: 20,
    fontWeight: 600,
    color: "#0f172a",
    zIndex: 8,
  },
  {
    id: "student-id",
    label: "ID Number",
    text: "STU-2025-001",
    x: 200,
    y: 90,
    width: 220,
    height: 40,
    fontSize: 15,
    fontWeight: 500,
    color: "#1f2937",
    zIndex: 7,
  },
  {
    id: "grade",
    label: "Secondary Line",
    text: "Grade 10-A",
    x: 200,
    y: 132,
    width: 200,
    height: 38,
    fontSize: 15,
    fontWeight: 500,
    color: "#1f2937",
    zIndex: 7,
  },
  {
    id: "validity",
    label: "Meta",
    text: "Valid till: 2026-06-30",
    x: 200,
    y: 174,
    width: 240,
    height: 40,
    fontSize: 14,
    fontWeight: 500,
    color: "#1f2937",
    zIndex: 6,
  },
  {
    id: "academy-name",
    label: "Badge",
    text: "CardForge Academy",
    x: 24,
    y: 162,
    width: 184,
    height: 42,
    fontSize: 15,
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#1e90ff",
    borderRadius: 14,
    paddingX: 16,
    paddingY: 6,
    textAlign: "center",
    zIndex: 9,
  },
]);

const skylineBackBase = makeTextBlocks([
  {
    id: "academy-motto",
    label: "Headline",
    text: "Knowledge • Character • Service",
    x: 60,
    y: 42,
    width: 440,
    height: 56,
    fontSize: 18,
    fontWeight: 600,
    color: "#0f172a",
    textAlign: "center",
    zIndex: 6,
  },
  {
    id: "academy-address",
    label: "Address",
    text: "CardForge Academy • 27 Crescent Road, Lahore",
    x: 56,
    y: 114,
    width: 448,
    height: 54,
    fontSize: 15,
    fontWeight: 500,
    color: "#1f2937",
    textAlign: "center",
    zIndex: 6,
  },
  {
    id: "academy-contact",
    label: "Contact",
    text: "+92 335 350 3511 • support@cardforge.academy",
    x: 56,
    y: 170,
    width: 448,
    height: 48,
    fontSize: 15,
    fontWeight: 500,
    color: "#1f2937",
    textAlign: "center",
    zIndex: 6,
  },
  {
    id: "academy-guidelines",
    label: "Note",
    text: "If found, kindly return to the academy reception or call the number above.",
    x: 72,
    y: 232,
    width: 416,
    height: 70,
    fontSize: 14,
    fontWeight: 500,
    color: "#1f2937",
    textAlign: "center",
    zIndex: 6,
  },
]);

const midnightFrontBase = makeTextBlocks([
  {
    id: "photo-slot",
    label: "Photo Slot",
    text: "Upload Photo",
    x: 40,
    y: 32,
    width: 170,
    height: 180,
    fontSize: 12,
    fontWeight: 600,
    color: "#cbd5f5",
    backgroundColor: "#1e293b",
    paddingX: 12,
    paddingY: 70,
    textAlign: "center",
    borderRadius: 26,
    zIndex: 6,
  },
  {
    id: "logo-slot",
    label: "Logo Slot",
    text: "Logo",
    x: 420,
    y: 32,
    width: 90,
    height: 90,
    fontSize: 11,
    fontWeight: 600,
    color: "#cbd5f5",
    backgroundColor: "#111827",
    paddingX: 8,
    paddingY: 32,
    textAlign: "center",
    borderRadius: 20,
    zIndex: 6,
  },
  {
    id: "qr-slot",
    label: "QR Slot",
    text: "QR",
    x: 400,
    y: 220,
    width: 128,
    height: 118,
    fontSize: 11,
    fontWeight: 600,
    color: "#cbd5f5",
    backgroundColor: "#111827",
    paddingX: 12,
    paddingY: 42,
    textAlign: "center",
    borderRadius: 20,
    zIndex: 6,
  },
  {
    id: "student-name",
    label: "Primary Heading",
    text: "Alex Johnson",
    x: 220,
    y: 54,
    width: 280,
    height: 54,
    fontSize: 22,
    fontWeight: 700,
    color: "#f8fafc",
    zIndex: 9,
  },
  {
    id: "student-id",
    label: "ID Number",
    text: "EMP-2025-001",
    x: 220,
    y: 118,
    width: 260,
    height: 44,
    fontSize: 16,
    fontWeight: 500,
    color: "#cbd5f5",
    zIndex: 8,
  },
  {
    id: "grade",
    label: "Secondary Line",
    text: "Operations Lead",
    x: 220,
    y: 162,
    width: 210,
    height: 40,
    fontSize: 16,
    fontWeight: 500,
    color: "#cbd5f5",
    zIndex: 8,
  },
  {
    id: "validity",
    label: "Meta",
    text: "Access Level: 04",
    x: 220,
    y: 206,
    width: 260,
    height: 44,
    fontSize: 14,
    fontWeight: 500,
    color: "#cbd5f5",
    zIndex: 7,
  },
  {
    id: "academy-name",
    label: "Badge",
    text: "CardForge Labs",
    x: 352,
    y: 256,
    width: 182,
    height: 46,
    fontSize: 15,
    fontWeight: 600,
    color: "#f8fafc",
    backgroundColor: "#7c3aed",
    borderRadius: 16,
    paddingX: 20,
    paddingY: 8,
    textAlign: "center",
    zIndex: 10,
  },
]);

const midnightBackBase = makeTextBlocks([
  {
    id: "academy-motto",
    label: "Headline",
    text: "Illuminate with Knowledge",
    x: 72,
    y: 46,
    width: 420,
    height: 60,
    fontSize: 19,
    fontWeight: 600,
    color: "#f1f5f9",
    textAlign: "center",
    zIndex: 9,
  },
  {
    id: "academy-address",
    label: "Address",
    text: "CardForge Labs • 17 Innovation Plaza, Lahore",
    x: 66,
    y: 118,
    width: 428,
    height: 52,
    fontSize: 15,
    fontWeight: 500,
    color: "#cbd5f5",
    textAlign: "center",
    zIndex: 9,
  },
  {
    id: "academy-contact",
    label: "Contact",
    text: "+92 335 123 4567 • labs@cardforge.co",
    x: 66,
    y: 168,
    width: 428,
    height: 50,
    fontSize: 15,
    fontWeight: 500,
    color: "#cbd5f5",
    textAlign: "center",
    zIndex: 9,
  },
  {
    id: "academy-guidelines",
    label: "Note",
    text: "Return this badge to reception if found. Confidential access only.",
    x: 90,
    y: 226,
    width: 384,
    height: 72,
    fontSize: 13,
    fontWeight: 500,
    color: "#cbd5f5",
    textAlign: "center",
    zIndex: 9,
  },
]);

const sunriseFrontBase = makeTextBlocks([
  {
    id: "photo-slot",
    label: "Photo Slot",
    text: "Upload Photo",
    x: 32,
    y: 32,
    width: 150,
    height: 190,
    fontSize: 12,
    fontWeight: 600,
    color: "#b45309",
    backgroundColor: "#fff7ed",
    paddingX: 12,
    paddingY: 70,
    textAlign: "center",
    borderRadius: 24,
    zIndex: 6,
  },
  {
    id: "logo-slot",
    label: "Logo Slot",
    text: "Logo",
    x: 420,
    y: 36,
    width: 90,
    height: 90,
    fontSize: 11,
    fontWeight: 600,
    color: "#c2410c",
    backgroundColor: "#fffbeb",
    paddingX: 8,
    paddingY: 32,
    textAlign: "center",
    borderRadius: 20,
    zIndex: 6,
  },
  {
    id: "qr-slot",
    label: "QR Slot",
    text: "Scan Code",
    x: 180,
    y: 252,
    width: 220,
    height: 90,
    fontSize: 11,
    fontWeight: 600,
    color: "#b45309",
    backgroundColor: "#fff7ed",
    paddingX: 12,
    paddingY: 32,
    textAlign: "center",
    borderRadius: 24,
    zIndex: 6,
  },
  {
    id: "student-name",
    label: "Primary Heading",
    text: "Alex Johnson",
    x: 180,
    y: 60,
    width: 260,
    height: 52,
    fontSize: 22,
    fontWeight: 600,
    color: "#1f2937",
    zIndex: 8,
  },
  {
    id: "student-id",
    label: "ID Number",
    text: "MEM-2025-001",
    x: 180,
    y: 116,
    width: 220,
    height: 44,
    fontSize: 16,
    fontWeight: 500,
    color: "#334155",
    zIndex: 7,
  },
  {
    id: "grade",
    label: "Secondary Line",
    text: "Premium Member",
    x: 180,
    y: 160,
    width: 200,
    height: 40,
    fontSize: 16,
    fontWeight: 500,
    color: "#334155",
    zIndex: 7,
  },
  {
    id: "validity",
    label: "Meta",
    text: "Valid: Jan 2025 – Dec 2025",
    x: 180,
    y: 202,
    width: 260,
    height: 44,
    fontSize: 14,
    fontWeight: 500,
    color: "#475569",
    zIndex: 6,
  },
  {
    id: "academy-name",
    label: "Badge",
    text: "CardForge Collective",
    x: 32,
    y: 52,
    width: 184,
    height: 48,
    fontSize: 15,
    fontWeight: 700,
    color: "#ffffff",
    backgroundColor: "#f97316",
    borderRadius: 18,
    paddingX: 18,
    paddingY: 10,
    textAlign: "center",
    zIndex: 9,
  },
]);

const sunriseBackBase = makeTextBlocks([
  {
    id: "academy-motto",
    label: "Headline",
    text: "Together we rise with purpose and compassion.",
    x: 64,
    y: 52,
    width: 432,
    height: 60,
    fontSize: 18,
    fontWeight: 600,
    color: "#9f1239",
    textAlign: "center",
    zIndex: 8,
  },
  {
    id: "academy-address",
    label: "Address",
    text: "CardForge Collective • 102 Sunrise Ave, Lahore",
    x: 56,
    y: 118,
    width: 448,
    height: 52,
    fontSize: 15,
    fontWeight: 500,
    color: "#9f1239",
    textAlign: "center",
    zIndex: 8,
  },
  {
    id: "academy-contact",
    label: "Contact",
    text: "+92 335 222 7788 • hello@cardforge.org",
    x: 56,
    y: 168,
    width: 448,
    height: 48,
    fontSize: 15,
    fontWeight: 500,
    color: "#9f1239",
    textAlign: "center",
    zIndex: 8,
  },
  {
    id: "academy-guidelines",
    label: "Note",
    text: "Please present this card upon request. Return immediately if found unattended.",
    x: 80,
    y: 226,
    width: 400,
    height: 74,
    fontSize: 13,
    fontWeight: 500,
    color: "#9f1239",
    textAlign: "center",
    zIndex: 8,
  },
]);

export type TemplateDefinition = {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  accentColor: string;
  previewGradient: string;
  chromeStyle: "skyline" | "midnight" | "sunrise" | "emerald";
  frontBlocks: DesignerBlock[];
  backBlocks: DesignerBlock[];
};

type SkylineOptions = {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  accentColor: string;
  previewGradient: string;
  front: { name: string; id: string; grade: string; validity: string; badge: string };
  back: { motto: string; address: string; contact: string; note: string };
};

type MidnightOptions = {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  accentColor: string;
  previewGradient: string;
  front: { name: string; id: string; role: string; access: string; badge: string };
  back: { motto: string; address: string; contact: string; note: string };
};

type SunriseOptions = {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  accentColor: string;
  previewGradient: string;
  front: { name: string; id: string; tier: string; validity: string; badge: string };
  back: { motto: string; address: string; contact: string; note: string };
  primaryColor?: string;
  secondaryColor?: string;
};

type EmeraldOptions = {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  accentColor: string;
  previewGradient: string;
  textColor: string;
  front: { name: string; id: string; tier: string; validity: string; badge: string };
  back: { motto: string; address: string; contact: string; note: string };
};

const createSkylineTemplate = (options: SkylineOptions): TemplateDefinition => ({
  id: options.id,
  name: options.name,
  description: options.description,
  category: options.category,
  accentColor: options.accentColor,
  previewGradient: options.previewGradient,
  chromeStyle: "skyline",
  frontBlocks: overrideTextBlocks(skylineFrontBase, {
    "photo-slot": {
      backgroundColor: "#f1f5f9",
      color: "#64748b",
    },
    "logo-slot": {
      backgroundColor: "#f8fafc",
      color: "#64748b",
    },
    "qr-slot": {
      backgroundColor: "#f8fafc",
      color: "#64748b",
      text: "QR",
    },
    "student-name": { text: options.front.name },
    "student-id": { text: options.front.id },
    grade: { text: options.front.grade },
    validity: { text: options.front.validity },
    "academy-name": { text: options.front.badge, backgroundColor: options.accentColor },
  }),
  backBlocks: overrideTextBlocks(skylineBackBase, {
    "academy-motto": { text: options.back.motto },
    "academy-address": { text: options.back.address },
    "academy-contact": { text: options.back.contact },
    "academy-guidelines": { text: options.back.note },
  }),
});

const createMidnightTemplate = (options: MidnightOptions): TemplateDefinition => ({
  id: options.id,
  name: options.name,
  description: options.description,
  category: options.category,
  accentColor: options.accentColor,
  previewGradient: options.previewGradient,
  chromeStyle: "midnight",
  frontBlocks: overrideTextBlocks(midnightFrontBase, {
    "photo-slot": {
      backgroundColor: "#101828",
      color: "#cbd5f5",
      x: 48,
      y: 40,
      width: 170,
      height: 190,
    },
    "logo-slot": {
      backgroundColor: "#0f172a",
      color: "#cbd5f5",
      x: 420,
      y: 40,
    },
    "qr-slot": {
      backgroundColor: "#0f172a",
      color: "#cbd5f5",
      x: 400,
      y: 230,
      text: "QR",
    },
    "student-name": { text: options.front.name },
    "student-id": { text: options.front.id },
    grade: { text: options.front.role },
    validity: { text: options.front.access },
    "academy-name": { text: options.front.badge, backgroundColor: options.accentColor },
  }),
  backBlocks: overrideTextBlocks(midnightBackBase, {
    "academy-motto": { text: options.back.motto },
    "academy-address": { text: options.back.address },
    "academy-contact": { text: options.back.contact },
    "academy-guidelines": { text: options.back.note },
  }),
});

const createSunriseTemplate = (options: SunriseOptions): TemplateDefinition => {
  const primaryColor = options.primaryColor ?? "#1f2937";
  const secondaryColor = options.secondaryColor ?? "#9f1239";
  return {
    id: options.id,
    name: options.name,
    description: options.description,
    category: options.category,
    accentColor: options.accentColor,
    previewGradient: options.previewGradient,
    chromeStyle: "sunrise",
  frontBlocks: overrideTextBlocks(sunriseFrontBase, {
    "photo-slot": {
      backgroundColor: "#fff7ed",
      color: "#b45309",
    },
    "logo-slot": {
      backgroundColor: "#fff7ed",
      color: "#c2410c",
    },
    "qr-slot": {
      backgroundColor: "#ffedd5",
      color: "#b45309",
      text: "Scan Code",
    },
    "student-name": { text: options.front.name, color: primaryColor },
    "student-id": { text: options.front.id, color: secondaryColor },
    grade: { text: options.front.tier, color: secondaryColor },
    validity: { text: options.front.validity, color: secondaryColor },
    "academy-name": { text: options.front.badge, backgroundColor: options.accentColor },
    }),
    backBlocks: overrideTextBlocks(sunriseBackBase, {
      "academy-motto": { text: options.back.motto, color: secondaryColor },
      "academy-address": { text: options.back.address, color: secondaryColor },
      "academy-contact": { text: options.back.contact, color: secondaryColor },
      "academy-guidelines": { text: options.back.note, color: secondaryColor },
    }),
  };
};

const createEmeraldTemplate = (options: EmeraldOptions): TemplateDefinition => ({
  id: options.id,
  name: options.name,
  description: options.description,
  category: options.category,
  accentColor: options.accentColor,
  previewGradient: options.previewGradient,
  chromeStyle: "emerald",
  frontBlocks: overrideTextBlocks(sunriseFrontBase, {
    "photo-slot": {
      backgroundColor: "#ecfdf5",
      color: options.textColor,
    },
    "logo-slot": {
      backgroundColor: "#ecfdf5",
      color: options.textColor,
    },
    "qr-slot": {
      backgroundColor: "#d1fae5",
      color: options.textColor,
      text: "QR",
    },
    "student-name": { text: options.front.name, color: options.textColor },
    "student-id": { text: options.front.id, color: options.textColor },
    grade: { text: options.front.tier, color: options.textColor },
    validity: { text: options.front.validity, color: options.textColor },
    "academy-name": { text: options.front.badge, backgroundColor: options.accentColor },
  }),
  backBlocks: overrideTextBlocks(sunriseBackBase, {
    "academy-motto": { text: options.back.motto, color: options.textColor },
    "academy-address": { text: options.back.address, color: options.textColor },
    "academy-contact": { text: options.back.contact, color: options.textColor },
    "academy-guidelines": { text: options.back.note, color: options.textColor },
  }),
});

export const templates: TemplateDefinition[] = [
  createSkylineTemplate({
    id: "modern-id-1",
    name: "Modern ID 1",
    description: "Student badge with signature blue gradient.",
    category: "student",
    accentColor: "#2563eb",
    previewGradient:
      "linear-gradient(135deg, rgba(37,99,235,0.9) 0%, rgba(96,165,250,0.65) 60%, rgba(96,165,250,0.35) 100%)",
    front: {
      name: "Alex Johnson",
      id: "STU-2025-001",
      grade: "Grade 10-A",
      validity: "Valid till: 2026-06-30",
      badge: "CardForge Academy",
    },
    back: {
      motto: "Knowledge • Character • Service",
      address: "CardForge Academy • 27 Crescent Road, Lahore",
      contact: "+92 335 350 3511 • support@cardforge.academy",
      note: "If found, kindly return to the academy reception or call the number above.",
    },
  }),
  createMidnightTemplate({
    id: "modern-id-2",
    name: "Modern ID 2",
    description: "Corporate employee pass with night chrome.",
    category: "employee",
    accentColor: "#7c3aed",
    previewGradient:
      "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,41,59,0.85) 55%, rgba(124,58,237,0.55) 100%)",
    front: {
      name: "Zoya Rashid",
      id: "EMP-54028",
      role: "Product Strategist",
      access: "Access Level: 05",
      badge: "CardForge Labs",
    },
    back: {
      motto: "Innovate • Iterate • Inspire",
      address: "CardForge Labs • 17 Innovation Plaza, Lahore",
      contact: "+92 335 214 0099 • labs@cardforge.co",
      note: "Return this badge to reception if found. Confidential access only.",
    },
  }),
  createEmeraldTemplate({
    id: "modern-id-3",
    name: "Modern ID 3",
    description: "Membership pass with lush green palette.",
    category: "membership",
    accentColor: "#059669",
    previewGradient:
      "linear-gradient(135deg, rgba(34,197,94,0.95) 0%, rgba(16,185,129,0.7) 55%, rgba(110,231,183,0.45) 100%)",
    textColor: "#064e3b",
    front: {
      name: "Hassan Ali",
      id: "MEM-88432",
      tier: "Executive Member",
      validity: "Valid: Mar 2025 – Feb 2026",
      badge: "CardForge Club",
    },
    back: {
      motto: "Community • Culture • Care",
      address: "CardForge Club • 91 Emerald Lane, Lahore",
      contact: "+92 335 902 1100 • club@cardforge.org",
      note: "Present this card upon entry. Non-transferable membership credential.",
    },
  }),
  createSunriseTemplate({
    id: "modern-id-4",
    name: "Modern ID 4",
    description: "Fee card with warm sunrise ribbons.",
    category: "finance",
    accentColor: "#f97316",
    previewGradient:
      "linear-gradient(135deg, rgba(249,115,22,0.95) 0%, rgba(251,191,36,0.75) 50%, rgba(244,114,182,0.45) 100%)",
    front: {
      name: "Fatima Noor",
      id: "FEE-66291",
      tier: "Tuition Fee Pass",
      validity: "Valid: Spring Term 2025",
      badge: "CardForge Finance",
    },
    back: {
      motto: "Integrity • Transparency • Trust",
      address: "Finance Office • 19 Sunrise Blvd, Lahore",
      contact: "+92 335 881 7722 • finance@cardforge.edu",
      note: "Submit with fee receipts. Immediate return required if misplaced.",
    },
  }),
  createSkylineTemplate({
    id: "modern-id-5",
    name: "Modern ID 5",
    description: "Student identity with teal accent highlights.",
    category: "student",
    accentColor: "#0ea5e9",
    previewGradient:
      "linear-gradient(135deg, rgba(14,165,233,0.9) 0%, rgba(56,189,248,0.6) 60%, rgba(125,211,252,0.35) 100%)",
    front: {
      name: "Maria Khan",
      id: "STU-2025-157",
      grade: "Grade 8-C",
      validity: "Valid till: 2026-03-15",
      badge: "CardForge Academy",
    },
    back: {
      motto: "Curiosity • Confidence • Compassion",
      address: "Campus One • Sector 4, Lahore",
      contact: "+92 335 441 0088 • registrar@cardforge.academy",
      note: "Wear visibly on campus premises. Report loss within 24 hours.",
    },
  }),
  createMidnightTemplate({
    id: "modern-id-6",
    name: "Modern ID 6",
    description: "Employee access card with ultraviolet glow.",
    category: "employee",
    accentColor: "#5b21b6",
    previewGradient:
      "linear-gradient(135deg, rgba(12,10,30,1) 0%, rgba(49,46,129,0.85) 55%, rgba(91,33,182,0.55) 100%)",
    front: {
      name: "Bilal Asim",
      id: "EMP-77251",
      role: "Operations Manager",
      access: "Access Level: 03",
      badge: "CardForge Ops",
    },
    back: {
      motto: "Efficiency • Accuracy • Impact",
      address: "Operations Hub • 24 Skyline Road, Lahore",
      contact: "+92 335 221 5511 • ops@cardforge.co",
      note: "Badge must remain on-person during shifts. Do not share access.",
    },
  }),
  createEmeraldTemplate({
    id: "modern-id-7",
    name: "Modern ID 7",
    description: "Membership credential with deep forest tones.",
    category: "membership",
    accentColor: "#047857",
    previewGradient:
      "linear-gradient(135deg, rgba(4,120,87,0.95) 0%, rgba(16,185,129,0.7) 55%, rgba(45,212,191,0.45) 100%)",
    textColor: "#065f46",
    front: {
      name: "Laiba Rehman",
      id: "MEM-45800",
      tier: "Wellness Member",
      validity: "Valid: Q2 2025",
      badge: "CardForge Wellness",
    },
    back: {
      motto: "Balance • Mindfulness • Health",
      address: "Wellness Pavilion • 12 Green Gate, Lahore",
      contact: "+92 335 771 6600 • wellness@cardforge.org",
      note: "Access includes gym & pool. Please swipe on entry.",
    },
  }),
  createSunriseTemplate({
    id: "modern-id-8",
    name: "Modern ID 8",
    description: "Fee acknowledgement pass with amber bands.",
    category: "finance",
    accentColor: "#f59e0b",
    previewGradient:
      "linear-gradient(135deg, rgba(245,158,11,0.95) 0%, rgba(253,186,116,0.7) 55%, rgba(252,211,77,0.45) 100%)",
    front: {
      name: "Hamza Qureshi",
      id: "FEE-44891",
      tier: "Semester Fee Card",
      validity: "Valid: Autumn Term 2025",
      badge: "CardForge Finance",
    },
    back: {
      motto: "Accountability • Stewardship • Support",
      address: "Finance Suite • 8 Horizon Park, Lahore",
      contact: "+92 335 990 4455 • bursar@cardforge.edu",
      note: "Attach to payment envelope. Replace immediately if lost.",
    },
  }),
  createSkylineTemplate({
    id: "modern-id-9",
    name: "Modern ID 9",
    description: "Academic badge with royal blue sheen.",
    category: "student",
    accentColor: "#1d4ed8",
    previewGradient:
      "linear-gradient(135deg, rgba(29,78,216,0.92) 0%, rgba(59,130,246,0.65) 60%, rgba(96,165,250,0.35) 100%)",
    front: {
      name: "Rehan Siddiqui",
      id: "STU-2025-320",
      grade: "Grade 11-Science",
      validity: "Valid till: 2026-09-01",
      badge: "CardForge Academy",
    },
    back: {
      motto: "Explore • Experiment • Excel",
      address: "STEM Block • 221 Nexus Drive, Lahore",
      contact: "+92 335 660 1255 • dean@cardforge.academy",
      note: "Lab entry requires safety briefing. Card replacement fee applies.",
    },
  }),
  createMidnightTemplate({
    id: "modern-id-10",
    name: "Modern ID 10",
    description: "Executive badge with royal violet accent.",
    category: "employee",
    accentColor: "#9333ea",
    previewGradient:
      "linear-gradient(135deg, rgba(30,27,75,1) 0%, rgba(67,56,202,0.85) 55%, rgba(147,51,234,0.55) 100%)",
    front: {
      name: "Ayesha Malik",
      id: "EMP-99104",
      role: "Chief Architect",
      access: "Access Level: 07",
      badge: "CardForge HQ",
    },
    back: {
      motto: "Vision • Strategy • Excellence",
      address: "Headquarters • 55 Crescent Way, Lahore",
      contact: "+92 335 778 8899 • hq@cardforge.co",
      note: "Badge enables executive floor access. Report anomalies instantly.",
    },
  }),
  createEmeraldTemplate({
    id: "modern-id-11",
    name: "Modern ID 11",
    description: "Membership ID with refreshing aqua tint.",
    category: "membership",
    accentColor: "#10b981",
    previewGradient:
      "linear-gradient(135deg, rgba(16,185,129,0.95) 0%, rgba(45,212,191,0.7) 55%, rgba(129,230,217,0.45) 100%)",
    textColor: "#047857",
    front: {
      name: "Usman Tariq",
      id: "MEM-99122",
      tier: "Innovation Member",
      validity: "Valid: 2025 – 2026",
      badge: "CardForge Hub",
    },
    back: {
      motto: "Collaborate • Create • Celebrate",
      address: "Innovation Hub • 401 Future Street, Lahore",
      contact: "+92 335 550 0066 • hub@cardforge.org",
      note: "Includes cowork access. Share feedback via member portal.",
    },
  }),
  createSunriseTemplate({
    id: "modern-id-12",
    name: "Modern ID 12",
    description: "Fee voucher with soft coral glow.",
    category: "finance",
    accentColor: "#fb923c",
    previewGradient:
      "linear-gradient(135deg, rgba(251,146,60,0.95) 0%, rgba(253,186,116,0.7) 55%, rgba(254,215,170,0.45) 100%)",
    front: {
      name: "Noor Ahmed",
      id: "FEE-77390",
      tier: "Annual Fee Card",
      validity: "Valid: 2025 Academic Year",
      badge: "CardForge Finance",
    },
    back: {
      motto: "Responsibility • Support • Growth",
      address: "Finance Desk • 74 Harmony Lane, Lahore",
      contact: "+92 335 882 3344 • accounts@cardforge.edu",
      note: "Attach official receipts. Duplicate incurs administrative fee.",
    },
  }),
];

export const templateMap: Record<string, TemplateDefinition> = templates.reduce(
  (acc, template) => {
    acc[template.id] = template;
    return acc;
  },
  {} as Record<string, TemplateDefinition>,
);

export const templateCategoryLabels: Record<TemplateCategory, string> = {
  student: "Student",
  employee: "Employee",
  membership: "Membership",
  finance: "Finance",
};

export type ShapePreset = {
  id: string;
  name: string;
  block: Omit<ShapeBlock, "id" | "zIndex">;
};

export const shapePresets: ShapePreset[] = [
  {
    id: "soft-rectangle",
    name: "Soft Rectangle",
    block: {
      kind: "shape",
      label: "Soft Rectangle",
      x: 140,
      y: 220,
      width: 260,
      height: 120,
      backgroundColor: "#0ea5e9",
      borderRadius: 24,
      borderWidth: 0,
      opacity: 0.16,
      shape: "rectangle",
    },
  },
  {
    id: "pill-highlight",
    name: "Pill Highlight",
    block: {
      kind: "shape",
      label: "Pill Highlight",
      x: 200,
      y: 120,
      width: 200,
      height: 60,
      backgroundColor: "#f97316",
      borderRadius: 999,
      borderWidth: 0,
      opacity: 0.22,
      shape: "pill",
    },
  },
  {
    id: "outline-chip",
    name: "Outline Chip",
    block: {
      kind: "shape",
      label: "Outline Chip",
      x: 160,
      y: 80,
      width: 240,
      height: 80,
      backgroundColor: "#ffffff",
      borderColor: "#7c3aed",
      borderWidth: 2,
      borderRadius: 28,
      opacity: 0,
      shape: "chip",
    },
  },
  {
    id: "accent-ellipse",
    name: "Accent Ellipse",
    block: {
      kind: "shape",
      label: "Accent Ellipse",
      x: 300,
      y: 60,
      width: 160,
      height: 160,
      backgroundColor: "#22c55e",
      borderRadius: 999,
      opacity: 0.2,
      shape: "ellipse",
    },
  },
];

export const renderTemplateChrome = (
  style: TemplateDefinition["chromeStyle"],
  side: CardSide,
  accentColor: string,
) => {
  switch (style) {
    case "midnight":
      if (side === "front") {
        return (
          <Fragment>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(circle at 80% 10%, ${hexToRgba(accentColor, 0.35)}, transparent 60%)`,
              }}
            />
            <div className="pointer-events-none absolute left-0 top-0 h-full w-28 rounded-s-2xl bg-slate-900/80 backdrop-blur-sm" />
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-2 rounded-s-2xl"
              style={{ backgroundColor: accentColor }}
            />
          </Fragment>
        );
      }
      return (
        <Fragment>
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${hexToRgba(accentColor, 0.25)} 0%, transparent 55%)`,
            }}
          />
          <div className="pointer-events-none absolute inset-4 rounded-[26px] border border-slate-700/60 bg-slate-950/40" />
          <div className="pointer-events-none absolute inset-x-16 top-28 h-1 rounded-full bg-slate-700/60" />
          <div className="pointer-events-none absolute inset-x-16 bottom-24 h-1 rounded-full bg-slate-700/60" />
        </Fragment>
      );
    case "sunrise":
      if (side === "front") {
        return (
          <Fragment>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-100" />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(circle at 20% 20%, ${hexToRgba(accentColor, 0.28)}, transparent 65%)`,
              }}
            />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 rounded-e-2xl bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <div
              className="pointer-events-none absolute left-0 top-0 h-2 w-full rounded-t-2xl"
              style={{ backgroundColor: accentColor }}
            />
          </Fragment>
        );
      }
      return (
        <Fragment>
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-50 via-amber-100 to-white" />
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(120deg, ${hexToRgba(accentColor, 0.22)} 0%, transparent 40%)`,
            }}
          />
          <div className="pointer-events-none absolute inset-5 rounded-[28px] border border-orange-200/70 bg-white/80" />
          <div className="pointer-events-none absolute inset-x-16 top-24 h-[2px] rounded-full bg-orange-200/90" />
          <div className="pointer-events-none absolute inset-x-16 bottom-24 h-[2px] rounded-full bg-orange-200/90" />
        </Fragment>
      );
    case "emerald":
      if (side === "front") {
        return (
          <Fragment>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100" />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(circle at 18% 22%, ${hexToRgba(accentColor, 0.28)}, transparent 65%)`,
              }}
            />
            <div
              className="pointer-events-none absolute left-0 top-0 h-2 w-full rounded-t-2xl"
              style={{ backgroundColor: accentColor }}
            />
          </Fragment>
        );
      }
      return (
        <Fragment>
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-100 to-white" />
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(120deg, ${hexToRgba(accentColor, 0.22)} 0%, transparent 40%)`,
            }}
          />
          <div className="pointer-events-none absolute inset-5 rounded-[28px] border border-emerald-200/70 bg-white/80" />
          <div className="pointer-events-none absolute inset-x-16 top-24 h-[2px] rounded-full bg-emerald-200/80" />
          <div className="pointer-events-none absolute inset-x-16 bottom-24 h-[2px] rounded-full bg-emerald-200/80" />
        </Fragment>
      );
    case "skyline":
    default:
      if (side === "front") {
        return (
          <Fragment>
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute -left-24 -top-32 h-[460px] w-[320px] rotate-[12deg] rounded-full"
                style={{
                  background: `linear-gradient(${hexToRgba(accentColor, 0.18)}, transparent)`,
                }}
              />
              <div
                className="absolute -right-32 -bottom-32 h-[400px] w-[300px] -rotate-[14deg] rounded-full"
                style={{
                  background: `linear-gradient(${hexToRgba(accentColor, 0.12)}, transparent)`,
                }}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.9)" }}
            />
            <div
              className="pointer-events-none absolute left-0 top-0 h-2 w-full rounded-t-2xl"
              style={{ backgroundColor: accentColor }}
            />
          </Fragment>
        );
      }
      return (
        <Fragment>
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{ background: "rgba(248,250,252,0.96)" }}
          />
          <div className="pointer-events-none absolute inset-6 rounded-[28px] border border-slate-200/70 bg-white/70 shadow-inner" />
          <div className="pointer-events-none absolute inset-x-16 top-24 h-[2px] rounded-full bg-slate-200/80" />
          <div className="pointer-events-none absolute inset-x-16 bottom-24 h-[2px] rounded-full bg-slate-200/80" />
        </Fragment>
      );
  }
};
