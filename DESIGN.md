# **DESIGN.md**

This document is a design specification intended to guide AI agents and developers in generating an accurate, cohesive, and professional User Interface.

## **1\. Visual Theme & Atmosphere**

* **Design Philosophy**: A professional DAW (Digital Audio Workstation) style UI. Grounded in a dark theme built for long, focused editing sessions. It utilizes a "Tactile Synthesis" approach where audio and text nodes feel like physical, sculptable materials.  
* **Density**: High information density tailored for professional workflows. Unnecessary whitespace is stripped away to maximize the timeline and workspace area.  
* **Keywords**: Instrumental, Solid, Immersive, Precise.

## **2\. Color Palette & Roles**

### **Primary (Brand Colors)**

* **Primary** (\#8A63D2): The main brand color (Synthetic Violet). Used for TTS (Text-to-Speech) related nodes, accents, and primary action buttons.  
* **Primary Dark** (\#7A57BE): Hover and pressed states for the primary color.

### **Semantic (Meaningful Colors)**

* **Danger** (\#EF4444): Destructive actions, errors, and active states for Mute (M) buttons.  
* **Warning** (\#EAB308): Cautionary elements and active states for Solo (S) buttons.  
* **Success / Alternate** (\#00C2A8): Completion states, and the distinct identifier color for external Audio tracks and nodes (Acoustic Teal).

### **Neutral (Backgrounds & Text)**

* **Text Primary** (\#E2E8F0): Main body text, active values, and primary labels.  
* **Text Secondary** (\#94A3B8): Supplementary text, inactive labels, and minor data like millisecond timecodes.  
* **Text Disabled** (\#475569): Disabled text states and placeholders.  
* **Border** (\#1E293B): Dividers, input outlines, and track borders.  
* **Background** (\#0D1117): The base background of the application (Obsidian Base) and the timeline canvas.  
* **Surface** (\#161B22): Elevated surfaces such as track headers, inspectors, and panels (Anthracite Surface).

## **3\. Typography Rules**

### **3.1 Typefaces**

* **Sans-serif (Primary UI)**: Inter, Roboto, Helvetica Neue.  
* **Sans-serif (Japanese Fallback)**: Noto Sans JP, Hiragino Kaku Gothic ProN, Meiryo.  
* **Monospace**: Space Mono, Fira Code, Consolas (Essential for timecodes, parameter values, and code snippets).  
* **Serif**: Not used (to prioritize UI legibility).

### **3.2 font-family Declarations**

/\* Body & UI Elements \*/  
font-family: "Inter", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif;

/\* Monospace (Values, Code, Timeline Rulers) \*/  
font-family: "Space Mono", "Fira Code", Consolas, monospace;

**Fallback Strategy**:

* Prioritize the Western font (Inter) to ensure clean proportions for alphanumeric characters.  
* CJK characters will automatically fall back to the specified Japanese fonts (mixed typesetting) when needed.

### **3.3 Type Scale & Hierarchy**

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Display | Mono | 18px | 500 (Medium) | 1.2 | 0.1em | Main timecode display |
| Heading 1 | Sans | 14px | 600 (SemiBold) | 1.4 | 0.02em | Project names, panel titles |
| Heading 2 | Sans | 12px | 600 (SemiBold) | 1.4 | 0.02em | Track names, sub-sections |
| Body | Sans | 14px | 400 (Regular) | 1.6 | 0.04em | Main dialogue text inside textareas |
| UI Label | Sans | 12px | 500 (Medium) | 1.0 | 0.02em | Parameter labels |
| Caption | Sans | 10px | 400 (Regular) | 1.4 | 0.02em | Node status, supplementary hints |
| Small | Mono | 9px | 700 (Bold) | 1.0 | 0.05em | Badges (e.g., v2), micro-labels |

### **3.4 Spacing & Line Breaking Rules**

* **Body line-height**: 1.6 (Ensures readability for long dialogue text inputs).  
* **Heading line-height**: 1.4  
* **Letter-spacing**: 0.04em for Body, 0.02em for Headings.

/\* Recommended for dialogue input areas to handle multiple languages smoothly \*/  
word-break: break-all;  
overflow-wrap: break-word;  
line-break: strict;

## **4\. Component Stylings**

### **Buttons**

**Primary (Generate / Export)**

* Background: \#8A63D2  
* Text: \#FFFFFF  
* Padding: 8px 16px  
* Border Radius: 4px  
* Font Size: 14px  
* Font Weight: 500  
* Shadow: 0 0 15px rgba(138,99,210,0.2) (Subtle glow effect)

**Secondary / Icon Button**

* Background: transparent (Hover: \#1E293B)  
* Text: \#94A3B8 (Hover: \#FFFFFF)  
* Border: none  
* Padding: 6px  
* Border Radius: 4px

### **Inputs (Textarea, Text Input, Select)**

* Background: \#0D1117  
* Border: 1px solid \#334155  
* Border (focus): 1px solid \#8A63D2  
* Border Radius: 4px  
* Padding: 8px 12px  
* Font Size: 14px  
* Outline: none (Implement custom focus rings using box-shadow or borders)

### **Cards / Panels (Track Header, Inspector)**

* Background: \#161B22  
* Border: 1px solid \#1E293B  
* Border Radius: 0px (Keep corners sharp to maintain the interlocking editor aesthetic)  
* Padding: 12px \- 20px

## **5\. Layout Principles**

### **Spacing Scale**

| Token | Value | Application Example |
| :---- | :---- | :---- |
| XS | 4px | Space between icons and text, micro-adjustments |
| S | 8px | Inner padding of form elements, space between list items |
| M | 12px | Default padding for panels and headers |
| L | 16px | Margins between sections, horizontal padding of top nav |
| XL | 24px | Separation between major layout blocks |
| XXL | 32px | Separation between distinct UI zones |

### **Container Width & Height**

* **Max Width**: 100vw (100%) \- Uses the full viewport for the editor interface.  
* **Height**: 100vh (100%) \- Scrolling is handled independently within specific panels (e.g., timeline, inspector).

## **6\. Depth & Elevation**

In a DAW-like UI, the design should remain mostly flat. Hierarchy is expressed through borders and background lightness rather than drop shadows. However, the concept of "Glow" is introduced for highly active or selected elements.

| Level | Shadow / Glow | Usage |
| :---- | :---- | :---- |
| 0 | none | Standard panels, tracks, unselected nodes |
| 1 | inset 0 2px 4px rgba(0,0,0,0.2) | Pressed buttons, sunken backgrounds (e.g., timecode display) |
| 2 | 0 0 15px rgba(255,255,255,0.1) | Highlight for currently selected nodes |
| 3 | 0 0 20px rgba(138,99,210,0.4) | Glow effect for primary action buttons on hover (e.g., Generate) |

## **7\. Do's and Don'ts**

### **Do (Recommended)**

* **Do** always use a monospace font (Space Mono) for parameter values, timecodes, and version numbers.  
* **Do** minimize vertical margins and keep components tightly packed to maximize the Y-axis space for timeline tracks.  
* **Do** rely on iconography paired with tooltips for actions, rather than cluttering the UI with text labels.  
* **Do** clearly distinguish states (Mute, Solo, Draft, Generated) using specific colors and opacities.

### **Don't (Avoid)**

* **Don't** use large border-radiuses. Overly rounded corners create a playful SaaS look, which undermines the instrumental, solid feel of the app.  
* **Don't** add meaningless decorations or decorative animations to the timeline area; it introduces noise into the user's workspace.  
* **Don't** use pure \#FFFFFF or \#000000 for text or backgrounds. The contrast is too harsh for long sessions; stick to the defined Slate neutral palette.

## **8\. Responsive Behavior**

This tool involves complex interactions and high information density, therefore it is primarily designed for desktop environments.

### **Breakpoints**

| Name | Width | Description |
| :---- | :---- | :---- |
| Mobile | ≤ 767px | Unsupported. (Display a "Please use on desktop" placeholder screen). |
| Tablet | 768px \- 1023px | Tablet layout (Allow collapsing the inspector panel to save space). |
| Desktop | ≥ 1024px | Default full workspace view. |

## **9\. Agent Prompt Guide**

### **Quick Reference**

Primary Color (TTS): \#8A63D2  
Secondary Color (Audio): \#00C2A8  
Background (Base): \#0D1117  
Surface (Panels): \#161B22  
Border: \#1E293B  
Text (Base): \#E2E8F0  
Text (Muted): \#94A3B8  
Font: "Inter", "Noto Sans JP", sans-serif (UI) / "Space Mono", monospace (Values)

### **Prompt Example**

Following the design system of this service, create a modal dialog for adding a new track.  
\- Background: \#161B22 (Surface)  
\- Border: 1px solid \#1E293B  
\- Font: Use Inter / Noto Sans JP for body text.  
\- Heading Size: 14px (Heading 1 equivalent).  
\- Action Button: Use the Primary Color (\#8A63D2) with a 4px border radius.  