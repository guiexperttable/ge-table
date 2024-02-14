---
title: Marc 2
layout: ../../../layouts/DemoCodeLayout.astro
---

Dies ist ein Test.

Mal schauen...

```ts
import { AbstractAreaModel, FilterFunction } from "@guiexpert/table";

export class SelfwrittenAreaModel extends AbstractAreaModel<number> {

  constructor() {
    super('body', [], 40);
  }

  getRowCount(): number {
    return 100;
  }

  getRowHeight(rowIndex: number): number {
    return 40;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    return `${rowIndex}/${columnIndex}`; // <- just calculated
  }

  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    // do notthing
  }

}
```




To avoid extending your Markdown config from MDX, set [the `extendMarkdownConfig` option](/en/guides/integrations-guide/mdx/#extendmarkdownconfig) (enabled by default) to `false`:

```ts title="astro.config.mjs"
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkPlugin],
  },
  integrations: [
    mdx({
      // Markdown config now ignored
      extendMarkdownConfig: false,
      // No `remarkPlugins` applied
    })
  ]
});
```