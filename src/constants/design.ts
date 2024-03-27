// Values adheres Tailwind formatting

enum DesignElement {
  BG = 'bg',
  TEXT = 'text',
  BORDER = 'border',
}

enum Colors {
  BLACK = '000000',
  WHITE = 'ffffff',

  CARROT_ORANGE = 'ec9008',
  RICH_BLACK = '00020c',
  DIM_GRAY = '65625d',
  GHOST_WHITE = 'fdfdfd',
}

enum TextColors {
  BLACK = `${DesignElement.TEXT}-[#${Colors.BLACK}]`,
  WHITE = `${DesignElement.TEXT}-[#${Colors.WHITE}]`,

  CARROT_ORANGE = `${DesignElement.TEXT}-[#${Colors.CARROT_ORANGE}]`,
  RICH_BLACK = `${DesignElement.TEXT}-[#${Colors.RICH_BLACK}]`,
  DIM_GRAY = `${DesignElement.TEXT}-[#${Colors.DIM_GRAY}]`,
  GHOST_WHITE = `${DesignElement.TEXT}-[#${Colors.GHOST_WHITE}]`,
}

enum BgColors {
  BLACK = `${DesignElement.BG}-[#${Colors.BLACK}]`,
  WHITE = `${DesignElement.BG}-[#${Colors.WHITE}]`,

  CARROT_ORANGE = `${DesignElement.BG}-[#${Colors.CARROT_ORANGE}]`,
  RICH_BLACK = `${DesignElement.BG}-[#${Colors.RICH_BLACK}]`,
  DIM_GRAY = `${DesignElement.BG}-[#${Colors.DIM_GRAY}]`,
  GHOST_WHITE = `${DesignElement.BG}-[#${Colors.GHOST_WHITE}]`,
}

enum BoderColors {
  BLACK = `${DesignElement.BORDER}-[#${Colors.BLACK}]`,
  WHITE = `${DesignElement.BORDER}-[#${Colors.WHITE}]`,

  CARROT_ORANGE = `${DesignElement.BORDER}-[#${Colors.CARROT_ORANGE}]`,
  RICH_BLACK = `${DesignElement.BORDER}-[#${Colors.RICH_BLACK}]`,
  DIM_GRAY = `${DesignElement.BORDER}-[#${Colors.DIM_GRAY}]`,
  GHOST_WHITE = `${DesignElement.BORDER}-[#${Colors.GHOST_WHITE}]`,
}

enum DesignConstant {
  BORDER_RADIUS = 'rounded-[.25rem]',
  LABEL_FONT_WEIGHT = 'font-medium',
}

export const AppDesign = {
  Colors,
  BgColors,
  TextColors,
  DesignConstant,
  BoderColors
} as const

