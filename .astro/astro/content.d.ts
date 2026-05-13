declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"beginner-attack-strategies.md": {
	id: "beginner-attack-strategies.md";
  slug: "beginner-attack-strategies";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-clan-castle-troops-defense.md": {
	id: "best-clan-castle-troops-defense.md";
  slug: "best-clan-castle-troops-defense";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-coc-attack-strategies-2026.md": {
	id: "best-coc-attack-strategies-2026.md";
  slug: "best-coc-attack-strategies-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"builder-base-guide-2026.md": {
	id: "builder-base-guide-2026.md";
  slug: "builder-base-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"clan-capital-guide-2026.md": {
	id: "clan-capital-guide-2026.md";
  slug: "clan-capital-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"coc-beginner-complete-guide-2026.md": {
	id: "coc-beginner-complete-guide-2026.md";
  slug: "coc-beginner-complete-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"coc-farming-guide-2026.md": {
	id: "coc-farming-guide-2026.md";
  slug: "coc-farming-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"coc-hero-upgrade-order-guide.md": {
	id: "coc-hero-upgrade-order-guide.md";
  slug: "coc-hero-upgrade-order-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"coc-magic-items-guide-2026.md": {
	id: "coc-magic-items-guide-2026.md";
  slug: "coc-magic-items-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"coc-war-base-design-guide-2026.md": {
	id: "coc-war-base-design-guide-2026.md";
  slug: "coc-war-base-design-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cwl-guide-tips-2026.md": {
	id: "cwl-guide-tips-2026.md";
  slug: "cwl-guide-tips-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"electro-dragon-attack-guide-2026.md": {
	id: "electro-dragon-attack-guide-2026.md";
  slug: "electro-dragon-attack-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hero-equipment-tier-list-2026.md": {
	id: "hero-equipment-tier-list-2026.md";
  slug: "hero-equipment-tier-list-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hog-rider-attack-guide-2026.md": {
	id: "hog-rider-attack-guide-2026.md";
  slug: "hog-rider-attack-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-3-star-clan-war.md": {
	id: "how-to-3-star-clan-war.md";
  slug: "how-to-3-star-clan-war";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-find-best-clan-2026.md": {
	id: "how-to-find-best-clan-2026.md";
  slug: "how-to-find-best-clan-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"legend-league-guide-beginners.md": {
	id: "legend-league-guide-beginners.md";
  slug: "legend-league-guide-beginners";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"siege-machines-guide-2026.md": {
	id: "siege-machines-guide-2026.md";
  slug: "siege-machines-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"super-troops-guide-2026.md": {
	id: "super-troops-guide-2026.md";
  slug: "super-troops-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th10-base-2026.md": {
	id: "th10-base-2026.md";
  slug: "th10-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th10-upgrade-priority-2026.md": {
	id: "th10-upgrade-priority-2026.md";
  slug: "th10-upgrade-priority-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th11-attack-guide-2026.md": {
	id: "th11-attack-guide-2026.md";
  slug: "th11-attack-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th11-base-2026.md": {
	id: "th11-base-2026.md";
  slug: "th11-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th11-upgrade-priority-2026.md": {
	id: "th11-upgrade-priority-2026.md";
  slug: "th11-upgrade-priority-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th12-attack-guide-2026.md": {
	id: "th12-attack-guide-2026.md";
  slug: "th12-attack-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th12-base-2026.md": {
	id: "th12-base-2026.md";
  slug: "th12-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th13-base-2026.md": {
	id: "th13-base-2026.md";
  slug: "th13-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th13-upgrade-priority-2026.md": {
	id: "th13-upgrade-priority-2026.md";
  slug: "th13-upgrade-priority-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th14-attack-guide-2026.md": {
	id: "th14-attack-guide-2026.md";
  slug: "th14-attack-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th14-base-2026.md": {
	id: "th14-base-2026.md";
  slug: "th14-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th14-farming-base.md": {
	id: "th14-farming-base.md";
  slug: "th14-farming-base";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th14-upgrade-priority-2026.md": {
	id: "th14-upgrade-priority-2026.md";
  slug: "th14-upgrade-priority-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th15-attack-guide-2026.md": {
	id: "th15-attack-guide-2026.md";
  slug: "th15-attack-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th15-base-2026.md": {
	id: "th15-base-2026.md";
  slug: "th15-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th15-upgrade-priority-2026.md": {
	id: "th15-upgrade-priority-2026.md";
  slug: "th15-upgrade-priority-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th15-war-base-guide.md": {
	id: "th15-war-base-guide.md";
  slug: "th15-war-base-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th16-attack-guide-2026.md": {
	id: "th16-attack-guide-2026.md";
  slug: "th16-attack-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th16-base-2026.md": {
	id: "th16-base-2026.md";
  slug: "th16-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th16-trophy-base.md": {
	id: "th16-trophy-base.md";
  slug: "th16-trophy-base";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th7-base-2026.md": {
	id: "th7-base-2026.md";
  slug: "th7-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th8-base-2026.md": {
	id: "th8-base-2026.md";
  slug: "th8-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th9-attack-guide-2026.md": {
	id: "th9-attack-guide-2026.md";
  slug: "th9-attack-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"th9-base-2026.md": {
	id: "th9-base-2026.md";
  slug: "th9-base-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"trophy-pushing-guide-2026.md": {
	id: "trophy-pushing-guide-2026.md";
  slug: "trophy-pushing-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"wall-upgrade-guide-2026.md": {
	id: "wall-upgrade-guide-2026.md";
  slug: "wall-upgrade-guide-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
