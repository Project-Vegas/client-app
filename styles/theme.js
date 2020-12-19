export const theme = new function() {
  this.colors = {
    primary: '#b18fcf',
    secondary: '#242424',
    textPrimary: '#2c2c34',
    textLight: '#8A8A8A',
    itemIconBackground: '#d8d8f6',
    red: '#FF604F',
    orange: '#ffa51f',
    white: '#fff',
    blue: '#66c5ff',
    black: '#000',
    gray: '#D7D4D8',
    green: '#53F36B',
  }
  this.padding = {
    smaller: 5,
    small: 10,
    medium: 15,
    large: 20,
  }
  this.fontSize = {
    small: 15,
    medium: 20,
    large: 25,
    huge: 30,
  }
  this.alignCenter = {
    flexDirection: 'row',
    justifyContent: 'center',
  }
  this.titleText = {
    color: this.colors.textPrimary,
    fontSize: this.fontSize.large
  }
}
