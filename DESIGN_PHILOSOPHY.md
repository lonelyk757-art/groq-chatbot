# Neon-Noir Design Philosophy

## Design Movement
**Cyberpunk Minimalism** - A fusion of high-tech aesthetics with clean, purposeful design. Inspired by 1980s synthwave, modern dark interfaces, and futuristic UI patterns.

## Core Principles
1. **High Contrast Drama**: Deep blacks paired with electric neon accents create visual tension and focus attention
2. **Functional Minimalism**: Every element serves a purpose; no decorative clutter
3. **Luminous Interactivity**: Glowing effects and neon highlights respond to user interaction
4. **Geometric Precision**: Sharp angles, clean lines, and deliberate spacing

## Color Philosophy
- **Primary Dark**: `#0a0e27` (Deep navy-black) - The void, creating immersion
- **Neon Pink**: `#ff006e` - Primary accent, draws attention, signals interactivity
- **Neon Blue**: `#00f5ff` - Secondary accent, creates depth and cool contrast
- **Neon Purple**: `#b537f2` - Tertiary accent for hover states and emphasis
- **Neutral Gray**: `#e0e0e0` - Text and secondary elements
- **Glow Effects**: Subtle box-shadows with neon colors create depth without visual clutter

## Layout Paradigm
- **Asymmetric Composition**: Chat area dominates left; input zone anchors bottom
- **Floating Elements**: Cards and messages appear to float with subtle shadows
- **Vertical Rhythm**: Generous spacing between messages creates breathing room
- **Edge-to-Edge**: Utilizes full viewport with minimal padding for immersive feel

## Signature Elements
1. **Glowing Borders**: Subtle neon glow on interactive elements (buttons, inputs, cards)
2. **Gradient Accents**: Smooth gradients from pink to purple on hover states
3. **Neon Underlines**: Text accents with glowing underlines for visual interest

## Interaction Philosophy
- **Immediate Feedback**: All interactions produce instant visual response (glow, color shift)
- **Smooth Transitions**: 200-300ms transitions for all state changes
- **Hover Amplification**: Elements grow slightly and intensify glow on hover
- **Loading States**: Animated neon pulses indicate processing

## Animation Guidelines
- **Entrance**: Messages fade in with subtle upward motion (200ms)
- **Hover**: Buttons and cards glow brighter, scale 1.02x (150ms)
- **Loading**: Pulsing neon glow on sending state
- **Transitions**: All color/opacity changes use cubic-bezier(0.4, 0, 0.2, 1)

## Typography System
- **Display Font**: `Space Grotesk` (bold, geometric, futuristic)
- **Body Font**: `Inter` (clean, readable, modern)
- **Hierarchy**: Bold headings (700), regular body (400), light labels (300)
- **Letter Spacing**: Slightly increased for futuristic feel
