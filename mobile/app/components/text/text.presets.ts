import { TextStyle } from 'react-native'
import { color, typography } from '../../theme'

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: 'bold' } as TextStyle,

  /**
   * Large headers.
   */
  header1: {
    ...BASE,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 34,
  } as TextStyle,
  header2: {
    ...BASE,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 22,
  } as TextStyle,
  header2bold: {
    ...BASE,
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 22,
  } as TextStyle,
  subtitle: {
    ...BASE,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
  } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 12, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
