import { Injectable } from '@angular/core';
import { TemplateData } from '../interfaces/template-data';
import { ComponentsData } from '../interfaces/components-data';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  templateData: TemplateData[] = [
    {
      icon: 'category',
      title: 'Angular Templates & <span class="title-break">Components</span>',
      desc: 'Build seamless and visually appealing user interfaces with our Angular UI library. Designed for flexibility and scalability, our pre-built templates and components ensure a smooth development experience with optimized SCSS and CSS.',
      btn: 'View Template',
      routeTo: '',
    },
    {
      icon: 'school',
      title: 'NeonFlow',
      desc: 'A vibrant, modern UI with glowing elements and smooth animations, ideal for dashboards and creative applications.',
      btn: 'View Template',
      routeTo: 'NeonFlow_Tempate',
    },
    {
      icon: 'join_left',
      title: 'MinimalEdge',
      desc: 'A sleek, minimalistic design with sharp edges and subtle shadows, perfect for professional and business-oriented interfaces.',
      btn: 'View Template',
      routeTo: 'MinimalEdge_Tempate',
    },
    {
      icon: 'wand_stars',
      title: 'SoftAura',
      desc: 'A soft, rounded UI with pastel color palettes and gentle transitions, great for wellness, education, and lifestyle apps.',
      btn: 'View Template',
      routeTo: 'SoftAura_Tempate',
    },
    {
      icon: 'explore_nearby',
      title: 'DarkFusion',
      desc: 'A futuristic dark-themed UI with neon highlights and high-contrast components, suitable for gaming, fintech, and coding platforms.',
      btn: 'View Template',
      routeTo: 'DarkFusion_Tempate',
    },
    {
      icon: 'things_to_do',
      title: 'Ui ClassicPrime',
      desc: 'A timeless, elegant design with structured layouts and balanced typography, best for enterprise, legal, and corporate applications.',
      btn: 'View Template',
      routeTo: 'UiClassicPrime_Tempate',
    },
  ];

  componentsData: ComponentsData[] = [
    {
      icon: 'view_timeline',
      title: 'Accordion',
      desc: 'A collapsible content panel that allows users to toggle between showing and hiding sections of related content. Useful for FAQs, menus, and structured information.',
      btn: 'Use Accordion',
      routeTo: 'Component_Accordion',
    },
    {
      icon: 'buttons_alt',
      title: 'Button',
      desc: 'A customizable button component with multiple styles, sizes, and states. Supports icons, hover effects, and different variants like primary, secondary, and outlined buttons.',
      btn: 'Use Button',
      routeTo: 'Component_Button',
    },
    {
      icon: 'dashboard',
      title: 'Card',
      desc: 'A flexible container component that displays content in an elegant, structured format. Ideal for showcasing information, images, and actions in a visually appealing way.',
      btn: 'Use Card',
      routeTo: 'Component_Card',
    },
    {
      icon: 'dropdown',
      title: 'Dropdown',
      desc: 'A dynamic dropdown menu that allows users to select an option from a list. Supports multi-level menus, icons, and advanced styling options.',
      btn: 'Use Dropdown',
      routeTo: 'Component_Dropdown',
    },
    {
      icon: 'draw',
      title: 'Input',
      desc: 'A fully customizable input field for text, numbers, passwords, and more. Supports validation, error states, and integration with Angular forms.',
      btn: 'Use Input',
      routeTo: 'Component_Input',
    },
    {
      icon: 'widgets',
      title: 'Menubar',
      desc: 'A horizontal or vertical navigation menu that organizes links, actions, and dropdowns in a structured layout. Great for top navigation bars and side menus.',
      btn: 'Use Menubar',
      routeTo: 'Component_Menubar',
    },
    {
      icon: 'side_navigation',
      title: 'Navigation',
      desc: 'A flexible navigation system supporting sidebars, breadcrumbs, and multi-level menus. Helps users navigate complex applications with ease.',
      btn: 'Use Navigation',
      routeTo: 'Component_Navigation',
    },
    {
      icon: 'table',
      title: 'Table',
      desc: 'A responsive table component that displays structured data efficiently. Supports sorting, filtering, pagination, and custom styling.',
      btn: 'Use Table',
      routeTo: 'Component_Table',
    },
    {
      icon: 'tab',
      title: 'Tab',
      desc: 'A tabbed interface component that allows users to switch between multiple views without navigating away. Ideal for organizing content within a single page.',
      btn: 'Use Tab',
      routeTo: 'Component_Tab',
    },
  ];

  constructor() {}
}
