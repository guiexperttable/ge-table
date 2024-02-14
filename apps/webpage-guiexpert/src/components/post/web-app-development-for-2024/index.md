---
layout: ../ArticleLayout.astro
---

# Web-App Development for&nbsp;2024

Time for a Change?

![hero](/post/web-app-development-for-2024/hero.png)

## &nbsp;

- ![Marc](/marc.jpg)
- *Marc Kronberg*
- ***Jan 17, 2024***

---

## &nbsp;

## Table of Contents

1. [Current Landscape](#current-landscape)
2. [Alternative for 2024?](#alternative-for-2024)
    - [Vanilla Web Stack](#vanilla-web-stack)
        - [Harnessing the Power of Custom Elements and Shadow DOM: Angular-Like Benefits](#harnessing-the-power-of-custom-elements-and-shadow-dom-angular-like-benefits)
        - [Advantages of SCSS over Plain CSS and Enhancing Plain CSS with Custom Variables](#advantages-of-scss-over-plain-css-and-enhancing-plain-css-with-custom-variables)
        - [ES Modules as an Alternative to Angular Modules](#es-modules-as-an-alternative-to-angular-modules)
        - [Challenges of Framework-Agnostic Routers: A Balancing Act](#challenges-of-framework-agnostic-routers-a-balancing-act)
        - [Embracing Framework-Less Development: Elevating Custom Input Fields](#embracing-framework-less-development-elevating-custom-input-fields)
    - [Advantages of a Vanilla Web Stack](#advantages-of-a-vanilla-web-stack)
    - [Drawbacks of the Vanilla Web Stack](#drawbacks-of-the-vanilla-web-stack)
3. [TypeScript](#typescript)
   - [TypeScript Definition Files in JavaScript as Comments](#typescript-definition-files-in-javascript-as-comments)
   - [Avoiding Hand-Crafted d.ts Files for Our Object Model](#avoiding-hand-crafted-dts-files-for-our-object-model)
4. [Solution to this (TypeScript) Dilemma? Lit or Stencil](#solution-to-this-dilemma-lit-or-stencil)
    - [Lit:](#lit)
    - [Stencil:](#stencil)
    - [Comparisons Lit and Stencil:](#comparisons-lit-and-stencil)
5. [Managing Numerous Components: Monorepos](#managing-numerous-components-monorepos)
    - [NX](#nx)
    - [Lerna](#lerna)
6. [Conclusion](#conclusion)

## Current Landscape

**Current state of Web-App development:** Angular, Vue, React.

In summary, Angular is a comprehensive framework suitable for large-scale applications, Vue emphasizes simplicity and
flexibility, and React offers a declarative approach and high performance for building user interfaces. Each has its
strengths, and the choice depends on the project's requirements and the developer's preferences.

In navigating the landscape of front-end development, the luxury of choice presents both a boon and a challenge. With
options like Angular, Vue, and React at our disposal, the (luxury) problem lies in the abundance of possibilities.

Angular, a robust and feature-rich framework backed by Google, offers a comprehensive solution for large-scale
applications. Its TypeScript foundation and adherence to the MVC architecture bring structure and scalability to
projects. However, the trade-off is a steeper learning curve, demanding developers to invest time in mastering its
intricacies.

Vue.js, designed by Evan You, stands out for its simplicity and flexibility. Positioned as a progressive framework, Vue
is easily integrable into existing projects. Its reactivity system ensures efficient UI updates, and the component-based
structure fosters modularity. The gentle learning curve makes Vue accessible to developers at various skill levels.

React, born out of Facebook's engineering prowess, is a declarative library known for building efficient and interactive
user interfaces. Its component-centric approach and virtual DOM optimization contribute to its popularity. React's
ecosystem, including tools like Redux and React Router, enhances its adaptability to diverse project requirements.

The luxury problem surfaces as developers grapple with choosing the most suitable tool for a given task. Angular, with
its comprehensive feature set, may be optimal for large-scale ventures. Vue, balancing simplicity and flexibility,
caters to projects of varying scales, while React's declarative nature and performance excellence make it a go-to choice
for dynamic web applications.

Ultimately, the (luxury) problem is a blessing of abundance, demanding careful consideration of project needs, team
expertise, and the desired development experience. The decision hinges on finding the right equilibrium between feature
richness, ease of use, and scalability.

**Issues in choosing a web framework:**

- No one-size-fits-all solution; frameworks and requirements evolve.
- Human factor: Programmers have different experiences/preferences, leading to disparate frameworks within a company,
  hindering synergy (lack of shared components, CSS styles).
- Prompt adoption of framework updates is crucial. Neglected projects may face major leaps (e.g., from Angular 14 to
  17).

**Despite challenges, these frameworks excel:**

- Continuous development.
- Large community support.
- Robust documentation.
- Component-oriented: Logic encapsulation, composing small elements into larger ones.
- Predefined paths for common issues like routing, app-wide communication (events), and data exchange.

## Alternative for 2024?

### Vanilla Web Stack

A resolution to this dilemma may lie in leveraging existing standards:

| Standard             |                                                                                                                                                                                                                                                                                                                          |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Custom elements:** | [MDN: Custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements), and [a complete guide to custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)                                                                                                |
| **Shadow DOM:**      | Component encapsulation, ensuring code isolation ([MDN: Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)). Custom elements + shadow DOM = web component.                                                                                                              |
| **HTML templates**   | [MDN: templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)                                                                                                                                                                                                                                     |
| **CSS Variables**    | CSS custom properties: Defined entities reusable throughout a document ([MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties))                                                                                                                                |
| **CSS Scope**        | Not widely adopted yet!** [MDN: CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting), **CSS scope:** @scope CSS at-rule enables precise element selection within specific DOM subtrees without overly specific selectors ([MDN: @scope](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope)). |

Adopting these standards allows for a **Vanilla Web Stack**, harnessing native browser support.

### Harnessing the Power of Custom Elements and Shadow DOM: Angular-Like Benefits

Custom elements and Shadow DOM offer analogous advantages to Angular components. They provide encapsulation of CSS,
JavaScript, and markup, ensuring modular, maintainable code. This encapsulation enhances code organization and minimizes
the risk of unintended interference, providing a robust foundation for building scalable and efficient web components.

### Advantages of SCSS over Plain CSS and Enhancing Plain CSS with Custom Variables

SCSS offers enhanced readability, structure, and code organization compared to Plain CSS. It introduces features like
variables, mixins, and nesting, streamlining the styling process. To upgrade Plain CSS, integrate 'custom variables' or
CSS custom properties. These variables provide dynamic theming, improved maintainability, and a modernized approach to
styling, ensuring a more flexible and efficient styling experience without the need for a preprocessor.

```css title="vars.css"
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #3498db; /* Custom variable for primary color */
        --secondary-color: #2ecc71; /* Custom variable for secondary color */
    }
}
```

```css title="main.css"
body {
    background-color: var(--primary-color);

    ...
}
```

### ES Modules as an Alternative to Angular Modules

ES Modules emerge as a compelling alternative to Angular Modules, offering a standardized approach to modular JavaScript
development. With native support in modern browsers, ES Modules facilitate seamless code organization, encapsulation,
and efficient dependency management. Transitioning to ES Modules provides a lightweight and browser-native solution,
reducing the need for additional frameworks and enhancing compatibility across different environments.

```js title="math.js"
// Module 1: math.js
export const add = (a, b) => a + b;
```

```js title="main.js"
// Module 2: main.js
import {add} from './math.js';

const result = add(3, 5);
console.log(result); // Output: 8`
```

### Challenges of Framework-Agnostic Routers: A Balancing Act

While framework-agnostic routers exist, the process can be cumbersome. Each route requires static HTML in the backend,
or a middleware controller introduces complexities reminiscent of frameworks. Balancing simplicity and functionality
becomes a delicate task, prompting many to favor established frameworks for a smoother and more enjoyable development
experience.

### Embracing Framework-Less Development: Elevating Custom Input Fields

Opting out of frameworks prompts a thoughtful consideration of enhancing custom input fields. Functions like date
pickers, validations, error displays, popup menus, tooltips, and more demand a bespoke approach. Developers must
strategize solutions, potentially integrating third-party libraries or crafting custom JavaScript solutions to fulfill
these requirements. While it grants unparalleled flexibility, it places the onus on developers to architect and
implement these features, highlighting the meticulous planning and effort essential for creating a seamless and
feature-rich user interface without the scaffolding of pre-existing frameworks.

### Advantages of a Vanilla Web Stack

1. **Stability through Web Standards:**
   Embracing a Vanilla Web Stack leverages the stability inherent in web standards. By relying on foundational
   technologies like JavaScript, CSS, and HTML, developers can build robust solutions that align with widely accepted
   practices.

2. **Ease of Learning:**
   A significant advantage lies in the simplicity of learning. Since it revolves around fundamental web development
   knowledge—JavaScript, CSS, and HTML—it provides a smooth onboarding experience for developers, especially those new
   to the field.

3. **No Compilation Overhead:**
   Unlike some web frameworks, a Vanilla Web Stack eliminates the need for compiling CSS or JavaScript code (or
   templates). This streamlines the development process, allowing changes to be implemented directly without an
   additional compilation step.

### Drawbacks of the Vanilla Web Stack

1. **Lack of TypeScript Support:**
   One notable disadvantage is the absence of native TypeScript support. For projects that benefit from the static
   typing and enhanced tooling provided by TypeScript, opting for a Vanilla Web Stack might entail foregoing these
   advantages.

2. **High Degree of Flexibility:**
   The abundance of choices introduces a challenge. Developers need to consider aspects such as file structure,
   component architecture, routing solutions, the selection of CSS frameworks, and testing methodologies. While
   flexibility is a strength, it requires thoughtful decision-making, contrasting with the more prescriptive guidance
   offered by the three major frameworks.

In essence, while a Vanilla Web Stack offers stability, simplicity, and avoids compilation overhead, it may not be the
ideal choice for every project, particularly when TypeScript support and a more guided development structure are crucial
considerations. The decision often boils down to the project's specific requirements and the development team's
preferences for flexibility versus convention.

### TypeScript

When considering TypeScript ([typescriptlang.org](https://www.typescriptlang.org/)), its significance becomes pronounced
in the realm of larger applications with intricate business models. TypeScript, a superset of JavaScript, proves
invaluable in navigating challenges inherent in substantial projects.

The primary advantage emerges in scenarios where multiple developers collaborate, ensuring code coherence through static
typing. This addresses potential pitfalls and enhances collaboration efficiency, making the development process smoother
and more error-resistant.

Moreover, TypeScript excels in handling refactoring, a crucial aspect of evolving software projects. With its static
analysis capabilities, TypeScript aids developers in restructuring codebases without sacrificing stability, reducing the
risk of introducing bugs during these transformations.

In the context of extensions, TypeScript's strong typing proves advantageous. As larger applications evolve, the need
for seamless integrations and extensions arises. TypeScript provides a safety net, catching potential issues during the
development phase and mitigating the risks associated with extending complex business models.

In essence, TypeScript, with its focus on static typing and advanced tooling, emerges as a valuable asset for larger
applications, offering a robust solution to challenges related to team collaboration, refactoring, and the dynamic
evolution of complex business models.

#### TypeScript Definition Files in JavaScript as Comments

In JavaScript, you can use TypeScript definition files (`.d.ts`) as comments to provide type information for
JavaScript code. TypeScript definition files are typically used to describe the types and interfaces used in JavaScript
libraries or modules. Here's an example of how you can use .d.ts files as comments in JavaScript:

Assuming you have a TypeScript definition file named `example.d.ts`:

```typescript
// example.d.ts
declare var myVariable: string;

declare function myFunction(param: number): void;
```

In your JavaScript file (`example.js`), you can use these definition files as comments like this:

```typescript
// @ts-check
/// <reference path="./example.d.ts" />

// Now you can use the declared variables and functions
console.log(myVariable); // TypeScript type checking will recognize this variable
myFunction(42); // TypeScript type checking will recognize this function
```

In this example, the `/// <reference path="./example.d.ts" />` comment references the TypeScript definition file,
providing type information for the variables and functions declared in the `.d.ts` file.
The `// @ts-check` comment enables
TypeScript type checking in the JavaScript file.

Keep in mind that this approach is a way to gradually introduce TypeScript checking into your JavaScript code, but for
full TypeScript benefits, it's recommended to consider transitioning your codebase to TypeScript.

#### Avoiding Hand-Crafted d.ts Files for Our Object Model

We believe it's impractical to manually craft `.d.ts` files for our object model. Embracing automated tools or
TypeScript's ability to infer types enhances development efficiency, reducing the potential for human errors. Letting
the language work for us streamlines the process, ensuring accurate and maintainable type declarations without the need
for manual intervention.

### Solution to this Dilemma? Lit or Stencil

In navigating the challenges posed by the evolving landscape of web development, a compelling solution arises in the
form of lightweight helpers. This entails exploring tools that circumvent the constraints of the dated web components
API, providing a fresh perspective on component-based architecture.

Two noteworthy contenders in this domain are [**Lit**](https://lit.dev/) and [**Stencil**](https://stenciljs.com/).
Unlike conventional frameworks, Lit and Stencil position themselves as lightweight companions, empowering developers to
construct framework-independent components.

#### Lit:

Lit stands out as a simple yet powerful library for creating swift and lightweight web components.

#### Stencil:

Stencil emerges as a compiler generating web components, specifically custom elements. It amalgamates
the best concepts from popular frameworks into a user-friendly build-time tool. (Fun fact: Stencil was initially
developed for the Ionic Framework)

#### Comparisons Lit and Stencil:

| Social  | Lit                                                                                  | Stencil                                                                     |
|---------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| GitHub  | [github.com/lit/lit](https://github.com/lit/lit)                                     | [github.com/ionic-team/stencil](https://github.com/ionic-team/stencil)      |
| Twitter | [twitter.com/buildWithLit](https://twitter.com/buildWithLit)                         | [twitter.com/stenciljs](https://twitter.com/stenciljs)                      |
| Slack   | [lit.dev/slack-invite](https://lit.dev/slack-invite/)                                | [stencil-worldwide.herokuapp.com](https://stencil-worldwide.herokuapp.com/) |
| YouTube | [youtube.com/@buildWithLit/featured](https://www.youtube.com/@buildWithLit/featured) | [youtube.com/c/Ionicframework](https://www.youtube.com/c/Ionicframework/)   |
| Website | [lit.dev](https://lit.dev/)                                                          | [stenciljs.com](https://stenciljs.com/)                                     |

These tools, while not frameworks per se, empower developers to construct components unbound by the limitations of a
particular framework. They offer a middle ground, combining the benefits of component-based development with the
flexibility to transcend the confines of a singular framework.

| Tool         | Weekly Downloads | Source                                                                         |
|--------------|------------------|--------------------------------------------------------------------------------|
| Lit HTML     | 1,950,663        | [npmjs.com/package/lit-html](https://www.npmjs.com/package/lit-html)           |
| Stencil Core | 589,590          | [npmjs.com/package/@stencil/core](https://www.npmjs.com/package/@stencil/core) |

**See also:**

1. [TypeScript and Web Components Frameworks: Lit vs. Stencil](https://medium.com/@alexandragrosu03/typescript-and-web-components-frameworks-lit-vs-stencil-75bd22d33a4d)
2. [npm trends lit-html vs @stencil/core](https://npmtrends.com/@stencil/core-vs-lit-html)

## Managing Numerous Components: Monorepos

Effectively handling a myriad of components in a development project often leads to the adoption of Monorepositories,
commonly known as Monorepos. This approach involves keeping all related code, libraries, and tools within a single
repository, providing a unified and organized structure.

### NX

A prominent tool facilitating Monorepo management is **NX** ([nx.dev](https://nx.dev/)).
NX, an open-source toolkit, empowers developers to efficiently build, test,
and scale projects within a Monorepo environment. It supports various frameworks
and languages, enabling seamless collaboration and code sharing across diverse components.

### Lerna

While NX stands out as a robust choice, an alternative worth considering is **Lerna**
([lerna.js.org](https://lerna.js.org/)). Lerna is
a popular Monorepo management tool that optimizes the workflow for JavaScript and TypeScript projects. It streamlines
versioning, publishing, and dependency management across multiple packages within a Monorepo. Lerna's simplicity and
flexibility make it a compelling alternative for those seeking a dedicated solution tailored to the specific needs of
their Monorepo projects.

In conclusion, the adoption of Monorepos, facilitated by tools like NX and Lerna, enhances the development experience by
providing a cohesive structure for managing numerous components. The choice between NX and Lerna depends on project
requirements and developer preferences.

## Conclusion

As we approach the conclusion of this discourse, it becomes evident that 2024 marks a strategic juncture for
reevaluating your technology stack. Embracing the advancements, tools, and frameworks that align with current needs and
industry trends is pivotal for staying competitive and fostering innovation. In this dynamic landscape, thoughtful
consideration of your technology choices in 2024 can pave the way for enhanced efficiency, scalability, and overall
success in your development endeavors.

**Caution Against Premature Framework Abandonment: Vue, Angular, React Still Prevail**

It's premature to entirely forsake frameworks; the advantages of Vue, Angular, and React still dominate in web
applications. Their benefits outweigh the drawbacks. However, staying vigilant and monitoring emerging trends is crucial
for informed decisions in the evolving landscape.

**We'll be testing this approach and sharing our insights in a follow-up article later this year.
Stay tuned and follow me on [gui.expert/posts](https://gui.expert/posts) for the latest updates.**

****

My other articles:

- [enhancing-data-table-ui](https://gui.expert/post/enhancing-data-table-ui/)
- [top-framework-agnostic-data-table-libraries-in-2024](https://gui.expert/post/top-framework-agnostic-data-table-libraries-in-2024/)

