# Atomic Design System

## Overview

This System is a task management webpage. The user can create, edit and remove tasks. It uses atomic design system with Next.js, Tailwind and test coverage throught Jest.

## Atomic Design System
Atomic Design System (https://atomicdesign.bradfrost.com/) structure the design basis of a page in:
- Atoms (Base units - "Basic Building Blocks")
- Molecules (Subsets of atoms working together - "Simple groups of UI elements functioning together as a unit")
- Organisms (Subsets of molecules working together - "Relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms")
- Templates (Replicable structures using organisms, molecules and atoms - "Page-level objects that place components into a layout and articulate the design’s underlying content structure")
- Pages (Applied Templates - "Specific instances of templates")

## Atomic Design in this project
For this project the structure was:
- Atoms: button, checkbox input, text input, label, text heading, text subheading 
- Molecules: app title (using headings), task item (using button and label), task new item (using button, text input and label)
- Organisms: header (using app title and a heading), task list (using task new item and task item)
- Templates: task template (task page template with basic structure)
- Pages: Tasks page (use of task template with base flows and connection to services)

## User flow
The user information is structured throught the Design System and the data is stored in localStorage. All components have a test suite configure with Jest (that can be executed using 'npm run test'). The code has a defined linter (available using 'npm run lint') and can be executed using 'npm run dev'.



